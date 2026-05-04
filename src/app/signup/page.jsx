"use client";
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const SignupPage = () => {
const router =useRouter()
const onSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const image = formData.get("image");

  const { data, error } = await authClient.signUp.email({
    name,
    email,
    password,
    image,
    callbackURL: "/",
  });

  if (error) {
    toast.error(error.message || "Signup failed");
  } else {
    toast.success("Account created successfully");

    setTimeout(() => {
      router.push("/signin");
      router.refresh();
    }, 1500);
  }
};

  return (
    <Card className='border mx-auto w-125 p-10 mt-5'>
      <h1>Sign Up</h1>
      <Form
      className="flex w-96 flex-col gap-4 mx-auto mt-5"
      onSubmit={onSubmit}
    >
      <TextField isRequired name="name" type="text">
        <Label>Name</Label>
        <Input placeholder="Your Name Here" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Your email here" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>

      <TextField isRequired name="image" type="text">
        <Label>Image Url</Label>
        <Input placeholder="Image URL" />
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button  type="submit">Submit</Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
    </Card>
  );
};

export default SignupPage;