import './App.css';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';

import CssBaseline from '@mui/material/CssBaseline';
import {makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';



import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad',"Review"];

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [user,setUser] = useState("");
  const [level, setLevel] = useState("");
  const [preference, setPreference] = useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const theme = createTheme({
    palette: {
      primary: lime,
      secondary: purple,
    },
    Container:{
      border:"1px solid red",

    }
  });
  

  const container = createTheme({
    palette:{
      display:"flex",
      border:"1px solid red"
    }
  });
  

  const stepContent = (step) => {


    switch (step) {
      case 1:
        return <Box>
            <Typography >Personal Information</Typography>
            <Typography>Please provide your personal details so we can get to know you better</Typography>
            <Box>
            <TextField label="Full Name" variant="standard" onChange={(event)=>{setName(event.target.value)}}/>          
            <TextField label="Email Address" variant="standard" onChange={(event)=>{setEmail(event.target.value)}} />          
            <TextField label="Phone Number" variant="standard" onChange={(event)=>{setPhone(event.target.value)}} />          
            <TextField label="Username" variant="standard" onChange={(event)=>{setUser(event.target.value)}} />          
            </Box>
        </Box>     
        // break;

      case 2:
        return <Box theme={theme}>
                  <Typography>Skill Level</Typography>
                  <Typography>Please tell us about your skill level in frontend development</Typography>
                  <Box id="hello">
                    <FormControl component="fieldset" name="method-of-payment">

                    <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={(event)=>{setLevel(event.target.value)}} >
                      <FormControlLabel value="beginner" control={<Radio />} label="Beginner" />
                      <FormControlLabel value="intermediate" control={<Radio />} label="Intermediate" />
                      <FormControlLabel value="advanced" control={<Radio />} label="Advanced" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>  
                    </FormControl>    
                  </Box>
               </Box>     
        
        // break;

      case 3:
  
        return <Box>
                  <Typography >Challenges Preference</Typography>
                  <Typography>Please tell us which frontend challenges you would like to participated in</Typography>
                  <Box>
                    <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={(event)=>{setPreference(event.target.value)}} >
                      <FormControlLabel value="html/css/js" control={<Radio />} label="HTML/CSS/JS" />
                      <FormControlLabel value="react" control={<Radio />} label="React.js" />
                      <FormControlLabel value="vue" control={<Radio />} label="Vue.js" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>      
                  </Box>
                </Box>     
        
        // break;

      case 4:
        return <Box>
                  <Box>
                    <Typography>Full Name</Typography>
                    <Typography>{name}</Typography>
                  </Box>
                  <Box>
                    <Typography>Email Address</Typography>
                    <Typography>{email}</Typography>
                  </Box>
                  <Box>
                    <Typography>Phone</Typography>
                    <Typography>{phone}</Typography>
                  </Box>
                  <Box>
                    <Typography>Username</Typography>
                    <Typography>{user}</Typography>
                  </Box>
                  <Box>
                    <Typography>Level</Typography>
                    <Typography>{level}</Typography>
                  </Box>
                  <Box>
                    <Typography>Preference</Typography>
                    <Typography>{preference}</Typography>
                  </Box>
              </Box>
        
        // break;
    
      default:
        break;
    }
  }

  return (
    <Container>

      <Box sx={{ width: '100%' }} >
        <Typography>Join Our Community Developer</Typography>
        <Typography>To join our community and participate challenges, Please fill out the following </Typography>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
        
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          // Compeleted
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (

          <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={container}>
              {stepContent(activeStep+1)}
            </ThemeProvider>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Container>
  );
}

export default App;
