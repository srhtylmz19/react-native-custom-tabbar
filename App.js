

import React from 'react';
import {createAppContainer} from 'react-navigation'
import TabNavigator from './TabNavigator';

const Deneme = createAppContainer(TabNavigator);

class App extends React.Component {
  render(){
    return(
      <Deneme/>
    )
  }
}


export default App;
