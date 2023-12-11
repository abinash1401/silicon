import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#877dfa" }}>

      <View style={{ flex: 2, alignItems: "center", flexDirection: "column" }}>
        <Text style={{ color: "white", fontSize: 35, fontWeight: "800", textAlign: "center", margin: 60 }}>Let's Get Started !!</Text>
        <Image style={{ width: 220, height: 220, borderRadius: 200,marginTop:30}}
          source={{ uri: "https://i.pinimg.com/736x/93/a2/ca/93a2cac79a0d161b0f28042a94987098.jpg" }} />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', marginRight: 5, marginLeft: 5 }}>
        <View style={{ backgroundColor: "#FFD700", height: 45, marginRight: 30, marginLeft: 30, marginTop: 20, borderRadius: 20, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{ textAlign: 'center',fontSize: 23, fontWeight: 'bold' }}>SignUp</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop:15 }}>
          <Text style={{ fontSize: 18 }}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#FFD700" }}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Welcome