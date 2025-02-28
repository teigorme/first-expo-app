import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

const Button = ({ title, ...rest }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
