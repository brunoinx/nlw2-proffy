import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7'
  },

  teacherList: {
    marginTop: -50,
  },

  searchForm:{
    marginBottom: 24,
    top: -20,
  },

  label:{
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
  },

  input:{
    height: 44,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 12,
  },

  inputGroup:{
    top: -4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock:{
    width: '48%',
  },

  submitButton:{
    top: -4,
    backgroundColor: '#04d361',
    height: 48,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText:{
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
});

export default styles;