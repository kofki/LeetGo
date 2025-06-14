import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function TabTwoScreen() {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  
  const words= ['car', 'racecar', 'LeetGo', 'cat'];

  return (
    <ThemedView style={styles.container}>
      <View style={[styles.progressContainer]}>
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
            <TouchableOpacity style={styles.checkButton} onPress={()=> console.log(`Selected word: ${selectedWord}`)}>
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
    marginLeft: 45,
    marginRight: 10,
    marginBottom: 20,
    width: 275,
    height: 20,
    backgroundColor: '#1ae617',
    borderRadius: 20,
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
    marginTop: 20,
    backgroundColor: 'lightgreen',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  checkButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
