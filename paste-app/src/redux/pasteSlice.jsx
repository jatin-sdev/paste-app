import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes")) //string to object
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      // Check if paste with the same id already exists
      if (state.pastes.find((paste) => paste.title === action.payload.title)) {
        toast.error("Paste with the same title already exists!");
        return;
      }

      state.pastes.push(action.payload);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste created successfully!");
    },

    updateToPaste: (state, action) => {
      const index = state.pastes.findIndex(
        (item) => item._id === action.payload._id
      );

      if (index >= 0) {
        // Check if another paste (not the current one) has the same title
        const duplicateTitle = state.pastes.find(
          (paste) =>
            paste.title === action.payload.title &&
            paste._id !== action.payload._id
        );

        if (duplicateTitle) {
          toast.error("Paste with the same title already exists!");
          return;
        }

        state.pastes[index] = action.payload;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated successfully!");
      } else {
        toast.error("Paste not found!");
      }
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes have been cleared!");
    },

    removeFromPaste: (state, action) => {
      const index = state.pastes.findIndex(
        (item) => item._id === action.payload
      );
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste removed successfully!");
      } else {
        toast.error("Paste not found!");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPaste, removeFromPaste, resetAllPastes, updateToPaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
