import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
};

const Button = (props: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
