import *as React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import TextbookButton from './TextbookButton'
import FifthSTD from './FifthSTD'
import SixthSTD from './SixthSTD'
import SeventhSTD from './SeventhSTD'
import EightSTD from './EightSTD'
import NinthStd from './NinthSTD'
import TenthSTD from './TenthSTD'



 
export default class MainTexbook extends React.Component{
  render(){
  return (
    <AppContainer/>  
  );
} 
}


const switchNavigator = createSwitchNavigator({
  
  Screen1:{screen: TextbookButton},
  Screen5:{screen: FifthSTD},
  Screen6:{screen: SixthSTD},
  Screen7:{screen: SeventhSTD},
  Screen8:{screen: EightSTD},
  Screen9:{screen: NinthStd},
  Screen10:{screen: TenthSTD},
  

 
  
  
})

const AppContainer =  createAppContainer(switchNavigator);