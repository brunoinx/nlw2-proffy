import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 26,
    paddingHorizontal: 27,
    backgroundColor: '#8257e5',

  },
  topBar: {
    marginTop: 14,
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
  header: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Archivo_700Bold',
    lineHeight: 24,
    maxWidth: 160,
    marginVertical: 35,
  },
});

export default styles;