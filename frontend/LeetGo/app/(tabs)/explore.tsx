import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Touchable } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { ProgressBar } from '@/components/ProgressBar';

export default function TabTwoScreen() {
  const router = useRouter();
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  
  const words= ['car', 'racecar', 'LeetGo', 'cat'];
  const handleSubmit = () => {
    if (selectedWord === 'racecar') {
      router.push('/pointers')
    } else {
      alert('Incorrect. Try again!');
    }
    setSelectedWord(null); // Reset selection after submission
  }

  return (
    <ThemedView style={styles.container}>
        <ProgressBar/>
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
