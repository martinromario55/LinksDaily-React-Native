import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const UserInput = ({
  name,
  value,
  setValue,
  autoCapitalize = 'none',
  keyboardType = 'default',
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>{name}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={text => setValue(text)}
        autoCorrect={false}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default UserInput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  form: {
    width: 300,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  textInput: {
    height: 40,
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
})
