import React from 'react';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import useLocalStorage from './hooks/useLocalStorage'
import { API, graphqlOperation } from 'aws-amplify';
import { profileByUserId } from './graphql/queries'

import Routes from './config/routes'
import './tailwind.output.css';

import AuthContext from './utils/auth-context'

import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Translations } from '@aws-amplify/ui-components'
import { I18n } from '@aws-amplify/core';

// https://github.com/aws-amplify/amplify-js/blob/main/packages/amplify-ui-components/src/common/Translations.ts
// amplify-js/packages/aws-amplify-react/src/AmplifyI18n.tsx
I18n.putVocabulariesForLanguage('zh', {
  [Translations.SIGN_IN_ACTION]: '登录',
});


I18n.setLanguage('zh');


Amplify.configure(awsconfig);

function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [userID, setUserID] = useLocalStorage('userID', '');
  const [role, setRole] = useLocalStorage('role', '');

  React.useEffect(() => {
    return onAuthUIStateChange(async (nextAuthState, authData) => {
      console.log(nextAuthState)
      console.log(authData)

      setAuthState(nextAuthState);
      setUser(authData)
      if (authData && authData.username) {
        setUserID(authData.username)

        try {
          let role = await fetchRole(authData.username)
          console.log("role: ", role)
          setRole(role)
        } catch (err) {
          console.log('error fetching user role...', err)
        }
      }
    });
  }, [authState, userID, role]);

  // return authState === AuthState.SignedIn && user ? (
  return (
    <div className="App">
      <AuthContext.Provider value={{
        authenticated: authState === AuthState.SignedIn,
        login: null,
        // role: role,
        role: "merchant",
        // role: "buyer",
        userID: userID
      }}
      >
        <Routes />
      </AuthContext.Provider >
    </div>
  );
}

async function fetchRole(id) {
  console.log(id)
  const q = await API.graphql(graphqlOperation(profileByUserId, { userID: id }))
  console.log('data:', q.data)
  if (q.data && q.data.profileByUserID.items[0]) {
    return q.data.profileByUserID.items[0].role
  }
  // updateTasks(q.data.profileByUserID.items[0].role)
  return ""
}

export default App;
