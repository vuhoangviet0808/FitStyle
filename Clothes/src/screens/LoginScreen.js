import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../theme/globalStyles';

export default function LoginScreen() {
  return (
    <View style={globalStyles.container}>
      {/* Hình nền chính */}
      <ImageBackground
        source={require('../assets/images/backgroundbrown.jpg')}
        style={styles.topBackground}
        resizeMode="cover"
      >
        <Text style={styles.headerTitle}>Welcome{"\n"}Back!</Text>
      </ImageBackground>
      <ImageBackground
        source={require('../assets/images/backgroundwhite.jpg')} 
        style={styles.bottomBackground}
        resizeMode="cover"
      >
        <View style={styles.formContainer}>
          <Text style={globalStyles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <Image source={require('../assets/icon/email.png')} style={styles.icon} />
            <TextInput style={styles.input} placeholder="Enter your Email Address" />
          </View>

          <Text style={globalStyles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <Image source={require('../assets/icon/lock.png')} style={styles.icon} />
            <TextInput style={styles.input} placeholder="Enter your Password" secureTextEntry />
          </View>

          <Text style={styles.forgotPassword}>Forgot Password?</Text>

          <TouchableOpacity style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Or Sign In With</Text>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/icon/google.jpg')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/icon/apple.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/icon/facebook.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  topBackground: {
    width: '100%',
    height: '40%', // Phần nền trên
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBackground: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
    backgroundColor: 'white',
    padding: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    width: '80%',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: 'red',
    marginBottom: 20,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  backButton: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#9E6D4B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  backButtonText: {
    color: '#9E6D4B',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

