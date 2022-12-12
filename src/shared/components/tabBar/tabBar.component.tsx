import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from '@components/icon';
import {tabIcons, tabLabels} from './tabBar.data';
import {Theme} from '@constants/theme';
import {testProps} from 'shared/utils/testProps';

export const TabBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  return (
    <SafeAreaView style={styles.contentContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const conditionFocusColor = isFocused ? Theme.purple : Theme.dark;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            style={styles.item}
            activeOpacity={0.85}
            onPress={onPress}
            key={route.key}
            {...testProps(route.name)}>
            <Icon
              name={tabIcons[route.name]}
              style={styles.tabIcon}
              size={20}
              color={conditionFocusColor}
              onPress={onPress}
            />
            <View style={styles.itemLabelContainer}>
              <Text style={{color: conditionFocusColor}}>
                {tabLabels[route.name]}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabIcon: {
    marginBottom: 5,
  },
  itemLabelContainer: {
    height: 35,
    justifyContent: 'center',
  },
});
