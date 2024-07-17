import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text from "../base/Text";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Title from "../base/Title";
import Link from "../base/Link";

import flowerImage from '../../assets/images/flower.png'
import coupleImage from '../../assets/images/couple.png'
import dogImage from '../../assets/images/dog.png'
import Button from "../base/Button";
import HeroImage from "../HeroImage";

type HeroSectionProps = {
   onContinue: () => unknown
}

export default function HeroSection({ onContinue }: HeroSectionProps) {
   return (
      <div className="flex flex-col items-center justify-center">
         <div className="space-y-1 mb-12">
            <Title>Steganography App</Title>
            <Text>
               Made by
               <Link className="ml-1" href="https://github.com/Petri-Hub">
                  Petri
                  <FontAwesomeIcon className="ml-1" icon={faArrowUpRightFromSquare} />
               </Link>
            </Text>
         </div>
         <div className="lg:w-[500px] md:w-3/5 w-10/12 h-[300px] md:h-[500px] grid grid-cols-12 grid-rows-12 gap-3 md:gap-4">
            <HeroImage
               title='Flower with 2000 lines ot text inside'
               className={"col-span-6 row-span-6"}
               src={flowerImage}
               alt="A pink blooming flower"
            />
            <HeroImage
               title='Couple photo with “I Love You” inside'
               className={"col-span-6 row-span-5"}
               src={coupleImage}
               alt="A couple dancing in their marriage"
            />
            <HeroImage
               title='Dog with owner memories'
               className={"col-span-5 row-span-5 col-start-2"}
               src={dogImage}
               alt="A dog with a flower in its mouth"
            />
            <Text className="text-left col-start-7 row-start-6 col-span-6 row-span-6 grid place-content-center">
               Welcome!
               <br />
               <br />
               This is an app that was made to explore Steganography, which is the act of hiding information inside an ordinary message.
               <br />
               <br />
               In this case Images!
            </Text>
         </div>
         <Button onClick={onContinue} className="mt-8">Continue -></Button>
      </div>
   )
}