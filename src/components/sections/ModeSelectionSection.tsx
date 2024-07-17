import Text from "../base/Text";
import Title from "../base/Title";
import ModeSelectionCard from "../ModeSelectionCard";

import lockImage from '../../assets/images/lock.png'
import keyImage from '../../assets/images/key.png'

type ModeSelectionSection = {
   onContinue: () => unknown
}

export default function ModeSelectionSection({ onContinue }: ModeSelectionSection) {
   return (
      <div className="flex flex-col items-center justify-center space-y-16">
         <div className="space-y-1">
            <Title>What do you want?</Title>
            <Text>Choose the mode you want to proceed with</Text>
         </div>
         <div className="grid-cols-2 grid gap-12 w-1/2 group">
            <ModeSelectionCard
               image={lockImage}
               alt='The image of a lock'
               title='Encrypt'
               description='Hide a text inside an image'
               onClick={onContinue}
            />
            <ModeSelectionCard
               image={keyImage}
               alt='The image of a key'
               title='Decrypt'
               description='Recover a text from an image'
               onClick={onContinue}
            />
         </div>
      </div>
   )
}