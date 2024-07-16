import { twMerge } from "tailwind-merge"

type TextProps = {
   className?: string
} & React.PropsWithChildren

export default function Text({ children, className }: TextProps) {
   return (
      <p className={twMerge("text-fourth w-full font-normal text-base", className)}>
         {children}
      </p>
   )
}