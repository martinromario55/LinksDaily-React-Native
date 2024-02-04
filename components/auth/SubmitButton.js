import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Platform,
} from 'react-native'
import React from 'react'

const SubmitButton = ({ title, handleSubmit, loading }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Button style={styles.btn} title={loading ? 'Please wait...' : title} />
    </TouchableOpacity>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
  button: {
    width: '50%',
    backgroundColor: Platform.OS === 'ios' ? 'lightblue' : '',
    padding: 10,
    borderRadius: 10,
  },
})
