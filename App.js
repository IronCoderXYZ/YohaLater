import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Button, ButtonGroup, Card, Header, FormLabel, FormInput } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const convert = {
  bin2dec : s => parseInt(s, 2).toString(10),
  bin2hex : s => parseInt(s, 2).toString(16),
  dec2bin : s => parseInt(s, 10).toString(2),
  dec2hex : s => parseInt(s, 10).toString(16),
  hex2bin : s => parseInt(s, 16).toString(2),
  hex2dec : s => parseInt(s, 16).toString(10)
};

export default class App extends React.Component {
  constructor () {
    super()
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  state = { input: '', output: 'Empty', selectedIndex: 2 }

  onButtonPress = () => {
    result = convert.dec2bin(this.state.input);

    this.setState({ output: result.split(/(.{4})/g).join(' ') })
  }

  onClearPress = () => {
    this.setState({ output: '', input: '' })
  }

  render() {
    const buttons = ['Dec2Bin', 'Bin2Dec', 'Dec2Hex', 'Dec2Oct']
    const { selectedIndex } = this.state

    return (
      <View style={{ flex: 1 }}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'YohaLater', style: { color: '#fff' } }}
          rightComponent={{ icon: 'info', color: '#fff' }}
          backgroundColor='#03A9F4'
        />

        <View style={{ paddingTop: 64 }}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 50}} />

          <Card title='Input'>
            <FormLabel style={{alignSelf: 'center' }}>
              Quantity to Convert
            </FormLabel>
            <FormInput
              value={ this.state.input }
              onChangeText={ input => this.setState({ input }) } />
          </Card>

          <Card title='Output'>
            <Text style={{marginBottom: 10, alignSelf: 'center' }}>
              <Text>{this.state.output}</Text>
            </Text>
          </Card>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            raised
            iconRight
            onPress={this.onButtonPress}
            icon={{name: 'clear'}}
            backgroundColor="#c0392b"
            title='Clear' />
          <Button
            style={{ paddingTop: 15 }}
            raised
            iconRight
            onPress={this.onClearPress}
            icon={{name: 'cached'}}
            backgroundColor="#03A9F4"
            title='Convert' />
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
});
