import { Box, Flex } from "@chakra-ui/react";
import ConversationWrapper from "./Conversation/ConversationWrapper";
import FeedWrapper from "./Feed/FeedWrapper";

const Chat = () => {
  return (
    <Flex height="100vh">
      <FeedWrapper />
      <ConversationWrapper />
    </Flex>
  );
};

export default Chat;
