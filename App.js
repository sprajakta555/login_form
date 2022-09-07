import { StyleSheet, Text, View } from 'react-native';
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
