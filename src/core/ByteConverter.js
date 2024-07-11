export class ByteConverter {

   static getCharacterAsByte(character) {
      return character
         .charCodeAt(0)
         .toString(2)
         .padStart(8, '0')
   }

   static getNumberAsByte(number) {
      return number
         .toString(2)
         .padStart(8, '0')
   }
}