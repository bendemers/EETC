import React from 'react';
import { Box, Typography } from '@mui/material';
import ScreenGrid from '../components/ScreenGrid';

/**
 * The HomePage of the user dashboard. Displays a welcome message, a logout button and a button to promote the user to admin if they are not already an admin. If the user is an admin, the button will navigate them to the admin dashboard. This utilizes redux to access the current user's information.
 */
function HomePage() {
  return (
    <Box
      sx={{
        background: '#D9D9D9',
        width: '100%',
        height: '100vh',
        padding: '50px',
      }}
    >
      <Typography variant="h2">welcome!</Typography>
      <Typography variant="h2">
        learn electronic trading through challenges, resources, and more!
      </Typography>
    </Box>
  );
}

export default HomePage;
