import Main from "./components/Main"
import Container from "./components/base/Container"
import Title from "./components/base/Title"
import Text from "./components/base/Text"
import Button from "./components/base/Button"

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