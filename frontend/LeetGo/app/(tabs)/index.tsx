import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';


  const HomeScreen = () => {
    const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity onPress={()=>{router.push("/explore")}}>
        <Text>Go to next Problem</Text>
      </TouchableOpacity>

    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 70, flex: 1},

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

  speechBubble: { flexDirection: 'row', alignItems: 'center', marginVertical: 20, color: 'white' },
  speechText: { fontSize: 16, fontStyle: 'italic', color: 'white' },

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
    backgroundColor: 'grey',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    margin: 4,
  },
  wordText: {
    fontSize: 16,
    color: 'white',
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

export default HomeScreen;
