import React from 'react'
import { Typography, Divider, Box } from '@mui/material'
import { useTheme } from '@emotion/react'
import DetailsRow from './DetailsRow'


const Description = () => {
    const theme = useTheme();

    return (
        <section>
            <Box sx={{ width: 1, backgroundColor: theme.palette.secondary.main, borderRadius: '8px', mt: 1 }}>
                <Typography variant="h4" sx={{ color: theme.palette.white[900], display: "flex", justifyContent: 'center', alignItems: "center", height: '50px', fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>Detailed Description</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ my: 2, display: "flex", justifyContent: "space-between", }}>
                    <Typography variant="h4" color="initial">Tech Specs</Typography>
                    <Typography variant="h4" color="initial">Value</Typography>
                </Box>
                <DetailsRow tech={"Compund Number"} value={"value"} />
                <DetailsRow tech={"Material"} value={"value"} />
                <DetailsRow tech={"Material Sub Type"} value={"value"} />
                <DetailsRow tech={"Color"} value={"value"} />
                <DetailsRow tech={"Durometer"} value={"value"} />
                <DetailsRow tech={"Durometer Scale"} value={"value"} />
                <DetailsRow tech={"Type"} value={"value"} />
                <DetailsRow tech={"Size"} value={"value"} />
                <DetailsRow tech={"Cross Section (mm)"} value={"value"} />
                <DetailsRow tech={"Inside Diameter (mm)"} value={"value"} />
                <DetailsRow tech={"High Temp (C)"} value={"value"} />
                <DetailsRow tech={"Low Temp (C)"} value={"value"} />
            </Box>
        </section>
    )
}

export default Description