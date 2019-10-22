import React, {Component} from 'react';
import {Animated, TouchableHighlight, View} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
const SIZE = 70;
class AddButton extends Component {
    mode = new Animated.Value(0);
    toggleView = () => {
        Animated.timing(this.mode, {
            toValue: this.mode._value === 0 ? 1 : 0,
            duration: 300
        }).start();
    };
    render() {
    
        return (
         
             
                <TouchableHighlight
                    underlayColor="#2882D8"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE,
                        height: SIZE,
                        borderTopLeftRadius:SIZE/3,
                        borderTopRightRadius:SIZE/3,
                        backgroundColor: '#BDBDBD'
                    }}
                >
                  
                        <Icon name="home" size={24} color="#F8F8F8"/>
                </TouchableHighlight>
        );
    }
}
export {AddButton};