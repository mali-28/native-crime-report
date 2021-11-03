import React from  "react"; 
import { Center, Text, View ,Input, Icon, Stack} from "native-base";
import { MaterialIcons } from "@expo/vector-icons"

const  Login = () =>{
    return <Center bg="#fff" flex={1} >
        <Text >login</Text>
        
        <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        keyboardType="number-pad"
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="phone" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Phone Number"
      />
    </Center>
}

export default Login;