import React from 'react'
import { Typography, Box, Button, Divider, Grid } from '@mui/material'
import { useTheme } from '@emotion/react'
import '../Styles.css'


const rowData = [
  { quantity: 2, unitCost: "3 days", discount: "$15.00" },
  { quantity: 3, unitCost: "1 day", discount: "$5.00" },
  { quantity: 4, unitCost: "4 days", discount: "$20.00" },
  { quantity: 5, unitCost: "2 days", discount: "$10.00" },
];


const QuantityCheckHanlder = () => {
  const theme = useTheme();

  return (
    <section >
      <Typography variant="h5" sx={{ fontWeight: 900, py: 3 }}>Enter a Quantity to Check Price</Typography>

      <Box sx={{ width: '100%', boxShadow: "0px 3px 4px #EDEDED", borderRadius: '6px', overflow: "hidden", py: 2, px: 4 }}>
        {/* Box Header  */}
        <Box sx={{ display: 'flex' }}>
          <input type="number" placeholder='Enter Quantity...' className='QuantityInput' />
          <Button variant='contained' sx={{
            width: "100%", eight: '40px', ml: 4, backgroundColor: theme.palette.orange[500], px: 4,
            "&:hover": {
              backgroundColor: theme.palette.orange[500]
            }
          }}>
            Check Price
          </Button>
        </Box>

        {/* Table  */}
        <Grid container spacing={4} sx={{ mt: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid item xs={9}>
            <table cellspacing="0" style={{ width: "100%" }}>
              <thead>
                <tr style={{ backgroundColor: '#F1F1F1' }}>
                  <th style={{ padding: '20px 0', }}>Quantity</th>
                  <th style={{ padding: '20px 0', borderLeft: '1px solid #fff' }}>Estimated Ship Time</th>
                  <th style={{ padding: '20px 0', borderLeft: '1px solid #fff' }}>Unit Cost</th>
                  <th style={{ padding: '20px 0', borderLeft: '1px solid #fff' }}>Total Price</th>
                </tr>
              </thead>
              <tbody >
                <tr style={{ borderTop: "1px solid #000" }}>
                  <td style={{ padding: '20px 0', textAlign: 'center', border: '1px solid #F1F1F1' }}>1</td>
                  <td style={{ padding: '20px 0', textAlign: 'center', border: '1px solid #F1F1F1' }}>2 days</td>
                  <td style={{ padding: '20px 0', textAlign: 'center', border: '1px solid #F1F1F1' }}>$10.00</td>
                  <td style={{ padding: '20px 0', textAlign: 'center', border: '1px solid #F1F1F1', fontWeight: 900 }}>$10.00</td>
                </tr>
              </tbody>
            </table>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' sx={{
              width: "70%", height: '40px', ml: 4, backgroundColor: theme.palette.orange[500],
              mr:4,
              "&:hover": {
                backgroundColor: theme.palette.orange[500]
              }
            }}> Add to cart</Button>
          </Grid>
        </Grid>

      </Box>

      <Box sx={{ mt: 4, borderRadius: "6px", overflow: 'hidden', boxShadow: "0px 3px 18px #EDEDED", }}>
        <table style={{ width: "100%" }} cellspacing="0">
          <thead>
            <tr style={{ backgroundColor: '#182e49' }}>
              <th style={{ padding: '20px 0', color: '#fff' }}>Quantity</th>
              <th style={{ padding: '20px 0', borderLeft: '1px solid #fff', color: '#fff' }}>Unit Cost</th>
              <th style={{ padding: '20px 0', borderLeft: '1px solid #fff', color: '#fff' }}>Discount</th>
            </tr>
          </thead>
          <tbody >
            {rowData.map((row, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F1F1F1' : '#fff' }}>
                <td style={{ padding: '10px 0', textAlign: 'center', border: '1px solid #D9D9D9' }}>{row.quantity}</td>
                <td style={{ padding: '10px 0', textAlign: 'center', border: '1px solid #D9D9D9' }}>{row.unitCost}</td>
                <td style={{ padding: '10px 0', textAlign: 'center', border: '1px solid #D9D9D9' }}>{row.discount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </section>
  )
}

export default QuantityCheckHanlder


