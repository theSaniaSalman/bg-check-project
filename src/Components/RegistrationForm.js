import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/registrationForm.css';
import CountrySelector from './CountrySelector';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AppBar from './AppBar';
  
export default function FormPropsTextFields() {
  const [value, setValue] = React.useState(null);
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  }

  return (
    <>
    <AppBar/>
    <div className='formBox'>
    <Box
      component="form"
      sx={{
        border:1,
        width:'50%',
        my:5,
        py:2,
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Register Now</h2>
      <div>
        {/* <TextField
          required
          id="outlined-required"
          label="First name"       
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"     
        /> */}
         <TextField
          required
          id="outlined-required"
          label="Company Name"      
        />
         <TextField
          required
          id="outlined-required"
          label="Company Registration Number"      
        />
         
        <CountrySelector/>
{/*       
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date of Birth"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider> */}
         <TextField
          required
          type="email"
          id="outlined-required"
          label="Email Address"
        />
         <TextField
          required
          type="number"
          id="outlined-required"
          label="Contact Number"
        />
       
      <FormControl  sx={{ minWidth: 430 }}>
        <InputLabel id="demo-simple-select-label">We are a...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="We are a..."
          onChange={handleChange}
        >
          <MenuItem value={10}>Security Company</MenuItem>
          <MenuItem value={20}>Multinational Firm</MenuItem>
          <MenuItem value={30}>Consultancy Company</MenuItem>
          <MenuItem value={40}>Other</MenuItem>
        </Select>
      </FormControl>
     
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
        />
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
        />
       
      </div>

      <Button sx={{ m: 1, p:2, width: 200 }} variant="contained">CREATE ACCOUNT</Button>
    </Box>
    </div>
    </>
  );
}
