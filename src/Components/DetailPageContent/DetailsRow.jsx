import React, { Fragment } from 'react'
import { Typography, Divider, Box } from '@mui/material'

const DetailsRow = ({value}) => {
    return (
        <Fragment>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: 'center',mt:3 }}>
                <Typography variant="h6" fontWeight={600}>Shop Number</Typography>
                <Typography variant="h6" >{value}</Typography>
            </Box>
            <Divider variant="fullWidth" orientation="horizontal" />
        </Fragment>
    )

}
export default DetailsRow