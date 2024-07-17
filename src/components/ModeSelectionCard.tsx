import Text from "./base/Text"
import Title from "./base/Title"

type ModelSelectionCardProps = {
   title: string
   description: string
   image: string
   alt: string
   onClick: () => unknown
}

export default function ModeSelectionCard({
   title,
   description,
   image,
   alt,
   onClick
}: ModelSelectionCardProps) {
   return (
      <div
         onClick={onClick}
         className="w-full space-y-4 group-hover:opacity-50 group-hover:grayscale duration-100 cursor-pointer hover:!opacity-100 hover:!grayscale-0">
         <img
            className="rounded-md aspect-square object-cover"
            src={image}
            alt={alt}
         />
         <div className="space-y-2">
            <Title className="lg:text-base text-left">{title}</Title>
            <Text className="text-left">{description}</Text>
         </div>
      </div>
   )
}