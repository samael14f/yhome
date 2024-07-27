
import { create } from "zustand";


interface OTPStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useOTPModal = create<OTPStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useOTPModal;

