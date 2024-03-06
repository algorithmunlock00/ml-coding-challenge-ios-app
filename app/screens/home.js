import React from 'react'
import RNPickerSelect from 'react-native-picker-select'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const allGenres = [
  { label: 'Drama', value: 'drama' },
  { label: 'Comedy', value: 'comedy' },
  { label: 'Thriller', value: 'thriller' },
  { label: 'Action', value: 'action' },
  { label: 'Romance', value: 'romance' },
  { label: 'Adventure', value: 'adventure' },
  { label: 'Crime', value: 'crime' },
  { label: 'Sci-Fi', value: 'sci-fi' },
  { label: 'Horror', value: 'horror' },
  { label: 'Fantasy', value: 'fantasy' },
  { label: 'Children', value: 'children' },
  { label: 'Animation', value: 'animation' },
  { label: 'Mystery', value: 'mystery' },
  { label: 'Documentary', value: 'documentary' },
  { label: 'War', value: 'war' },
  { label: 'Musical', value: 'musical' },
  { label: 'Western', value: 'western' },
  { label: 'IMAX', value: 'imax' },
  { label: 'Film-Noir', value: 'film-noir' },
]

const Home = () => {
  const [userId, setUserId] = React.useState('')
  const [movieGenre, setMovieGenre] = React.useState('')

  const navigation = useNavigation()

  const handleNext = () => {
    if (userId === '' || movieGenre === '') {
      alert('Please enter both User ID and Movie Genre')
      return
    }

    navigation.navigate('Movies List')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Movie Recommendations</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(id) => setUserId(id)}
        placeholder='Enter User ID'
      />
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{
            label: 'Select Movie Genre',
            value: null,
          }}
          onValueChange={(value) => setMovieGenre(value)}
          items={allGenres}
        />
      </View>
      <TouchableOpacity onPress={handleNext} activeOpacity={0.7} style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    width: '80%',
    padding: 12,
  },
  pickerContainer: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    marginTop: 20,
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 60,
  },
  button: {
    marginTop: 30,
    width: '80%',
    height: 40,
    backgroundColor: 'rgb(65, 105, 225)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
})

export default Home
