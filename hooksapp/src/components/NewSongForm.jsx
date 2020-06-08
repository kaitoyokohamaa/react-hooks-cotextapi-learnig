import React, { useState, useEffect } from "react";

export default function NewSongForm({ addSongs }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addSongs(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <input type="submit" />
    </form>
  );
}
