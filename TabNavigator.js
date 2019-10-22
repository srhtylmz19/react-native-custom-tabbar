import React from 'react';
import { Text, View,TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {AddButton} from './AddButton'
import Page1 from './src/page1';
import Page2 from './src/page2';
import LinearGradient from 'react-native-linear-gradient';

import  Icon  from 'react-native-vector-icons/MaterialIcons'

const TabNavigator = createBottomTabNavigator({
  Page1: {
    screen:Page1,
    navigationOptions: {
        tabBarLabel: ({ tintColor }) => (<Text style={{ color: tintColor, fontSize: 12,  textAlign: 'center',}}>Vitrin</Text>),
        tabBarIcon: ({ tintColor }) => (<Icon name="verified-user" color={tintColor} size={20} />)
      }
    },



  Settings: {
    screen: Page2, // Empty screen
    navigationOptions: {
        tabBarLabel: <Text/>,
        tabBarIcon: 
            <LinearGradient colors={['#fff', '#fff' , 'transparent']}  style={{
                         alignItems: 'center',
                        justifyContent: 'center',
                        width: 75,
                        height: 75,
                        borderRadius:75/2,
                        padding:0.5,
                        paddingBottom:1,
                        
                         }}>
           
                    <View elevation={15} style={{width:65,height:65,  alignItems: 'center',backgroundColor:'#041230', justifyContent: 'center', borderRadius: 65/2,
                 }}>
                                                <Icon name="home" size={45} color="#E3872D"/>

                    </View>
                  
            </LinearGradient>
                
        
      }
  },

  Page2: {
    screen: Page2, // Empty screen
    navigationOptions: {
        tabBarLabel: ({ tintColor }) => (<Text style={{ color: tintColor,   textAlign: 'center',}}>Vitrin</Text>),
        tabBarIcon: ({ tintColor }) => (<Icon name="verified-user" color={tintColor} size={20} />)
      }
   },  


  
}, {
        defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
  initialRouteName: 'Settings',
  //order:['Home','About','Contact'],
  navigationOptions: {
    tabBarVisible: true,
    swipeEnabled: true,
    animationEnabled: true,
  },
  tabBarOptions: {
    style: {
       backgroundColor: '#041230',
       borderTopRightRadius:10,
       borderTopLeftRadius:10
    },
    activeTintColor: '#fff',
    inactiveTintColor: '#BEBEBE',
    //inactiveBackgroundColor:'#f9ea1b',
    tabBarPosition: 'bottom',
    tabStyle: {
      // paddingTop:5,
    },

    labelStyle: {
      fontSize: 8,
      //fontWeight:'bold',
      //color :'#000'
    },
  }
});
export default TabNavigator