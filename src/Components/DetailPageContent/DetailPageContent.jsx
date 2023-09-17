import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import TopDetails from './TopDetails.jsx'
import QuantityCheckHandler from './QuantityCheckHanlder.jsx'
import Description from './Description.jsx'

const DetailPageContent = () => {
  const theme = useTheme();
  return (
    <Box sx={{ width:"80%", m:'auto', py:4 }}>
      <Box sx={{ width: 1, backgroundColor: theme.palette.secondary.main,  borderRadius:'8px' }}> 
      <Typography variant="h4" sx={{color:theme.palette.white[900], display:"flex",justifyContent:'center',alignItems:"center",height:'50px', fontWeight:600,}}>CP7823-OR-273</Typography>
      </Box>

      <TopDetails color={"black"} shipTime={2} AvailableQuantity={130}/>
      <QuantityCheckHandler />
      <Description />
    </Box>
  )
}

export default DetailPageContent