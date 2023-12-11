import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#877dfa" }}>

      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', margin: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: "#FFD700", width: 50, height: 50, borderTopRightRadius: 15, borderBottomLeftRadius: 15 }}>
          {/* <Icon name="music" size={48} color="black"/> */}
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Image source={{ uri: "https://i.pinimg.com/736x/93/a2/ca/93a2cac79a0d161b0f28042a94987098.jpg" }}
          style={{ width: 180, height: 180, borderRadius: 200, marginBottom: 20 }} />
      </View>


      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', borderTopRightRadius: 50, borderTopLeftRadius: 50, marginRight: 5, marginLeft: 5 }}>
      <ScrollView>
        <View style={{ marginLeft: 30, marginRight: 30, marginTop: 25, }}>

          <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 10, marginLeft: 20 }}>SIC Number</Text>
          <TextInput style={{ backgroundColor: "#E8E8E8", borderRadius: 20, paddingLeft: 15, textAlign: 'auto' }}
            placeholder="email"
          // value='abinashsamantaray555@gmail.com'
          />

          <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 10, marginTop: 20, marginLeft: 20 }}>Password</Text>
          <TextInput
            style={{ backgroundColor: "#E8E8E8", borderRadius: 20, paddingLeft: 15, textAlign: 'auto' }}
            secureTextEntry
            scrollEnabled={false}
            placeholder="password"
          // value='qwertyuiop0986'
          />

          <TouchableOpacity>
            <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'right' }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "#FFD700", height: 40, marginRight: 30, marginLeft: 30, marginTop: 20, borderRadius: 20, justifyContent: 'center' }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Text style={{ textAlign: 'center', }}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
          <Text style={{ fontSize: 18 }}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#FFD700" }}> SignUp</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>

    </SafeAreaView >
  );
}

export default Login