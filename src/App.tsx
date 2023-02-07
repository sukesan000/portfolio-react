import "./App.css";
import { Box, Card, HStack, Image, Text } from "@chakra-ui/react";
import portfolioPng from "images/portfolio.png";
import worksPng from "images/works.png";
import skillPng from "images/skill.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <Box className="App">
      <Box className="title">
        <Text fontSize="4xl" as="b">
          MyPortfolio
        </Text>
      </Box>
      <Box className="introdction">
        <Text fontSize="md">
          webシステムの開発を行なっています。業務ではjava(SpringBoot)、jquery、MySQLを使用しています。
          個人開発ではPython、Reactを勉強中です。
          <br />
          当サイトはReact、chakraUIで作られています。
        </Text>
      </Box>
      <Card className="card" direction={{ base: "column", sm: "row" }} p="10px">
        <HStack width="100%">
          <Image src={worksPng} boxSize="100px" className="profileImg" />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            pr="30px"
          >
            <Link to="/works" className="menuLink">
              業務経歴を見る
            </Link>
          </Box>
        </HStack>
      </Card>
      <Card className="card" direction={{ base: "column", sm: "row" }} p="10px">
        <HStack width="100%">
          <Image src={portfolioPng} boxSize="100px" className="profileImg" />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            pr="30px"
          >
            <Link to="/portfolio" className="menuLink">
              ポートフォリオを見る
            </Link>
          </Box>
        </HStack>
      </Card>
      <Card className="card" direction={{ base: "column", sm: "row" }} p="10px">
        <HStack width="100%">
          <Image src={skillPng} boxSize="100px" className="profileImg" />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            pr="30px"
          >
            <Link to="/skills" className="menuLink">
              スキルを見る
            </Link>
          </Box>
        </HStack>
      </Card>
    </Box>
  );
}

export default App;
