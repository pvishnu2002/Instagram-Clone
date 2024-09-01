import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import styles from './styles'; // Adjust path if necessary
import {Formik} from 'formik';
import * as Yup from 'yup'; // Import Yup
import {GenericInputBox} from '../Component/GenericInputBox';
import {GenericButton} from '../Component/GenericButton';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: '',
    
    };
  }

  submitFormData = (values) => {
    console.log('handle Form Data',values);
  };

  validationSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email address') // Email validation rule
    .required('Email is required'), // Required field rule
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long') // Minimum length rule
    .required('Password is required'), // Required field rule
  })
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          {/* form container */}
          <Formik
            onSubmit={this.submitFormData}
            initialValues={{email:'',password:''}}
            validationSchema={this.validationSchema}>
            {({
              handleChange,
              handleSubmit,
              handleBlur,
              values,
              touched,
              errors,
            }) => (
              <View style={styles.mainContainer}>
                <View style={styles.imgContainer}>
                  <Image
                    source={require('../assets/logo.png')}
                    style={styles.img}
                  />
                  <Text style={styles.text}>Instagram</Text>
                </View>
                <View style={styles.inputContainer}>
                  <GenericInputBox
                    placeholder={'Username, email or mobile number'}
                    isSecureTextEntry={false}
                    value={values.email}
                    handleBlur={() => handleBlur('email')}
                    handleChange={() => handleChange('email')}
                    error={errors.email}
                    touched={touched.email}
                  />
                  <GenericInputBox
                    placeholder={'Password'}
                    isSecureTextEntry={true}
                    value={values.password}
                    handleBlur={() => handleBlur('password')}
                    handleChange={() => handleChange('password')}
                    error={errors.password}
                    touched={touched.password}
                  />
                  <TouchableOpacity
                    style={styles.forgotBtn}
                    onPress={() => console.log('press')}>
                    <Text style={styles.forgotTxt}>Forgot password?</Text>
                  </TouchableOpacity>


                  <View style={styles.buttonCont}>
                    <GenericButton
                      handleSubmit={handleSubmit}
                      buttonText={'Login'}
                    />
                    <View style={styles.signUpView}>
                      <Text style={styles.accTxt}>Don't have account?</Text>
                      <TouchableOpacity>
                        <Text style={styles.signUpTxt}>Sign Up</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    );
  }
}
