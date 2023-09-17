import React, { Fragment } from 'react'
import { Header, Footer, DetailPageContent } from '../Components'
import { Box } from '@mui/material'

const DetailPage = () => {
  return (
    <Fragment>
      <Header />
      {/* Main Data  */}
      <DetailPageContent />

      <Footer />
    </Fragment>
  )
}

export default DetailPage