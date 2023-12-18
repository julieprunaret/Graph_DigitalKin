import { useEffect, useState } from "react";

// typing datas in an interface
interface FetchData {
  agentCharLimit: number; // Nombre de caractères limit de l'agent
  agentFunction: string; // Nom de l'agent
  consumerAgentId: string; // Id noeud target
  id: string; // Id de la donnée
  instance: string; // Nom du moteur de pensé
  namespace: string; // Nom du répertoire
  populationId: string; // Id de la population auquel appartient l'agent
  providerAgentId: string; // Id Noeud source
  source: string; // text
  templateId: string; // Id du template utilisé pour générer l'agent
  text: string; // Contenu informationnel de l'agent
}

const useFetch = (fetchedCategory: string) => {
  const [data, setData] = useState<FetchData[] | null>(null);
  //if the data take time to arrive
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const url: string = "http://localhost:3000/" + fetchedCategory;

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { isLoading, data, error };
};

export default useFetch;
