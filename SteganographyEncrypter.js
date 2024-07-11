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

   static #getImageDataIndexToReplace(i, j){         
      return (i * 8 + j) + Math.floor((i * 8 + j) / 3)
   }

}