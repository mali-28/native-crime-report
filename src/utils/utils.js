import * as Yup from 'yup';


export const PhoneSchema = Yup.object().shape({
    phone: Yup.string()
    .required('Phone Number is Required'),
  });


  export const validateInput = (schema, name, e, setterFunction) => {
    if (schema && name && setterFunction){
        schema.validate({ [name] : e})
            .then(console.log({validateE : e}), setterFunction(""))
            .catch(function (err) {
                setterFunction(err.errors)
                console.log(err.name);
                console.log(err.errors);
            });
        }
}

export const loginValidationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
      
      fname : Yup
      .string()
      .min(3,({ min }) => `First Name must be at least ${min} characters`)
      .required('First Name is required'),

      lname : Yup
      .string()
      .min(3,({ min }) => `Last Name must be at least ${min} characters`)
      .required('Last Name is required'),

      

  })



export const applicationSchema = Yup.object().shape({
    des: Yup
      .string()
      .required('Description is required')
      .min(30, "Description is too short - should be 30 chars minimum"),

      
      cnic: Yup
      .string()
        .required("cnic is required")
        .matches(/^\d{5}-\d{7}-\d{1}$/, {
            message:'Cnic number must follow the xxxxx-xxxxxxx-x format',
            excludeEmptyString: true
        })

     

  })




 

