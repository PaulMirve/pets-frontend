import React, { useEffect } from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Landing from './layout/Landing';
import { useAppDispatch } from './hooks/hooks';
import { fetchPost } from './actions/posts.actions';
import Login from './layout/Login';
import SignIn from './layout/SignIn';
import history from './history';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
