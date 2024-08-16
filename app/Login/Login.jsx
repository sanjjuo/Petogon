import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import  Colors from '../../constants/Colors'
import * as WebBrowser from 'expo-web-browser'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

const LoginScreen = () => {

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/HomeTab', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
        
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

  return (
    <View style={{backgroundColor:Colors.WHITE, height:"100%", width:"100%"}}>
      <Image style={styles.image} source={require("../../assets/images/login.png")}/>

      <View style={styles.container}>
        <Text style={{
            fontFamily:"outfit-bold",
            fontSize:30,
            textAlign:"center"
        }}>Ready to make a new friend?</Text>
        <Text style={{
          fontFamily:"outfit",
          fontSize:18,
          textAlign:"center",
          color:Colors.GRAY
        }}>Let's adopt the pet which you like and make there life happy again.</Text>
        <Pressable style={styles.btn}
        onPress={onPress}>
          <Text style={{
            textAlign:"center",
            fontFamily:"outfit-medium",
            fontSize:20
          }}>Get started</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    height:500,
    width:"100%"
  },
  container:{
    padding:20,
    display:"flex",
    alignItems:"center"
  },
  btn:{
    padding:14,
    marginTop:100,
    backgroundColor:Colors.PRIMARY,
    width:"100%",
    borderRadius:14
  }
})


export default LoginScreen