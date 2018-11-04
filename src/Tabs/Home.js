import React from 'react';
import { StyleSheet, ScrollView, View, Image} from 'react-native';
import HomeBanner from '../components/HomeBanner';
import HomeScan from '../components/HomeScan';
import HomeMarket from '../components/HomeMarket';

export default class Home extends React.Component{
    render() {
        return(            
            <ScrollView style={styles.container} >

                <View> 
                <Image style={styles.layout} source={require('../img/backgroundQiwi.jpg')} />                
                </View>
                <Image style={styles.layoutIcon} source={require('../img/vectorpaint344.png')} />
                <HomeBanner />
                <HomeScan />
                <HomeMarket />
            </ScrollView>
        );
    }
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#4045AD'
    },
    layout:{
        
        alignItems: 'center',
        width: 600,
        height: 600,
        position: 'absolute'

    },
    layoutIcon:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
        marginTop: 50,
        width: 300,
        height: 300,
    }
});
