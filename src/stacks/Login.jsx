import React, { useState, useRef, useEffect } from "react";
import { Center, Stack, Button, Box } from "native-base";
import PhoneInput from "react-native-phone-number-input";
import { Text, Alert } from 'react-native';
import { PhoneSchema, validateInput } from "../utils/utils";
import DialogBox from "../components/ModalBox";
import { getAuth, RecaptchaVerifier } from "firebase/auth";



const Login = ({ navigation }) => {
  console.log({navigation})
  
  useEffect(() => {
    const auth = getAuth();
    // recaptchaVerifier = new RecaptchaVerifier('rechapta', {}, auth);
},[])
  
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
    const [open, setOpen] = useState(false);
  console.log({ phone })
  const phoneInput = useRef("");

  const handle = () => {
    setOpen(pre => !pre)
  };
  
  return <> 
      <Center paddingTop="20">
          <Stack space="2">
       <PhoneInput
        TouchableOpacity={true}
        ref={phoneInput}
        defaultValue={phone}
        defaultCode="PK"
        onChangeFormattedText={(v) => {
          setPhone(v);
          validateInput(PhoneSchema, "phone", v, setPhoneError)
        }}
        withDarkTheme
        withShadow
        autoFocus
        />
      <Text style={{color: "red"}}>{phoneError}</Text>
      <Box id="rechapta"></Box>
      <Button disabled={!!phoneError || !phone} bgColor="#6200ee" size="lg" marginTop="4" onPress={() =>{ handle()}} >Login</Button>
    </Stack>
  </Center>
      <DialogBox open={open} handle={handle} nav={(nav)=>{
        navigation.navigate(nav)}}/> 
  </>
}


export default Login;