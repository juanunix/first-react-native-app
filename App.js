import React from "react"
import { StyleSheet, View, FlatList } from "react-native"

import ArtistList from "./components/artistList"

export default class App extends React.Component {
  render() {
    const artist = {
      image:
        "https://upload.wikimedia.org/wikipedia/en/4/44/Slipknot_-_Slipknot2.jpg",
      name: "Slipknot",
      likes: 200,
      comments: 140
    }
    const artists = Array(500)
      .fill(artist)
      .map((item, idx) => {
        item.id = idx
        return item
      })
    return (
      <View style={styles.container}>
        <ArtistList artists={artists} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "lightgray"
  }
})
