import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import {
  Link
} from "react-router-dom";

import {
  createTheme,
  ThemeProvider
} from '@mui/material/styles';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ""
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,

    });
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }
  handleSubmit(event) {

    alert('A username was submitted: ' + this.state.username + ' with a passsword of ' + this.state.password);
    event.preventDefault();
  }


  render() {
    const darkTheme = createTheme({
      palette: {
        white: 'white',
        mode: 'dark',
        primary: {
          main: 'rgb(1,121,111)'
        }


      },
    });



    return (

      <
      ThemeProvider theme = {
        darkTheme
      } >
      <
      Container style = {
        {
          backgroundColor: 'rgba(255,255,255,.1)',
          paddingLeft: 0,
          paddingRight: 0
        }
      }
      sx = {
        {

          display: 'flex',
          flexDirection: 'column',

          boxShadow: 1,
          width: 300,
          borderRadius: 2,
          textAlign: 'center',
          color: 'text.primary'

        }
      } >
      <
      Typography variant = "h6" style= {{borderTopLeftRadius: '8px', borderTopRightRadius: '8px ' }}
      sx = {
        {
          fontWeight: 'light',
          color: 'white',
          backgroundColor: 'primary.main',

        }
      } > Create an Account < /Typography> <
      TextField
sx = {{ mx: 3, mt: 1}}
      required id = "standard-basic"
      label = "Username"
      variant = "standard"
      onChange = {
        this.handleUsernameChange
      }
      / >
      <TextField
sx = {{ mx: 3, mt: 1}}
      required id = "standard-basic"
      label = "Email"
      type = "email"
      variant = "standard"

      / >
      <
      TextField
sx = {{ mx: 3, mt: 1}}
      required id = "standard-basic"
      label = "Password"
      type = "password"
      variant = "standard"
      onChange = {
        this.handlePasswordChange
      }
      / > <
      TextField
sx = {{ mx: 3, my: 1}}
      required id = "standard-basic"
      label = "Confirm Password"
      type = "password"
      variant = "standard"

      / >

      <Container sx={{ pt: 1, display: 'flex', justifyContent: 'space-around' }}>



      <
      Button sx = {
        {

          color: 'primary.main',
          borderColor: 'white',
          backgroundColor: 'white',
          width: 1 / 3,
          height: 30,
          mx: 'auto',
          my: 2,
          '&:hover': {
            borderColor: 'white',

        }
}
      }
      variant = "outlined"
     > Create < /Button>
     <Link style={{ color: 'white', textDecoration: 'none', margin: 'auto'}} to="/">
<
     Button sx = {
       {
         backgroundColor: 'primary.main',
         color: 'white',

         width: 1,
         height: 30,
         mx: 'auto',
         my: 2


       }
     }
     variant = "outlined"
     > Go Back < /Button></Link>
     </Container>


      <
      /Container> < /
      ThemeProvider >
    );


  }

}

export default Register;
