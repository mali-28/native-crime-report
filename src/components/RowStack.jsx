import React from "react";
import { HStack, Center, Box } from "native-base";

const RowStack =(props) =>{
    return <>
    <HStack  flexWrap="wrap" my="2">
                    <Box
                        width="40%"
                        // bg="primary.400"
                        rounded="md"
                        _text={{
                            // color: "white",
                        }}
                        // shadow={3}
                    > 
                    {props.title}
                    </Box>
                    <Box
                        width="55%"
                        rounded="md"
                        _text={{
                            color: "indigo.500",
                        }}
                    >
                        {props.value}
                    </Box>
                   
                </HStack></>
}
export default RowStack;