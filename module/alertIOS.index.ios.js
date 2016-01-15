/**
 * AlertIOS.alert(title,message,buttons);
 * AlertIOS.prompt(title,message,buttons);
 * time:2016-1-16
 * author :nan
 */
 
'use strict';
var React=require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  AlertIOS
}=React;

var nihao=React.createClass({
  render:function(){
    return(
      <View style={styles.container}>
        <Text style={styles.item} onPress={this.tip}>提示对话框</Text>
        <Text style={styles.item} onPress={this.input}>输入对话框</Text>
      </View>
    )
  },
  tip:function(){
    AlertIOS.alert('提示','选择学习React-native',[
      {
        text:'取消',
        onPress:function(){
          alert('你点击了取消按钮');
        }
      },
      {
        text:'确定',
        onPress:function(){
          alert('你点击了确认按钮');
        }
      }
    ])
  },

  input:function(){
    AlertIOS.prompt('提示','使用RN',[
      {
        text:'取消',
        onPress:function(){
          alert('你点击了取消按钮');
        }
      },
      {
        text:'确定',
        onPress:function(){
          alert('你点击了确认按钮');
        }
      }
    ])
  }
})

var styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:25
  },
  item:{
    marginTop:10,
    marginLeft:5,
    marginRight:5,
    height:30,
    borderWidth:1,
    padding:6,
    borderColor:'#ddd'
  }
})

AppRegistry.registerComponent('nihao',()=>nihao);



