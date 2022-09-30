import React from 'react'
import { AppBar, Container, makeStyles, MenuItem, Select, Toolbar, Typography, createTheme, ThemeProvider } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';


const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",

  }
}));

const Header = () => {


  const {currency, setcurrency}= CryptoState();

  // console.log(currency);

  const classes = useStyles();
  const navigate = useNavigate();


  const redirect = path => {
    navigate(path);
  };


  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });



  return (
    <>

      <ThemeProvider theme={darkTheme}>



        <AppBar color='primary' position='static'>
          <Container>
            <Toolbar>
              <Typography onClick={() => redirect('/')} className={classes.title} variant="h6">Crypto Warrior</Typography>

              <Select variant="outlined" style={{ width: 100, height: 40, marginRight: 15 }} value={currency} onChange={(e)=>setcurrency(e.target.value)}>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>

            </Toolbar>


          </Container>


        </AppBar>
      </ThemeProvider>


    </>
  )
}

export default Header