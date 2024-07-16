import Main from "./components/Main"
import Container from "./components/Container"
import Title from "./components/Title"
import Text from "./components/Text"
import Button from "./components/Button"

export default function App() {
   return (
      <Main>
         <div className="grid grid-cols-2 gap-x-8">
            <Container className="w-80">
               <Title>Steganography App</Title>
               <Text className="my-16"> 
                  Welcome! 
                  <br />
                  <br /> 
                  This is an app that was made to explore Steganography, which is the act of hiding information inside an ordinary message.
                  <br />
                  <br />
                  In this case Images!
               </Text>
               <Button>
                  Continue
               </Button>
            </Container>
            <img
               src=""
               alt="A flower"
            />
         </div>
      </Main>
   )
}