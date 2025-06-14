import { ThemedView } from "@/components/ThemedView";
import React, {useEffect, useState} from "react";
import { useRouter } from "expo-router";
import { ProgressBar } from "@/components/ProgressBar";
import { StyleSheet } from "react-native";

export default function PointersScreen() {
    const router = useRouter();

    return (
        <ThemedView style={styles.container}>
            <ProgressBar/>
        </ThemedView>
    );
}
const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 70, flex: 1, color: 'white'},


})