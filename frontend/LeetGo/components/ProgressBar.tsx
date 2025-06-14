import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useRouter } from 'expo-router';

export const ProgressBar = () => {
    
    const router = useRouter();

    const handleExit = () => {
        router.dismissAll();
    };
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View style={[styles.progressContainer]}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.exit}>X</Text>
            </TouchableOpacity>
            <View style={styles.progressBar} />
            <Text style={styles.hearts}>❤️ 5</Text>
            <Modal visible={modalVisible} transparent={true} animationType="fade" onRequestClose={() => setModalVisible(false)}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <Modal transparent={true} visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
                            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={{padding: 20, backgroundColor: 'darkgrey', borderRadius: 10, height: 230, width: '100%'}}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: 'white' }}>Are you sure you want to leave?</Text>
                            <TouchableOpacity onPress={()=>setModalVisible(false)} style={{ marginTop: 20, backgroundColor: 'lightgreen', padding: 10, borderRadius: 5 }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Continue</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleExit} style={{ marginTop: 10, padding: 10, borderRadius: 5 }}>
                                <Text style={{ color: 'red', textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Exit</Text>
                                </TouchableOpacity>
                        </View>
                        </View>
                        </Modal>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
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
  hearts: { fontSize: 16, color: 'white' }})