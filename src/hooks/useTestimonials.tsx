import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const useTestimonials = () => {
  async function getData() {
    return await supabase.from("testimonials").select();
  }
  const [data, setData] = useState<{ author: string; description: string }[]>(
    []
  );
  useEffect(() => {
    getData().then((e: any) => setData(e?.data));
  }, []);
  return { data };
};

export default useTestimonials;
