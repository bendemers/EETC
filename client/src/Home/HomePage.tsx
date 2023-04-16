import React from 'react';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../util/redux/hooks';
import { selectUser } from '../util/redux/userSlice';
/**
 * The HomePage of the user dashboard. Displays a welcome message, a logout button and a button to promote the user to admin if they are not already an admin. If the user is an admin, the button will navigate them to the admin dashboard. This utilizes redux to access the current user's information.
 */
function HomePage() {
  const user = useAppSelector(selectUser);
  const loggedIn = user.email;

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
      {loggedIn ? (
        <Typography>Clone the GitHub Repo to get started</Typography>
      ) : (
        <Typography> login to get started</Typography>
      )}
    </Box>
  );
}

export default HomePage;
