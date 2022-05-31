import { Navigation } from 'react-native-navigation';
import { registerViews, setMainStack } from './src/navigation';

registerViews();
Navigation.events().registerAppLaunchedListener(async () => {
    setMainStack();
});





