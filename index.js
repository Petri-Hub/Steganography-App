const HIDDEN_TEXT_MESSAGE = "Eu sou uma mensagem escondida teste"

const fileInput = document.querySelector('[type=file]')
const imageLoadedPreview = document.querySelector('#load-preview')
const imageResultPreview = document.querySelector('#result-preview')

const handleFileSubmition = async (event) => {
   const file = [...event.target.files][0]
   const base64 = await readFileContent(file)
   const encryptedImage = await encryptImage(base64)

}

const readFileContent = (file) => {
   return new Promise((resolve, reject) => {
      const fileReader = new FileReader()

      fileReader.onload = (event) => resolve(event.target.result)
      fileReader.onerror = () => reject(new Error("Um erro ocorreu ao ler o arquivo"))
      fileReader.readAsDataURL(file)
   })
}

const encryptImage = async (base64) => {
   imageLoadedPreview.src = base64

   const originalImageData = await createImageByteArray(base64)
   const encryptedImageData = insertMessageIntoImageData(originalImageData, HIDDEN_TEXT_MESSAGE)
   const finalBase64 = createBase64FromImageData(encryptedImageData)

   imageResultPreview.src = finalBase64
}

const createImageByteArray = async (base64) => {
   const image = await loadImage(base64)
   const context = prepareCanvasWithImage(image)

   return context.getImageData(0, 0, image.width, image.height);
}

const loadImage = async (base64) => {
   return new Promise((resolve, reject) => {
      const image = new Image()

      image.onload = () => resolve(image)
      image.onerror = () => reject(image)

      image.src = base64
   })
}

const prepareCanvasWithImage = (image) => {
   const canvas = document.createElement('canvas')
   const context = canvas.getContext('2d')

   canvas.width = image.width
   canvas.height = image.height
   context.drawImage(image, 0, 0)

   return context
}

const insertMessageIntoImageData = (originalImageData, message) => {
   const newImageData = structuredClone(originalImageData)

   for (let i = 0; i < message.length; i++) {

      const char = message.charAt(i)
      const charByte = char.charCodeAt(0).toString(2).padStart(8, '0')

      for (let j = 0; j < 8; j++) {

         const index = (i * 8 + j) + Math.floor((i * 8 + j) / 3)
         const value = originalImageData.data[index]
         const valueAsByte = value.toString(2).padStart(8, '0')
         const newByte = valueAsByte.slice(0, 7) + charByte.at(j)
         const newValue = parseInt(newByte, 2)

         newImageData.data[index] = newValue

      }
   }

   return newImageData
}

const prepareCanvas = () => {
   const canvas = document.createElement('canvas')
   const context = canvas.getContext('2d')

   return context
}

const createBase64FromImageData = (imageData) => {
   const context = prepareCanvas()
   const canvas = context.canvas

   canvas.width = imageData.width
   canvas.height = imageData.height
   context.putImageData(imageData, 0, 0)

   return canvas.toDataURL('image/png', 1)
}



fileInput.addEventListener('change', (event) => handleFileSubmition(event))