import { supabaseUrl } from "../supabase";

let download_url = supabaseUrl + "/storage/v1/object/public/songs/";
let language = "Telugu%20songs/";
let ssong_name = "Unnatha Devudu neetho nundaga.pdf";

let new_name = ssong_name.replace(" ", "%20");
