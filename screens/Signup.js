import { StyleSheet, Text, View, TextInput } from 'react-native'
import { useState } from 'react'
import UserInput from '../components/auth/UserInput'

const Signup = () => {
  // name state
  const [name, setName] = useState('')
  // email state
  const [email, setEmail] = useState('')
  // password state
  const [password, setPassword] = useState('')
  // is loading
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Signup</Text>
      <UserInput name="NAME" value={name} setValue={setName} />
      <UserInput name="EMAIL" value={email} setValue={setEmail} />
      <UserInput name="PASSWORD" value={password} setValue={setPassword} />

      <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text>
    </View>
  )
}

export default Signup

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
    fontWeight: 'bold',
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
