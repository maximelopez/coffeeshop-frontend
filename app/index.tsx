import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Anastasia</Text>
      <Text style={styles.subtitle}>Bienvenue à Academy of Coffee !</Text>
      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Go to coffeeshop</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "brown",
    backgroundColor: "beige",
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'brown',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    backgroundColor: 'beige',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  buttonContainer: {
    width: 245,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#DDB892',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  }
});