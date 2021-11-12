import React from "react";
import { Box, Text, Stack, HStack, Badge } from "native-base"
import RowStack from "../components/RowStack";
import { ScrollView } from "react-native";

const MyApplication = () => {
    return <>
        <Box flex={1} bg="white">
            <ScrollView>

                <Stack mx="auto" my="5" bg="white" borderRadius={10} shadow={1} alignItems="center" width="90%" p="3">
                    <Box mb="5" justifyContent="space-around" flexDirection="row" width="100%">
                        <Badge colorScheme="green" borderRadius={5}>12FgRho0Wns23henFRy sjs sjssd ksdksk </Badge>
                        <Badge colorScheme="red" borderRadius={5}>pending</Badge>
                    </Box>
                    <RowStack title="request" value="11/10/2021, 09:15:56 PM" />
                    <RowStack title="update" value="15/11/2021, 12:10:23 PM" />
                    <RowStack title="type" value="Crime" />
                    <RowStack title="city" value="Alaska" />
                    <RowStack title="des" value="siusd sisdsdsi sisisisisi iod dsoi dsods o" />
                </Stack>

                <Stack mx="auto" my="5" bg="white" borderRadius={10} shadow={1} alignItems="center" width="90%" p="3">
                    <Box mb="5" justifyContent="space-around" flexDirection="row" width="100%">
                        <Badge colorScheme="green" borderRadius={5}>12FgRho0Wns23henFRy sjs sjssd ksdksk </Badge>
                        <Badge colorScheme="red" borderRadius={5}>pending</Badge>
                    </Box>
                    <RowStack title="request" value="11/10/2021, 09:15:56 PM" />
                    <RowStack title="update" value="15/11/2021, 12:10:23 PM" />
                    <RowStack title="type" value="Crime" />
                    <RowStack title="city" value="Alaska" />
                    <RowStack title="des" value="siusd sisdsdsi sisisisisi iod dsoi dsods o" />
                </Stack>

                <Stack m="auto" bg="white" borderRadius={10} shadow={1} alignItems="center" width="90%" p="3">
                    <Box mb="5" justifyContent="space-around" flexDirection="row" width="100%">
                        <Badge colorScheme="green" borderRadius={5}>12FgRho0Wns23henFRy sjs sjssd ksdksk </Badge>
                        <Badge colorScheme="red" borderRadius={5}>pending</Badge>
                    </Box>
                    <RowStack title="request" value="11/10/2021, 09:15:56 PM" />
                    <RowStack title="update" value="15/11/2021, 12:10:23 PM" />
                    <RowStack title="type" value="Crime" />
                    <RowStack title="city" value="Alaska" />
                    <RowStack title="des" value="siusd sisdsdsi sisisisisi iod dsoi dsods o" />
                </Stack>
            </ScrollView>
        </Box>
    </>
}

export default MyApplication;