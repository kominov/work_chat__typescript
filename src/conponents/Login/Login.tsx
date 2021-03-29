import { Container, Grid, Box, Button } from '@material-ui/core';
import firebase from 'firebase';
import React from 'react';
import { useContext } from 'react';
import { Context } from '../..';


export const Login: React.FC = () => {
    const { auth } = useContext(Context)
    const login = async()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
    }
    return (
        <>
            <div>
                <Container>
                    <Grid container
                        style={{ height: window.innerHeight - 200 }}
                        alignItems={'center'}
                        justify={'center'}
                    >
                        <Grid style={{ width: 400, background: 'lightgray' }}
                            container
                            alignItems={'center'}
                            direction={'column'}
                        >
                            <Box p={5}>
                                <Button onClick={login} variant={'outlined'}>Войти с помощью Google</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
};



