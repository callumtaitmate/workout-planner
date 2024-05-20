import { create } from "zustand";

//useFoodStore is an example of an array store
export const useFoodStore = create((set) => ({
  food: [],
  addFood: (result) => set((state) => ({ food: [...state.food, result] })),
  clearFood: () => set({ food: [] }),
}));

export const useConfigureSotre = create((set) => ({
  configure: {},
}));

export const useOverviewStore = create((set) => ({
  overview: [],
  addToOverview: (label, kcal, carb, fat, prot, price) =>
    set(() => ({
      label: label,
      kcal: kcal,
      carb: carb,
      fat: fat,
      prot: prot,
      price: price,
    })),
}));

export const useDayStore = create((set) => ({
  day: "Monday",
  updateDay: (day) => set({ day: day }),
}));
