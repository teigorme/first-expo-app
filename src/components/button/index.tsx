import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
      <Text style={styles.title}>Clique aqui!</Text>
    </TouchableOpacity>
  );
};

export default Button;
