import { Alert } from "react-native";

export const AuthAlert = (title, message) => {
  Alert.alert(
    title,
    message,
    [
      { text: 'OK', style: 'cancel' },
    ]
  )
}