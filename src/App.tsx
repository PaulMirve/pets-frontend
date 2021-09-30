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
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Profile from './layout/Profile';

function App() {
  const dispatch = useAppDispatch();

  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
      fallbackLng: "en",
      detection: {
        order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
        caches: ['cookie']
      },
      backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json'
      },
      react: { useSuspense: false }
    })

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
        <Route path="/u/:username" exact component={Profile} />
        <Route path="/p/:public_key" exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
