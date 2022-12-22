import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef, useState } from 'react';
import { API_CLIENT } from '../../shared/api_clients';
export const Search= () => {
  const uid = useRef('');
  const [message, setMessage] = useState('');
  const doSearch = async () => {
    console.log('Companyname', uid.current.value);
    const result = await API_CLIENT.post(process.env.DB_URL, {
      'Companyname': uid.current.value
    });
    setMessage(result.data.message);
  }
  return (<>
    <Container fixed>
      <h2>{message}</h2>
      <Box sx={{ bgcolor: 'white', height: '50vh' }} >
        <TextField inputRef={uid} id="outlined-basic" label="Enter Company name" variant="outlined" />
        <br />
        <Button onClick={doSearch} variant="contained">Search Data</Button>
      </Box>
    </Container>
  </>)

}