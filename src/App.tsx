import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Flud } from './conponents/Flud/Flud';
import { Header } from './conponents/Header/Header';
import { Navbar } from './conponents/Navbar/Navbar';
import { WorkChat } from './conponents/WorkChat/WorkChat';
import { WorkChatRoute,FludRoute } from './const';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container row">
        <Navbar />
        <Route path={WorkChatRoute} exact render={() => <WorkChat />} />
        <Route path={FludRoute} render={() => <Flud />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
