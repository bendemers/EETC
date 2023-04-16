import React from 'react';
import { Box, Typography, Button, ListItem, ListItemText } from '@mui/material';
import ScreenGrid from '../components/ScreenGrid';

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
        background: 'inherit',
        width: '100%',
        height: '210vh',
        padding: '50px',
      }}
    >
      <Box
        sx={{
          height: '40vh',
        }}
      >
        <Box
          sx={{
            width: '50%',
            height: 'inherit',
            padding: '50px',
            marginTop: '50px',
            justifyItems: 'center',
            textAlign: 'center',
            float: 'right',
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/256/1625/1625652.png"
            alt="Stocks"
          />
        </Box>
        <Box
          sx={{
            width: '50%',
            height: 'inherit',
            marginTop: '50px',
            padding: '50px',
            textAlign: 'center',
            float: 'left',
          }}
        >
          <Typography variant="h1">A New Way to Learn</Typography>
          <Typography variant="h2" sx={{ lineHeight: '150%' }}>
            EduTrading is the best platform to learn electronic trading through
            challenges, resources, and more!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: '40vh',
        }}
      >
        <Box
          sx={{
            width: '50%',
            height: 'inherit',
            marginTop: '50px',
            padding: '50px',
            textAlign: 'center',
            float: 'right',
          }}
        >
          <Typography variant="h1">Start Exploring!</Typography>
          <Typography variant="h2" sx={{ lineHeight: '150%' }}>
            Browse our challenges to find the ones that are most fit to your
            interests and learning goals!
          </Typography>
        </Box>
        <Box
          sx={{
            width: '50%',
            height: 'inherit',
            marginTop: '50px',
            padding: '50px',
            textAlign: 'center',
            float: 'left',
          }}
        >
          <img
            src="https://static.thenounproject.com/png/3233333-200.png"
            alt="Stocks"
          />
        </Box>
      </Box>
      <Box
        sx={{
          height: '40vh',
        }}
      >
        <Box
          sx={{
            width: '50%',
            height: '100vh',
            marginTop: '50px',
            padding: '50px',
            float: 'left',
            textAlign: 'center',
          }}
        >
          <Typography variant="h1">Work on Challenges Locally</Typography>
          <Typography variant="subtitle2">
            Once a challenge has been chosen, navigate to the Github link
            provided and download the source code! Then, follow the provided
            instructions to implement the challenge.
          </Typography>
          <br />
          <Typography variant="subtitle2">
            To test code, first start the server with the command:
          </Typography>
          <Typography>
            <code>poetry run python server.py</code>
          </Typography>
          <br />

          <Typography variant="subtitle2">
            Then, send your code to the server with:
          </Typography>
          <Typography>
            <code>poetry run python -m util.send_order</code>
          </Typography>
          <br />

          <Typography variant="subtitle2">
            Receive your score and iterate to improve on it! Join the forum to
            discuss different strategies and how they can be improved on.
          </Typography>
        </Box>
        <Box
          sx={{
            width: '50%',
            height: '100vh',
            marginTop: '60px',
            padding: '40px',
            float: 'right',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2">
            Get Started Now!
            <br />
            <Button variant="contained" sx={{ marginTop: '15px' }}>
              See Challenges
            </Button>
          </Typography>
          <Typography variant="h2">
            Join Us!
            <br />
            <Button variant="contained" sx={{ marginTop: '15px' }}>
              Create an Account
            </Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
