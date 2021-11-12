import { Box, HStack, Stack, Center, } from "native-base";
import React from "react";
import RowStack from "../components/RowStack";
import SelectDropdown from 'react-native-select-dropdown'
import { status } from "../utils/constant";

const Request = () => {
    return <>

        <Box bg="white" flex={1} >
            <Stack m="auto" flex={0.7} bg="white" borderRadius={10} shadow={1} alignItems="center" width="90%" p="3">
                <RowStack title="First Name" value="Muhammad" />
                <RowStack title="Last Name" value="Ali" />
                <RowStack title="UserId" value="User_Id" />
                <RowStack title="ApplicationId" value="applicaction_Id" />
                <RowStack title="Email" value="alihadees786@gmail.com" />
                <RowStack title="Status" value="pending" />
                <RowStack title="Date" value="30/1/2019" />
                <RowStack title="Time" value="11:15:56 PM" />
                <RowStack title="cnic" value="42201-0895043-3" />
                <SelectDropdown
                    defaultValue={status[0]}
                    dropdownStyle={{ width: "75%" }}
                    rowTextStyle={{ color: "#6200ee" }}
                    buttonTextStyle={{ textTransform: "capitalize", color: "white" }}
                    buttonStyle={{ width: "90%", backgroundColor: "#6200ee", marginTop: 30, borderRadius: 5 }}
                    data={status}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
            </Stack>
        </Box>
    </>
}

export default Request;