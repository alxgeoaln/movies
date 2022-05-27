import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {store} from '@src/store';
import {MovieStack, NavigationTheme} from '@src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={NavigationTheme}>
        <MovieStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
