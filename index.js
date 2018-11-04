import { AppRegistry, Component, StyleSheet, Text, View, Navigator } from 'react-native';


var App = require('./App');
var Home = require('./src/pages/Home');

class App extends Component {
    render(){
        return(
            <Navigator initialRoute ={{
                id: 'App'
            }}
                renderScene={
                    this.navigatorRenderScene
                }
                />  
        );
    }
navigatorRenderScene (route, navigator){
    _navigator = navigator;
    switch(route.id){
        case 'App':
        return(<App navigator ={} title ="App" /> );

        case 'Home':
        return(<Home navigator ={} title ="Home" /> );
    }
}

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddfd4'
    }
})

AppRegistry.registerComponent('qiwi', () => App);
