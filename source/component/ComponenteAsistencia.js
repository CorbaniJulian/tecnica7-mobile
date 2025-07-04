import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ComponenteAsistencia({ text, icon, filled, onPress }) {
    return (
        <TouchableOpacity style={[styles.boton, filled ? styles.filled : styles.outlined]} onPress={onPress}>
            <View style={styles.contenedor}>
                <Text style={[styles.texto, filled ? styles.textFilled : styles.textOutlined]}>
                    {text}
                </Text>
                <View style={styles.icono}>
                    {icon === 'calendar' && (
                        <FontAwesome name="calendar" size={20} color={filled ? "#fff" : "#000080"} />
                    )}
                    {icon === 'file-document' && (
                        <MaterialCommunityIcons name="file-document-outline" size={20} color="#fff" />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    boton: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        borderWidth: 2,
        marginVertical: 10,
        minWidth: 220,
    },
    contenedor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    texto: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textOutlined: {
        color: '#000080',
    },
    textFilled: {
        color: '#fff',
    },
    outlined: {
        backgroundColor: '#fff',
        borderColor: '#000080',
    },
    filled: {
        backgroundColor: '#000080',
        borderColor: '#000080',
    },
    icono: {
        marginLeft: 10,
    },
});
