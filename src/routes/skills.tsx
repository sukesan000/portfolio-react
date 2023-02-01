import "../Routes.css";
import {
  Badge,
  Box,
  Card,
  CardBody,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Skill, SkillsList } from "../type/Skill";

function Skills() {
  const navigate = useNavigate();
  const bussinessSkills: Skill[] = SkillsList.filter((skill) => {
    return skill.isBussiness ? skill : "";
  });
  const hobbySkills: Skill[] = SkillsList.filter((skill) => {
    return skill.isBussiness ? "" : skill;
  });

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
        <Card className="card">
          <CardBody p="20px">
            <Box>
              <VStack>
                <Heading as="b" fontSize="md">
                  業務経験有り
                </Heading>
                <Box className="skillList">
                  {bussinessSkills.map((skill: Skill, index) => (
                    <Badge
                      fontSize="sm"
                      textTransform="none"
                      m="4px"
                      key={index}
                    >
                      {skill.skillName}
                    </Badge>
                  ))}
                </Box>
              </VStack>
            </Box>
            <Box pt="20px">
              <VStack>
                <Heading as="b" fontSize="md">
                  趣味
                </Heading>
                <Box className="skillList">
                  {hobbySkills.map((skill: Skill, index) => (
                    <Badge
                      fontSize="sm"
                      textTransform="none"
                      m="4px"
                      key={index}
                    >
                      {skill.skillName}
                    </Badge>
                  ))}
                </Box>
              </VStack>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}

export default Skills;
