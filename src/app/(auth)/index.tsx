import imagePath from "@/src/constants/imagePath";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthIndexScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.body} >
                <Image source={imagePath.react_logo} style={styles.logo} />
                 </View>
            <View style={styles.footer} >
                <Text style={styles.from_text}>From</Text>
                <Text style={styles.facebook_text}>Facebook</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "space-between",
        paddingVertical  : 70,
    },
    header : {},
    body : {},
    logo : {
        width : 50,
        height : 50,
        resizeMode : "contain",
        borderRadius : 10,
    },
    footer : {
        alignItems : "center",
    },
    from_text : {
        fontSize : 12,
        color : "#867373"
    },
    facebook_text : {
        fontSize : 15,
        color : "black",
    }
})

export default AuthIndexScreen;
