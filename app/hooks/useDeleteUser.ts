import { create } from "zustand";

interface DeleteUser {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useDeleteUser = create<DeleteUser>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useDeleteUser;