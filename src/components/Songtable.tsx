import type { Song } from "../lib/types";
import { Pagination } from "./Pagination";
import { paginate } from "../utils/paginate";
import { getSongUrl } from "../utils/getSongsUrl";
import download from "../assets/download-pdf.png";
import Canva from "../assets/Logo.png";

interface SongTableProps {
  songs: Song[];
  currentPage: number;
  handlePageChange: (pageNum: number) => void;
  isAdmin: boolean;
}

export default function Songtable({
  songs,
  currentPage,
  handlePageChange,
  isAdmin,
}: SongTableProps) {
  const pageSize = 20;
  const itemsCount = songs.length;
  const pageSongs = paginate(songs, currentPage, pageSize);

  return (
    <div className="p-4 w-full md:w-2/3 flex flex-col">
      <div className="flex justify-start">
        <table className="w-full md:max-w-10/12 table-fixed drop-shadow-xl/20">
          <thead className="bg-gray-200">
            <tr>
              <th className=" w-2/3 py-3 px-2 md:px-4 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">
                Song name
              </th>
              <th className=" w-1/3 text-center text-xs font-medium text-gray-950 uppercase tracking-wider">
                Download
              </th>
              {isAdmin && (
                <th className="w-1/10 text-center text-xs font-medium text-gray-950 uppercase tracking-wider">
                  Update
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-red-800">
            {pageSongs.map((song) => (
              <tr key={song.id} className="hover:bg-gray-100">
                <td className="bg-gray-50 px-2 md:px-4 ">
                  <div className="flex items-center flex-wrap">
                    <span
                      className="text-lg font-medium text-gray-950 tracking-wider truncate"
                      style={{
                        fontFamily:
                          "'Tenali Ramakrishna', Mandali, Ramabhadra, Noto Sans Telugu, sans-serif",
                        lineHeight: "1",
                        paddingTop: "8px",
                        paddingRight: "5px",
                      }}
                    >
                      {song.title}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                        song.category === "Worship"
                          ? "bg-purple-100 text-purple-800"
                          : song.category === "Praise"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {song.category}
                    </span>
                  </div>
                </td>

                <td className="bg-gray-50 py-4">
                  <div className="flex justify-evenly">
                    <a
                      href={getSongUrl(song.song_name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 border border-gray-300 shadow-sm rounded bg-white hover:bg-gray-50 flex-shrink-0"
                    >
                      <img src={download} alt="PDF" className="w-full h-4" />
                    </a>
                    <a
                      href={song.canva_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 border border-transparent shadow-sm rounded bg-white hover:bg-gray-50 flex-shrink-0"
                    >
                      <img src={Canva} alt="Canva" className="w-full h-3" />
                    </a>
                  </div>
                </td>
                {isAdmin && (
                  <td>
                    <div className="flex justify-center">
                      <button className="min-w-1/4 h-6 text-xs px-1.5 ring-2 bg-blue-300 ring-blue-500 rounded-lg">
                        Update
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        pageSize={pageSize}
        totalItemsCount={itemsCount}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}
