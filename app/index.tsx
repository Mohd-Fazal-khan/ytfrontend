import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/componets/header";
import Card from "@/componets/card";
import { useRouter } from "expo-router";
import axios from "axios";

const Index = () => {
  const router = useRouter();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
        //    "http://192.168.1.7:5000/api/videos"
       "https://ytbackend-rav6.onrender.com/api/videos"
        ); 
        setVideos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVideos();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/video",
          params: {
            videoId: item.videoId,
            title: item.title,
            channel: item.channelTitle,
            videoThumbnail: item.videoThumbnail,
            channelLogo: item.channelLogo, 
            channelSubscribers:item.channelSubscribers,
          },
        })
      }
    >
      <Card
        title={item.title}
        channel={item.channelTitle}
        thumbnail={item.thumbnail}
        channelLogo={item.channelLogo}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header/>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.videoId}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
});
