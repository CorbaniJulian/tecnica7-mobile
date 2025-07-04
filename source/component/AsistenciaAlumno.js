import { View, Text, StyleSheet } from 'react-native';

export default function AsistenciaAlumno({ cantidad, tipo, colorTexto, colorBorde, colorFondo }) {
  return (
    <View style={[styles.card, { borderColor: colorBorde }]}>
      <View style={[styles.circulo, { backgroundColor: colorFondo }]}>
        <Text style={styles.numero}>{cantidad}</Text>
      </View>
      <Text style={[styles.tipoTexto, { color: colorTexto }]}>{tipo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
    width: 110,
    height: 90,
    marginHorizontal: 5,
  },
  circulo: {
    width: 40,
    height: 40,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  numero: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tipoTexto: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
