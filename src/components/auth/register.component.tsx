import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { EmailIcon } from "@chakra-ui/icons";
import CustomButton from "../Buttons/CustomButton";
import { zodResolver } from "@hookform/resolvers/zod";
import registrationSchema from "../../schema/loginSchemaWrapper";
import { useForm } from "react-hook-form";
import { useDispatch, } from "react-redux";
import { registerThunk } from '../../services/auth/authThunk';
import { RootState } from '../../app/store';
// import { Store } from "@reduxjs/toolkit";

interface FormData {
  email: string;
  password: string;
  confirm_password: string;
}



function RegisterForm() {

  const dispatch = useDispatch<RootState>();
    // const { error} = useSelector((state: any) => state.auth);
    
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: registrationSchema ? zodResolver(registrationSchema.registration) : undefined,
  });

  const onSubmit = async (data: any) => { // eslint-disable-line

    console.log("data from frontend",data);
    await dispatch(registerThunk(data));
  };


 
  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 ">
        <FormControl id="email" isInvalid={!!errors.email}>
          <FormLabel>Email address</FormLabel>
          <InputGroup>
          <InputLeftAddon>
             <EmailIcon color="gray.500" />
          </InputLeftAddon>
          <Input
           placeholder="Email address"
           focusBorderColor="none"
           {...register("email")}
           />
          </InputGroup>
          {errors.email && (
                <FormErrorMessage>
                  {errors.email && <span color={"custom.600"}>{errors.email.message?.toString()}</span>}
                </FormErrorMessage>
           )}
        </FormControl>
        <FormControl id="password" isInvalid={!!errors.password}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
         
            <Input
              placeholder="Enter your password"
              focusBorderColor="none"
              type={"password"}
              {...register("password")}
            />
          </InputGroup>
          {errors.email && (
                <FormErrorMessage>
                  {errors.password && <span color={"custom.600"}>{errors.password.message?.toString()}</span>}
                </FormErrorMessage>
           )}
        </FormControl>
        <FormControl id="confirm password" isInvalid={!!errors.confirm_password}>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Confirm your password"
              focusBorderColor="none"
              type={"Password"}
              {...register("confirm_password")}
            />
          </InputGroup>
          {errors.confirm_password&& (
                <FormErrorMessage>
                  {errors.confirm_password && <span color={"custom.600"}>{errors.confirm_password.message?.toString()}</span>}
                </FormErrorMessage>
           )}
        </FormControl>
        <Stack>
          <Stack
            direction={{ base: "row" }}
            align={"start"}
            justify={"space-between"}
          >
          </Stack>
          <CustomButton
            name="SignUp"
            size="md"
            color="custom.500"
            isDisabled={isSubmitting} 
            onClick={handleSubmit(onSubmit)}
            isSubmitting={isSubmitting}
          />
        </Stack>

        <div className="mt-4 w-full flex items-center justify-between">
          <span className="border-b w-1/3"></span>
          <p className="text-xs text-center text-gray-500 uppercase">or</p>
          <span className="border-b w-1/3"></span>
        </div>

        <a
          href={"#"}
          className="flex items-center justify-center mt-4  text-gray-600 font-bold rounded-lg  py-3"
        >
          <div className="">
            <svg className="h-9 w-9" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>
          </div>
        </a>

        <p className="text-sm text-center font-light text-red-400 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <Link
            to="/signin"
            className="font-medium  hover:underline custom.600"
            style={{
              color: "#7A0535",
              transition: "background-color 0.3s ease",
            }}
          >
            SignIn
          </Link>
        </p>
      </form>
    </>
  )
}

export default RegisterForm
