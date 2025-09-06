import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Header from "@/componets/header";
import YoutubePlayer from "react-native-youtube-iframe";
import { useLocalSearchParams } from "expo-router";

const VideoScreen = () => {
  const params = useLocalSearchParams();
  const { videoId, title, channel, channelLogo ,channelSubscribers} = params;

  return (
    <>
      <Header />
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
       
        <View style={styles.video}>
          {videoId ? (
            <YoutubePlayer
              height={220}
              play={true}
              videoId={videoId}
            />
          ) : (
            <Text style={styles.videoText}>Video Player</Text>
          )}
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>{title}</Text>

       
          <View style={styles.channelRow}>
            <Image
              source={channelLogo ? { uri: channelLogo } : require('../assets/images/favicon.png')}
              style={styles.channelImage}
            />
            <View>
              <Text style={styles.channelName}>{channel}</Text>
              <Text style={styles.subtxt}>{channelSubscribers} Subscribers</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  video: {
    backgroundColor: "#000",
    borderRadius: 15,
    width: "100%",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  videoText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    padding: 20,
  },
  body: {
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  channelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  channelImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  channelName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtxt: {
    fontSize: 13,
    color: "#888",
  },
});
