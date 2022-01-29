/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NativeBaseProvider, View} from 'native-base';
import {theme} from './theme';
import SecureFormField from './SecureFormField';
import FormField from './FormField';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <View bg={'black'}>
        <FormField placeholder={'Username'} error={'Error'} />
        <FormField placeholder={'Email'} error={'Error'} />
        <SecureFormField placeholder={'Password'} error={'Error'} />
      </View>
    </NativeBaseProvider>
  );
};

export default App;
