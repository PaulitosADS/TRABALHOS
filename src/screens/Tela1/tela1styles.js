import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uniparContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  uniparText: {
    
    fontWeight: 'bold',
    fontSize: 30,
    color: '#333333',
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  iniciarContainer: {
    width: 200,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01633D',
    margin: 20,
  },
  iniciarText: {
    
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default styles;
