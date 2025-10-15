import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToPaste, updateToPaste } from "../redux/pasteslice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const dispatch = useDispatch();

  const pasteId = searchParams.get("pasteId");

  function createPaste() {
    const pasteData = {
      title: title,
      content: content,
      _id: pasteId ? pasteId : Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update paste
      dispatch(updateToPaste(pasteData));
    } else {
      //create paste
      dispatch(addToPaste(pasteData));
    }
  }
  return (
    <div>
      <div className="Home">
        <input
          className="Input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        />

        <button className="Button" onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      <div className="mt-4">
        <textarea
          className="Textarea"
          rows={20}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter Content"
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
