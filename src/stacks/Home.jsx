import React from "react";
import { Button, Center, Image, Stack,  } from "native-base";

const Home = ({ navigation }) => {
    // const uri =  URL.createObjectURL(img2);
    return <>
        <Center flex={1} bg="#fff" paddingY="10">
            <Stack space="5">
            <Image
                source={require("../../assets/img3.jpg")}
                style={{ width: 300, height: 500 }}
                alt="alt"
            />
            <Button 
            backgroundColor="#6200ee" 
            onPress={() => {navigation.navigate('login')}}
            size="lg" width={300}>Login</Button>
           </Stack>
        </Center>
    </>
}

export default Home;