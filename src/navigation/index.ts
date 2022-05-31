/* eslint-disable global-require */
import {
  Navigation,
  NavigationComponentProps,
  Options,
} from "react-native-navigation";
import { ComponentType, ReactText } from "react";

import { ViewName } from "../constants/ViewName";
import { ViewNameType } from "../types/View";

import * as Views from "../views";
import withProvider from "../hocs/withProvider";

const views = Object.values(Views);

const getDefaultOptions = (): Options => ({
  topBar: {
    visible: false,
    height: 0,
  },
  layout: {
    orientation: ["portrait"],
  },
  bottomTabs: {
    animate: true,
    drawBehind: true,
    titleDisplayMode: "alwaysShow",
  },
  statusBar: {
    style: "light",
  },
});

export function setMainStack(): Promise<string> {
  Navigation.setDefaultOptions(getDefaultOptions());

  return Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: ViewName.WHAT_IS_PROBLEM_SCREEN,
            },
          },
        ],
      },
    },
  });
}

export function pushSingleView<T>(
  componentId: string,
  name: ViewNameType,
  viewProps: T | Record<string, never> = {}
): Promise<string> {
  return Navigation.push<T | Record<string, never>>(componentId, {
    component: {
      name,
      passProps: {
        ...viewProps,
      },
      options: {
        bottomTabs: {
          visible: false,
          animate: true,
          drawBehind: true,
        },
      },
    },
  });
}

export function popView(componentId: string): Promise<string> {
  return Navigation.pop(componentId);
}

export function registerViews(): void {
  views.forEach((view) => {
    Navigation.registerComponent(
      view.displayName as ReactText,
      () => withProvider(view as ComponentType<NavigationComponentProps>),
      () => view as ComponentType<NavigationComponentProps>
    );
  });
}
