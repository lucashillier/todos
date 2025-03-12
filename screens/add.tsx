import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { useState } from 'react';

import { COLORS } from 'assets/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation';
import { useNavigation } from '@react-navigation/native';

const Add = () => {
  const [title, setTitle] = useState<string>('');

  type homeScreenProp = StackNavigationProp<RootStackParamList, 'Add'>;
  const navigation = useNavigation<homeScreenProp>();

  return (
    // Wrapper
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>New To-Do</Text>

      {/* Control Wrapper */}
      <KeyboardAvoidingView style={styles.controlWrapper}>
        <TextInput
          onChangeText={(text) => setTitle(text)}
          style={styles.input}
          placeholder="Title"
          placeholderTextColor={COLORS.border}
        />
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => navigation.popTo('Home', { title })}
            disabled={title === ''}
            title="Add"
            color={COLORS.primary}
            accessibilityLabel="Add To-Do"
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.background,
    alignItems: 'flex-start'
  },
  controlWrapper: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20,
    minWidth: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    padding: 15,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderColor: COLORS.border,
    borderWidth: 1,
    minWidth: '100%'
  },
  buttonWrapper: {
    alignSelf: 'flex-end'
  }
});

export default Add;
