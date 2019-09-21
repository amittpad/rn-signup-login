import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Logo extends Component {
    render() {
        return (

            <View style={styles.container}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../images/ic_logo.gif')}
                />
                <Text style={styles.logText}>Welcome to my App</Text>
            </View>

        );

    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#607d8b',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    logText: {
        marginVertical: 15,
        fontSize: 20,
        color: 'rgb(255,255,255)'
    }
});

