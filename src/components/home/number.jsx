import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';

const Number = ({ data }) => {
    const [selected, setSelected] = React.useState(false);
  return (
    <>
    <ToggleButton style={{height:'50px',width:'160px',borderRadius:'50%',background:'#B6BABF',marginTop:'5%'}}
    value="check"
    selected={selected}
    onChange={() => {
      setSelected(!selected);
    }}
  >
    <typography>1</typography>
  </ToggleButton>
  </>
  )
}

export default Number