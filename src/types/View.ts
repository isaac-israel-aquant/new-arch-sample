import { NavigationFunctionComponent } from 'react-native-navigation';
import { ViewName } from '../constants/ViewName';

export type FCView<P = Record<string, never>> =
  NavigationFunctionComponent<P> & {
    displayName: string;
    menu?: boolean;
  };

type ViewNameKey = keyof typeof ViewName;
export type ViewNameType = typeof ViewName[ViewNameKey];
