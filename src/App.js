import './App.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';
import { orange } from '@mui/material/colors';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Personal Information', 'Level', 'Review',"Review"];

  const containerStyle = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems: 'center',
    height:"100vh",
    width:"100vw",
    backgroundColor:"whitesmoke"
  };

  const boxStyle = {
    border:"1px solid red",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems: 'center',
    rowGap: '10vh',
    width:"80%",
    height:"70vh",
    minHeight:"60vh",
    backgroundColor:orange[50],
    borderRadius: "5vh",
    padding: "5vh 0"
  }

  const formStyle = {
    display:"flex",
    flexDirection:"column",
    height:"20vh"
    // other styles
  };

  const title = {
    fontWeight:"bold",
    fontSize:"26px"
  }

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

  const alertStyle =  {
    position:"absolute",
    top: "40%",
    left:"35%",
    width:"30vw"
  }


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
  // const alertText = <Alert severity="error" style={alertStyle}>This is an error Alert.</Alert>;


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
        if(level !== ""){ 
          setActiveStep((activeStep) => activeStep + 1);
        }

      case 3:
        if (preference!=="") {
          setActiveStep((activeStep) => activeStep + 1);
          setAlert(false);
          }else{
            setAlert(true);
          }
        break;
    
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
          break;
      }
    
  
  }, [goNext]);

  useEffect(() => {
    // if(goNext){
      switch (activeStep) {
        case 3:
          if (level!=="") {
            setAlert(false);
          }
        break;
      }
    // }
    
  
  }, [level]);  

  useEffect(() => {
    // if(goNext){

    console.log('effect:' + alert);
      
      if (alert) {
        alertText = <Alert severity="error" style={alertStyle}>This is an error Alert.</Alert>
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
      alertText =  <Alert severity="error" style={alertStyle}>This is an error Alert.</Alert>;
    } else {
      alertText = "";
    }

    return alertText;
  }


  const stepContent = (step) => {     

    switch (step) {
      case 1:
        return <Box style={formStyle}>
            <Typography style={title}>Personal Information</Typography>
            <Typography>Please provide your personal details so we can get to know you better</Typography>
            <Box style={inputStyle}>
              <TextField style={inputWidth} required label="Full Name" value={info.name} variant="standard" onChange={(event)=>{setInfo({...info, name:event.target.value});console.log(event);}} />          
              <TextField style={inputWidth} required label="Email Address" value={info.email} variant="standard" onChange={(event)=>{setInfo({...info, email:event.target.value})}} />          
              <TextField style={inputWidth} required label="Phone Number" value={info.phone} variant="standard" onChange={(event)=>{setInfo({...info, phone:event.target.value})}} />          
              <TextField style={inputWidth} required label="Username" value={info.user} variant="standard" onChange={(event)=>{setInfo({...info, user:event.target.value})}} />          
            </Box>
        </Box>     


        // break;

      case 2:
        return <Box style={formStyle}>
                  <Box>
                    <Typography style={title}>Skill Level</Typography>
                    <Typography>Please tell us about your skill level in frontend development</Typography>
                  </Box>
                  <Box>
                      <RadioGroup style={inputStyle} row  aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={level} onChange={(event)=>{setLevel(event.target.value)}} >
                        <FormControlLabel style={inputWidth} value="beginner" control={<Radio />} label="Beginner" />
                        <FormControlLabel style={inputWidth} value="intermediate" control={<Radio />} label="Intermediate" />
                        <FormControlLabel style={inputWidth} value="advanced" control={<Radio />} label="Advanced" />
                        <FormControlLabel style={inputWidth} value="other" control={<Radio />} label="Other" />
                      </RadioGroup>  
                  </Box>
               </Box>     
        
        // break;

      case 3:
        return <Box style={formStyle}>
                  <Typography style={title}>Challenges Preference</Typography>
                  <Typography>Please tell us which frontend challenges you would like to participated in</Typography>
                  <Box>
                    <RadioGroup style={inputStyle} row  aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={preference} onChange={(event)=>{setPreference(event.target.value)}} >
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
                    <Typography>{info.name}</Typography>
                  </Box>
                  <Box style={reviewBox}>
                    <Typography>Email Address</Typography>
                    <Typography>{info.email}</Typography>
                  </Box>
                  <Box style={reviewBox}>
                    <Typography>Phone</Typography>
                    <Typography>{info.phone}</Typography>
                  </Box>
                  <Box style={reviewBox}>
                    <Typography>Username</Typography>
                    <Typography>{info.user}</Typography>
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
          </React.Fragment>
        ) : (

          <React.Fragment>
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
