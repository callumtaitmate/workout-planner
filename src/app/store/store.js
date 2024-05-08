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
export const useOverviewStore = create((set) => ({
  overview: [],
  addToOverview: (label, kcal, carb, fat, prot, price) =>
    set(() => ({ label: label, kcal: kcal, carb: carb, fat: fat, prot: prot, price: price })),
}));
