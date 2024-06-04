import { create } from "zustand";

export const useOverviewStore = create((set) => ({
  overview: [],
  addToOverview: (postCalcObject) =>
    set((state) => ({ overview: [...state.overview, postCalcObject] })),

  clearItem: (foodId, foodDay) =>
    set((state) => ({
      overview: state.overview.filter(
        (foods) => foods.configure.result.id !== foodId || foods.configure.result.day !== foodDay
      ),
    })),

  clearAll: () => set({ overview: [] }),
}));

export const useConfigureSotre = create((set) => ({
  configure: {
    result: {
      sets: 3,
      reps: 8,
      weight: 100,
      day: "Monday",
      name: "Add Exercise to Start",
      id: ""
    },
  },
  addConfiguration: (result) => set((state) => ({ configure: { result } })),

  clearConfiguration: () =>
    set({
      configure: {
        result: {
          sets: 3,
          reps: 8,
          weight: 100,
          day: "Monday",
          name: "Add Exercise to Start",
          id: ""
        },
      },
    }),
}));

export const useDayStore = create((set) => ({
  day: "Monday",
  updateDay: (day) => set({ day: day }),
}));
