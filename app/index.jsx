import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";

export default function Index() {

  const {user} = useUser()
  
  return user && (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>{user?.fullName}</Text>
      {
        user ? 
        <Redirect href={"/(tabs)/HomeTab"}/>
        :<Redirect href={"/Login"}/>
      }
    </View>
  );
}
