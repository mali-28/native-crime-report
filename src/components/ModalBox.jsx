// import React, { useContext, useState } from 'react';
// import { getDatabase, ref, set } from "firebase/database";
// import { Dialog, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
// import { toast } from "react-toastify";
// import { removeLocalStorage, setLocalStorage, getLocalStorage, validateInput } from '../utils/utils';
// import Input from "./Input";
// import { AuthContext } from '../context/Auth';
// import { localStorageKeys } from '../utils/constant';
// import { fNameSchema, lNameSchema, emailSchema } from '../utils/validation';

import { Formik } from "formik";
import { Button } from "native-base";
import React, { useContext } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { AuthContext } from "../contexts/Auth/auth";
import { loginValidationSchema } from "../utils/utils";
import InputField from "./InputField";

const ModelBox = ({ nav, open, handle, ...props }) => {
  const {setIsLogin} = useContext(AuthContext);
  const submit = (vals) => {
    handle();
    setIsLogin(true)
    console.log({vals}, "sdjhs");
  }
  return <>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        // transparent={true}
        visible={open}
      // onRequestClose={() => {
      //   Alert.alert("Modal has been closed.");
      //    handle()
      // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ fname: '', lname: '', email: '', }}
              onSubmit={(values) => {console.log({values}); submit(values) }}
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
                  <InputField name="fname" placeholder="First Name" change={handleChange} blur={handleBlur} val={values.fname} error={errors.fname} />
                  <InputField name="lname" placeholder="Last Name" change={handleChange} blur={handleBlur} val={values.lname} error={errors.lname} />
                  <InputField name="email" placeholder="Email Address" change={handleChange} blur={handleBlur} val={values.email} keyBoard="email-address" error={errors.email} />

                  <Button
                    bgColor="#6200ee"
                    onPress={() => { handleSubmit() }}
                    disabled={!isValid}
                  >Submit</Button>
                </>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
    </View>

  </>
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
export default ModelBox;