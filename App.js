import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Button, Card, Header, FormLabel, FormInput } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class App extends React.Component {
  state = { input: '', conversion: 'Empty' }

  onButtonPress = () => {
    this.setState({ conversion: this.state.input + 'asdff' })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'YohaLater', style: { color: '#fff' } }}
          rightComponent={{ icon: 'info', color: '#fff' }}
          backgroundColor='#03A9F4'
        />

        <View style={{ paddingTop: 64 }}>
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
              <Text>{this.state.conversion}</Text>
            </Text>
          </Card>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            raised
            iconRight
            onPress={this.onButtonPress}
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
