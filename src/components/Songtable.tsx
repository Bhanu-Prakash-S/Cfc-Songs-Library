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
    <div className="py-4  overflow-x-auto">
      <table className="w-auto bg-white shadow-lg rounded-md overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">
              Song name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">
              Download
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-red-800">
          {songs.map((song) => (
            <tr key={song.id} className="hover:bg-gray-100">
              <td className="px-6 py-3 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="text-sm font-serif text-gray-900">
                    {song.song_name}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    song.category === "worship"
                      ? "bg-purple-100 text-purple-800"
                      : song.category === "praise"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {song.category}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex space-x-3">
                  <a
                    href={getSongUrl(song.song_name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 border border-gray-300 shadow-sm rounded bg-white hover:bg-gray-50"
                  >
                    <img
                      src="src\assets\download-pdf.png"
                      alt="PDF"
                      className="w-full h-5 mr-1"
                    />
                  </a>
                  <a
                    href={song.canva_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 border border-transparent shadow-sm rounded bg-white  hover:bg-gray-50"
                  >
                    <img
                      src="src\assets\Logo.png"
                      alt="Canva"
                      className="inline-block align-[-1px] w-full h-3.5 mr-1"
                    />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
