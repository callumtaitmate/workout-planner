import { addRequestMeta } from "next/dist/server/request-meta";
import { create } from "zustand";

export const useFoodStore = create((set) => ({
  food: [],
  addFood: (result) => set((state) => ({ food: [...state.food, result] })),
  removeFood: (resultID) =>
    set((state) => ({
      food: state.food.filter((result) => result.id !== resultID),
    })),
  clearFood: () => set({ food: [] }),
}));
