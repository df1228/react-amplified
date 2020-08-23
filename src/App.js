import React from 'react';
import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App)
