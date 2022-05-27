import React from 'react';
import { Text, View } from 'react-native';

import styles from './NoInternetHeader.styles';

const NoInternetHeader = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>You have no internet connection. 🥲</Text>
        <Text style={styles.headerText}>But you can still see ten most rated movies 🥳</Text>
    </View>
)

export default NoInternetHeader;