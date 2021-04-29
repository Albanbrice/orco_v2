import create from "zustand";
import { Vector3 } from "three";

const useStore = create((set, get) => ({
  orbitEnabled: true,
  position: new Vector3(),
  direction: new Vector3(),
  archives: [],
  actions: {
    toggleOrbit(orbitEnabled = !get().orbitEnabled) {
      set({ orbitEnabled });
    }
  },
  setPosition: (position) => set({ position: position }),
  setDirection: (direction) => set({ direction: direction })
}));

// fetch("assets/json/archives.json")
//   .then((resp) => resp.json())
//   .then((archives) =>
//     useStore.setState((state) => ({
//       ...state,
//       archives
//     }))
//   );

export { useStore };
