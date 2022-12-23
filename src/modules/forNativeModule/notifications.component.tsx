import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, NativeModules, View} from 'react-native';
import {ScreenContainer} from '@components/screenContainer';

const {ToastExample, NotificationModule, CounterModule} = NativeModules;

const Notifications = () => {
  const [count, setCount] = useState();

  useEffect(() => {
    const countRemoteData = CounterModule.getCountValue();
    console.log('CounterModule', CounterModule);
    setCount(countRemoteData || 0);
  }, []);

  const onTriggerPress = () => {
    ToastExample.show('This is the toast message!', ToastExample.SHORT);
  };

  const onShowNotifications = () => {
    console.log('NotificationModule:', NotificationModule);
    NotificationModule.trigger();
  };

  const onIncrease = () => {
    CounterModule.increase();

    const increasedValue = CounterModule.getCountValue();

    setCount(increasedValue);
  };

  const onDecrease = () => {
    CounterModule.decrease();

    const decreasedValue = CounterModule.getCountValue();

    setCount(decreasedValue);
  };

  return (
    <ScreenContainer style={styles.container}>
      <Text>Notifications</Text>
      <Pressable onPress={onTriggerPress} style={styles.btn}>
        <Text style={styles.btnText}>Trigger</Text>
      </Pressable>
      <Pressable onPress={onShowNotifications} style={styles.btn}>
        <Text style={styles.btnText}>Notifications</Text>
      </Pressable>
      <View style={styles.counterContainer}>
        <Pressable onPress={onIncrease} style={styles.btnCounter}>
          <Text style={styles.btnText}>+</Text>
        </Pressable>
        <View style={styles.counter}>
          <Text>Count: {count}</Text>
        </View>
        <Pressable onPress={onDecrease} style={styles.btnCounter}>
          <Text style={styles.btnText}>-</Text>
        </Pressable>
      </View>
    </ScreenContainer>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c7d1c9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '100%',
    backgroundColor: 'purple',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  btnCounter: {
    padding: 5,
    backgroundColor: 'purple',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
  },
  counterContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    paddingHorizontal: 5,
  },
});
