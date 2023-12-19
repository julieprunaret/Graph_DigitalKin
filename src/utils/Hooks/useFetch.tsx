import { useEffect, useState } from "react";
import { FetchDataType } from "../../../types";

const useFetch = (fetchedCategory: string) => {
  const [data, setData] = useState<FetchDataType[] | null>(null);
  //if the data take time to arrive
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  // we add a variable to process our two paths (links and nodes)
  const url: string = "http://localhost:3000/" + fetchedCategory;

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      try {
        // fetching datas
        const response = await fetch(url);
        //json format management
        const data = await response.json();
        setData(data);
      } catch (err) {
        //error management
        console.log(err);
        setError(true);
      } finally {
        //load management
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { isLoading, data, error };
};

export default useFetch;
