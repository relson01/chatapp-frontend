import { colors } from "@/chakra/theme";
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
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";

function SignUp() {
  return (
    <Center
      bg={colors.brand.black}
      width="100vw"
      height="100vh"
      textColor="white"
    >
      <VStack
        width="840px"
        height="490px"
        borderRadius="12px"
        backgroundColor="#0E0E10"
        paddingX="36px"
        style={{
          boxShadow: "7px 7px 15px " + colors.brand.primary,
        }}
      >
        <Box display="flex" justifyContent="" paddingY="16px">
          <Text fontSize="32px">Sign Up</Text>
        </Box>
        <HStack
          display={"flex"}
          justifyContent="space-evenly"
          width="100%"
          height="100%"
          paddingY="16px"
        >
          <VStack height="100%" spacing="22px">
            <Box width="330px" height="40px">
              <Input
                placeholder="Name"
                borderColor={colors.brand.primary}
                borderRadius="12px"
              />
            </Box>

            <Box paddingBottom="12px" width="330px" height="40px">
              <Input
                placeholder="Username"
                borderColor={colors.brand.primary}
                borderRadius="12px"
              />
            </Box>

            <InputGroup width="330px" height="40px">
              <Input
                placeholder="Password"
                borderColor={colors.brand.primary}
                borderRadius="12px"
              />
              <InputRightElement>
                <Button
                  variant="ghost"
                  _hover={{ backgroundColor: "transparent" }}
                  paddingRight="20px"
                  paddingLeft="0px"
                >
                  Show
                </Button>
              </InputRightElement>
            </InputGroup>

            <Box paddingBottom="12px" width="330px" height="40px">
              <Input
                placeholder="Email ID"
                borderColor={colors.brand.primary}
                borderRadius="12px"
              />
            </Box>

            <Box paddingTop="40px" w="100%">
              <Button
                width="full"
                bg={colors.brand.primary}
                border="2px"
                borderColor={colors.brand.primary}
                _hover={{ backgroundColor: "transparent" }}
              >
                SignUp
              </Button>
            </Box>
          </VStack>

          <Divider orientation="vertical" />

          <Box
            // w="100%"
            h="100%"
            display={"flex"}
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <Button
                width="full"
                bg={colors.brand.primary}
                border="2px"
                borderColor={colors.brand.primary}
                _hover={{ backgroundColor: "transparent" }}
              >
                Sign in with Google
              </Button>
            </Box>
          </Box>
        </HStack>
      </VStack>
    </Center>
  );
}

export default SignUp;

{
  /* <Box display="flex" justifyContent="center" paddingTop="10px">
  Already a member?
  <Text as="button" color={colors.brand.primary} paddingLeft="3px">
    Sign In
  </Text>
</Box> */
}

{
  /* <HStack
        width="840px"
        height="490px"
        borderRadius="12px"
        backgroundColor="#0E0E10"
        paddingX="60px"
        style={{
          boxShadow: "7px 7px 15px " + colors.brand.primary,
        }}
      >
        <Box display="flex" justifyContent="center" paddingY="30px">
          <Text fontSize="32px">Sign Up</Text>
        </Box>
        <Stack direction={"column"}>
          <Box paddingBottom="12px">
            <Input
              placeholder="Name"
              borderColor={colors.brand.primary}
              borderRadius="12px"
            />
          </Box>

          <Box paddingBottom="12px">
            <Input
              placeholder="Username"
              borderColor={colors.brand.primary}
              borderRadius="12px"
            />
          </Box>

          <InputGroup>
            <Input
              placeholder="Password"
              borderColor={colors.brand.primary}
              borderRadius="12px"
            />
            <InputRightElement>
              <Button
                variant="ghost"
                _hover={{ backgroundColor: "transparent" }}
                paddingRight="20px"
                paddingLeft="0px"
              >
                Show
              </Button>
            </InputRightElement>
          </InputGroup>

          <Box paddingBottom="12px">
            <Input
              placeholder="Email ID"
              borderColor={colors.brand.primary}
              borderRadius="12px"
            />
          </Box>

          <Box paddingTop="32px">
            <Button
              width="full"
              bg={colors.brand.primary}
              border="2px"
              borderColor={colors.brand.primary}
              _hover={{ backgroundColor: "transparent" }}
            >
              SignUp
            </Button>
          </Box>
        </Stack>
        <Box>
          <Button
            bg={colors.brand.primary}
            border="2px"
            borderColor={colors.brand.primary}
            _hover={{ backgroundColor: "transparent" }}
          >
            Sign up with Google
          </Button>
        </Box>
      </HStack> */
}
