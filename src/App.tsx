import { supabase } from "./supabase";
import { useEffect, useState } from "react";
import { Header } from "./components/header";

import type { Song } from "./lib/types";
import Songtable from "./components/Songtable";
import AlphabetFilter from "./components/AlphabetFilter";
import Category from "./components/Category";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
  const [selectedSearchTerm, setSelectedSearchTerm] = useState("");

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
  }, [songs, selectedLetter, selectedCategory, selectedSearchTerm]);

  function getFilteredSongs() {
    const result = songs.filter((song) => {
      const search_filter =
        selectedSearchTerm === "" ||
        song.song_name.toLowerCase().includes(selectedSearchTerm.toLowerCase());

      const letter_filter =
        selectedLetter === "All" ||
        song.song_name.toUpperCase().startsWith(selectedLetter);

      const category_filter =
        selectedCategory === "All" || song.category === selectedCategory;

      return search_filter && letter_filter && category_filter;
    });

    setFilteredSongs(result);
  }

  function handleLetterSelect(letter: string) {
    setSelectedLetter(letter);
  }

  function handleCategorySelect(category: string) {
    setSelectedCategory(category);
  }

  function handleSearchTerm(term: string) {
    setSelectedSearchTerm(term);
    console.log(selectedSearchTerm);
  }

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:w-1/3">
          <SearchFilter
            searchTerm={selectedSearchTerm}
            handleSearchTerm={handleSearchTerm}
          />
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
