import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
/* import Video from './pages/video';
import VideoDetails from './pages/videoDetails'; */
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main } />
       {/*    <Route exact path="/detalhes" component={ Video } />
          <Route path="/detalhes/:id" component={ VideoDetails } /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
