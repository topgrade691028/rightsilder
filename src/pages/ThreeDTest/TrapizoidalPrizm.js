import React from "react";

const TrapezoidalPrism = () => {
  const topWidth = 5;
  const bottomWidth = 8;
  const height = 10;
  const depth = 3;

  const vertices = React.useMemo(
    () => [
      [-topWidth / 2, height / 2, depth / 2],
      [topWidth / 2, height / 2, depth / 2],
      [-bottomWidth / 2, -height / 2, depth / 2],
      [bottomWidth / 2, -height / 2, depth / 2],
      [-topWidth / 2, height / 2, -depth / 2],
      [topWidth / 2, height / 2, -depth / 2],
      [-bottomWidth / 2, -height / 2, -depth / 2],
      [bottomWidth / 2, -height / 2, -depth / 2],
    ],
    [topWidth, bottomWidth, height, depth]
  );

  const indices = React.useMemo(
    () => [
      0, 1, 2, 1, 3, 2, 4, 5, 6, 5, 7, 6, 0, 4, 1, 4, 5, 1, 2, 6, 3, 6, 7, 3, 0,
      2, 4, 2, 6, 4, 1, 5, 3, 5, 7, 3,
    ],
    []
  );

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={vertices.length}
          array={new Float32Array(vertices.flat())}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["index"]}
          count={indices.length}
          array={indices}
        />
      </bufferGeometry>
      <meshPhongMaterial color={0x00ff00} />
    </mesh>
  );
};
export default TrapezoidalPrism;
