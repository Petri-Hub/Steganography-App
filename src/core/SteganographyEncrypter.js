import { ByteConverter } from "./ByteConverter.js"

export class SteganographyEncrypter {

   static encrypt(image, message) {
      const newImage = structuredClone(image)
      const characters = message.split('')

      characters.forEach((character, i) => {

         const byte = ByteConverter.getCharacterAsByte(character)

         for (let j = 0; j < 8; j++) {

            const index = this.#getImageDataIndexToReplace(i, j)
            const colorValue = image.data[index]
            const valueAsByte = ByteConverter.getNumberAsByte(colorValue)
            const newByte = valueAsByte.slice(0, 7) + byte.at(j)
            const newValue = parseInt(newByte, 2)

            newImage.data[index] = newValue

         }
      })


      return newImage
   }

   static decrypt(imageData){
      const content = []
      const chars = []
   
      for(let i = 0; i < imageData.data.length; i++){
         if((i + 1) % 4 === 0){
            continue
         }
   
         const value = imageData.data[i]
         const byteString = value.toString(2).padStart(8, '0')
         const lastBytes = byteString.slice(7)
         
         content.push(lastBytes)
      }
   
      for(let i = 0; i < content.length / 8; i++){
         const char = []
   
         for(let j = 0; j < 8; j++){
            char.push(content[i * 8 + j])
         }
   
         const byte = char.join('')
         const charCode = parseInt(byte, 2)
         const charString = String.fromCharCode(charCode)
   

         chars.push(charString)
      }
   
      return chars.join('').split('___')[1]
   }

   static #getImageDataIndexToReplace(i, j){         
      return (i * 8 + j) + Math.floor((i * 8 + j) / 3)
   }

}