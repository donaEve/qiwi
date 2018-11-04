import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { ExportedScanList } from '../Tabs/Scan';

import Cartlist from '../components/Cartlist';

const max_itens = 50;

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scan_data: [],
            qtds: Array(max_itens).fill(1)
        };
        this.updateQtdItem.bind(this);
        this.addremoveItem.bind(this);
    }

    updateQtdItem(i, x) {
        var qcopy = this.state.qtds.slice(); //, dcopy = this.state.scan_data.slice();
        if (x > 0) {
            qcopy[i]++;
        } else {
            if (qcopy[i] > 1) {
                qcopy[i]--;
            }
        }
        this.setState({
            qtds: qcopy
        });
    }

    addremoveItem(i) { //, item) {
        var qcopy = this.state.qtds.slice(); //, dcopy = this.state.scan_data.slice();
        if (this.state.qtds[i] != 0) {
            //dcopy.splice(i, 1);
            qcopy[i] = 0;
        } else {
            //dcopy.splice(i, 1, item);
            qcopy[i] = 1;
        }
        this.setState({
            qtds: qcopy
        });
    }

    getTotal() {
        var t = 0;
        for (var i = 0; i < this.state.scan_data.length; i++) {
            t += this.state.scan_data[i][1] * this.state.qtds[i];
        }
        console.log("total >>> " + t);
        return t;
    }

    renderList() { 
        
        var list = this.state.scan_data.map((item, i) => {
            return (
                
                <View style={{backgroundColor: '#4045AD'}}> 
                <ScrollView> 
                <View key={item} style={styles.containerList}> 
                 <Text style={styles.textName}>{ item[0] }</Text>
                 { this.state.qtds[i] == 0 ? 

                  <Text>{ "(  Removido do carrinho )" }</Text> :

                    <View style={styles.containerBtn}>
                    <View style={styles.containerCart}>
                        <Text style={styles.valorContainer}>{ " R$ " + (parseFloat(item[1]) * this.state.qtds[i]).toFixed(2) }</Text>                       
                  </View>
                  <View style={{ flexDirection:'row'}}> 
                        <TouchableOpacity style={styles.btnround}
                            onPress={() => this.updateQtdItem(i, -1)}>
                            <Text style={styles.btnText}> - </Text>
                        </TouchableOpacity>

                        <Text style={styles.textQtd}>{ this.state.qtds[i] }</Text>

                        <TouchableOpacity style={styles.btnround}
                            onPress={() => this.updateQtdItem(i, 1)}>
                           <Text style={styles.btnText}> + </Text>
                        </TouchableOpacity>
                        </View>
                    </View> 
                 }
                  <Text>{"\n"}</Text>
 
                </View>
                </ScrollView>
                </View>
                
            )
        });
        list.push(
            <View style={styles.totalTextContainer} >
                <Text style={styles.totalText}>{ "\n Total: R$ " + this.getTotal().toFixed(2) }</Text>
            </View>
        );
        return list;
    }

    render() {
        setTimeout(() => {
            this.setState({
                scan_data: ExportedScanList
            })
        }, 1000);

        var displayItems = [];
        if (typeof this.state.scan_data !== 'undefined' && this.state.scan_data.length > 0) {
            displayItems = this.renderList();
        } else {
            displayItems.push(
                <View style={styles.container}>
                    <Image style={styles.cart} source={require('../img/shopCart.png')} />
                    <Text style={styles.textEmpty}>Seu carrinho está vazio :(</Text>
                    <Text style={styles.addItens}>Adicione itens usando Scan! :)</Text>
                </View>
            );
        }

        return (
            <View>
                { displayItems }
            </View>
        );
    }
}

/*
function uniqueItems(duplicates) {
    if (typeof duplicates !== 'undefined' && duplicates.length > 0) {
        var hashMap = {};
        duplicates.forEach(function(arr){
            hashMap[arr.join("|")] = arr;
        });
        var result = Object.keys(hashMap).map(function(k){
            return hashMap[k]
        })
        return result;
    } else {
        return [];
    }
}
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
       
    },
    textEmpty: {
        fontSize: 25,
        textAlign: 'center',
        color: '#969FAA'
    },
    addItens: {
        fontSize: 18,
        textAlign: 'center',
        color: '#969FAA',
        marginTop: 10
    },
    cart: {
        width: 400,
        height: 400,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    /* btnContainer: {
        backgroundColor: '#f62459',
        height: 50,
        marginTop: 30,
        borderRadius: 20,
        paddingVertical: 7 
    },*/

    // LIST CART
 
    containerList:{
        
        flexDirection: 'column',
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#797CCF',
        borderRadius: 12,
    },

    // BOTAO ADD - REMOVE 
    containerBtn:{
        flexDirection: 'column',
    },
    btnround:{
        backgroundColor: '#f62459',  
        width: 30,
        height: 30,
        borderRadius: 30/2,
    }, //TEXTOs 
    textQtd:{
        marginLeft: 10, 
        marginRight: 10,
        justifyContent: 'center',
        fontSize: 22,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    //containerCart = Container do valor Total dentro da lista
    containerCart:{
        
        alignItems: 'flex-end',
        fontSize: 25,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    btnText:{
        textAlign: 'center',
        alignItems: 'flex-end',
        fontSize: 25,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    textName: {
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
        fontSize: 22,
        color: 'rgba(255, 255, 255, 0.7)',
     
    },
    //valorContainer = valor Total dentro da lista
    valorContainer:{
        textAlign: 'center',
        fontSize: 25,
        color: 'rgba(255, 255, 255, 1)'
    },
    valorTotal:{
        textAlign: 'center',
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    totalText:{
        textAlign: 'center',
        fontSize: 30,
        color: 'rgba(255, 255, 255, 1)'
    }, //TEXTO DO VALOR TOTAL 
    totalTextContainer:{
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
   
    }
});
