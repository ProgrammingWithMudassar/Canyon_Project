import React from 'react'
import { Typography, Box, Button, Divider } from '@mui/material'
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
    <section style={{ padding: "20px 0" }}>

      <Box sx={{ width: '100%', boxShadow: "0px 3px 18px #EDEDED", borderRadius: '6px', overflow: "hidden" }}>
        {/* Box Header  */}
        <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', px: 2, bgcolor: theme.palette.secondary.main, py: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: "#fff" }}>Enter a Quantity to Check Price</Typography>
          <Box>
            <input type="number" placeholder='Enter Quantity...' className='QuantityInput' />
            <Button variant='contained' sx={{
              height: '35px', ml: 4, backgroundColor: theme.palette.orange[500], px: 4,
              "&:hover": {
                backgroundColor: theme.palette.orange[500]
              }
            }}>
              Check Price
            </Button>
          </Box>
        </Box>

        {/* Table  */}
        <table style={{ width: "100%" }} cellspacing="0">
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

      </Box>

      <Box sx={{ mt: 4, borderRadius:"6px", overflow:'hidden', boxShadow: "0px 3px 18px #EDEDED",}}>
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


