"use client";
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';

const SignupPage = () => {

  const onSubmit = async (e) => {
    e.preventDefault();

   
    const email = e.target.email.value;
    const password = e.target.password.value;
    

    

    const { data, error } = await authClient.signUp.email({
     
      email,
      password,
     
    });

    console.log(data, error);
  };

  return (
   <Card className='border mx-auto w-125 p-10 mt-5'>
    <h1>Sign In</h1>
     <Form
      className="flex w-96 flex-col gap-4 mx-auto "
      onSubmit={onSubmit}
    >
    

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
        <Input placeholder="Your Email Here" />
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


      <div className="flex gap-2">
        <Button type="submit">Submit</Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
   </Card>
  );
};

export default SignupPage;