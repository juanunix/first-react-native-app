import React from "react"
import { StyleSheet, FlatList } from "react-native"

import ArtistBox from "./artistBox"

export default class ArtistList extends React.Component {
  render() {
    const _keyExtractor = (item, index) => `${item.id}${index}`
    const { artists } = this.props
    console.warn("before list", JSON.stringify(artists[0]))
    return (
      <FlatList
        data={artists}
        keyExtractor={_keyExtractor}
        renderItem={artistItem => (
          <ArtistBox key={artistItem.id} artist={artistItem.item} />
        )}
      />
    )
  }
}

const styles = StyleSheet.create({})
