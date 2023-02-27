import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  scrollContainer: {
    flex: 0,
    position: 'relative',
  },
});

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  scroll?: boolean;
};

const Container: React.FC<Props> = ({ children, style, scroll }) => {
  const Content = scroll ? ScrollView : View;
  const contentStyle = scroll
    ? { contentContainerStyle: [styles.container, styles.scrollContainer, style] }
    : { style: [styles.container, style] };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Content {...contentStyle}>{children}</Content>
    </SafeAreaView>
  );
};

Container.defaultProps = {
  style: {},
  scroll: false,
};

export default Container;
