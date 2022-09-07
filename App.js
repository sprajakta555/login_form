import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './Pages/LoginPage';
import SignPage from './Pages/SignPage';

export default function App() {
  return (
      <SignPage></SignPage>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
