import { Field, Form, Formik } from 'formik';

import { TextField, Button, Box, Avatar, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useIsAuthorized from '../hooks/useIsAuthorized';

const initialValues = { username: '', password: '', role: 'admin' };

function Login() {
    const { login } = useAuth();
    const isAuthorized = useIsAuthorized();

    function onSubmit({ username, password, role }) {
        login(username, password, role);
    }

    return (
        <>
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
        <Avatar sx={{ width: 54, height: 54, m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon sx={{ width: 34, height: 34}}/>
        </Avatar>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
                </Box>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                {isAuthorized && <Navigate replace={true} to="/" />}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Username"
                    id="username"
                    name="username"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    id="password"
                    name="password"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Role"
                    id="role"
                    name="role"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Login
                </Button>
            </Form>
            </Formik>
            </>
    );
}

export default Login;
