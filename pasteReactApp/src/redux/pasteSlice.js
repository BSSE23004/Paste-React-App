import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const pasteData = action.payload;
      const existingPasteIndex = state.pastes.findIndex(
        (paste) => paste.title === pasteData.title
      );
      if (existingPasteIndex === -1) {
        state.pastes.push(pasteData);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast("Paste Created Successfully", {
          icon: "✅",
          duration: 1000,
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        toast.error("Paste Already Exists", {
          icon: "❌",
          duration: 1000,
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      }
    },
    updatePastes: (state, action) => {
      const pasteData = action.payload;
      const existingPasteIndex = state.pastes.findIndex(
        (paste) => paste._id === pasteData._id
      );
      if (existingPasteIndex !== -1) {
        // Update the paste data if it exists
        state.pastes[existingPasteIndex] = pasteData;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast("Paste Updated Successfully", {
          icon: "✅",
          duration: 1000,
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        toast.error("Paste Not Found", {
          icon: "❌",
          duration: 1000,
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast("All Pastes Deleted", {
        icon: "✅",
        duration: 1000,
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      console.log(pasteId);
      // Find the index of the paste to be removed
      const existingPasteIndex = state.pastes.findIndex(
        (paste) => paste._id === pasteId
      );
      if (existingPasteIndex !== -1) {
        // Remove the paste from the array
        state.pastes.splice(existingPasteIndex, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast("Paste Deleted Successfully", {
          icon: "✅",
          duration: 1000,
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        toast.error("Paste Not Found", {
          icon: "❌",
          duration: 1000,
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPastes, updatePastes, resetAllPastes, removeFromPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
