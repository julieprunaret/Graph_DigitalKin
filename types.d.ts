export interface FetchDataType {
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
}

export interface NodeType extends d3.SimulationNodeDatum {
  id: string;
  group: string;
}

export interface LinkType extends d3.SimulationLinkDatum<Node> {
  target: string | any;
  id: string;
  source: string | any;
}

export interface NormalizeDatasType {
  nodes: NodeType[];
  links: LinkType[];
}

export interface NetworkDiagramType {
  width: number;
  height: number;
  data: NormalizeDatasType;
}

export interface DataContextType {
  x: number;
  y: number;
}
