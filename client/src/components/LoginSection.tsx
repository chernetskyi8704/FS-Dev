import FlexSection from "./FlexSection";
import styled from "styled-components";
import { useRef, FormEvent } from "react";
import Span from "./Span";
import { NavLink, useNavigate } from "react-router-dom";
import { useRegistrationMutation, useLoginMutation } from "../store/fatures/auth/authApiSlice";
import { isApiResponse } from "../utils/apiErrorUtils";
import { AuthInputData } from "../store/fatures/auth/authApiSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { allAuthStateProperties, setIsRegistering } from "../store/fatures/auth/authSlice";
import { setCredentials, setIsUserLoggedIn } from "../store/fatures/auth/authSlice";

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const StyledHeader = styled.h1`
  color: #172234;
  font-family: Merriweather;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 350px;
  max-height: 354px;
  width: 100%;
  background-color: white;
`;

const StyledLabel = styled.label`
  color: #000;
  font-family: Merriweather;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const StyledInput = styled.input`
  padding: 12px;
  border: none;
  outline: none;
  background-color: #e0e0e0;
`;

const SignInButton = styled.button`
  flex-shrink: 0;
  width: 100%;
  height: 44px;
  background-color: #b29f7e;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  text-align: center;
  ont-family: Merriweather;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
`;

const SignButtonInContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledText = styled(Span)`
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;

const StyledForgot = styled(NavLink)`
  color: #b29f7e;
  text-align: end;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;

const StyledSignUp = styled(NavLink)`
  color: #b29f7e;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  cursor: pointer;
`;

const StyledLoginSection = styled(FlexSection)`
  align-items: center;
  justify-content: center;
`;

const LoginSection = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { isRegistering } = useAppSelector(allAuthStateProperties);

  const [registration, {}] = useRegistrationMutation();
  const [login, {}] = useLoginMutation();

  const handleRegistration = async (
    registrationInputData: AuthInputData
  ): Promise<void> => {
    try {
      await registration(registrationInputData).unwrap();
      dispatch(setIsRegistering(false));
      navigate("/log-in");
    } catch (error) {
      if (isApiResponse(error)) {
        alert(error.data.message);
      }
    }
  };

  const handleLogin = async (loginInputData: AuthInputData): Promise<void> => {
    try {
      const userData = await login(loginInputData).unwrap();
      if ("accessToken" in userData) {
        const { accessToken } = userData;
        dispatch(setIsUserLoggedIn(true));
        dispatch(setCredentials(accessToken));
        navigate("/");
      }
    } catch (error) {
      if (isApiResponse(error)) {
        alert(error.data.message);
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailValue = emailRef.current?.value || "";
    const passwordValue = passwordRef.current?.value || "";

    if (emailValue.length === 0 || passwordValue.length === 0) return;

    const authInputData: AuthInputData = {
      email: emailValue,
      password: passwordValue,
    };

    isRegistering
      ? handleRegistration(authInputData)
      : handleLogin(authInputData);

    formRef.current?.reset();
  };
  return (
    <StyledLoginSection>
      <SignInForm ref={formRef} onSubmit={e => handleSubmit(e)}>
        <StyledHeader>
          {isRegistering ? "Create an Account" : "Login"}
        </StyledHeader>
        <FormItem>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            id="email"
            placeholder="Email"
            type="email"
            ref={emailRef}
          />
        </FormItem>
        <FormItem>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            id="password"
            placeholder="Password"
            type="password"
            minLength={8}
            ref={passwordRef}
          />
        </FormItem>
        {!isRegistering && (
          <StyledForgot to={"/log-in"}>Forgot password?</StyledForgot>
        )}
        <SignButtonInContainer>
          <SignInButton>{isRegistering ? "Sign Up" : "Sign In"}</SignInButton>
          {!isRegistering && (
            <StyledText>
              Don't have account?
              <StyledSignUp
                to="/sign-up"
                onClick={() => {
                  dispatch(setIsRegistering(true));
                }}
              >
                Sign Up
              </StyledSignUp>
            </StyledText>
          )}
        </SignButtonInContainer>
      </SignInForm>
    </StyledLoginSection>
  );
};

export default LoginSection;
