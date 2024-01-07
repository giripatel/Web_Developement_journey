import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, RTE, Select, Input } from "../index";
import authService from "../../appwrite/auth";
import { useForm } from "react-hook-form";

const PostForm = ({ post }) => {
  const { register, handleSubmit, setValue, watch, control, getValues } =
    useForm({
      defaultValues: {
        tittle: post?.tittle || "",
        slug: post?.slug || "",
        status: post?.status || "active",
        content: post?.content || "",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? appwriteService(data.image[0]) : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };
  const slugTranform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value.trim().toLowerCase().replace(" ", "-");
    }
    return "";
  });
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "tittle") {
        setValue("slug", slugTranform(value.tittle, { shouldValidate: true }));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTranform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="w-2/3 px-2">
        <Input 
        label="Title: " 
        placeholder = "Title"
        className = 'mb-4'
        {...register("status",{require:true})}
        />

        <Input 
          label = "Slug: "
          placeholder = "Slug"
          className = 'mb-4'
          {...register('slug',{required:true})}
          onInput = { () => {
            setValue('slug',slugTranform(e.currentTarget.value),{shouldValidate:true})
          }}
        />

        <RTE 
          label="Content :" name='content' control={control} defaultValue={getValues('content')}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input 
          label="Featured Image :"
          type = "file"
          className = 'mb-4'
          accept = "image/png, image/jpg, image/jpeg, image/gif"
          {...register('image',{required:!post})}
        />
        {post && (
          <div className="w-full mb-4">
            <img 
            src={appwriteService.getFilePreview(post.featuredImage)} 
            alt={post.tittle} 
            className="rounded-lg" />
            </div>
        )}
        <Select 
          options = {['active','inactive']}
          label = 'Status'
          className='mb-4'
          {...register('status',{required: true})}
        />
        <Button type="submit"
        bgColor={post? 'bg-green-500' : undefined}
        className="w-full"
        >
        {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;