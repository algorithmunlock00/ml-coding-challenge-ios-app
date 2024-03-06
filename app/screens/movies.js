import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Movies = (props) => {
  const [movies, setMovies] = React.useState([
    'Lawrence of Arabia (1962) - Estimated Rating: 5.00',
    'Full Metal Jacket (1987) - Estimated Rating: 4.96',
    'Life Is Beautiful (La Vita è bella) (1997) - Estimated Rating: 4.96',
    'Apocalypse Now (1979) - Estimated Rating: 4.91',
    'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964) - Estimated Rating: 4.90',
  ])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 5 Recommended Movies:</Text>
      <View style={styles.listContainer}>
        {movies.map((movie, index) => (
          <View key={index} style={styles.list} >
            <Text style={styles.id} >{index + 1}-</Text>
            <Text key={index}>{movie}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' },
  title: { fontSize: 20, fontWeight: 'bold' },
  listContainer: {
    width: '90%',
    marginTop: 20,
  },
  list: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 0.5,
    padding: 10
  },
  id: {
    fontWeight: 'bold',
    marginRight: 10
  }
})

export default Movies
