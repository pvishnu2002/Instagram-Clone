import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50, // Adjusted for proper spacing
  },
  text: {
    marginTop: 10, // Adjusted for proper alignment
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000', // Added color for text
  },
  img: {
    width: width * 0.3, // Adjusted to match the design
    height: height * 0.15, // Adjusted to match the design
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '100%', // Adjusted to take full width
    marginTop: 20, // Adjusted for proper spacing
  },
  forgotBtn: {
    marginTop: 10, // Adjusted for proper spacing
    alignItems: 'flex-end', // Align to the end
  },
  forgotTxt: {
    color: '#ff661a', // Adjusted color to match the button
    fontWeight: '400',
    fontSize: 14,
  },
  buttonCont: {
    marginTop: '28%', // Adjusted for spacing
    // width: '90%', // Full width button
    // alignItems: 'center',
  },
  signUpView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%', // Adjusted spacing for the SignUp text
  },
  accTxt: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000', // Added color for text
  },
  signUpTxt: {
    color: '#ff661a',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 4,
  },
});

export default styles;
