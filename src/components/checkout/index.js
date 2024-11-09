import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Container, Divider, FormControl, MenuItem, Select, TextField } from '@mui/material';

const steps = ['Items', 'Select Address', 'Confirm Order'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return false;
    // return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };  
  
  const [age, setAge] = useState('Select');
  const handleSort = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: '100%' }}>

      <Container maxWidth="lg"> 
        
      <Stepper  sx={{marginY:4}} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      </Container>
      

      <Container maxWidth="md"> 
      {activeStep == 1 &&
        <>
        <Typography  sx={{marginY:1}}>Select Address</Typography>
        <FormControl fullWidth size="small">
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleSort}
            >
            <MenuItem value={1}>Default</MenuItem>
            <MenuItem value={2}>Price: High to Low</MenuItem>
            <MenuItem value={3}>Price: Low to High</MenuItem>
            <MenuItem value={3}>Newest</MenuItem>
            </Select>
        </FormControl>

        <Typography variant='body2' sx={{marginY:2}} align='center'>-OR-</Typography>
        <Typography  sx={{marginY:1}} align='center'>Add Address</Typography>

        <Container maxWidth="sm">
        <Box  sx={{marginY:2}} fullWidth>
            <TextField
                fullWidth={true}
                required
                id="outlined-required"
                label="Name"
                // defaultValue="Hello World"
            />
        </Box>

        <Box  sx={{marginY:2}}>
            <TextField
                fullWidth={true}
                required
                id="outlined-required"
                label="Contact Number"
                // defaultValue="Hello World"
            />
        </Box>

        <Box  sx={{marginY:2}}>
            <TextField
                fullWidth={true}
                required
                id="outlined-required"
                label="Street"
                // defaultValue="Hello World"
            />
        </Box>

        <Box  sx={{marginY:2}}>
        <TextField
            fullWidth={true}
            required
            id="outlined-required"
            label="City"
        />
        </Box>

        <Box  sx={{marginY:2}}>
        <TextField
            fullWidth={true}
            required
            id="outlined-required"
            label="State"
        />
        </Box>
        
        <Box  sx={{marginY:2}}>
        <TextField
            fullWidth={true}
            id="outlined-required"
            label="Landmark"
        />
        </Box>
        
        <Box  sx={{marginY:2}}>
        <TextField
            fullWidth={true}
            required
            id="outlined-required"
            label="Zip Code"
        />
        </Box>
        <Box  sx={{marginY:2}}>
            <Button variant="contained" fullWidth={true}>Save Address</Button>
        </Box>
        </Container>


        </>
      }
      {activeStep === steps.length-1 &&
        <>
          <Card sx={{ display: 'flex', minHeight:300 }}>
            <Box sx={{ display: 'flex',  flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="h5">Product Name</Typography>
                <Typography variant="subtitle1">Quantity : <b>1</b></Typography>
                <Typography variant="subtitle1">Category : <b>electronics</b></Typography>
                <Typography variant="subtitle1"  sx={{ my: 2 }}>izards are a widespread group of squamate reptiles, with over 6,000 species</Typography>
                <Typography variant="h5" color='#f00'>Total Price: $1000</Typography>
              </CardContent>
            </Box>
            <Box sx={{width:300, borderLeft:1, borderLeftStyle:'solid', borderColor:'ActiveBorder'}}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="h5">Address Details:</Typography>
                <Typography variant="subtitle1"  sx={{ my: 2 }}>
                  Lucknow Home<br/>
                  Contact Number: 7838414681<br/>
                  Police Line: Lucknow<br/>
                  Uttar Pradesh<br/>
                  768787<br/>
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </>
        }
      </Container>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{justifyContent:'center', display: 'flex', flexDirection: 'row', my:3 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            
            {isStepOptional(activeStep) && (
              <></>
              // <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
              //   Skip
              // </Button>
            )}
            <Button onClick={handleNext} variant='contained'>
              {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
