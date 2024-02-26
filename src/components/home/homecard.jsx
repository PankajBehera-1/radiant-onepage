import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import { Grid } from '@mui/material'
import style from '../common/css/homecard.module.css'
import Longcard from './longcard'
import Threecards from './threecards'
import Heading from './heading'
import Lastpart from './lastpart'




import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid>
      <Grid>
        <Navbar />
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: '5%', marginBottom: '5%' }}>
        <Grid item xs={10} style={{ textAlign: 'left', marginLeft: '16%' }}>
          <p style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Best Website Builder in the US</p>
        </Grid>

        <div className={style.container}>
          <div className={style.line}></div>
          <div className={style.content}>

            <div className={`${style.column} ${style.text}`}>
              <CheckCircleOutlineIcon />Last Updated - February 22, 2020
            </div>

            <div className={style.column}><InfoOutlinedIcon />Advertising Disclouse</div>

            <div style={{ marginLeft: '50px' }} className={style.column}>Top Relevent<KeyboardArrowDownIcon /> </div>
          </div>
          <div className={style.line}></div>
        </div>


      </Grid>

      <Grid style={{ marginTop: '-60px', marginBottom: '2%', marginLeft: '16.5%' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={1} md={1}>
              <Item>Tools</Item>
            </Grid>
            <Grid item xs={1} md={2} style={{ marginLeft: '2%' }}>
              <Item>AWS Builder</Item>
            </Grid>
            <Grid item xs={1} md={1} style={{ marginLeft: '2%' }}>
              <Item>Start Build</Item>
            </Grid>
            <Grid item xs={1} md={2} style={{ marginLeft: '2%' }}>
              <Item>Build Supplies</Item>
            </Grid>
            <Grid item xs={1} md={1} style={{ marginLeft: '2%' }}>
              <Item>Tolling</Item>
            </Grid>
            <Grid item xs={1} md={2} style={{ marginLeft: '1%' }}>
              <Item>Blue Hosting</Item>
            </Grid>
          </Grid>
        </Box>

      </Grid>
      <Grid style={{ marginLeft: '16.5%' }} container alignItems="center">
        <p>Home </p><KeyboardArrowRightIcon /><p>Hosting for All  </p><KeyboardArrowRightIcon /><p>Hosting </p><KeyboardArrowRightIcon /><p>Hosting6 </p><KeyboardArrowRightIcon /><p>Hosting5</p>
      </Grid>

      <Grid>
        <Longcard />
      </Grid>
      <Grid>
        <Heading />
      </Grid>

      <Grid>
        <Threecards />
      </Grid>
      <Grid>
        <Lastpart />
      </Grid>
      <Grid>
        <Footer />
      </Grid>
    </Grid>

  )
}

export default Home