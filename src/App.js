import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'API KEY',
      authDomain: 'manager-3ca7c.firebaseapp.com',
      databaseURL: 'https://manager-3ca7c.firebaseio.com',
      projectId: 'manager-3ca7c',
      storageBucket: '',
      messagingSenderId: '864360134471'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>

          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
