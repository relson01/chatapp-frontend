import { colors } from "@/chakra/theme";
import UserOperations from "../graphql/operations/user";
import {
  Center,
  Stack,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Box,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { LoginUserData, UserResponse } from "@/util/types";
import { NextPage } from "next";

interface Props {
  onClickLogin: () => void;
}

const Login: NextPage<Props> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const toast = useToast();

  const [checkLogin, { loading, data }] = useLazyQuery<
    UserResponse,
    LoginUserData
  >(UserOperations.Queries.searchUser);

  useEffect(() => {
    if (data?.searchUser.success === false) {
      const errorMsg = data.searchUser.errorMsg || "Something went wrong";
      toast({
        title: errorMsg,
        status: "error",
      });
    }
  }, [data]);

  const handleOnUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handleOnPasswordChange = (event: any) => {
    setPassword(event.target.value);
  };
  return (
    <Center
      bg={colors.brand.black}
      width="100vw"
      height="100vh"
      textColor="white"
      flexDirection={"column"}
    >
      <Stack
        direction={"column"}
        width="450px"
        height="490px"
        borderRadius="12px"
        backgroundColor="#0E0E10"
        paddingX="60px"
        style={{
          boxShadow: "7px 7px 15px " + colors.brand.primary,
        }}
      >
        <Box display="flex" justifyContent="center" paddingY="30px">
          <Text fontSize="32px">Sign In</Text>
        </Box>

        <Box paddingBottom="12px">
          <Input
            placeholder="Username"
            borderColor={colors.brand.primary}
            borderRadius="12px"
            value={username}
            onChange={handleOnUsernameChange}
          />
        </Box>

        <InputGroup>
          <Input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            borderColor={colors.brand.primary}
            borderRadius="12px"
            onChange={handleOnPasswordChange}
          />
          <InputRightElement>
            <Button
              variant="ghost"
              _hover={{ backgroundColor: "transparent" }}
              paddingRight="20px"
              paddingLeft="0px"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
            >
              {isPasswordVisible ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Box>
          <Checkbox defaultChecked>Remember Me</Checkbox>
        </Box>

        <Box paddingTop="32px">
          <Button
            width="full"
            bg={colors.brand.primary}
            border="2px"
            borderColor={colors.brand.primary}
            _hover={{ backgroundColor: "transparent" }}
            // isLoading={loading}
            onClick={async () =>
              checkLogin({ variables: { username, password } })
            }
          >
            Login
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" padding="12px">
          OR
        </Box>
        <Button
          bg={colors.brand.primary}
          border="2px"
          borderColor={colors.brand.primary}
          _hover={{ backgroundColor: "transparent" }}
          onClick={props.onClickLogin}
        >
          Sign in with Google
        </Button>
      </Stack>
      <Box display="flex" justifyContent="center" paddingTop="10px">
        Don't have a account?{" "}
        <Text as="button" color={colors.brand.primary} paddingLeft="3px">
          {" "}
          Sign up
        </Text>
      </Box>
    </Center>
  );
};

export default Login;
