import { create } from "zustand";

type RoleFromRequestState = {
  activatedModalWindow: boolean;
  activateModalWindow: () => void;
};

// export const useRequestRole = create<RoleFromRequestState>((set) => ({
//   activatedModalWindow: false,
//   activateModalWindow: () =>
//     set(() => ({ activatedModalWindow: !activatedModalWindow })),
// }));
