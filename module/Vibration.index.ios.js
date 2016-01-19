//这是vibrate()这个方法，移动设备会出现一秒钟的震动效果。
'use strict';
var React=require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VibrationIOS,
}=React;

var nihao=React.createClass({
  render:function(){
    return(
      <View>
        <Text onPress={this.vibration} style={styles.btn}>摇摆一下</Text>
      </View>
    )
  },
  vibration:function(){
    VibrationIOS.vibrate();
  }
})

var styles=StyleSheet.create({
  btn:{
    height:50,
    marginTop:50,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#3bc1ff',
    color:'#fff',
    lineHeight:24,
    fontWeight:'bold',
    textAlign:'center',
  }
})

AppRegistry.registerComponent('nihao',()=>nihao);

































