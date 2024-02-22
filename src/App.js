import * as React from 'react';
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './App.css';


const steps = ['Personal Information', 'Level', 'Preference',"Review"];

const theme = createTheme({
  typography: {
    h4: {
      fontSize:"1.4rem",
      textAlign:"center",
      color: "#4527a0",
      fontWeight:"bold"
    },
    subtitle1: {
      fontWeight: 500,
      textAlign:"center",
      fontSize:"0.8rem",
      color: "#7e57c2"
    },
    subtitle2: {
      fontSize:"0.8rem",
    },
    button: {
      border: "1px solid",
      color: "#7e57c2"
    },
    h6:{
      color:"gray",
      fontSize:"1rem",
    },
    h5:{
      fontSize:"1.2rem"
    },
    body2:{
      fontSize:"1.1rem"
    },
    h3:{
      textAlign:'center',
      fontSize:"3rem",
      fontWeight:"bold",
      color:"#7e57c2"
    },
    body1:{
      textAlign:'center',
      fontSize:"1rem"
    },
    outlined:{
      fontSize:"0.8rem"
    },
    standard:{
      fontSize:"0.5rem"
    }
  },
});

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [info,setInfo]=useState({
    name:"",
    email:"",
    phone:"",
    user:""
  });
  const [level, setLevel] = useState("");
  const [preference, setPreference] = useState("");
  const [goNext, setGoNext] = useState(false);
  const [alert, setAlert] = useState(false);
  const [emailVali, setEmailVali] = useState(false)
  let alertText = "";

  const handleReset = () => {
    setActiveStep(1);
    setInfo({
      name:"",
      email:"",
      phone:"",
      user:""
    });
    setLevel("");
    setPreference("");
  };


  const alertContent = (a) => {
    if (a) {
      console.log(emailVali);
      if(emailVali){
        alertText =  <Alert severity="error">Email or phone number is invalid</Alert>;
      }else{
        alertText =  <Alert severity="error">You must fill out the form.</Alert>;
      }
    } else {
      alertText = <Alert severity="error" className='hidden'>empty</Alert>;
    }
    return alertText;
  }

  // const nullValid = (current) =>{
  //   current
  // }

  const handleNext = () => { 

    switch (activeStep) {

      case 1:
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var phoneRegex = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\s*\d{3}-\d{4})$/;
        console.log(info);
        if( Object.values(info).every(val => val !== "")){
          console.log(33);
          if (emailRegex.test(info.email) && phoneRegex.test(info.phone) ) {
            console.log("next");
            setGoNext(true);
            setAlert(false);
            setEmailVali(false);
          } else{
            console.log("no");
            setEmailVali(true);
            setAlert(true);
          }
        }else{
          setGoNext(false);
          setAlert(true);
          setEmailVali(false);
        }
       
        // for (const [key, value] of Object.entries(info)) {
        //   console.log(value);
        //   if(value===""){
        //     setGoNext(false);
        //     setAlert(true);
        //     setEmailVali(false);
        //     console.log("sth empty");
        //   }else{
        //     console.log("?");
        //     if (emailRegex.test(info.email) && phoneRegex.test(info.phone) ) {
        //       console.log("next");
        //       setGoNext(true);
        //       setAlert(false);
        //       setEmailVali(false);
        //     } else{
        //       console.log("no");
        //       setEmailVali(true);
        //       setAlert(true);
        //     }
        //   }
        // }
        
      case 2:
        if (level!=="") {
          setActiveStep((activeStep) => activeStep + 1);
          setAlert(false);
          }else{
            setAlert(true);
          }
        break;

      case 3:
        
        if (preference!=="") {
          setActiveStep((activeStep) => activeStep + 1);
          setAlert(false);
          }else{
            setAlert(true);
          }
        break;

      // case 4:
      //   if (preference!=="") {
      //     setActiveStep((activeStep) => activeStep + 1);
      //     }else{
      //     }

      default:
        setAlert(false);
        setGoNext(false);
        break;

    } 

  }

  useEffect(() => {
      switch (activeStep) {
        case 1:
            if(goNext){
              setActiveStep((activeStep) => activeStep + 1);
              setAlert(false);
            }
      }
  }, [goNext]);

  useEffect(() => {
      switch (activeStep) {
        case 2:
          if (level!=="") {
            setAlert(false);
          }
        break;
      }
  }, [level, activeStep]);  

  useEffect(() => {
      switch (activeStep) {
        case 3:
          if (preference!=="") {
            setAlert(false);
          }
        break;
      }
  }, [preference, activeStep]);  

  // useEffect(() => {
  //     if (alert) {
  //       alertText = <Alert severity="error" >You must fill out the form.</Alert>
  //     } else {
  //       alertText = "";
  //     }
  
  // }, [alert]);  

  const handleBack = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };





  const stepContent = (step) => {     

    switch (step) {
      case 1:
        return <Box className="formStyle">
            <Typography variant='h5'>Personal Information</Typography>
            <Typography variant='subtitle2'>Please provide your personal details so we can get to know you better</Typography>
            <Box className="inputStyle">
              <TextField className="inputWidth" required label="Full Name" value={info.name} variant="standard" onChange={(event)=>{setInfo({...info, name:event.target.value})}} />          
              <TextField className="inputWidth" required label="Email Address" value={info.email} variant="standard" onChange={(event)=>{setInfo({...info, email:event.target.value})}}  />          
              <TextField className="inputWidth" required label="Phone Number" value={info.phone} variant="standard" onChange={(event)=>{setInfo({...info, phone:event.target.value})}} />          
              <TextField className="inputWidth" required label="Username" value={info.user} variant="standard" onChange={(event)=>{setInfo({...info, user:event.target.value})}} />          
            </Box>
        </Box>     


        // break;

      case 2:
        return <Box className="formStyle">
                  <Box>
                    <Typography variant='h5'>Skill Level</Typography>
                    <Typography variant='subtitle2'>Please tell us about your skill level in frontend development</Typography>
                  </Box>
                  <Box>
                      <RadioGroup className="inputStyle" row  aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={level} onChange={(event)=>{setLevel(event.target.value)}} >
                        <FormControlLabel className="inputWidth" value="Beginner" control={<Radio />} label="Beginner" />
                        <FormControlLabel className="inputWidth" value="Intermediate" control={<Radio />} label="Intermediate" />
                        <FormControlLabel className="inputWidth" value="Advanced" control={<Radio />} label="Advanced" />
                        <FormControlLabel className="inputWidth" value="Other" control={<Radio />} label="Other" />
                      </RadioGroup>  
                  </Box>
               </Box>     
        
        // break;

      case 3:
        return <Box className="formStyle">
                  <Typography variant='h5'>Challenges Preference</Typography>
                  <Typography variant='subtitle2'>Please tell us which frontend challenges you would like to participated in</Typography>
                  <Box>
                    <RadioGroup className="inputStyle" row  aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={preference} onChange={(event)=>{setPreference(event.target.value)}} >
                      <FormControlLabel className="inputWidth" value="HTML/CSS/JS" control={<Radio />} label="HTML/CSS/JS" />
                      <FormControlLabel className="inputWidth" value="React.js" control={<Radio />} label="React.js" />
                      <FormControlLabel className="inputWidth" value="Vue.js" control={<Radio />} label="Vue.js" />
                      <FormControlLabel className="inputWidth" value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>      
                  </Box>
                </Box>     
        
        // break;

      case 4:
        return <Box className="reviewStyle" >
                  <Box className="reviewBox">
                    <Typography variant='h6'>Full Name</Typography>
                    <Typography variant='body2'>{info.name}</Typography>
                  </Box>
                  <Box className="reviewBox">
                    <Typography variant='h6'>Email Address</Typography>
                    <Typography variant='body2'>{info.email}</Typography>
                  </Box>
                  <Box className="reviewBox">
                    <Typography variant='h6'>Phone</Typography>
                    <Typography variant='body2'>{info.phone}</Typography>
                  </Box>
                  <Box className="reviewBox">
                    <Typography variant='h6'>Username</Typography>
                    <Typography variant='body2'>{info.user}</Typography>
                  </Box>
                  <Box className="reviewBox">
                    <Typography variant='h6'>Level</Typography>
                    <Typography variant='body2'>{level}</Typography>
                  </Box>
                  <Box className="reviewBox">
                    <Typography variant='h6'>Preference</Typography>
                    <Typography variant='body2'>{preference}</Typography>
                  </Box>
              </Box>
    
        // break;
    
      default:
        break;
    }
  }

  return (
    
    <Container id="containerStyle">

      <Box className="boxStyle" spacing={8}>
        
        {activeStep === steps.length + 1 ? (
          // Compeleted
          <React.Fragment>
            <ThemeProvider theme={theme}>
              <Typography variant="h3">Thank You!</Typography>
              <Typography variant="body1">Your form has been submitted. You're now a member of developer community.<br/>We will email you on <a href="mailto:frontend@mail.com">frontend@mail.com</a> in order to confirm your account.</Typography>
              <Button onClick={handleReset} variant='button'>Go Back Home</Button>      
            </ThemeProvider>      
          </React.Fragment>
        ) : (


          <React.Fragment>
                <ThemeProvider theme={theme}>

              <Box>
                <Typography variant='h4'>Join Our Community Developer</Typography>
                <Typography variant='subtitle1'>To join our community and participate challenges, Please fill out the following form. </Typography>
              </Box>

              <Stepper activeStep={activeStep-1} className='stepper'>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
              
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel  {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>

              
              
              <Box>
                {stepContent(activeStep)}

                {alertContent(alert)}
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:"right", pt:2 }}>
                    <Button
                      id="btn"
                      color="inherit"
                      disabled={activeStep === 1}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Button onClick={handleNext} id='btn' variant='btn'>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Box>
              </Box>

              
              </ThemeProvider>

          </React.Fragment>
        )}
      </Box>
    </Container>
  );
}

export default App;
