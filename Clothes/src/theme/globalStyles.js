import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#9E6D4B',
  secondary: '#ffffff',
  background: '#f5f5f5',
  textDark: '#9E6D4B',
  textLight: '#fff',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textDark,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: colors.textLight,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
