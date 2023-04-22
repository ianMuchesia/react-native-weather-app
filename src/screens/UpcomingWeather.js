import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
  {
    dt_txt: '2032-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },

  {
    dt_txt: '2032-02-18 15:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Cloud'
      }
    ]
  },
  {
    dt_txt: '2032-02-18 18:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  }
]



const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
           <ImageBackground source={require("../../assets/upcomingWeather.jpg")} style={styles.image}>
      <Text>UpcomingWeather</Text>
   
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
        /* ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: 'red', height: 2 }} />
        )} */
      />
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalBlue'
  },

  image:{
  flex:1
  }
})
export default UpcomingWeather
