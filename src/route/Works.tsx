import "../Routes.css";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function Works() {
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
          業務経歴
        </Text>
      </Box>
      <Card className="card">
        <CardHeader>
          <Heading size="md">社内向けQ&Aサイト</Heading>
          <Text>2020年4月~</Text>
        </CardHeader>
        <CardBody pt="5px">
          <Text>
            組織内での疑問をQ&A形式で掲載するサイト。保守・開発・リリース・テストを担当。
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}

export default Works;
