import React, { useState } from "react";
import { Field, Formik } from "formik";
import SelectDropdown from 'react-native-select-dropdown'
import { Box, Stack, Text, Input } from "native-base";
import InputField from "../components/InputField";
import { applicationSchema } from "../utils/utils";
import { Button } from "native-base";
import { cities, reports } from "../utils/constant"
import MaskInput from 'react-native-mask-input';

const Application = ({navigation}) => {
    const submit =() =>{
       navigation.navigate("myApplication")
    }
    return <>
        <Stack bg="white" flex={1}>
            <Box width="90%" mx="auto" marginTop="20">
                <Formik
                    validationSchema={applicationSchema}
                    initialValues={{ des: "", cnic: "" }}
                    onSubmit={(values) => { submit(values) }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        isValid,
                    }) => (
                        <>
                            <InputField name="des" placeholder="Description" change={handleChange} blur={handleBlur} val={values.des} error={errors.des} />

                            <MaskInput
                                name="cnic"
                                style={{ borderWidth: 1, padding: 7, fontSize: 18, borderRadius: 5, borderColor: "#ddd" }}

                                value={values.cnic}
                                onChangeText={handleChange("cnic")}
                                onBlur={handleBlur("cnic")}

                                mask={[
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    '-',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    '-',
                                    /\d/,
                                ]}
                            />
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.cnic}</Text>
                            <SelectDropdown
                                defaultValue={reports[0]}
                                dropdownStyle={{ width: "90%" }}
                                buttonTextStyle={{ textTransform: "capitalize" }}
                                buttonStyle={{ width: "100%", marginBottom: 20 }}
                                data={reports}
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

                            <SelectDropdown
                                defaultValue={cities[0]}
                                dropdownStyle={{ width: "90%" }}
                                buttonTextStyle={{ textTransform: "capitalize" }}
                                buttonStyle={{ width: "100%" }}
                                data={cities}
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

                            <Button
                                bgColor="#6200ee"
                                mt="8"
                                onPress={() => { handleSubmit() }}
                                disabled={!isValid}
                            >Submit</Button>
                        </>
                    )}
                </Formik>
            </Box>
        </Stack>

    </>
}

export default Application;