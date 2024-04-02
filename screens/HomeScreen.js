import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const generos = [
  { id: 1, nome: "Pop" },
  { id: 2, nome: "Rock" },
  { id: 3, nome: "Funk" },
  { id: 4, nome: "Sertanejo" },
  // Adicione mais gêneros conforme necessário
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      onPress={() => navigation.navigate("Player", { genero: item.nome })}
    >
      <Text>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={generos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;
