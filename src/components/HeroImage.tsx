import { twMerge } from "tailwind-merge"
import Text from "./base/Text"

type HeroImageProps = {
   title: string,
   src: string,
   alt: string,
   className: string
}

export default function HeroImage({
   title,
   src,
   alt,
   className
}: HeroImageProps) {
   return (
      <div className={twMerge("rounded size-full overflow-hidden relative group", className)}>
         <img
            className="absolute top-0 left-0 size-full z-10 object-cover duration-200 group-hover:scale-110"
            src={src}
            alt={alt}
         />
         <Text className="text-left size-full p-4 content-end font-semibold text-primary z-10 relative">
            {title}
         </Text>
      </div>
   )
}