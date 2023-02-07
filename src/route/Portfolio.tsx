import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardHeader,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
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
          <CardHeader>
            <Heading size="md"></Heading>
          </CardHeader>
        </Card>
      </Box>
    </Box>
  );
}

export default Portfolio;
