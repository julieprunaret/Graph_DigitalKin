import useFetch from "./utils/Hooks/useFetch";
import "./App.css";

function App() {
  //fetching datas
  const {
    data: LinksData,
    isLoading: isLinksLoading,
    error: LinksError,
  } = useFetch("links");

  const {
    data: NodesData,
    isLoading: isNodesLoading,
    error: NodesError,
  } = useFetch("Nodes");

  if (LinksError) {
    return <div>Error occurred while fetching Links data.</div>;
  }

  if (NodesError) {
    return <div>Error occurred while fetching Nodes data.</div>;
  }

  return (
    <div>
      {isLinksLoading ? (
        <p>chargement...</p>
      ) : (
        LinksData &&
        LinksData.map((link) => <div key={link.id}>{link.agentFunction}</div>)
      )}
      <div>
        {isNodesLoading ? (
          <p>chargement...</p>
        ) : (
          NodesData &&
          NodesData.map((node) => <div key={node.id}>{node.agentFunction}</div>)
        )}
      </div>
    </div>
  );
}

export default App;
