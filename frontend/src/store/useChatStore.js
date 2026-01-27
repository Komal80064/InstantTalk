import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";


export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUserLoading: false,
  isMessageLoading: false,

  getUsers: async () => {
    set({ isUserLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUserLoading: false });
    }
  },

  getMessages: async (userId) => {
    if (!userId) return;

    set({ isMessageLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({
        messages: Array.isArray(res.data) ? res.data : res.data.messages || [],
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to load messages");
      set({ messages: [] });
    } finally {
      set({ isMessageLoading: false });
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    if (!Array.isArray(messages)) {
      console.error("messages is not an array:", messages);
      set({ messages: [] });
      return;
    }

    try {
      const res = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData,
      );
      set({ messages: [...messages, res.data] });
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error.message ||
          "Failed to load messages",
      );
    }
  },

  subscribeToMessages: () => {
  const { selectedUser } = get();
  const socket = useAuthStore.getState().socket;

  if (!selectedUser || !socket) return;
  if (!socket.connected) return;

  socket.on("newMessage", (newMessage) => {
    if(newMessage.senderId !== selectedUser._id) return;
    set({
      messages: [...get().messages, newMessage],
    });
  });
},


  unsubscribeFromMessages: () =>{
    const socket = useAuthStore.getState().socket;
    if (!socket) return;
    socket.off("newMessage");

  },

  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
