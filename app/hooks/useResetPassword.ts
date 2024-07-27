import { create } from "zustand";


interface ResetPasswordStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useResetPasswordModal = create<ResetPasswordStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useResetPasswordModal;
