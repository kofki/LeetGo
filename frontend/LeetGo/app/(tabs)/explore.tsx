import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Touchable } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const router = useRouter();
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  
  const words= ['car', 'racecar', 'LeetGo', 'cat'];
  const handleSubmit = () => {
    if (selectedWord === 'racecar') {
      alert('Correct! "racecar" is a palindrome.');
    } else {
      alert('Incorrect. Try again!');
    }
    setSelectedWord(null); // Reset selection after submission
  }
  const handleExit = () => {
    alert('Exiting the game...');
    router.dismissAll();
  }

  return (
    <ThemedView style={styles.container}>
      <View style={[styles.progressContainer]}>
              <TouchableOpacity onPress={()=> handleExit()}>
                <Text style={styles.exit}>X</Text>
              </TouchableOpacity>
              <View style={styles.progressBar} />
              <Text style={styles.hearts}>❤️ 5</Text>
            </View>
            <Text style={styles.instruction}>Which of these words is a palindrome?</Text>
            <FlatList data={words}
                      renderItem={({ item }) => {
                        const isSelected = selectedWord === item;
                        return(
                        <TouchableOpacity style={[styles.wordButton, isSelected && styles.wordButtonSelected]} onPress={() =>setSelectedWord(item)}>
                          <Text style={styles.wordText}>{item}</Text>
                        </TouchableOpacity>
                        );
                    }}
                      keyExtractor={(item) => item}/>
            <TouchableOpacity style={styles.checkButton} onPress={()=> handleSubmit()}>
                    <Text style={styles.checkButtonText}>CHECK</Text>
            </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 70, flex: 1, color: 'white'},
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    gap: 10,
  },
  progressBar: {
    marginLeft: 10,
    marginRight: 10,
    width: 275,
    height: 20,
    backgroundColor: '#1ae617',
    borderRadius: 20,
  },
  exit: {
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
  },
  hearts: { fontSize: 16, color: 'white' },
  instruction: {  fontSize: 18, fontWeight: 'bold', marginVertical: 10, color: 'white' },

  wordButton : {
    backgroundColor: 'grey',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordButtonSelected: {
    backgroundColor: '#4CAF50', // green highlight
  },
  wordText: {
    color: 'white',
  },

  checkButton: {
    backgroundColor: 'lightgreen',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 100,
  },
  checkButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
