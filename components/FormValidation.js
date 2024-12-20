import * as Yup from "yup";

function FormValidation() {
  const addProjectValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email ")
      .required("Email is requied")
      .min(7, "Minimum 7 characters are requied")
      .max(45, "Maximum 45 characters are requied"),
    password: Yup.string()
      .required("Please Provide a valid password")
      .min(5, "Minimum 5 characters are requied")
      .max(15, "Maximum 15 characters are requied"),
  });

  return addProjectValidationSchema;
}

export default FormValidation();
