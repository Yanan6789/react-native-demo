/**
 *  react-native navigatorios 组件
 *  使用时只需要引入即可
 *  author:nan
 *  time:2016-1-13
 */
 var React = require('react-native');

	var {
	  StyleSheet,
	  NavigatorIOS,
	  Text,
	  AppRegistry,
	  View,
	  ScrollView,
	} = React;

	var List = React.createClass({
	  render: function(){
	    return (
	      <ScrollView style={styles.flex}>
	        <Text style={styles.list_item} onPress={this.goTo}>大家好，我是第一条新闻</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第二条</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第三条</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第4条</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第5条</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第6条</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第7条</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第8条</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第9条</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第10条</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第11条</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第12条</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第13条</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第14条</Text>
	        <Text style={styles.list_item} onPress={this.goTo}>我是第15条</Text>
	      </ScrollView>
	      );
	  },
	  goTo: function(){
	    this.props.navigator.push({
	      component: Detail,
	      title: '新闻详情',
	      rightButtonTitle: '详情',
	      onRightButtonPress: function(){
	        alert('进入我的购物车');
	      }
	    });
	  }
	});

	var Detail = React.createClass({
	  render: function(){
	    return (
	      <ScrollView>
	        <Text>详情页</Text>
	        <Text>尽管信息很少，但这就是详情页</Text>
	      </ScrollView>
	    );
	  }
	});

	var NV = React.createClass({
	  render: function(){
	    return(
	      <NavigatorIOS
	        style={{flex:1}}
	        initialRoute={{
	          component: List,
	          title: '新闻',
	          passProps: {},
	        }}
	      />
	    );
	  }
	});

	var styles = StyleSheet.create({
	  flex:{
	    flex: 1,
	  },
	  list_item:{
	    padding:20,
	    fontSize:16,
	    marginTop:5,
	    backgroundColor:'#ccc',
	    color:'#fff',
	    marginLeft:10,
	    marginRight:10
	  }
	});

	AppRegistry.registerComponent('nihao', () => NV);