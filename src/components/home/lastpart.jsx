import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Lastpart = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' ,marginLeft:'16.4%',marginBottom:'3%'}}>
      {/* Left side text */}
      <div style={{ marginRight: '10px' }}>
        <span style={{fontSize:"36px"}}>Sign up and get exclusive <br></br>special deals</span>
      </div>
      {/* Right side containing text field and send mail option */}
      <div style={{marginLeft:'20%'}}>
        <TextField label="Email" variant="outlined" size="medium" style={{ marginRight: '10px' }} />
        <Button style={{marginLeft:'-10px',height:'3.4rem'}} variant="contained" color="primary">Sign Up</Button>
      </div>
    </div>
  )
}

export default Lastpart