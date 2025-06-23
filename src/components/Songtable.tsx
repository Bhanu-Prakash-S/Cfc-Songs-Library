import type { Song } from "../lib/types";
import { supabaseUrl } from "../supabase";

function getSongUrl(song_name: string): string {
  let download_url = supabaseUrl + "/storage/v1/object/public/songs/";
  let language = "Telugu_songs/";
  let new_name = song_name.replace(" ", "%20");

  return download_url + language + new_name + ".pdf";
}

interface SongTableProps {
  songs: Song[];
}

export default function Songtable({ songs }: SongTableProps) {
  return (
    <div className="p-3 flex justify-center w-full  md:w-2/3 md:justify-start">
      <div className="w-full max-w-full overflow-x-auto">
        <table className="min-w-3/5 table-fixed">
          <thead className="bg-gray-200">
            <tr>
              <th className=" w-3/4 px-2 md:px-4 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">
                Song name
              </th>
              <th className="w-1/4 px-2 md:px-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">
                Download
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-red-800">
            {songs.map((song) => (
              <tr key={song.id} className="hover:bg-gray-100">
                <td className="bg-gray-50 px-2 md:px-4 py-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="text-md md:text-lg text-gray-800 truncate"
                      style={{
                        fontFamily:
                          'Ramabhadra, "Noto Sans Telugu", sans-serif',
                      }}
                    >
                      {song.title}
                    </span>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
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

                <td className="bg-gray-50 px-3 py-4">
                  <div className="flex space-x-1  justify-start md:justify-evenly">
                    <a
                      href={getSongUrl(song.song_name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 border border-gray-300 shadow-sm rounded bg-white hover:bg-gray-50 flex-shrink-0"
                    >
                      <img
                        src="src\assets\download-pdf.png"
                        alt="PDF"
                        className="w-full h-4"
                      />
                    </a>
                    <a
                      href={song.canva_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 border border-transparent shadow-sm rounded bg-white hover:bg-gray-50 flex-shrink-0"
                    >
                      <img
                        src="src\assets\Logo.png"
                        alt="Canva"
                        className="w-full h-3"
                      />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
