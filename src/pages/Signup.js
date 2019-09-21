import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import Logo from '../components/Logo'
import Form from '../components/Form'



export default class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form type="Signup"/>

                <View style={styles.signupTextContent}>
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <Text style={styles.signupButton}>Signin</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#607d8b',
        alignItems: 'center',
        justifyContent: 'center',
    },

    signupTextContent: {
        flexGrow: 1,
        backgroundColor: '#607d8b',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 20,
        flexDirection: "row"
    },

    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
    },

    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
});