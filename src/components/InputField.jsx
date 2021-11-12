import React from "react";
import { Input, Text, Box } from "native-base"

const InputField = ({ name, ...props }) => {
  return <>
    <Box marginBottom="3" width="100%">
      <Input
        name={name}
        placeholder={props.placeholder}
        onChangeText={props.change(name)}
        onBlur={props.blur(name)}
        value={props.val}
        keyboardType={props.keyBoard}
      />
      {props.error &&
        <Text style={{ fontSize: 10, color: 'red' }}>{props.error}</Text>
      }
    </Box>
  </>
}

export default InputField