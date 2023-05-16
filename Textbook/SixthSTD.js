import *as React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';


 
export default class App extends React.Component{
  render(){
  return (
    <View>

      <a href='https://www.mediafire.com/file/xhaani0d11l7o1z/Std-6th-English.pdf'>
        <TouchableOpacity>
          <Text>
            English
          </Text>
        </TouchableOpacity>
      </a>

      <a href='https://www.mediafire.com/file/xoxk45snckgbgew/Std-5th-Hindi-Sulbharti.pdf'>
        <TouchableOpacity>
          <Text>
            Hindi SulBharti
          </Text>
        </TouchableOpacity>
      </a>

      <a href='https://www.mediafire.com/file/14boadtkve0gxn0/Std-5th-hindi-SungumBharti.pdf'>
        <TouchableOpacity>
          <Text>
            Hindi SungamBharti
          </Text>
        </TouchableOpacity>
      </a>

      <a href='https://www.mediafire.com/file/51f5h9tozguvi5x/Std-5th-marathi-Sulbharti.pdf'>
        <TouchableOpacity>
          <Text>
            Marathi SulBharti
          </Text>
        </TouchableOpacity>
      </a>

      <a href='https://www.mediafire.com/file/agxa0188cb6zm16/Std-5th-marathi-sugumBharti.pdf'>
        <TouchableOpacity>
          <Text>
            Marathi SungamBharti
          </Text>
        </TouchableOpacity>
      </a>

      <a href='https://www.mediafire.com/file/h6u44bqflmeth8p/Std-5th-mathematics.pdf'>
        <TouchableOpacity>
          <Text>
            Maths
          </Text>
        </TouchableOpacity>
      </a>

      <a href='https://www.mediafire.com/file/q6e87n1lgcin4wh/Std-5th-EnviormentalStudies-part1.pdf'>
        <TouchableOpacity>
          <Text>
            EnviormentalStudies-part-1
          </Text>
        </TouchableOpacity>
      </a>

      <a href='https://www.mediafire.com/file/3du9ue76epz2ldx/Std-5th-EnviormentalStudies-part2.pdf'>
        <TouchableOpacity>
          <Text>
            EnviormentalStudies-part-2
          </Text>
        </TouchableOpacity>
      </a>

      
      
    </View>
    );
} 
}


