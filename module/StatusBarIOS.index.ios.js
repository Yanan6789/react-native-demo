//背景容器的颜色
//实际上这个例子写的就tm是废话
'use strict';
var React=require('react-native');

var {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  StatusBarIOS,
}=React;

StatusBarIOS.setStyle('light-content');

var nihao=React.createClass({
  render:function(){
    return(
      <View style={styles.container}></View>
    )
  }
})

var styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000'
  }
})

AppRegistry.registerComponent('nihao',()=>nihao);

































