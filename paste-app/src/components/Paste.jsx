import React from "react";
import { useSelector } from "react-redux";
import "../styles/Paste.css";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredPastes = React.useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return pastes;
    return pastes.filter((paste) =>
      (paste.title || "").toLowerCase().includes(term)
    );
  }, [pastes, searchTerm]);

  return (
    <div className="mainContent">
      <div >
        <div className="subHeader ">
          <input
            className="InputTitle"
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchButton">Search</button>
        </div>
        <div>
          {filteredPastes.length > 0 ? (
            filteredPastes.map((paste) => (
              <div className="pasteCards" key={paste._id || paste.id}>
                <div className="pasteTitle">{paste.title}</div>
                <div className="pasteContent">{paste.content}</div>
                <div className="pasteCardButtonsRow">
                  <button className="pasteCardButton">View</button>
                  <button className="pasteCardButton">Edit</button>
                  <button className="pasteCardButton">Delete</button>
                  <button className="pasteCardButton">Copy</button>
                  <button className="pasteCardButton">Share</button>
                </div>
              </div>
            ))
          ) : (
            <div className="noResults">No results found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Paste;
