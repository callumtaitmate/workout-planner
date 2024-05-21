import { create } from "zustand";

//useFoodStore is an example of an array store
export const useFoodStore = create((set) => ({
  food: [],
  addFood: (result) => set((state) => ({ food: [...state.food, result] })),
  clearFood: () => set({ food: [] }),
  
}));

export const useOverviewStore = create((set) => ({
  
  overview: [],
  addToOverview: (postCalcObject) =>
    set((state) => ({ overview: [...state.overview, postCalcObject] })),

  clearItem: (foodId) => set((state) => ({
    overview: state.overview.filter((foods) => foods.id !== foodId )
    
  })
)
  
}));

export const useConfigureSotre = create((set) => ({
  configure: {
    result: {
      price: 0,
      quantity: 100,
      day: "Monday",
      food: {
        label: "Search for a food to start",
        nutrients: {
          ENERC_KCAL: 0,
          CHOCDF: 0,
          FAT: 0,
          PROCNT: 0,
        },
      },
    },
  },
  addConfiguration: (result) => set((state) => ({ configure: { result } })),
}));

export const useDayStore = create((set) => ({
  day: "Monday",
  updateDay: (day) => set({ day: day }),
}));
