import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export type Step = {
  id: string;
  project_id: string;
  short_desc: string;
  step_order: number;
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
  order: number;
}

const useAgents = () => {
  async function getAgents() {
    const { data, error } = await supabase.from("agents").select();
    if (error) {
      console.error("Error fetching agents:", error);
      return [];
    }
    return data?.sort((a: IAgent, b: IAgent) => a.order - b.order) || [];
  }

  const [agents, setAgents] = useState<IAgent[]>([]);

  useEffect(() => {
    getAgents().then((sortedAgents) => setAgents(sortedAgents));
  }, []);

  return { data: agents };
};

export default useAgents;
