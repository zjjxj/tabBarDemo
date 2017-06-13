//https://github.com/aksonov/react-native-router-flux/blob/master/docs/API_CONFIGURATION.md
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene,Actions} from 'react-native-router-flux';

const Home=()=>{
  return <Text>
    home
  </Text>
};

const Mine=()=>{
  return <Text>
    Mine
  </Text>
};

const Order=()=>{
  return <Text>
    Order
  </Text>
};

const tabBarItem=({selected,title})=>{
  return <View>
    <Text style={{color:selected?"green":"#CCC"}}>{title}</Text>
  </View>
};

export default class tabBar extends Component {
  render() {
    return (
    <Router>
      <Scene tabs={true} key="root" type="reset" title="tabBar">
        <Scene hideNavBar key="home" title="首页" component={Home} initial icon={tabBarItem}/>
        <Scene hideNavBar key="mine" title="我的" component={Mine} icon={tabBarItem}/>
        <Scene hideNavBar key="order" title="订单" component={Order} icon={tabBarItem}/>
      </Scene>
    </Router>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('tabBar', () => tabBar);
