import Konva from "konva";
import type { Labels, OnPlay } from "./configuration";
import { allPositions } from "./configuration";

export type Position = number;

function xs(stickWidth: number, buttonSize: number) {
  const spaceCount = allPositions.length - 1;
  const buttonSpace = allPositions.length * buttonSize;
  const spaceWidth = (stickWidth - buttonSpace) / spaceCount;

  return allPositions.map((position, index) => ({
    position,
    x: index * (spaceWidth + buttonSize) + buttonSize / 2,
  }));
}

export function buttons(
  stickWidth: number,
  stickHeight: number,
  buttonSize: number,
  labels: Labels,
  audios: string[],
  onPlay: OnPlay
): Konva.Group[] {
  return xs(stickWidth, buttonSize).map(({ position, x }, index) => {
    const button = new Konva.Group();
    button.setAttr("stickPosition", position);

    const circle = new Konva.Circle({
      x,
      y: stickHeight / 2,
      width: buttonSize,
      height: buttonSize,
      fill: "blue",
    });

    circle.on("click", () => {
      // TODO: play audio
      alert(`play ${audios[index]}`);

      onPlay(position);
    });

    button.add(circle);

    const text = new Konva.Text({
      text: labels(position),
      x,
      y: -20,
      align: "center",
    });

    text.offsetX(text.getWidth() / 2);

    button.add(text);

    return button;
  });
}
