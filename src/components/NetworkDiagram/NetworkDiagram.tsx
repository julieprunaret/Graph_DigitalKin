import "./NetworkDiagram.scss";
import * as d3 from "d3"; // we will need d3.js
import { useEffect, useRef } from "react";
import { RADIUS, drawNetwork } from "../../utils/drawNetwork";
import { NetworkDiagramType, LinkType, NodeType } from "../../../types";

function NetworkDiagram({ width, height, data }: NetworkDiagramType) {
  // The force simulation mutates links and nodes, so create a copy first
  // Node positions are initialized by d3
  const links: LinkType[] = data.links.map((d) => ({ ...d }));
  const nodes: NodeType[] = data.nodes.map((d) => ({ ...d }));

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (links.length && nodes.length) {
      console.log("link", links);
      console.log(nodes);
      // set dimension of the canvas element
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");

      if (!context) {
        return; //if no context is defined, we return nothing
      }

      const link = d3.forceLink<NodeType, LinkType>(links).id((d) => d.id);

      // compute the node position
      // run d3-force to find the position of nodes on the canvas
      d3.forceSimulation(nodes)

        // list of forces we apply to get node positions
        .force("link", link)
        .force("collide", d3.forceCollide().radius(RADIUS)) //to make nodes collides eachother
        .force("charge", d3.forceManyBody()) // to apply behaviour between nodes
        .force("center", d3.forceCenter(width / 2, height / 2)) //to choose the center of the draw

        // at each iteration of the simulation, draw the network diagram with the new node positions
        //on("tick"...) is from D3js
        .on("tick", () => {
          console.log(links);
          drawNetwork(context, width, height, nodes, links);
        });
    }
  }, [width, height, nodes, links]);

  return (
    <div>
      {/* the choice of a canvas to render the shapes is better for performance : we don't have to create a lot of svg every iteration */}
      <canvas
        ref={canvasRef}
        style={{
          width,
          height,
        }}
        width={width}
        height={height}
      />
    </div>
  );
}

export default NetworkDiagram;
