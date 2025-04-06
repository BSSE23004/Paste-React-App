import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updatePastes } from "../redux/pasteSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = React.useState("");
  const [value, setValue] = React.useState("");
  const [searchParams, setSearchParams] = useSearchParams({});
  const pasteId = searchParams.get("pasteId");
  const pastes = useSelector((state) => state.paste.pastes);
  useEffect(() => {
    if (pasteId) {
      const paste = pastes.find((paste) => paste._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId]);

  const dispatch = useDispatch();
  const createPaste = () => {
    const pasteData = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (pasteData.title === "" || pasteData.content === "") {
      toast.error("Please fill in the title and content", {
        icon: "❌",
        duration: 1000,
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      if (pasteId) {
        //Update paste
        dispatch(updatePastes(pasteData));
      } else {
        //createPaste

        dispatch(addToPastes(pasteData));
      }
    }

    //after creating or updating the paste, we need to reset the state and search params
    setSearchParams({});
    setTitle("");
    setValue("");
  };
  return (
    <div className="flex flex-col items-center w-[100vw] h-[75vh]  p-4">
      <div className="flex flex-row justify-between w-full  m-7">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-8/12"
        />
        <button onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>
      <textarea
        className="border-2 border-gray-300 rounded-md p-2 w-full  h-6/7"
        value={value}
        placeholder="Enter Content Here..."
        onChange={(e) => setValue(e.target.value)}
        rows={4}></textarea>
    </div>
  );
};

export default Home;
