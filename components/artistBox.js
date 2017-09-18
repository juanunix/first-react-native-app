import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default class ArtistBox extends React.PureComponent {
  // console.log(likes)
  render() {
    const { name, likes, comments, image } = this.props.artist
    return (
      <View style={styles.artistBox}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Ionicons name="ios-heart-outline" size={30} color="gray" />
              <Text style={styles.count}>{likes}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Ionicons name="ios-chatbubbles-outline" size={30} color="gray" />
              <Text style={styles.count}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150
  },
  artistBox: {
    margin: 5,
    backgroundColor: "white",
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 5
  },
  info: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: "#333"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
    marginTop: 20
  },
  iconContainer: {
    flex: 1,
    alignItems: "center"
  },
  count: {
    color: "gray"
  }
})
