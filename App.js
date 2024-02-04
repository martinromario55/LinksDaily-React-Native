import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'
import Welcome from './components/Welcome'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Welcome name="Martin" />
    </View>
    // <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
