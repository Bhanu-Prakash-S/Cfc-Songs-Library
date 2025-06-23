import { supabase } from "./supabase";
import { useEffect, useState } from "react";
import { Header } from "./components/header";

import type { Song } from "./lib/types";
import Songtable from "./components/Songtable";
import AlphabetFilter from "./components/AlphabetFilter";
import Category from "./components/Category";

function App() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
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
  }, [songs, selectedLetter, selectedCategory]);

  function getFilteredSongs() {
    const result = songs.filter((song) => {
      const letter_filter =
        selectedLetter === "All" ||
        song.song_name.toUpperCase().startsWith(selectedLetter);
      const category_filter =
        selectedCategory === "All" || song.category === selectedCategory;

      return letter_filter && category_filter;
    });

    setFilteredSongs(result);
  }

  function handleLetterSelect(letter: string) {
    setSelectedLetter(letter);
  }

  function handleCategorySelect(category: string) {
    setSelectedCategory(category);
  }

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:w-1/3">
          <AlphabetFilter
            selectedLetter={selectedLetter}
            handleSelectedLetter={handleLetterSelect}
          />
          <Category
            handleSelectedCategory={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
        </div>
        <Songtable songs={filteredSongs} />
      </div>
    </>
  );
}

export default App;
