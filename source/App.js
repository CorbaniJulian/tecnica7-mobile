import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ComponenteAsistencia from './component/ComponenteAsistencia';
import AsistenciaAlumno from './component/AsistenciaAlumno';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido a Técnica 7</Text>

      <View style={styles.botonesArriba}>
        <ComponenteAsistencia
          text="Histórico"
          icon="calendar"
          filled={false}
          onPress={() => alert("Ver histórico")}
        />

        <ComponenteAsistencia 
          text="Tomar Asistencia"
          icon="file-document"
          filled={true}
          onPress={() => alert("Tomando asistencia")}
        />
      </View>

      <View style={styles.botonesAbajo}>
        <AsistenciaAlumno
          cantidad={12}
          tipo="Presentes"
          colorTexto="#61A100"
          colorBorde="#61A100"
          colorFondo="#61A100"
        />
        <AsistenciaAlumno
          cantidad={2}
          tipo="Tardanzas"
          colorTexto="#FFA339"
          colorBorde="#FFA339"
          colorFondo="#FFA339"
        />
        <AsistenciaAlumno
          cantidad={7}
          tipo="Ausentes"
          colorTexto="#FF6C6C"
          colorBorde="#FF6C6C"
          colorFondo="#FF6C6C"
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botonesArriba: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginBottom: 30,
  },
  botonesAbajo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});

