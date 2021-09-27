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
import { isAuthenticated } from './actions/users.action';
import AddPhoto from './layout/AddPhoto';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPost());
    dispatch(isAuthenticated());
  }, []);

  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/add" exact component={AddPhoto} />
      </Switch>
    </Router>
  );
}

export default App;
