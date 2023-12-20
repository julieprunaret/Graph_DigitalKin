import { LinkType, NodeType } from "../../types";

export const RADIUS = 10;

export const drawNetwork = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  nodes: NodeType[],
  links: LinkType[]
) => {
  // console.log("hello");
  context.clearRect(0, 0, width, height);

  // Draw the links first
  links.forEach((link) => {
    // console.log("LE LINK:", link);
    context.beginPath();
    context.moveTo(link.source.x, link.source.y);
    context.lineTo(link.target.x, link.target.y);
    context.stroke();
    // console.log("LE LINK:", link.source.x);
  });

  // Draw the nodes
  nodes.forEach((node) => {
    if (!node.x || !node.y) {
      return;
    }

    context.beginPath();
    context.moveTo(node.x + RADIUS, node.y);
    context.arc(node.x, node.y, RADIUS, 0, 2 * Math.PI);
    context.fillStyle = "#162037";
    context.fill();
  });
};
