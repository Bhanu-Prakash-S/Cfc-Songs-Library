import { supabaseUrl } from "../supabase";

export function getSongUrl(song_name: string): string {
  let download_url = supabaseUrl + "/storage/v1/object/public/songs/";
  let language = "Telugu_songs/";
  let new_name = song_name.replace(" ", "%20");

  return download_url + language + new_name + ".pdf";
}
