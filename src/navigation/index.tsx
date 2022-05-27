import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeContainer, MovieDetailsContainer} from '@src/screens';
import {TopRated} from '@src/store/topRated/type';
import {pallete} from '@src/common/colors';
import {DefaultTheme} from '@react-navigation/native';

export type StackParamList = {
  Home: undefined;
  MovieDetails: TopRated;
};

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const Stack = createNativeStackNavigator<StackParamList>();

export function MovieStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeContainer}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsContainer}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitle: '',
          headerStyle: {
            backgroundColor: pallete.blue
          },
          headerTintColor: pallete.white
        })}
      />
    </Stack.Navigator>
  );
}
