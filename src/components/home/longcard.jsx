import { Button, Grid } from '@mui/material'
import React from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

import CardActions from '@mui/material/CardActions';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

import Number from './number';





const Longcard = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const theme = useTheme();
    const data = [
        {
            id: 1,
            imageUrl: "https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-52233.jpg?t=st=1708953315~exp=1708956915~hmac=430079477bbdb3df622dfe7a87f678595b2b1da11e3fe0f247fd9ec30d1bd0c9&w=740",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse necessitatibus aperiam quae in iusto dolorum nesciunt? Iste accusamus maiores neque fugiat? Omnis doloribus architecto esse! Sapiente odio distinctio quae!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse necessitatibus aperiam quae in iusto dolorum nesciunt? Iste accusamus maiores neque fugiat? Omnis doloribus architecto esse! Sapiente odio distinctio quae!"
        },
        {
            id: 2,
            imageUrl: "https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-52233.jpg?t=st=1708953315~exp=1708956915~hmac=430079477bbdb3df622dfe7a87f678595b2b1da11e3fe0f247fd9ec30d1bd0c9&w=740",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse necessitatibus aperiam quae in iusto dolorum nesciunt? Iste accusamus maiores neque fugiat? Omnis doloribus architecto esse! Sapiente odio distinctio quae!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse necessitatibus aperiam quae in iusto dolorum nesciunt? Iste accusamus maiores neque fugiat? Omnis doloribus architecto esse! Sapiente odio distinctio quae!"
        },
        {
            id: 2,
            imageUrl: "https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-52233.jpg?t=st=1708953315~exp=1708956915~hmac=430079477bbdb3df622dfe7a87f678595b2b1da11e3fe0f247fd9ec30d1bd0c9&w=740",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse necessitatibus aperiam quae in iusto dolorum nesciunt? Iste accusamus maiores neque fugiat? Omnis doloribus architecto esse! Sapiente odio distinctio quae!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse necessitatibus aperiam quae in iusto dolorum nesciunt? Iste accusamus maiores neque fugiat? Omnis doloribus architecto esse! Sapiente odio distinctio quae!"
        }, {
            id: 2,
            imageUrl: "https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-52233.jpg?t=st=1708953315~exp=1708956915~hmac=430079477bbdb3df622dfe7a87f678595b2b1da11e3fe0f247fd9ec30d1bd0c9&w=740",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse necessitatibus aperiam quae in iusto dolorum nesciunt? Iste accusamus maiores neque fugiat? Omnis doloribus architecto esse! Sapiente odio distinctio quae!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse necessitatibus aperiam quae in iusto dolorum nesciunt? Iste accusamus maiores neque fugiat? Omnis doloribus architecto esse! Sapiente odio distinctio quae!"
        },
    ];
    return (
        <Grid>


            {data.map(item => (

                <Card key={item.id} style={{ width: '70%', marginLeft: '16.6%' }} sx={{ display: 'flex', marginBottom: '20px' }}>
          
          <Number/>
                    <Stack spacing={2} direction="row">

                        <Button style={{ height: '40px', width: '150px', background: 'orange', fontSize: "12px"}} variant="contained"><EmojiEventsOutlinedIcon />Best Choice</Button>

                    </Stack>
                    

                    <CardMedia style={{ marginLeft: "-12.5rem" }}
                        component="img"
                        sx={{ width: 200 }}
                        image={item.imageUrl}
                        alt="Image"
                    />
                   

                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ marginLeft: '20px' }}>DEVELOPMENT THE CONTENT</h3>
                        <CardContent style={{ marginRight: '30%' }} sx={{ flex: '1 0 auto' }}>
                            {item.content}
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </CardContent>
                        <Box>
                            <Button sx={{ backgroundColor: 'blue', color: 'white', padding: '10px 70px', borderRadius: '5px', marginBottom: '10px', marginLeft: '97%' }}>View</Button>
                        </Box>
                    </Box>

                    <Card style={{ height: "80%", width: "60%", marginRight: "5rem", background: 'azure' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20, fontWeight: 600, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                9.8
                            </Typography>
                            <p style={{ textAlign: 'center' }}>Excellent</p>
                            <Grid style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '-9px', color: 'yellow' }}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </Grid>


                        </CardContent>
                    </Card>
                </Card>
            ))}
        </Grid>
    )
}

export default Longcard