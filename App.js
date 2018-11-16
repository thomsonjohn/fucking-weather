import React, { Component } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Highlight from "react-native-highlight-words";
import { fetchWeather } from "./weatherAPI";

const iconNames = {
  Default: "md-time",
  Clear: "md-sunny",
  Rain: "md-rainy",
  Thunderstorm: "md-thunderstorm",
  Clouds: "md-cloudy",
  Haze: "md-cloudy",
  Snow: "md-snow",
  Drizzle: "md-umbrella"
};

const phrases = {
  Default: {
    title: "Fetching the fucking weather.",
    subtitle: "Be patient, you're witnessing a miracle.",
    highlight: "fucking",
    color: "#636363",
    background: "#9c9c9c"
  },
  Clear: {
    title: "It's fucking beautiful.",
    subtitle: "Rock that shit.",
    highlight: "fucking",
    color: "#e32500",
    background: "#FFD017"
  },
  Rain: {
    title: "It's fucking raining now.",
    subtitle: "Just look outside.",
    highlight: "raining",
    color: "#004a96",
    background: "#2f343a"
  },
  Thunderstorm: {
    title: "Pikachu, use fucking thunderbolt.",
    subtitle: "Unplug your devices.",
    highlight: "fucking",
    color: "#fbff46",
    background: "#020202"
  },
  Clouds: {
    title: "Fucking fifty shades of grey.",
    subtitle: "Fucking grey clouds everywhere.",
    highlight: "shades",
    color: "#0044ff",
    background: "#939393"
  },
  Snow: {
    title: "Fucking ice age.",
    subtitle: "The movie was great, the weather is not.",
    highlight: "ice",
    color: "#021d4c",
    background: "#15a678"
  },
  Drizzle: {
    title: "It's fucking driech.",
    subtitle: "Och aye the noo. Freedom.",
    highlight: "driech",
    color: "#b3f6e4",
    background: "#1fbb68"
  },
  Haze: {
    title: "Fucking fifty shades of grey.",
    subtitle: "Fucking grey clouds everywhere.",
    highlight: "shades",
    color: "#0044ff",
    background: "#939393"
  }
};

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    this.state = { temp: 0, weather: "Default" };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      posData =>
        fetchWeather(posData.coords.latitude, posData.coords.longitude).then(
          res =>
            this.setState({
              temp: Math.round(res.temp),
              weather: res.weather
            })
        ),
      error => alert(error),
      { timeout: 10000 }
    );
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: phrases[this.state.weather].background }
        ]}
      >
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <Icon name={iconNames[this.state.weather]} size={80} color="white" />
          <Text style={styles.temp}>{this.state.temp}°</Text>
        </View>
        <View style={styles.body}>
          <Highlight
            style={styles.title}
            highlightStyle={{ color: phrases[this.state.weather].color }}
            searchWords={[phrases[this.state.weather].highlight]}
            textToHighlight={phrases[this.state.weather].title}
          />
          <Text style={styles.subtitle}>
            {phrases[this.state.weather].subtitle}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD017"
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  temp: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 45,
    color: "white"
  },
  body: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    margin: 10
  },
  title: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 78,
    color: "white",
    marginBottom: 5
  },
  subtitle: {
    fontFamily: "HelveticaNeue-Medium",
    fontSize: 16,
    color: "white"
  }
});
