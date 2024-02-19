import * as React from 'react';
import { useState, useEffect } from 'react';
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
  const [alert, setAlert] = useState(false)
  let alertText = "";

  const handleNext = () => { 

    switch (activeStep) {

      case 1:
        for (const [key, value] of Object.entries(info)) {
          if(value===""){
            setGoNext(false);
            setAlert(true);
          } else {
            setGoNext(true);
            setAlert(false);
          }
        }
      case 2:
        // if(level !== ""){ 
        //   setActiveStep((activeStep) => activeStep + 1);
        // }
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

      case 4:
        if (preference!=="") {
          setActiveStep((activeStep) => activeStep + 1);
          }else{
          }

      default:
        setAlert(false);
        break;

    } 


  }

  useEffect(() => {

    console.log('hi');
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
  }, [level]);  

  useEffect(() => {
      switch (activeStep) {
        case 3:
          if (preference!=="") {
            setAlert(false);
          }
        break;
      }
    
  
  }, [preference]);  

  useEffect(() => {

    console.log('effect:' + alert);
      
      if (alert) {
        alertText = <Alert severity="error" className='alertStyle'>This is an error Alert.</Alert>
      } else {
        alertText = "";
      }
    // }
    
  
  }, [alert]);  

  const handleBack = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };

  const alertContent = (a) => {

    if (a) {
      alertText =  <Alert severity="error" sclassName='alertStyle'>This is an error Alert.</Alert>;
    } else {
      alertText = "";
    }

    return alertText;
  }


  const stepContent = (step) => {     

    switch (step) {
      case 1:
        return <Box className="formStyle">
            <Typography className="title">Personal Information</Typography>
            <Typography>Please provide your personal details so we can get to know you better</Typography>
            <Box className="inputStyle">
              <TextField className="inputWidth" required label="Full Name" value={info.name} variant="standard" onChange={(event)=>{setInfo({...info, name:event.target.value});console.log(event);}} />          
              <TextField className="inputWidth" required label="Email Address" value={info.email} variant="standard" onChange={(event)=>{setInfo({...info, email:event.target.value})}} />          
              <TextField className="inputWidth" required label="Phone Number" value={info.phone} variant="standard" onChange={(event)=>{setInfo({...info, phone:event.target.value})}} />          
              <TextField className="inputWidth" required label="Username" value={info.user} variant="standard" onChange={(event)=>{setInfo({...info, user:event.target.value})}} />          
            </Box>
        </Box>     


        // break;

      case 2:
        return <Box className="formStyle">
                  <Box>
                    <Typography className="title">Skill Level</Typography>
                    <Typography>Please tell us about your skill level in frontend development</Typography>
                  </Box>
                  <Box>
                      <RadioGroup className="inputStyle" row  aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={level} onChange={(event)=>{setLevel(event.target.value)}} >
                        <FormControlLabel className="inputWidth" value="beginner" control={<Radio />} label="Beginner" />
                        <FormControlLabel className="inputWidth" value="intermediate" control={<Radio />} label="Intermediate" />
                        <FormControlLabel className="inputWidth" value="advanced" control={<Radio />} label="Advanced" />
                        <FormControlLabel className="inputWidth" value="other" control={<Radio />} label="Other" />
                      </RadioGroup>  
                  </Box>
               </Box>     
        
        // break;

      case 3:
        return <Box className="formStyle">
                  <Typography className="title">Challenges Preference</Typography>
                  <Typography>Please tell us which frontend challenges you would like to participated in</Typography>
                  <Box>
                    <RadioGroup className="inputStyle" row  aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={preference} onChange={(event)=>{setPreference(event.target.value)}} >
                      <FormControlLabel className="inputWidth" value="html/css/js" control={<Radio />} label="HTML/CSS/JS" />
                      <FormControlLabel className="inputWidth" value="react" control={<Radio />} label="React.js" />
                      <FormControlLabel className="inputWidth" value="vue" control={<Radio />} label="Vue.js" />
                      <FormControlLabel className="inputWidth" value="other" control={<Radio />} label="Other" />
                    </RadioGroup>      
                  </Box>
                </Box>     
        
        // break;

      case 4:
        return <Box className="reviewStyle" >
                  <Box className="reviewBox">
                    <Typography>Full Name</Typography>
                    <Typography>{info.name}</Typography>
                  </Box>
                  <Box className="reviewBox">
                    <Typography>Email Address</Typography>
                    <Typography>{info.email}</Typography>
                  </Box>
                  <Box className="reviewBox">
                    <Typography>Phone</Typography>
                    <Typography>{info.phone}</Typography>
                  </Box>
                  <Box className="reviewBox">
                    <Typography>Username</Typography>
                    <Typography>{info.user}</Typography>
                  </Box>
                  <Box className="reviewBox">
                    <Typography>Level</Typography>
                    <Typography>{level}</Typography>
                  </Box>
                  <Box className="reviewBox">
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
    <Container className="containerStyle">

      <Box className="boxStyle" spacing={8}>
      
        
        {activeStep === steps.length + 1 ? (
          // Compeleted
          <React.Fragment>
            <Typography variant="h3">Thank You!</Typography>
            <Typography variant="body1">Your form has been submitted. You're now a member of developer community.<br/>We will email you on <a href="mailto:frontend@mail.com">frontend@mail.com</a> in order to confirm your account.</Typography>
            <Button>Go Back Home</Button>            
          </React.Fragment>
        ) : (


          <React.Fragment>
              <Box>
                <Typography>Join Our Community Developer</Typography>
                <Typography>To join our community and participate challenges, Please fill out the following </Typography>
              </Box>
              <Stepper activeStep={activeStep-1}>
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

              {alertContent(alert)}

              <Box id="contents" >
                {stepContent(activeStep)}
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
