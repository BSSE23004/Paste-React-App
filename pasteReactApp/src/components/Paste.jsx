import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import ShareButtons from "./ShareButtons";

const Paste = () => {
  const [searchedText, setSearchedText] = useState("");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchedText.toLowerCase())
  );
  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
    setSearchedText("");
  };
  const [showShareButtons, setShowShareButtons] = useState(false);

  const handleShareButton = () => {
    setShowShareButtons(true);
  };

  const handleHide = () => setShowShareButtons(false);

  return (
    <div className="w-[100vw]  flex flex-col flex-wrap gap-8 p-2">
      <input
        className="border-2 border-gray-300 rounded-md p-2 w-full"
        type="search"
        placeholder="Search Here..."
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
      />
      <div className="flex flex-col gap-5">
        {filteredPastes.length > 0 ? (
          filteredPastes.map((paste) => {
            return (
              <div
                key={paste._id}
                className="border-2 border-gray-300 rounded-md p-2 w-full  flex flex-row flex-wrap justify-between">
                <div className="flex flex-col gap-2 flex-wrap overflow-auto max-h-[14rem] max-w-5/9">
                  <h1 className="text-xl font-bold">{paste.title}</h1>
                  <p>{paste.content}</p>
                </div>
                <div className="flex flex-col gap-2  items-end max-w-4/9">
                  <div className="flex flex-row flex-wrap gap-2 justify-between">
                    <button
                      className="h-[3rem]"
                      onClick={() => handleDelete(paste?._id)}>
                      Delete
                    </button>
                    <button className="h-[3rem] ">
                      <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                    </button>
                    <button className="h-[3rem]">
                      <a href={`/pastes/${paste?._id}`}>View</a>
                    </button>
                    <button
                      className="h-[3rem]"
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content);
                        toast.success("Copied to Clipboard", {
                          icon: "✅",
                          duration: 1000,
                          style: {
                            background: "#333",
                            color: "#fff",
                          },
                        });
                      }}>
                      Copy
                    </button>
                    {/* //HomeWork */}
                    <button className="h-[3rem] " onClick={handleShareButton}>
                      Share
                    </button>
                    {showShareButtons && <ShareButtons onShare={handleHide} />}
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      className="h-[1rem] w-[1rem]"
                      src="https://cdn-icons-png.freepik.com/256/833/833593.png?ga=GA1.1.1341145587.1743862636&semt=ais_hybrid"
                      alt="Calendar"
                    />
                    {paste.createdAt &&
                      new Date(paste.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-xl font-bold">No Pastes Found</div>
        )}
      </div>
    </div>
  );
};

export default Paste;
