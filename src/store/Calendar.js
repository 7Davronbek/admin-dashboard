import { create } from "zustand";
import { INITIAL_EVENTS } from "../data/index";

const useCalendar = create((set) => ({
  currentEvents: INITIAL_EVENTS,
  setCurrentEvent: (events) => set({ currentss: events }),
}));

export default useCalendar; 