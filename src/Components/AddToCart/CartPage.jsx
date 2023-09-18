import React from 'react'
import { useTheme } from '@emotion/react'
import { Typography, Grid, Container, Box, Divider } from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const AddToCart = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <section style={{ minHeight: "70vh" }}>
      <Typography variant="h3" sx={{ color: theme.palette.secondary.main, fontWeight: 900, textAlign: 'center', mt: 6, mb: 4 }}> <ShoppingBagIcon sx={{ fontSize: "40px" }} />My Cart</Typography>


      <Container >
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {/* Table  */}
            <table cellspacing="0" style={{ width: "100%" }}>
              <thead>
                <tr style={{ backgroundColor: '#F1F1F1' }}>
                  <th style={{ padding: '10px 0', borderLeft: '1px solid #fff', width: "50%" }}>Product</th>
                  <th style={{ padding: '10px 0', borderLeft: '1px solid #fff' }}>Quantity</th>
                  <th style={{ padding: '10px 0', borderLeft: '1px solid #fff' }}>Unit Cost</th>
                  <th style={{ padding: '10px 0', borderLeft: '1px solid #fff' }}>Sub Total</th>
                  <th style={{ padding: '10px 0', borderLeft: '1px solid #fff' }}>Action</th>
                </tr>
              </thead>
              <tbody >
                <tr style={{ borderTop: "1px solid #000" }}>
                  <td style={{ padding: '25px 0', textAlign: 'center', border: '1px solid #F1F1F1' }}>{/* <img src="" alt="" /> */}image</td>
                  <td style={{ padding: '25px 0', textAlign: 'center', border: '1px solid #F1F1F1' }}>2 days</td>
                  <td style={{ padding: '25px 0', textAlign: 'center', border: '1px solid #F1F1F1' }}>$10.00</td>
                  <td style={{ padding: '25px 0', textAlign: 'center', border: '1px solid #F1F1F1', fontWeight: 900 }}>$10.00</td>
                  <td style={{ padding: '25px 0', textAlign: 'center', border: '1px solid #F1F1F1', fontWeight: 900, cursor: 'pointer' }}><DeleteIcon onClick={handleClickOpen} /></td>
                </tr>
              </tbody>
            </table>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" color="initial" sx={{ textAlign: 'center' }}>Order Summary</Typography>
            <Box sx={{ border: "1px solid black", borderRadius: "10px", p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                <Typography variant="body1" color="initial" >sdaf</Typography>
                <Typography variant="body1" color="initial" >sdaf</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                <Typography variant="body1" color="initial" >sdaf</Typography>
                <Typography variant="body1" color="initial" >sdaf</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                <Typography variant="body1" color="initial" >sdaf</Typography>
                <Typography variant="body1" color="initial" >sdaf</Typography>
              </Box>
              <Divider variant="fullWidth" orientation="horizontal" sx={{ mt: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                <Typography variant="body1" color="initial" >Total</Typography>
                <Typography variant="body1" color="initial" sx={{ fontWeight: 900 }}>sdaf</Typography>
              </Box>
              <Button variant='contained' sx={{
                width: "100%", fontSize: "12px", height: '32px', backgroundColor: '#F4976C', mt: 2,
                '&:hover': { backgroundColor: '#F4976C', },
              }}> Proceed to checkout</Button>
              <Box sx={{ backgroundColor: '#ffeeba', my: 2, borderRadius: '10px', p: 1 }}>
                <Typography variant="body2" color="initial">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, harum? Dolor laboriosam et aliquam dignissimos deleniti.
                </Typography>
              </Box>
              <Button variant='contained' sx={{
                width: "100%", fontSize: "12px", height: '32px', backgroundColor: '#F4976C', mt: 2,
                '&:hover': { backgroundColor: '#F4976C', },
              }}> Back to Ship</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>


      <div>
        <Dialog
          open={open}
          onClose={handleClose}>
          <Box sx={{ width: "400px" }}>
            <DialogTitle id="alert-dialog-title">
              {"Are you sure to remove product?"}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} sx={{
                color: '#fff', backgroundColor: "#E50000", width: "120px", '&:hover': { backgroundColor: "#E50000" }
              }}>
                Close
              </Button>
              <Button onClick={handleClose}
                sx={{ color: '#fff', backgroundColor: "#182e49", width: "120px", '&:hover': { backgroundColor: "#182e49" } }}>
                Agree
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
      </div>

    </section>
  )
}

export default AddToCart