import React from 'react'
import { Box, Grid, Typography, Divider } from '@mui/material'
import { useTheme } from '@emotion/react'
import { BorderRight } from '@mui/icons-material'

const TopDetails = ({ color,AvailableQuantity,shipTime }) => {
    return (
        <section>
            <Box sx={{ py: 2 }}>
                <Typography variant="body1" color="initial">color: {color}</Typography>
            </Box>
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <Typography variant="h4" sx={{ fontWeight: 900 }}>
                        Produnct detail will come here this will looks Good
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    {/* <img src={Product} alt="" /> */}
                    Image will come here
                </Grid>
            </Grid>

            <Box sx={{ boxShadow: "0px 3px 18px #EDEDED", mt:2,px:1, borderRadius:'8px' }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: "space-between", py: 2 }}>
                    <Typography variant="body1" color="initial" sx={{ fontWeight: 600 }}>Available Quantity</Typography>
                    <Typography variant="body1" color="initial" sx={{ fontWeight: 600 }}>Lead Time to Ship</Typography>
                </Box>
                <Divider width="full"></Divider>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: "space-between", py: 2 }}>
                    <Typography variant="body1" color="initial">{AvailableQuantity}</Typography>
                    <Typography variant="body1" color="initial">{shipTime}</Typography>
                </Box>
            </Box>
        </section>
    )
}

export default TopDetails