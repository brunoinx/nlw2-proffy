import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: "center",
    padding: 40,
  },
  banner: {
    width: '100%',
    resizeMode: 'contain', //Usada p/ redimensionar a Img de acordo com o size da tela;
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    color: '#fff',
    marginTop: 80,
    lineHeight: 30,
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: "space-between",
  },
  button: {
    height: 130,
    width: '48%',
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#9871f5'
  },
  buttonSecondary: {
    backgroundColor: '#04d361',
  },
  imgButtonSecondary: {
    marginTop: 5,
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 18,
    color: '#fff'
  },
  totalConnections: {
    color: '#d4c2ff',
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 140,
    fontFamily: 'Archivo_400Regular',
    marginTop: 40,
  },
})

export default styles;