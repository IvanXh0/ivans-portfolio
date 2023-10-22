import { SectionName } from "@/lib/types";
import { create } from "zustand";

type UseActiveStore = {
  activeSection: SectionName;
  timeOfLastClick: number;
  setActiveSection: (section: SectionName) => void;
  setTimeOfLastClick: (time: number) => void;
};

export const useActiveStore = create<UseActiveStore>((set) => ({
  activeSection: "Home",
  timeOfLastClick: 0,
  setActiveSection: (section: SectionName) => set({ activeSection: section }),
  setTimeOfLastClick: (time: number) => set({ timeOfLastClick: time }),
}));

export default useActiveStore;
