import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://ntpncphdioldiskcdylf.supabase.co";

const supabaseKey =
  "sb_publishable_FUdULaGw-9RBHN_RVKDPpg_yskxLtfK";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
 