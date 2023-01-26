import "../Routes.css";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

function Skills() {
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
          スキル
        </Text>
      </Box>
    </Box>
  );
}

export default Skills;
