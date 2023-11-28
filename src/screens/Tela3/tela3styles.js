import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '95%', 
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    borderColor: '#000',
    borderRadius: 15,
    padding: 10,
   
  },
  button: {
    width: '48%',
    height: 48,
    backgroundColor: '#01633D',
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBack: {
    width: '48%',
    height: 48,
    backgroundColor: '#860929',
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
   
  },
});

export default styles;
