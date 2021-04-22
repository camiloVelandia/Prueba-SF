import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from "../GlobalStyles";

import Home from '../pages/Home';
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'

const App = () => {

  const initialState = useInitialState()

  return (
    <>
      <AppContext.Provider value={initialState}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;