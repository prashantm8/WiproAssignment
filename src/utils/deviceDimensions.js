import React from 'react'
import { Dimensions } from 'react-native';
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const REFERENCE_WIDTH = 360;
export const REFERENCE_HEIGHT = 640;

export const setValueBasedOnWidth = (dp) => {
  if (dp) {
    return WIDTH * dp / REFERENCE_WIDTH
  }
  return dp
}

export const setValueBasedOnHeight = (dp) => {
  if (dp) {
    return HEIGHT * dp / REFERENCE_HEIGHT
  }
  return dp
}

export const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


