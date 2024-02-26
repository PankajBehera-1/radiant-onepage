import { Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Threecards = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const cardData = [
        {
            title: "Lizard 1",
            description: "Description for lizard 1",
            imageUrl: "https://img.freepik.com/free-vector/man-working-laptop-cartoon-icon-illustration_138676-1953.jpg?t=st=1708966486~exp=1708970086~hmac=e0a155ac78f84b46146bd12e0236c3cf6257553630f62cfe054cdfff39708b49&w=740",
        },
        {
            title: "Lizard 2",
            description: "Description for lizard 2",
            imageUrl: "https://example.com/image2.jpg",
        },
        {
            title: "Lizard 3",
            description: "Description for lizard 3",
            imageUrl: "https://example.com/image3.jpg",
        },
    ];
    return (

        <Grid style={{ width: '71%', marginLeft: '15.5%',marginBottom:'8%' }} container spacing={2}>

            {[1, 2, 3].map((item) => (
                <Grid item xs={4} key={item}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://img.freepik.com/free-vector/man-working-laptop-cartoon-icon-illustration_138676-1953.jpg?t=st=1708966486~exp=1708970086~hmac=e0a155ac78f84b46146bd12e0236c3cf6257553630f62cfe054cdfff39708b49&w=740"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: '600', marginLeft: '27%' }}>
                                Web Builder_1
                            </Typography>
                            <Box display="flex" justifyContent="space-between" marginTop={2}>
                                <Box width="30%" border="1px solid #ccc" padding={1} style={{backgroundColor:'#C5E2FF',borderRadius:"5px"}}>
                                    <Typography variant="body2">20% Off</Typography>
                                </Box>
                                <Box width="30%" border="1px solid #ccc" padding={1} style={{marginRight:'4rem',backgroundColor:'#C5E2FF',borderRadius:"5px"}}>
                                    <Typography variant="body2">Limited Offer</Typography>
                                </Box>
                            </Box>
                            <Grid style={{display:'flex'}}><h3>$39.56</h3><h6 style={{marginLeft:'0.7rem',color:'red'}}><b style={{color:'black'}}>$49.96 </b> (20% Off)</h6></Grid>
                            
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button style={{ width: '94%', height: '3rem', marginLeft: '10px', borderRadius: '10px' }} variant="contained" disableElevation>
                                Disable elevation
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default Threecards