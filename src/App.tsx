import "./App.css";
import { Box, Card, HStack, Image, Link, Text } from "@chakra-ui/react";
import portfolioPng from "./images/portfolio.png";
import worksPng from "./images/works.png";
import skillPng from "./images/skill.png";

function App() {
  return (
    <Box className="App">
      <Box className="title">
        <Text fontSize="4xl" as="b">
          MyPortfolio
        </Text>
      </Box>
      <Box className="introdction">
        <Text fontSize="lg">
          webシステムの開発を行なっています。業務ではjava(SpringBoot)、jquery、MySQLを使用しています。
          個人開発ではPython、Reactを勉強中です。
          <br />
          このサイトはReact、chakraUIで作られています。
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
          >
            <Link>業務経歴を見る</Link>
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
          >
            <Link>ポートフォリオを見る</Link>
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
          >
            <Link>スキルを見る</Link>
          </Box>
        </HStack>
      </Card>
    </Box>
  );
}

export default App;
