import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

type Step = {
  id: string;
  project_id: string;
  short_desc: string;
};

export interface IAgent {
  id: string;
  name: string;
  title: string;
  logo: string;
  description: string;
  categories: string[];
  tools_used: string[];
  is_feature: boolean;
  steps?: Step[]; // Steps related to the project
}

const useAgents = () => {
  async function getAgents() {
    return await supabase.from("agents").select();
  }
  const [agents, setAgents] = useState<IAgent[]>([]);
  useEffect(() => {
    getAgents().then((e: any) => setAgents(e?.data));
  }, []);
  return { data: agents };
};

export default useAgents;
