import React, { Fragment } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { useTheme } from '@emotion/react'
import TopDetails from './TopDetails.jsx'
import QuantityCheckHandler from './QuantityCheckHanlder.jsx'
import Description from './Description.jsx'

const DetailPageContent = () => {
  const theme = useTheme();
  return (

    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Box sx={{
            p:2, pt:8
          }}>
            {/* <img src="" alt="" /> */}
            Image will come here
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ width: "100%", m: 'auto', py: 4 }}>
            <Box sx={{ width: 1, backgroundColor: theme.palette.secondary.main }}>
              <Typography variant="h4" sx={{ color: theme.palette.white[900], display: "flex", justifyContent: 'center', alignItems: "center", height: '50px', fontWeight: 600, }}>CP7823-OR-273</Typography>
            </Box>

            <TopDetails color={"black"} shipTime={2} AvailableQuantity={130} />
            <QuantityCheckHandler />
            <Description />
          </Box>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>


    </Fragment>
  )
}

export default DetailPageContent