import _ from "lodash";
import type { Song } from "../lib/types";

export function paginate(songs: Song[], currentPage: number, pageSize: number) {
  const startIndex = pageSize * (currentPage - 1);
  return _(songs).slice(startIndex).take(pageSize).value();
}
