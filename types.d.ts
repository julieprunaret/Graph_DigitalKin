export type FetchDataType = {
  agentCharLimit: number; // Nombre de caractères limit de l'agent
  agentFunction: string; // Nom de l'agent | nom du noeud
  consumerAgentId: string; // Id noeud target
  id: string; // Id de la donnée
  instance: string; // Nom du moteur de pensé
  namespace: string; // Nom du répertoire
  populationId: string; // Id de la population auquel appartient l'agent
  providerAgentId: string; // Id Noeud source
  source: string; // text
  templateId: string; // Id du template utilisé pour générer l'agent
  text: string; // Contenu informationnel de l'agent
};

export type NewDataType = {
  nodes: FetchDataType[];
  links: FetchDataType[];
};
