import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import { RideHistoryItem } from './src/Components';


var dummyData = [
  {
    amount: "4.74",
    time: "4 min",
    calories: "7.4k",
    from: "Wood Bridge",
    to: "Sky Mountain Valley",
    distance: "4.1 miles",
    date: "21, April"
  },
  {
    amount: "7.11",
    time: "7 min",
    calories: "14.1k",
    from: "Garden Valley",
    to: "Basketball Ground",
    distance: "7 miles",
    date: "17, April"
  },
  {
    amount: "1.40",
    time: "1 min",
    calories: "4k",
    from: "Mountain Rock",
    to: "Your Home",
    distance: "1 miles",
    date: "14, April"
  },
  {
    amount: "4.74",
    time: "4 min",
    calories: "7.4k",
    from: "Wood Bridge",
    to: "Sky Mountain Valley",
    distance: "4.1 miles",
    date: "21, April"
  },
  {
    amount: "7.11",
    time: "7 min",
    calories: "14.1k",
    from: "Garden Valley",
    to: "Basketball Ground",
    distance: "7 miles",
    date: "17, April"
  },
  {
    amount: "1.40",
    time: "1 min",
    calories: "4k",
    from: "Mountain Rock",
    to: "Your Home",
    distance: "1 miles",
    date: "14, April"
  },
]


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#42c0ce" }}>
        <Header
          placement="center"
          backgroundColor="#fff"
          leftComponent={{ icon: 'close', color: '#42c0ce' }}
          centerComponent={{ text: 'Ride History', style: { color: '#000', fontSize: 20 } }}
          containerStyle={{height: 50, paddingTop: 0, elevation: 15}}
        />
        <View style={{ flex: 1, alignItems: "center" }}>
          <FlatList
            style={{ height: "100%", width: "100%" }}
            contentContainerStyle={{ paddingVertical: 20, alignItems: "center" }}
            data={dummyData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <RideHistoryItem
                key={index}
                amount={item.amount}
                time={item.time}
                calories={item.calories}
                from={item.from}
                to={item.to}
                distance={item.distance}
                date={item.date}
                index={index}
              />
            )}
          />
        </View>
      </View>
    );
  }
}