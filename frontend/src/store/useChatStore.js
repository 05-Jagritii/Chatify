import {create} from "zustand";

export const useChatStore = create(()=>({
    allContacts: [],
    chats: [],
    messages: [],
    activeTab: [],
    selectedUser: null,
    isUserLoading: false,
    usMessagesLoading: false,
    isSoundEnabled: localStorage.getItem("isSoundEnabled")===true,

    toggleSound: () => {
        localStorage.setItem("isSoundEnabled", !get().isSoundEnabled)
        Set({isSoundEnabled: !get().isSoundEnabled})
    },

    setActiveTab: (tab) => Set({activeTab: tab}),
    setSelectedUser: (selectedUser) => ({selectedUser}),

    getAllContacts: async() => {
        set({isUserLoading: true});
        try {
            const res = await axiosInstance.get("/messages/contacts");
            Set({allContacts: res.data});
        } catch (error) {
            toast.error(error.response.data.message);
        }finally{
            set({isUserLoading: false});
        }
    },

    getMyChatPartners: async() => {
        set({isUserLoading: true});
        try {
            const res = await axiosInstance.get("/messages/chats");
            Set({chats: res.data});
        } catch (error) {
            toast.error(error.response.data.message);
        }finally{
            set({isUserLoading: false});
        }
    },
}))