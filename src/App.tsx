import { supabase } from "./supabase";
import { useEffect, useState } from "react";
import { Header } from "./components/header";

import type { Song } from "./lib/types";
import Songtable from "./components/Songtable";
import AlphabetFilter from "./components/AlphabetFilter";

function App() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  async function fetchSongs() {
    let { data, error } = await supabase.from("songs_database").select("*");
    if (error) throw error;

    setSongs(data ?? []);
  }

  useEffect(() => {
    getFilteredSongs();
  }, [songs, selectedLetter]);

  function getFilteredSongs() {
    let new_songs = songs.filter((song) =>
      song.song_name.toUpperCase().startsWith(selectedLetter)
    );

    setFilteredSongs(new_songs);
  }

  function handleLetterSelect(letter: string) {
    setSelectedLetter(letter);
  }

  return (
    <>
      <Header />
      <div className=" flex flex-col md:flex-row">
        <AlphabetFilter
          selectedLetter={selectedLetter}
          handleSelectedLetter={handleLetterSelect}
        />
        <Songtable songs={filteredSongs} />
      </div>
    </>
  );
}

export default App;
