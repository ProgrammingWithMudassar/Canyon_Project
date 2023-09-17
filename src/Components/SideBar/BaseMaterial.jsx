import React from 'react';
import Grid from '@mui/material/Grid';
import { materialTypeItems } from '../../Data/SliderData.js'

const BaseMaterial = () => {
  return (
    <section className='sideBarMenuData'>
      {materialTypeItems.map((material, index) => (
        <Grid key={index} container spacing={2} sx={{ width: "100%", display: "flex", alignItems: 'center' }}>
          <Grid item xs={1.5}>
            <input type="checkbox" style={{ scale: '1.3', cursor: 'pointer' }} />
          </Grid>
          <Grid item xs={10.5}>
            <p style={{ fontSize: "11px" }}>{material}</p>
          </Grid>
        </Grid>
      ))}
    </section>
  );
}

export default BaseMaterial;
