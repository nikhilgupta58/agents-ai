import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { showToast } from "../helper";

const useDemo = () => {
  const [searchParams, _] = useSearchParams();
  const summary_count = searchParams.get("summary_count") || "10";
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mutate = (link: string, input: string) => {
    setIsLoading(true);
    setData(null);
    const endpoint = `${link}?keyword=${encodeURIComponent(
      input
    )}&summary_count=${summary_count}`;
    axios
      .get(endpoint)
      .then(({ data }) => {
        showToast("Something went wrong!! Try again", 5000);
        setData(data);
      })
      .catch((e) => {
        console.error(e);
        showToast("Something went wrong!! Try again", 5000);
      })
      .finally(() => {
        setIsLoading(false);
      });
    if (input) return;
  };
  return { data, mutate, isLoading };
};

export default useDemo;
