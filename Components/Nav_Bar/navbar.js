import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MapView } from 'expo';



class DirectionsScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      latitude1: null,
      longitude1: null,
      error1: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude1: position.coords.latitude,
          longitude1: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }
  render() {
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <MapView style={styles.map}
      initialRegion={{
      latitude: this.state.latitude1,
      longitude: this.state.longitude1,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }}

      mapType="standard"
      />    

      <TouchableOpacity
        style={{ 
       position: 'absolute',
       bottom:150,
       borderWidth:1,
       borderColor:'green',
       alignItems:'center',
       justifyContent:'center',
       width:50,
       height:50,
       backgroundColor:'#fff',
       borderRadius:100,
      }}
       >
      <Icon name={"navigation"}  size={30} color="#01a699" />
      </TouchableOpacity>
      </View>
      
    );
  }
}

class FavoriteScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
            <ScrollView
              scrollEventThrottle = {16}
            >
              <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
                  <Text style={{fontSize:24, fontWeight: '700', paddingHorizontal: 20,}} >
                    Recent Places
                  </Text>
                  <View style={{height:130, marginTop:20}}>
                      <ScrollView>
                          <View style={{height:130, width: 130}}>
                              <View style={{flex:2}}>
                                  <Image source={require('./xms.jpg')} 
                                  style={{flex:1, width:null, height:null, resizeMode: 'cover'}} />
                              </View>
                              <View  style={{flex:2}}>
                              <Text> First </Text>
                              </View>
                          </View>
                      </ScrollView>
                  </View>
              </View>
            </ScrollView>  
      </View>

            <View  style={{flex:1}}> 
            <ScrollView
              scrollEventThrottle = {16}
            >
              <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
                  <Text style={{fontSize:24, fontWeight: '700', paddingHorizontal: 20,}} >
                    Recent Places
                  </Text>
                  <View style={{height:130, marginTop:20}}>
                      <ScrollView>
                          <View style={{height:130, width: 130}}>
                              <View style={{flex:2}}>
                                  <Image source={require('./xms.jpg')} 
                                  style={{flex:1, width:null, height:null, resizeMode: 'cover'}} />
                              </View>
                              <View  style={{flex:2}}>
                              <Text> First </Text>
                              </View>
                          </View>
                      </ScrollView>
                  </View>
              </View>
            </ScrollView>  
      </View>
    );
  }
}

class AddScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>
           Add Screen
        </Text>
      </View>
    );
  }
}
class SettingsScreen extends React.Component {
  render() {
    return (
      <View>  
          <Text>
            Setting Screen
          </Text>
      </View>
    );
  }
}
 
export default createMaterialBottomTabNavigator({

  Directions: {screen: DirectionsScreen,
    navigationOptions:{
    tabBarLabel: 'Directions',
    tabBarIcon: ( <Icon name="directions" size={24}/>)
    }
  },
  Favorites:{screen: FavoriteScreen,
    navigationOptions:{
      tabBarLabel: 'Favorites',
      tabBarIcon: ( <Icon name="favorite" size={24}/>)
      }},
  AddNew:{screen: AddScreen,
    navigationOptions:{
    tabBarLabel: 'Add',
    tabBarIcon: ( <Icon name="add" size={24}/>)
    }} ,
  Settings:{screen: SettingsScreen,
    navigationOptions:{
    tabBarLabel: 'Settings',
    tabBarIcon: ( <Icon name="settings" size={24}/>)
    }} ,
    },
    {
      
      initialRouteName: 'Directions',
      shifting: true,
      activeTintColor: 'black',
      barStyle: { backgroundColor: 'white',  },
      activeTintColor: 'green',
    }
  
)
const styles= StyleSheet.create({
  
map:{
    position: 'absolute',
    top: 25,
    bottom: 0, 
    left: 0,
    bottom: 0,
    right: 0,
}

});


