import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

function List({ a, navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Details", { a: a});
      }}
    >
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={require("../img/b.png")} />
        <View flexDirection="row">
          <View>
            <Text style={{ marginRight: 10 }}>{a.name}</Text>
            <Text>{a.price}</Text>
          </View>
          <View style={{ marginTop: 10, marginLeft: 20 }}>
            <Image
              style={{ width: 20, height: 20, resizeMode: "contain" }}
              source={require("../img/va.png")}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  star: {
    paddingLeft: 10,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
  tinyLogo: {
    resizeMode: "stretch",
    height: 100,
    width: 150,
  },
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "lightgray",
  },
});

export default List;