import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { pasteId } = useParams("/pastes/");
  console.log(pasteId);
  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);
  const pasteToView = pastes.filter((paste) => paste._id === pasteId)[0];
  return (
    <div className="flex flex-col items-center w-[100vw] h-[75vh] p-2">
      <div className="flex flex-row justify-between w-full  m-7">
        <input
          className="border-2 border-gray-300 rounded-md p-2 w-full"
          type="text"
          placeholder="Title"
          value={pasteToView?.title}
          disabled
        />
      </div>
      <textarea
        className="border-2 border-gray-300 rounded-md p-2 w-full  h-6/7"
        value={pasteToView?.content}
        placeholder="Enter Content Here..."
        rows={4}
        disabled></textarea>
    </div>
  );
};

export default ViewPaste;
