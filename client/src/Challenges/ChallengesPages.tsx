import React from 'react';
import { Box, Grid, Typography, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
        background: '#D9D9D9',
        width: '100%',
        height: '100vh',
        padding: '50px',
      }}
    >
      <Typography variant="h2">challenges</Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ paddingLeft: '75px', paddingRight: '75px' }}
      >
        <Grid item xs={3}>
          <Box
            sx={{
              background: 'rgba(47, 143, 255, 0.22)',
              height: '200px',
              width: '200px',
              borderRadius: '20px',
              backgroundColor: 'rgba(47, 143, 255, 0.22)',
              '&:hover': {
                backgroundColor: 'rgba(47, 143, 255, 0.22)',
                opacity: [0.9, 0.85, 0.8],
              },
              textAlign: 'center',
            }}
            onClick={handleClick}
          >
            guide to market making
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              background: 'rgba(47, 143, 255, 0.22)',
              height: '200px',
              width: '200px',
              borderRadius: '20px',
              backgroundColor: 'rgba(47, 143, 255, 0.22)',
              '&:hover': {
                backgroundColor: 'rgba(47, 143, 255, 0.22)',
                opacity: [0.9, 0.85, 0.8],
              },
              textAlign: 'center',
            }}
            onClick={handleClick}
          >
            Example Challenge 2
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              background: 'rgba(47, 143, 255, 0.22)',
              height: '200px',
              width: '200px',
              borderRadius: '20px',
              backgroundColor: 'rgba(47, 143, 255, 0.22)',
              '&:hover': {
                backgroundColor: 'rgba(47, 143, 255, 0.22)',
                opacity: [0.9, 0.85, 0.8],
              },
              textAlign: 'center',
            }}
            onClick={handleClick}
          >
            Example Challenge 3
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              height: '200px',
              width: '200px',
              borderRadius: '20px',
              backgroundColor: 'rgba(47, 143, 255, 0.22)',
              '&:hover': {
                backgroundColor: 'rgba(47, 143, 255, 0.22)',
                opacity: [0.9, 0.85, 0.8],
              },
              textAlign: 'center',
            }}
            onClick={handleClick}
          >
            Example Challenge 4
          </Box>
        </Grid>
      </Grid>
      <Box
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
      </Box>
    </Box>
  );
}

export default ChallengesPage;
