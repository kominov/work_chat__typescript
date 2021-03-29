import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter} from 'react-router-dom';
import { Context } from '.';
import { AppRouter } from './conponents/AppRouter/AppRouter';

import { Header } from './conponents/Header/Header';
import { Loader } from './conponents/Loader/Loader';
import { Navbar } from './conponents/Navbar/Navbar';


function App() {
  const { auth } = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if(loading){
    return <Loader />
  }
  return (
    <BrowserRouter>
      <Header />
      <div className="container row">
        <Navbar />
        <AppRouter/>
        {/* <Route path={WorkChatRoute} exact render={() => <WorkChat />} />
        <Route path={FludRoute} render={() => <Flud />} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
