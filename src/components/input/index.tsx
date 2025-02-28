import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

const Input = ({ ...rest }: TextInputProps) => {
  return <TextInput {...rest} style={styles.input} />;
};

export default Input;
