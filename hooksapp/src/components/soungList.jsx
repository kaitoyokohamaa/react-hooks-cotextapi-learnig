import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "stay home", id: 2 },
    { title: "I don't like   home", id: 3 }
  ]);
  const [age, setAge] = useState(20);
  const addSongs = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  useEffect(() => {
    console.log("object");
  }, [songs]);
  useEffect(() => {
    console.log("age");
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSongs={addSongs} />
      <button onClick={() => setAge(age + 1)}>Add 1 age:{age}</button>
    </div>
  );
};
export default SongList;
