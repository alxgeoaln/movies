import {StyleSheet} from 'react-native';

import { pallete } from '@src/common/colors';

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: pallete.green,
        borderRadius: 15,
        padding: 5,
        alignSelf: 'flex-start'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default styles;