import './App.css';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
// import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';

import CssBaseline from '@mui/material/CssBaseline';
// import {makeStyles } from '@mui/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { lime, purple } from '@mui/material/colors';



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


  const containerStyle = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems: 'center',
    height:"100vh",
    width:"100vw",
    backgroundColor:"whitesmoke",
  };

  const boxStyle = {
    border:"1px solid red",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems: 'center',
    rowGap: '10vh',
    width:"70%",
    height:"70vh",
    minHeight:"60vh"
  }

  const formStyle = {
    display:"flex",
    flexDirection:"column",
    height:"20vh"
    // other styles
  };
  const inputStyle = {
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems: 'center',
    columnGap:"20px"
  };

  const inputWidth={
    width:"45%"
  }

  const reviewStyle = {
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"space-between",
      alignItems:"center",
      rowGap:"5rem"
  }

  const reviewBox ={
    border:"1px solid red",
    width:"30%"
  }
  

  const stepContent = (step) => {


    switch (step) {
      case 1:
        return <Box style={formStyle}>
            <Typography >Personal Information</Typography>
            <Typography>Please provide your personal details so we can get to know you better</Typography>
            <Box style={inputStyle}>
              <TextField style={inputWidth} label="Full Name" variant="standard" onChange={(event)=>{setName(event.target.value)}}/>          
              <TextField style={inputWidth} label="Email Address" variant="standard" onChange={(event)=>{setEmail(event.target.value)}} />          
              <TextField style={inputWidth} label="Phone Number" variant="standard" onChange={(event)=>{setPhone(event.target.value)}} />          
              <TextField style={inputWidth} label="Username" variant="standard" onChange={(event)=>{setUser(event.target.value)}} />          
            </Box>
        </Box>     
        // break;

      case 2:
        return <Box style={formStyle}>
                  <Box>
                    <Typography>Skill Level</Typography>
                    <Typography>Please tell us about your skill level in frontend development</Typography>
                  </Box>
                  <Box>
                      <RadioGroup style={inputStyle} row  aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={(event)=>{setLevel(event.target.value)}} >
                        <FormControlLabel style={inputWidth} value="beginner" control={<Radio />} label="Beginner" />
                        <FormControlLabel style={inputWidth} value="intermediate" control={<Radio />} label="Intermediate" />
                        <FormControlLabel style={inputWidth} value="advanced" control={<Radio />} label="Advanced" />
                        <FormControlLabel style={inputWidth} value="other" control={<Radio />} label="Other" />
                      </RadioGroup>  
                  </Box>
               </Box>     
        
        // break;

      case 3:
  // 
        return <Box style={formStyle}>
                  <Typography >Challenges Preference</Typography>
                  <Typography>Please tell us which frontend challenges you would like to participated in</Typography>
                  <Box>
                    <RadioGroup style={inputStyle} row  aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={(event)=>{setPreference(event.target.value)}} >
                      <FormControlLabel style={inputWidth} value="html/css/js" control={<Radio />} label="HTML/CSS/JS" />
                      <FormControlLabel style={inputWidth} value="react" control={<Radio />} label="React.js" />
                      <FormControlLabel style={inputWidth} value="vue" control={<Radio />} label="Vue.js" />
                      <FormControlLabel style={inputWidth} value="other" control={<Radio />} label="Other" />
                    </RadioGroup>      
                  </Box>
                </Box>     
        
        // break;

      case 4:
        return <Box style={reviewStyle} >
                  <Box style={reviewBox}>
                    <Typography>Full Name</Typography>
                    <Typography>{name}</Typography>
                  </Box>
                  <Box style={reviewBox}>
                    <Typography>Email Address</Typography>
                    <Typography>{email}</Typography>
                  </Box>
                  <Box style={reviewBox}>
                    <Typography>Phone</Typography>
                    <Typography>{phone}</Typography>
                  </Box>
                  <Box style={reviewBox}>
                    <Typography>Username</Typography>
                    <Typography>{user}</Typography>
                  </Box>
                  <Box style={reviewBox}>
                    <Typography>Level</Typography>
                    <Typography>{level}</Typography>
                  </Box>
                  <Box style={reviewBox}>
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
    <Container style={containerStyle}>

      <Box style={boxStyle} spacing={8}>
        <Box>
          <Typography>Join Our Community Developer</Typography>
          <Typography>To join our community and participate challenges, Please fill out the following </Typography>
        </Box>
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
            <Box >
              {stepContent(activeStep+1)}
            </Box>
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
