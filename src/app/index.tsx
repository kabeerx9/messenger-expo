import { Image, Text, View } from "react-native";
import imagePath from "../constants/imagePath";



const IndexScreen = () => {
  return (
    <View>
      <Text>Hello sir again kabeer niggesh</Text>
      <Image source={imagePath.react_logo} />
    </View>
  );
};

export default IndexScreen;
