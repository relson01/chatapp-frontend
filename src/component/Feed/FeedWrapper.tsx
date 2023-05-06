import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useLazyQuery, useMutation } from "@apollo/client";
import UserOperations from "../../graphql/operations/user";
import {
  UserResponse,
  FindUserData,
  FindUserResponse,
  User,
  CreateNewConversation,
  CreateNewConversationResponse,
} from "@/util/types";
import { Image, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextPageContext } from "next";

const FeedWrapper = () => {
  const { data: sessionData } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const [searchUserInput, setSearchUserInput] = useState("");
  const [searchList, setSearchList] = useState<User[]>();
  const [newUserConversation, setNewUserConversation] = useState<User>();

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const [getUser, { loading, error, data }] = useLazyQuery<
    FindUserResponse,
    FindUserData
  >(UserOperations.Queries.findUser);

  const [createNewConversation, {}] = useMutation<
    CreateNewConversationResponse,
    CreateNewConversation
  >(UserOperations.Mutation.createNewConversation);

  useEffect(() => {
    setSearchList(data?.findUser.user);
  }, [data]);

  return (
    <Box height="100%" width="380px" border="1px" borderColor="blackAlpha.300">
      <Button onClick={onOpen}>New Chat</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Find a new user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Input
                type="text"
                value={searchUserInput}
                onChange={(e) => setSearchUserInput(e.target.value)}
              />
            </FormControl>
            <Box width="100%" paddingY={4}>
              <Button
                colorScheme="blue"
                width="100%"
                onClick={() =>
                  getUser({
                    variables: { name: searchUserInput },
                    fetchPolicy: "no-cache",
                  })
                }
              >
                Search
              </Button>
            </Box>

            {searchList &&
              searchList.map((val, index) => (
                <HStack
                  key={index}
                  className=" hover:bg-sky-100"
                  marginBottom={2}
                  onClick={() => setNewUserConversation(val)}
                >
                  <Image
                    borderRadius="full"
                    boxSize="45px"
                    src={val.image}
                    display="inline-block"
                  />
                  <Text display="inline-block">{val.name}</Text>
                </HStack>
              ))}
          </ModalBody>

          <ModalFooter>
            {newUserConversation && (
              <>
                <Button variant="ghost" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={() =>
                    createNewConversation({
                      variables: {
                        firstUserId: sessionData?.user.id,
                        secondUserId: newUserConversation.id,
                      },
                    })
                  }
                >
                  Create a new conversation
                </Button>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default FeedWrapper;
