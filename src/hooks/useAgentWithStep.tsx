import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { IAgent } from "./useAgents";

const useAgentWithStep = () => {
  const { id } = useParams<{ id: string }>();
  async function getAgent(agentId: string) {
    // Fetch the specific agent by ID
    const { data: agent, error: agentError } = await supabase
      .from("agents")
      .select("*")
      .eq("id", agentId)
      .single(); // Fetch a single row

    if (agentError) {
      console.error("Error fetching agent:", agentError);
      return { agent: null, steps: null, error: agentError.message };
    }

    // Fetch all steps related to this agent
    const { data: steps, error: stepsError } = await supabase
      .from("steps")
      .select("*")
      .eq("project_id", agentId);

    if (stepsError) {
      console.error("Error fetching steps:", stepsError);
      return { agent, steps: null, error: stepsError.message };
    }

    return { data: { ...agent, steps }, error: null };
  }

  const [agents, setAgents] = useState<IAgent | null>(null);
  useEffect(() => {
    id && getAgent(id).then((e: any) => setAgents(e?.data));
  }, [id]);

  return { data: agents };
};

export default useAgentWithStep;
