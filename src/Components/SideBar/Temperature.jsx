import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import {Box} from '@mui/material';
import "../Styles.css"

const Temperature = () => {
  const [temperature, setTemperature] = useState([-20, 180]); // Initial temperature value

  const handleChange = (event, newValue) => {
    setTemperature(newValue);
  };

  return (
    <div className='sideBarMenuData'>
      <Box sx={{ display:"flex", justifyContent:"space-between", alignItems:'center',fontSize:"12px" }}><p>-70°C</p><p>360°C</p></Box>
      <Slider
        id="temperatureSlider"
        value={temperature}
        onChange={handleChange}
        min={-70} max={360}
        valueLabelDisplay="auto"
        aria-labelledby="temperature-slider"
        disableSwap
      />
      <p style={{ margin:'auto', fontSize:"12px" }}>Range: {temperature[0]} °C - {temperature[1]} °C</p>
    </div>
  );
};

export default Temperature;
