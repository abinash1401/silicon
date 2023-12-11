import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#877dfa" }}>

      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', margin: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: "#FFD700", width: 50, height: 50, borderTopRightRadius: 15, borderBottomLeftRadius: 15 }}>
          {/* <Icon name="music" size={48} color="black"/> */}
        </TouchableOpacity>
        <Text style={{ fontSize: 35, fontWeight: 'bold', marginLeft: 85 }}> Signup </Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', borderTopRightRadius: 50, borderTopLeftRadius: 50, marginRight: 5, marginLeft: 5, marginTop:80 }}>
        <ScrollView>

          <View style={{ marginLeft: 30, marginRight: 30 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 10, marginLeft: 20, marginTop: 20, textAlign: 'center' }}>Hello !</Text>
            <TextInput style={{ backgroundColor: "#E8E8E8", borderRadius: 20, paddingLeft: 15, textAlign: 'auto' }}
              placeholder="Name"
              scrollEnabled={false}
            // value='abinashsamantaray555@gmail.com'
            />

            {/* <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 10, marginLeft: 20, marginTop: 20 }}>SIC Number</Text> */}
            <TextInput style={{ backgroundColor: "#E8E8E8", borderRadius: 20, paddingLeft: 15, textAlign: 'auto', marginTop: 20 }}
              placeholder="SIC"
            // value='abinashsamantaray555@gmail.com'
            />

            {/* <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 10, marginLeft: 20, marginTop: 20 }}>Email</Text> */}
            <TextInput style={{ backgroundColor: "#E8E8E8", borderRadius: 20, paddingLeft: 15, textAlign: 'auto', marginTop: 20 }}
              placeholder="email"
            // value='abinashsamantaray555@gmail.com'
            />

            {/* <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 10, marginTop: 20, marginLeft: 20 }}>Password</Text> */}
            <TextInput
              style={{ backgroundColor: "#E8E8E8", borderRadius: 20, paddingLeft: 15, textAlign: 'auto', marginTop: 20 }}
              secureTextEntry
              scrollEnabled={false}
              placeholder="password"
            // value='qwertyuiop0986'
            />

            <TextInput
              style={{ backgroundColor: "#E8E8E8", borderRadius: 20, paddingLeft: 15, textAlign: 'auto', marginTop: 20 }}
              secureTextEntry
              scrollEnabled={false}
              placeholder="re-enter password"
            // value='qwertyuiop0986'
            />

          </View>

          <View style={{ backgroundColor: "#FFD700", height: 40, marginRight: 30, marginLeft: 30, marginTop: 30, borderRadius: 20, justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ textAlign: 'center', }}>SignUp</Text>
            </TouchableOpacity>
          </View>


        </ScrollView>
      </View>


    </SafeAreaView >
  );
}

export default Signup