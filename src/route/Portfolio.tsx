import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import GPTDiscordPng from "../images/GPTDiscord.png";
import "../Routes.css";

function Portfolio() {
  const navigate = useNavigate();
  return (
    <Box className="main">
      <Box>
        <IconButton
          aria-label={"Home"}
          icon={<ArrowBackIcon />}
          variant="outline"
          colorScheme="teal"
          onClick={() => navigate("/")}
        ></IconButton>
      </Box>
      <Box className="subTitle" pl="0px">
        <Text fontSize="4xl" as="b">
          ポートフォリオ
        </Text>
        <Card className="card">
          <CardBody>
            <Image src={GPTDiscordPng} borderRadius="lg" />
            <CardHeader>
              <Text fontSize="xl" as="b">
                GPTDiscordBot
              </Text>
              <Text fontSize="md">
                Discord上でchatGPTを使用するためのBotです。ユーザーがBotに送信したメッセージに対して、chatGPTが応答します。
              </Text>
            </CardHeader>
          </CardBody>
          <CardBody></CardBody>
        </Card>
      </Box>
    </Box>
  );
}

export default Portfolio;
