"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TitleInput from "./postFormImputs/TitleInput";
import FormDatePicker from "./postFormImputs/FormDatePicker";
import TextInput from "./postFormImputs/TextInput";
import ImageInput from "./postFormImputs/ImageInput";
import { yupResolver } from "@hookform/resolvers/yup";
import PostFormValidation from "./PostFormValidation";
import PageTitle from "./PageTitle";

const PostUser = ({ setOpen }) => {
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      date: "",
      image: '',
      description: "",
    },
    resolver: yupResolver(PostFormValidation),
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPosts = localStorage.getItem("posts");
      setPosts(savedPosts ? JSON.parse(savedPosts) : []);
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxWidth = 500;
          const scaleSize = maxWidth / img.width;

          canvas.width = maxWidth;
          canvas.height = img.height * scaleSize;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          const compressedImage = canvas.toDataURL("image/jpeg", 0.7); // Compress image at 70% quality
          setImage(compressedImage);
        };
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmitForm = (data) => {
    setLoader(true);
    const { title, description, date } = data;
    const newPost = { title, image, description, date };
    const updatedPosts = [...posts, newPost];

    setPosts(updatedPosts);
    setTimeout(() => {
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
      setLoader(false);
      setOpen !== undefined ? setOpen(false) : "";
      setOpen !== undefined ? window.location.reload() : "";
      reset();
    }, 3000);
  };

  return (
    <div
      style={{
        height: "auto",
        width: "600px",
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        margin: "auto",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        <PageTitle title="Add Post" />
      </h2>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div style={{ flex: 1 }}>
            <TitleInput
              name="title"
              control={control}
              errors={errors}
              label="Title"
              className="formTitle"
              type="text"
            />
          </div>
          <div style={{ flex: 1 }}>
            <FormDatePicker
              name="date"
              control={control}
              errors={errors}
              label="Date"
              className="formDate"
              type="date"
            />
          </div>
        </div>

        <div style={{ margin: "20px 0" }}>
          <TextInput
            name="description "
            control={control}
            errors={errors}
            label="Description"
            className="formDescription overflow-auto"
            type="text"
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <ImageInput
            name="image"
            control={control}
            errors={errors}
            label=""
            className="formImage"
            type="file"
            onChange={handleImageUpload}
          />
          {image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt="Uploaded Preview"
              style={{
                width: "200px",
                height: "auto",
                marginTop: "10px",
                display: "block",
              }}
            />
          )}
        </div>

        <div style={{ textAlign: "center" }}>
          {" "}
          {loader ? (
            "Loading..."
          ) : (
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#2b1a41",
                color: "#ffffff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PostUser;
