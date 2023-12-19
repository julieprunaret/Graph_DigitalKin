import useFetch from "./utils/Hooks/useFetch";
import "./App.css";
import { NormalizeDatasType } from "../types";
import { useEffect, useState } from "react";

function App() {
  const {
    data: linksData,
    isLoading: isLinksLoading,
    error: linksError,
  } = useFetch("links");

  const {
    data: nodesData,
    isLoading: isNodesLoading,
    error: nodesError,
  } = useFetch("nodes");

  // for creating the D3.js, we need an array "data" with two objects : nodes and links
  const [normalizeDatas, setNormalizeDatas] = useState<NormalizeDatasType>({
    nodes: [],
    links: [],
  });

  useEffect(() => {
    // we check if all datas are fetched and there is no error
    if (
      nodesData &&
      linksData &&
      !isNodesLoading &&
      !isLinksLoading &&
      !nodesError &&
      !linksError
    ) {
      //creation of an array for D3.js
      // Transformation du tableau
      const setNormalizeLinks = linksData.map((obj) => {
        return {
          target: obj.consumerAgentId,
          id: obj.id,
          source: obj.providerAgentId,
        };
      });
      const setNormalizeNodes = nodesData.map((obj) => {
        return {
          id: obj.id,
        };
      });
      // we can create the array with 2 objects and update datas
      setNormalizeDatas({
        nodes: [...setNormalizeNodes],
        links: [...setNormalizeLinks],
      });
    }
  }, [
    nodesData,
    linksData,
    isNodesLoading,
    isLinksLoading,
    nodesError,
    linksError,
  ]);

  nodesData && console.log(normalizeDatas);

  return <div></div>;
}

export default App;
