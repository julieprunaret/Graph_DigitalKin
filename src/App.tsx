import useFetch from "./utils/Hooks/useFetch";
import "./App.css";
import { NewDataType } from "../types";
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
  const [newData, setNewData] = useState<NewDataType>({ nodes: [], links: [] });

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
      // we can create the array with 2 objects and update datas
      setNewData({
        nodes: [...nodesData],
        links: [...linksData],
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

  return (
    <div>
      {isLinksLoading ? (
        <p>chargement...</p>
      ) : (
        nodesData &&
        newData.links.map((link) => (
          <div key={link.id}>
            <span>{link.agentFunction}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
