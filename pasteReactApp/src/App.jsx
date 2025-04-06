import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col items-center  gap-8">
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div className="flex flex-col items-center  gap-8">
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:pasteId",
    element: (
      <div className="flex flex-col items-center  gap-8">
        <Navbar />
        <ViewPaste />
      </div>
    ),
  },
  {
    path: "*",
    element: <div>Error Bitches</div>,
  },
]);
const App = () => {
  return (
    <div className="flex flex-col items-center justify-evenly ">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
