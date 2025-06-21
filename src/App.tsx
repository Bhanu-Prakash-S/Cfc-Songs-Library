import { supabase } from "./supabase";
import { useEffect, useState } from "react";
import { Header } from "./components/header";

import type { Song } from "./lib/types";
import Songtable from "./components/Songtable";

function App() {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  async function fetchSongs() {
    let { data, error } = await supabase.from("songs_database").select("*");
    if (error) throw error;

    setSongs(data ?? []);
  }

  return (
    <div>
      <Header />
      <Songtable songs={songs} />
    </div>
  );
}

export default App;
