import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carausel from './Carausel';

const useStyles= makeStyles(()=>({
    banner:{
        backgroundImage:"url(./banner2.jpg)",
    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:"column",
        paddingTop:25,
        justifyContent:"space-around",

    },
    tagline:{
        height:"40%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        textAlign:"center",

    }
}));


const Banner = () => {

    const classes=useStyles();
  return (
    <div className={classes.banner}>
        
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography variant="h2" style={{fontWeight:"bold", marginBottom:"15",fontFamily:"Montserrat"}}>
                    Crypto Warrior


                </Typography>
                <Typography variant="subtitle2" style={{color:"darkgray", textTransform:"capitalize",fontFamily:"Montserrat"}}>
                    Get all the INFO regarding crypto


                </Typography>
            </div>

            <Carausel/>

        </Container>
        
        Banner</div>
  )
}

export default Banner