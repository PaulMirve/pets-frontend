import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Landing from './layout/Landing';
import { useAppDispatch } from './hooks/hooks';
import { fetchPost } from './actions/posts.actions';
import Login from './layout/SignIn';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
