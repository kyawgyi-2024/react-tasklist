import { create } from "zustand";

const useCounterStore = create((set) => ({
    count : 3,
    resetCount : () => set({count:0}),
    increaseCount : () => set((state) => ({count : state.count + 1} )),
    decreaseCount : () => set((state) => ({count : state.count -1}))
}));

export default useCounterStore;
