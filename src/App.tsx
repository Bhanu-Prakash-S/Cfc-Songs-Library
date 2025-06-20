import { supabase } from "./supabase";
import { useEffect, useState } from "react";
import type { Database } from "./lib/database.types";

type Song = Database["public"]["Tables"]["songs_database"]["Row"];

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
    <ul>
      {songs.map((song) => (
        <li key={song.id}> {song.song_name + " - " + song.category}</li>
      ))}
    </ul>
  );
}

export default App;
