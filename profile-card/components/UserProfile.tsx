import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

type UserProfileProps = {
  name: string;
  email: string;
  photo: string;
};

function UserProfile(props: UserProfileProps) {
  return (
    <View>
      <Text>User Profile</Text>
      <Image
        source={{ uri: props.photo }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text>Name: {props.name}</Text>
      <Text>Email: {props.email}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(`mailto:${props.email}`)}>
        <Text style={{ color: 'blue' }}>Send Email</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UserProfile;
