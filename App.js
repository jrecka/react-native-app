import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  state = {
    items: new Array(100).fill(0).map((array, item) => item).map(item => ({
      title: `Super Title ${item}`,
      key: item,
      content: `Super content number ${item}. I made it by myself! Tadam :D`,
    })),
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.items} renderItem={this.renderItem} />
      </View>
    );
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#33383f',
    
  },
  item: {
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 20,
    color: '#f2f5f9',
  },
  content: {
    marginBottom: 10,
    color: '#f2f5f9',
    fontSize: 15,
  },
});
