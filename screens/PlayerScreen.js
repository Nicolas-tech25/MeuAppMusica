import React from "react";
import { View, Text, Button } from "react-native";
import { Audio } from "expo-av";

const musicaPorGenero = {
  Pop: require("./assets/musica_pop.mp3"),
  Rock: require("./assets/musica_rock.mp3"),
  Funk: require("./assets/musica_funk.mp3"),
  Sertanejo: require("./assets/musica_sertanejo.mp3"),
  // Adicione mais músicas conforme necessário
};

const PlayerScreen = ({ route }) => {
  const { genero } = route.params;
  const musica = musicaPorGenero[genero];

  const playMusica = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(musica);
      await soundObject.playAsync();
    } catch (error) {
      console.error("Erro ao reproduzir música:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Reproduzindo música de {genero}</Text>
      <Button title="Reproduzir" onPress={playMusica} />
    </View>
  );
};

export default PlayerScreen;
