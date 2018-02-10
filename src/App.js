import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB_Q_rPW9PVBnd_Xe20ImvkL80bhX2R86k',
      authDomain: 'manager-3ca7c.firebaseapp.com',
      databaseURL: 'https://manager-3ca7c.firebaseio.com',
      projectId: 'manager-3ca7c',
      storageBucket: '',
      messagingSenderId: '864360134471'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
