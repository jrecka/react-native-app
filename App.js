import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TextInput } from 'react-native';
import { Constants } from 'expo';


export default class App extends Component {
  state = {
    items: new Array(50).fill(0).map((array, item) => item).map(item => ({
      title: `Super Title ${item}`,
      key: item,
      content: `Super content number ${item}. I made it by myself! Tadam :D`,
    })),
    value: '', 
    actions: [],
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeHolder='Enter text'
          returnKeyType='done'
          value={this.state.value}
          onChangeText={this.textChanged}
          onSubmitEditing={this.submit}/>
          <View style={styles.container}>
          {this.state.actions.map(({ timestamp, type, value }) => (
            <Text key={timestamp}>
              <Text style={{ fontWeight: 'bold' }}>{type}</Text>
              <Text>{JSON.stringify(value)}</Text>
            </Text>
          ))}
          </View>
        <FlatList data={this.state.items} renderItem={this.renderItem} />
      </View>
    );
  }
  textChanged = text => 
    this.setState(state => ({
      value: text,
      actions: state.actions.concat({
      timestamp: new Date().getTime(),
      type: 'TEXT_CHANGED',
      value: text,
    }),
    }))
  

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );

submit = () =>
    this.setState(state => ({
      actions: state.actions.concat({
        timestamp: new Date().getTime(),
        type: 'TEXT_SUBMIT',
      }),
    }));
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
