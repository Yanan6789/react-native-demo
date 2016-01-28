/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
//增加NavigatorIOS
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
} = React;

 
var MainClass = React.createClass({

  render: function() {
    //component这里设置的是这个组件启动的时候显示的第一个子组件
    return (
      <Navigator
          style= {styles.container}
          initialRoute= {{
            component: HomeScene,
            name: 'home'
          }}
          configureScene={() => {
              return Navigator.SceneConfigs.HorizontalSwipeJump;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            if(route.component) {
              return <Component {...route.params} navigator={navigator} />
            }
          }} >

      </Navigator>
    );
  },
});

/*--  首页页面组件 --*/
var HomeScene = React.createClass({
  getInitialState:function () {
    return {
      id: 'AXIBA001',
      flag: null
    };
  },
  render: function() {
    return (
      <View>
        <View style={styles.home}>
          <TouchableHighlight onPress={this.onPress}>
            <Text>push me!{this.state.flag && ' I \'m ' + this.state.flag + ', i come from second page'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.home}>
          <TouchableHighlight onPress={this.onPress}>
            <Text>push me!{this.state.flag && ' I \'m ' + this.state.flag + ', i come from second page'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.home}>
          <TouchableHighlight onPress={this.onPress}>
            <Text>push me!{this.state.flag && ' I \'m ' + this.state.flag + ', i come from second page'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.home}>
          <TouchableHighlight onPress={this.onPress}>
            <Text>push me!{this.state.flag && ' I \'m ' + this.state.flag + ', i come from second page'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.home}>
          <TouchableHighlight onPress={this.onPress}>
            <Text>push me!{this.state.flag && ' I \'m ' + this.state.flag + ', i come from second page'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.home}>
          <TouchableHighlight onPress={this.onPress}>
            <Text>push me!{this.state.flag && ' I \'m ' + this.state.flag + ', i come from second page'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.home}>
          <TouchableHighlight onPress={this.onPress}>
            <Text>push me!{this.state.flag && ' I \'m ' + this.state.flag + ', i come from second page'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.home}>
          <TouchableHighlight onPress={this.onPress}>
            <Text>push me!{this.state.flag && ' I \'m ' + this.state.flag + ', i come from second page'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.home}>
          <TouchableHighlight onPress={this.onPress}>
            <Text>push me!{this.state.flag && ' I \'m ' + this.state.flag + ', i come from second page'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.home}>
          <TouchableHighlight onPress={this.onPress}>
            <Text>push me!{this.state.flag && ' I \'m ' + this.state.flag + ', i come from second page'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.home}>
          <TouchableHighlight onPress={this.onPress}>
            <Text>push me!{this.state.flag && ' I \'m ' + this.state.flag + ', i come from second page'}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  },
  onPress: function() {
    var _me = this;
    //或者写成 const navigator = this.props.navigator;
    const { navigator } = this.props;
    if(navigator)
    {
        navigator.push({
            name: 'touch View',
            component: SecondScene,
            params: {
                id: this.state.id,
                getSomething:function(flag) {
                  _me.setState({
                    flag: flag
                  });
                }
            }
         })
    }
  }
});
/*--  push后的页面组件 --*/
var SecondScene = React.createClass({
  render: function() {
    return (
      <View style={styles.home}>
        <TouchableHighlight onPress={this.onPress}>
          <Text>push sucess!I get {this.props.id},i want back!</Text>
        </TouchableHighlight>
      </View>
    );
  },
  onPress: function() {
    //或者写成 const navigator = this.props.navigator;
    const { navigator } = this.props;

    if(this.props.getSomething) {
      var flag = 'Axiba002'
      this.props.getSomething(flag);
    }
    if(navigator) {
      navigator.pop();
    }
  }
});

/*布局样式*/
var styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  home: {
    paddingTop:74,

  },
});

AppRegistry.registerComponent('nihao', () => MainClass);