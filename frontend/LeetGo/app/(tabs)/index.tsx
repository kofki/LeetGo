import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';


const WordButton = ({ word, onPress }) => (
  <TouchableOpacity style={styles.wordButton} onPress={() => onPress(word)}>
      <Text style={styles.wordText}>{word}</Text>
    </TouchableOpacity>
  );
  const wordBank = ['vas', 'a', 'buenas', 'mi', 'padre', 'dias', 'noches'];

  const HomeScreen = () => {
    const [selectedWords, setSelectedWords] = useState([]);
    
  const handleWordPress = (word) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setSelectedWords([...selectedWords, word]);
  };

  const handleSelectedWordPress = (word) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setSelectedWords(selectedWords.filter(w => w !== word));
  };


  return (
    <View style={styles.container}>
      {/* Progress */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar} />
        <Text style={styles.hearts}>❤️ 5</Text>
      </View>

      <Text style={styles.instruction}>Translate this sentence</Text>

      {/* Prompt */}
      <View style={styles.speechBubble}>
        <Text style={styles.speechText}>Good evening.</Text>
      </View>

      {/* Translation line */}
      <View style={styles.translationBox}>
        <View style={styles.translationLine}>
          {selectedWords.map((word, index) => (
            <WordButton key={index} word={word} onPress={handleSelectedWordPress} />
          ))}
        </View>
      </View>

      {/* Word bank */}
      <View style={styles.wordBank}>
        {wordBank.map((word, index) => {
          const isSelected = selectedWords.includes(word);
          return isSelected ? (
            <View key={index} style={styles.placeholderButton}>
              <Text style={styles.wordText}>{word}</Text>
            </View>
          ) : (
            <WordButton key={index} word={word} onPress={handleWordPress} />
          );
        })}
      </View>




      {/* Check button */}
      <TouchableOpacity style={styles.checkButton}>
        <Text style={styles.checkButtonText}>CHECK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 70, flex: 1, backgroundColor: '#fff' },

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
  hearts: { fontSize: 16 },

  instruction: {  fontSize: 18, fontWeight: 'bold', marginVertical: 10 },

  speechBubble: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  speechText: { fontSize: 16, fontStyle: 'italic' },

  translationBox: {
    minHeight: 40,
    borderBottomWidth: 3,
    borderColor: '#ccc',
    justifyContent: 'center',
    marginBottom: 20,
  },
  translationLine: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  wordBank: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  wordButton: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    margin: 4,
  },
  wordText: {
    fontSize: 16,
  },
placeholderButton: {
  backgroundColor: '#ddd',
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 6,
  margin: 4,
  alignItems: 'center',
  opacity: 0.4,
},


  checkButton: {
    marginTop: 20,
    backgroundColor: '#ccc',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  checkButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
