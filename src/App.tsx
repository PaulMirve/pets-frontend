import React, { useEffect, useState } from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Landing from './layout/Landing';
import { useAppDispatch } from './hooks/hooks';
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
import Post from './layout/Post';
import LoadingPage from './components/LoadingPage/LoadingPage';
import Error404 from './layout/Error404';
import Error500 from './layout/Error500';

function App() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    (async () => {
      setIsLoading(true);
      await dispatch(isAuthenticated()).catch().finally(() => {
        setIsLoading(false);
      });
    })();
  }, [dispatch]);

  if (isLoading) {
    return <LoadingPage />
  } else {
    return (
      <Router history={history}>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/add" exact component={AddPhoto} />
          <Route path="/u/:username" exact component={Profile} />
          <Route path="/p/:public_id" exact component={Post} />
          <Route path="/error500" exact component={Error500} />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }

}

export default App;
