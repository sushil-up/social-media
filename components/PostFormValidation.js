import * as Yup from "yup";

function PostFormValidation() {
  const addProjectValidationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .min(7, "Minimum 7 characters are required")
      .max(45, "Maximum 45 characters are required"),
    date: Yup.date()
      .transform(function (value) {
        if (this.isType(value)) {
          return value;
        }
        return new Date();
      })
      .typeError("please enter a valid date")
      .required("Date is required"),
    description: Yup.string()
      .required("Description is required")
      .min(5, "Minimum 5 characters are required")
      .max(200, "Maximum 200 characters are required"),
    image: Yup.mixed().required("Image is required"),
  });

  return addProjectValidationSchema;
}

export default PostFormValidation();
