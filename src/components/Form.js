import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Enter email"
                    placeholderTextColor="#ffffff"
                    keyboardType="email-address"
                    returnKeyType="next"

                />

                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Enter password"
                    placeholderTextColor="#ffffff"
                    keyboardType="default"
                    secureTextEntry={true} l̥
                    returnKeyType="done"
                />

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.btnText}>{this.props.type}</Text>

                </TouchableOpacity>

            </View >

        );

    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#607d8b',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputBox: {
        width: 300,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10

    },

    button: {
        width: 200,
        height: 40,
        backgroundColor: '#455a64',
        borderRadius: 25,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 50,
        justifyContent: 'center',

    },

    btnText: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: '500'
    }
});

