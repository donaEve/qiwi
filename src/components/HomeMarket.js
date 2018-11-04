// SESSAO DE PARCEIROS DA TELA HOME 

import React from 'react';
import { StyleSheet, View } from 'react-native';
import List from './List';

export default class HomeMarket extends React.Component{
        render() {
            return(
                <View style={styles.container}>
                    <List />
                </View>
            )
        }
    }
    const styles = StyleSheet.create({
        container:{
            flex: 1,
        },

    });