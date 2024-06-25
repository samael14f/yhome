import { create } from "zustand";

interface ShowMessage {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useShowMessage = create<ShowMessage>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useShowMessage;