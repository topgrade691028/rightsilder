import React, { useState } from "react";
import { Slider, Typography } from "@mui/material";

const ImageWithSliders = () => {
  // State for stem parameters
  const [stemHeight, setStemHeight] = useState(200);
  const [stemTop, setStemTop] = useState(0);
  const [stemBottom, setStemBottom] = useState(298);

  // State for base parameters
  const [baseTotalLength, setBaseTotalLength] = useState(491);
  const [baseToeLength, setBaseToeLength] = useState(176);
  const [baseThickness, setBaseThickness] = useState(59);

  // State for shear key parameters
  const [shearKeyLength, setShearKeyLength] = useState(173);
  const [shearKeyToeDistance, setShearKeyToeDistance] = useState(302.5);
  const [shearKeyThickness, setShearKeyThickness] = useState(69);
  const CustomSliderTitle = (title) => {
    return (
      <Typography id="" sx={{ fontSize: "12px", fontWeight: "400" }}>
        {title}
      </Typography>
    );
  };
  return (
    <div>
      {/* SVG image */}
      {/* <svg width="491" height="426" viewBox="0 0 491 426" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={`M176 0H243L${shearKeyToeDistance} 298H176V0Z`} fill="#D9D9D9" />
        <rect y="298" width="491" height="59" fill="#D9D9D9"/>
        <rect x="176" y="357" width={shearKeyLength} height={shearKeyThickness} fill="#D9D9D9"/>
      </svg> */}

      {/* <svg
        width="491"
        height="426"
        viewBox="0 0 491 426"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M176 0H243L302.5 298H176V0Z" fill="#D9D9D9" />
        <rect y="298" width="491" height="59" fill="#D9D9D9" />
        <rect x="176" y="357" width="173" height="69" fill="#D9D9D9" />
      </svg> */}

      {/* Sliders for stem */}
      <Typography id="stem-height-slider" gutterBottom>
        Stem Height
      </Typography>
      <Slider
        value={stemHeight}
        min={0}
        max={426}
        step={1}
        onChange={(e, newValue) => setStemHeight(newValue)}
        aria-labelledby="stem-height-slider"
      />

      <CustomSliderTitle>
        Stem Top
      </CustomSliderTitle>
      <Slider
        value={stemTop}
        min={0}
        max={426}
        step={1}
        onChange={(e, newValue) => setStemTop(newValue)}
        aria-labelledby="stem-top-slider"
      />

      <Typography id="stem-bottom-slider" gutterBottom>
        Stem Bottom
      </Typography>
      <Slider
        value={stemBottom}
        min={0}
        max={426}
        step={1}
        onChange={(e, newValue) => setStemBottom(newValue)}
        aria-labelledby="stem-bottom-slider"
      />

      {/* Sliders for base */}
      <Typography id="base-total-length-slider" gutterBottom>
        Base Total Length
      </Typography>
      <Slider
        value={baseTotalLength}
        min={0}
        max={491}
        step={1}
        onChange={(e, newValue) => setBaseTotalLength(newValue)}
        aria-labelledby="base-total-length-slider"
      />

      <Typography id="base-toe-length-slider" gutterBottom>
        Base Toe Length
      </Typography>
      <Slider
        value={baseToeLength}
        min={0}
        max={491}
        step={1}
        onChange={(e, newValue) => setBaseToeLength(newValue)}
        aria-labelledby="base-toe-length-slider"
      />

      <Typography id="base-thickness-slider" gutterBottom>
        Base Thickness
      </Typography>
      <Slider
        value={baseThickness}
        min={0}
        max={426}
        step={1}
        onChange={(e, newValue) => setBaseThickness(newValue)}
        aria-labelledby="base-thickness-slider"
      />

      {/* Sliders for shear key */}
      <Typography id="shear-key-length-slider" gutterBottom>
        Shear Key Length
      </Typography>
      <Slider
        value={shearKeyLength}
        min={0}
        max={491}
        step={1}
        onChange={(e, newValue) => setShearKeyLength(newValue)}
        aria-labelledby="shear-key-length-slider"
      />

      <Typography id="shear-key-toe-distance-slider" gutterBottom>
        Shear Key Toe Distance
      </Typography>
      <Slider
        value={shearKeyToeDistance}
        min={0}
        max={491}
        step={1}
        onChange={(e, newValue) => setShearKeyToeDistance(newValue)}
        aria-labelledby="shear-key-toe-distance-slider"
      />

      <Typography id="shear-key-thickness-slider" gutterBottom>
        Shear Key Thickness
      </Typography>
      <Slider
        value={shearKeyThickness}
        min={0}
        max={426}
        step={1}
        onChange={(e, newValue) => setShearKeyThickness(newValue)}
        aria-labelledby="shear-key-thickness-slider"
      />
    </div>
  );
};

export default ImageWithSliders;
