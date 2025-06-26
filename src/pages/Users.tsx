import { supabase } from "../supabase";
import { useEffect, useState } from "react";
import { Header } from "../components/header";
import Songtable from "../components/Songtable";
import AlphabetFilter from "../components/AlphabetFilter";
import Category from "../components/Category";
import SearchFilter from "../components/SearchFilter";

import type { Song } from "../lib/types";
import { getFilteredSongs } from "../utils/getFilteredSongs";

export function Users() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
  const [selectedSearchTerm, setSelectedSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchSongs();
  }, []);

  async function fetchSongs() {
    let { data, error } = await supabase.from("songs_database").select("*");
    if (error) throw error;

    setSongs(data ?? []);
  }

  useEffect(() => {
    let newSongs: Song[] = getFilteredSongs(
      songs,
      selectedSearchTerm,
      selectedLetter,
      selectedCategory
    );
    setFilteredSongs(newSongs);
  }, [songs, selectedSearchTerm, selectedLetter, selectedCategory]);

  function handleLetterSelect(letter: string) {
    setSelectedLetter(letter);
    setCurrentPage(1);
  }

  function handleCategorySelect(category: string) {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  function handleSearchTerm(term: string) {
    setSelectedSearchTerm(term);
    setCurrentPage(1);
  }

  function handlePageChange(pageNum: number) {
    setCurrentPage(pageNum);
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
        <Songtable
          isAdmin={false}
          songs={filteredSongs}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
}
