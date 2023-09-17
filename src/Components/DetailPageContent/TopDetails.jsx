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
                    <Typography variant="h4" sx={{ fontWeight: 900 }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis eius, 
                        magnam similique eaque itaque architecto nisi aliquid mollitia 
                        
                    </Typography>
              

            <Box sx={{ boxShadow: "0px 3px 4px #EDEDED", mt:2,px:3 }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: "space-between", py: 2 }}>
                    <Typography variant="body1" color="initial" sx={{ fontWeight: 600 }}>Available Quantity</Typography>
                    <Typography variant="body1" color="initial" sx={{ fontWeight: 600 }}>Lead Time to Ship</Typography>
                </Box>
                <Divider width="full"></Divider>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: "space-between", py: 2 }}>
                    <Typography variant="body1" color="initial">{AvailableQuantity}</Typography>
                    <Typography variant="body1" color="initial">{shipTime} Day</Typography>
                </Box>
            </Box>
        </section>
    )
}

export default TopDetails