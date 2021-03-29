import { Container, Grid} from '@material-ui/core'
import React from 'react'

export const Loader:React.FC =()=>{
    return (<>
    <Container>
                    <Grid container
                        style={{ height: window.innerHeight - 200 }}
                        alignItems={'center'}
                        justify={'center'}
                    >
                        <Grid 
                            container
                            alignItems={'center'}
                            direction={'column'}
                        >
                            <div className="lds-hourglass"></div>
                        </Grid>
                    </Grid>
                </Container>
    </>)
}