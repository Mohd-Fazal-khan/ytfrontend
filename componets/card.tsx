import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Card = ({ title, channel, thumbnail, channelLogo }) => {
  return (
    <View style={styles.card} activeOpacity={0.8}>
     
      <View style={styles.video}>
        <Image
          source={{ uri: thumbnail }}
          style={styles.thumbnail}
          resizeMode="cover"
        />
      </View>

   
      <View style={styles.textMain}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.channelRow}>
          <Image
            source={
              channelLogo
                ? { uri: channelLogo }
                : require('../assets/images/favicon.png')
            }
            style={styles.channelImage}
          />
          <Text style={styles.subtxt} numberOfLines={1}>
            {channel}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 120,
    marginHorizontal: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  video: {
    borderRadius: 12,
    height: '100%',
    width: '40%',
    overflow: 'hidden',
    backgroundColor: '#ddd',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  textMain: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: '#111',
  },
  channelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  channelImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
  subtxt: {
    fontWeight: '400',
    fontSize: 14,
    color: '#555',
    flexShrink: 1,
  },
});
