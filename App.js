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
  state = { input: '', output: 'The conversion will appear here', selectedIndex: 0 }

  constructor () {
    super()
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  onButtonPress = () => {
    switch(this.state.selectedIndex) {
      case 0:
        result = convert.dec2bin(this.state.input);
        this.setState({ output: result.split(/(.{4})/g).join(' ') })
        break;
      case 1:
        result = convert.dec2hex(this.state.input);
        this.setState({ output: result.split(/(.{4})/g).join(' ') })
        break;
      case 2:
        result = convert.bin2dec(this.state.input);
        this.setState({ output: result.split(/(.{4})/g).join(' ') })
        break;
      case 3:
        result = convert.bin2hex(this.state.input);
        this.setState({ output: result.split(/(.{4})/g).join(' ') })
        break;
      default:
        this.setState({ output: 'The conversion will appear here' });
        break;
    }
  }

  onClearPress = () => {
    this.setState({
      output: 'The conversion will appear here',
      input: '',
    })
  }

  render() {
    const buttons = ['Dec -> Bin', 'Dec -> Hex', 'Bin -> Dec']
    const { selectedIndex } = this.state

    return (
      <View style={{ flex: 1, backgroundColor: '#4589B0' }}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'YohaLater', style: { color: '#fff' } }}
          rightComponent={{ icon: 'info', color: '#fff' }}
          backgroundColor='#1D628B'
        />

        <View style={{ paddingTop: 64 }}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 50}} />

          <Card title={buttons[this.state.selectedIndex]}>
            <FormLabel style={{ alignSelf: 'center' }}>
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
            onPress={this.onClearPress}
            icon={{name: 'clear'}}
            backgroundColor="#c0392b"
            title='Clear' />
          <Button
            style={{ paddingTop: 15 }}
            raised
            iconRight
            onPress={this.onButtonPress}
            icon={{name: 'cached'}}
            backgroundColor="#1D628B"
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
