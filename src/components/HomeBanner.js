//BANNER DA TELA HOME 

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Bannertest from './Bannertest';

export default class HomeBanner extends React.Component{
    render() { 
        return( 
            <View style={styles.container}>
                <Bannertest />
            </View>
            )
}
}
    
    const styles = StyleSheet.create({
        container:{
            flex: 1,
        }
    });