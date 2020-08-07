import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 27,
    backgroundColor: '#8257e5',

  },
  topBar: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBack: {
    width: 26,
  },
  iconLogo: {
    width: 55,
    height: 16
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Archivo_700Bold',
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },
});

export default styles;