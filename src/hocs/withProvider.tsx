import React, { ComponentType } from 'react';
import { NavigationComponentProps } from 'react-native-navigation';
import { NavigationProvider } from 'react-native-navigation-hooks/dist';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';

type ReturnType = (props: NavigationComponentProps) => JSX.Element;

const withProvider = (Screen: ComponentType<NavigationComponentProps>): ReturnType => {
  return ({ componentId, ...props }: NavigationComponentProps): JSX.Element => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationProvider value={{ componentId }}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Screen {...props} componentId={componentId} />
          </SafeAreaProvider>
        </NavigationProvider>
      </PersistGate>
    </Provider>
  );
};

export default withProvider;
