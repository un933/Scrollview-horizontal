import React, { Component } from 'react';
import { StyleSheet, Text, View ,SafeAreaView, TextInput, Platform,StatusBar,
ScrollView,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Category from '../components/Category'


class Explore extends Component {

    componentDidMount(){
        this.startHeaderHeight=80
        if(Platform.os=='android'){
            this.startHeaderHeight=100+StatusBar.currentHeight
        }

    }
    render() {
        return (
            <SafeAreaView style={styles.safe}>
                <View style={{flex: 1}}>
                    <View style={styles.container}>
                        <View style={styles.column }  >
                            <Ionicons name="md-search"  size={20}/>
                            <TextInput
                                placeholder="Try to  anything"
                                placeholderTextColor="gray"
                                style={styles.textIn}
                                underlineColorAndroid="transparent"/>
                        </View>
                </View>
                    <ScrollView
                     scrollEventThrottle={16}>
                         <View style={styles.textvi}>
                        <Text style={styles.toptext}>
                            what can we help you find!                  
                        </Text>
                        <View style={styles.scview}>
                            <ScrollView
                            horizontal={true}>
                                <Category imageUri={require('../assets/trip.jpg')}
                                name="trip"/>
                                 <Category imageUri={require('../assets/travel.jpg')}
                                name="travel"/>
                                 <Category imageUri={require('../assets/sunset.jpg')}
                                name="sunset"/>
                                 <Category imageUri={require('../assets/roadtrip.jpg')}
                                name="roadtrip"/>
                                 <Category imageUri={require('../assets/europe.jpg')}
                                name="europe"/>   
                            </ScrollView>
                        </View>
                        </View>
                    </ScrollView>

                  

                </View>

            </SafeAreaView>
           

        );
    }
}

export default Explore;

const styles=StyleSheet.create({
    safe:{
        flex:1
    },
    container:{      
      backgroundColor:'white',
      borderBottomWidth:1,
      borderBottomColor:'#dddddd'
      
    },
    column:{
        flexDirection:'row',
        padding:10,
        backgroundColor:'white',
        marginHorizontal:20,
       
        ...Platform.select({
            ios:{
                shadowOffset:{width:0,height:0},
                shadowColor:'black',
                shadowOpacity:0.2
            },
            android:{
                elevation :1

            }
        }),
        marginTop:30          
        },
    textIn:{
        flex:1,
        fontWeight:"700",
        backgroundColor:'white'
    },
    textvi:{
        flex:1,
        backgroundColor:'white',
        paddingTop:20
    },
    toptext:{
        fontSize:24,
        fontWeight:"700",
        paddingHorizontal:20
    },
    scview:{
        height:130,
        marginTop:20,
    }
  });