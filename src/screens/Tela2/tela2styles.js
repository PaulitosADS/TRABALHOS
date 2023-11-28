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
    marginBottom: 40,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 50,
  },
  label: {
    fontSize: 15,
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
    width: 175,
    height: 48,
    backgroundColor: '#01633D',
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
    
  },
});

export default styles;
