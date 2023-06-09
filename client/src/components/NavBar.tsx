import React, { useState } from 'react';

import {
  Typography,
  Toolbar,
  Button,
  AppBar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Link,
} from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { postData } from '../util/api';
import { useAppDispatch, useAppSelector } from '../util/redux/hooks';
import {
  selectUser,
  logout as logoutAction,
  login as loginRedux,
} from '../util/redux/userSlice';
import logo from '../assets/logo.png';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');

  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  function dispatchUser(
    userEmail: string,
    firstName: string,
    lastName: string,
    admin: boolean,
  ) {
    dispatch(loginRedux({ email: userEmail, firstName, lastName, admin }));
  }

  const loginFlow = () => {
    setOpen(true);
  };

  const navigate = useNavigate();
  const navigateChallenge = () => {
    const path = `/challenges`;
    navigate(path);
  };

  const navigateHome = () => {
    const path = `/home`;
    navigate(path);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    postData('auth/login', {
      email: email.toLocaleLowerCase(),
      password,
    }).then((res) => {
      if (res.error) {
        setError(res.error.message);
      }
      if (res.data) {
        dispatchUser(
          res.data.email,
          res.data.firstName,
          res.data.lastName,
          res.data.admin,
        );
        setEmail('');
        setPassword('');
        setError('');
        setOpen(false);
      }
    });
  };

  const logoutDispatch = () => dispatch(logoutAction());
  const handleLogout = async () => {
    postData('auth/logout').then((res) => {
      if (!res.error) {
        logoutDispatch();
      }
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ borderBottom: '1px solid #000', background: 'inherit' }}
      >
        <Toolbar>
          <Typography variant="h1" sx={{ flexGrow: 1, textAlign: 'left' }}>
            <Button onClick={navigateHome}>
              <img src={logo} alt="" />
            </Button>
          </Typography>
          <Box
            sx={{
              width: '200px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {user.email ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={navigateChallenge}
                >
                  challenges
                </Button>
                <Button
                  sx={{ m: 1 }}
                  onClick={handleLogout}
                  variant="outlined"
                  color="primary"
                >
                  logout
                </Button>
              </>
            ) : (
              <Button
                sx={{ m: 1 }}
                onClick={loginFlow}
                variant="outlined"
                color="primary"
              >
                login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          {error && (
            <DialogContentText sx={{ color: 'red' }}>{error}</DialogContentText>
          )}
          <DialogContentText>
            Forgot your passowrd? Click <Link href="/email-reset">here</Link>
          </DialogContentText>
          <DialogContentText>
            Need an account? Click <Link href="/register">here</Link>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Navbar;
