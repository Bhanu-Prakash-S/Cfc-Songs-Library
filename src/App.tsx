import { supabase } from "./supabase";
import { useEffect, useState } from "react";
import { Header } from "./components/header";

import type { Song } from "./lib/types";
import Songtable from "./components/Songtable";
import AlphabetFilter from "./components/AlphabetFilter";

function App() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [selectedLetter, setSelectedLetter] = useState("");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    fetchSongs();
  }, []);

  async function fetchSongs() {
    let { data, error } = await supabase.from("songs_database").select("*");
    if (error) throw error;

    setSongs(data ?? []);
  }

  return (
    <>
      <Header />
      <div className=" flex flex-col md:flex-row">
        <AlphabetFilter />
        <Songtable songs={songs} />
      </div>
    </>
  );
}

export default App;
