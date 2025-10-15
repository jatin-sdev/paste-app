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
        (paste) => paste.id === action.payload.id
      );

      if (index !== -1) {
        state.pastes[index] = action.payload;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
      }
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },

    removeFromPaste: (state, action) => {
      state.pastes = state.pastes.filter((paste) => paste.id !== action.payload.id);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },

}});

// Action creators are generated for each case reducer function
export const { addToPaste, removeFromPaste, resetAllPastes, updateToPaste } = pasteSlice.actions;

export default pasteSlice.reducer;
