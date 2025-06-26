import type { Song } from "../lib/types";

export function getFilteredSongs(
  songs: Song[],
  selectedSearchTerm: string,
  selectedLetter: string,
  selectedCategory: string
): Song[] {
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

  return result;
}
