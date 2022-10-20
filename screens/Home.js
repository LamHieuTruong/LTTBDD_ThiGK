import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TextInput,
    Image,
    
  } from "react-native";
  import data from "../data";
  import List from "./List";
  import Icon from "react-native-vector-icons/Feather";
  function Home({navigation}) {
    return (
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
          },
        ]}
      >
        <View>
            <View flexDirection="row">
            <Image style={styles.tinyLogo} source={require("../img/v.png")} />
            <TextInput style={styles.Home}>Home</TextInput>
            <Image style={styles.dn} source={require("../img/dn.png")} />
            
            
            </View>
            
          <Text style={styles.title}>Find Best Burger in Your City</Text>
          <View flexDirection="row">
            <TextInput style={styles.input} placeholder="Search..." />
            <Icon
              name="search"
              size={30}
              color="#900"
              style={{ marginTop: 15, marginLeft: 50 }}
            />
          </View>
          <Text style={styles.title}>Near You now</Text>
        </View>
        <View style={{ flex: 1 }}>
        <FlatList
          numColumns={2}
          keyExtractor={(data) => data.key}
          data={data}
          renderItem={(data) => <List a={data.item} navigation={navigation} />}
        />
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tinyLogo: {
        position: "absolute",
        marginTop: 15,
        marginLeft: 15
        

    },
    dn: {
        marginLeft: 120,
        marginTop: 2
        

    },
    title: {
    marginTop: 15,  
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 15,
    },
    Home: {
        textAlign: "center",
        fontSize: 18,
        marginLeft: 160,
        marginTop: 10,
        fontWeight: "bold",

    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 250,
      borderRadius: 20,
    },
  });
  
  export default Home;