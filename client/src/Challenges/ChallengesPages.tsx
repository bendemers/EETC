import React from 'react';
import { Box, Grid, Typography, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import stocks from '../assets/stocks.png';
import stockmarket from '../assets/stock-market.png';
import computer from '../assets/computer.png';
import technology from '../assets/technology.png';

/**
 * The HomePage of the user dashboard. Displays a welcome message, a logout button and a button to promote the user to admin if they are not already an admin. If the user is an admin, the button will navigate them to the admin dashboard. This utilizes redux to access the current user's information.
 */
function ChallengesPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/challenges/1');
  };

  return (
    <Box
      sx={{
        background: 'inherit',
        width: '100%',
        height: '100vh',
        padding: '50px',
      }}
    >
      <Typography variant="h1">Challenges</Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ paddingLeft: '275px', paddingRight: '175px' }}
      >
        <Grid item xs={6}>
          <Box
            sx={{
              background: '#c7deff',
              height: '250px',
              width: '300px',
              borderRadius: '20px',
              padding: '50px',
              backgroundColor: '#c7deff',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.22)',
                opacity: [0.9, 0.85, 0.8],
              },
              textAlign: 'center',
              color: 'black',
            }}
            onClick={handleClick}
          >
            <Typography>Guide to Market Making</Typography>
            <br />
            <img src={stocks} alt="Stocks" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              background: '#c7deff',
              height: '250px',
              width: '300px',
              borderRadius: '20px',
              padding: '50px',
              marginBottom: '50px',
              backgroundColor: '#c7deff',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.22)',
                opacity: [0.9, 0.85, 0.8],
              },
              textAlign: 'center',
              color: 'black',
            }}
            onClick={handleClick}
          >
            <Typography>Portfolio Optimization</Typography>
            <br />
            <img src={stockmarket} alt="Stocks" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              background: '#c7deff',
              height: '250px',
              width: '300px',
              borderRadius: '20px',
              padding: '50px',
              backgroundColor: '#c7deff',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.22)',
                opacity: [0.9, 0.85, 0.8],
              },
              textAlign: 'center',
              color: 'black',
            }}
            onClick={handleClick}
          >
            <Typography>ML for Trading</Typography>
            <br />
            <img src={computer} alt="Stocks" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              height: '250px',
              width: '300px',
              borderRadius: '20px',
              padding: '50px',
              backgroundColor: '#c7deff',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.22)',
                opacity: [0.9, 0.85, 0.8],
              },
              textAlign: 'center',
              color: 'black',
            }}
            onClick={handleClick}
          >
            <Typography>Time Series Analysis</Typography>
            <br />
            <img src={technology} alt="Stocks" />
          </Box>
        </Grid>
      </Grid>
      {/* <Box
        sx={{
          width: '50vw',
          marginTop: '30px',
          backgroundColor: 'rgba(47, 143, 255, 0.22)',
          '&:hover': {
            backgroundColor: 'rgba(47, 143, 255, 0.22)',
            opacity: [0.9, 0.85, 0.8],
          },
          textAlign: 'center',
        }}
      >
        <LinearProgress
          sx={{ height: 10, borderRadius: 5 }}
          variant="determinate"
          value={25}
        />
      </Box> */}
    </Box>
  );
}

export default ChallengesPage;
