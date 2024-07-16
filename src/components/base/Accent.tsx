import { twMerge } from "tailwind-merge";

type AccentProps = Partial<{
   color: string
}>


export default function Accent({ 
   children, 
   className,
   color = 'text-links'
}: AccentProps & React.ComponentProps<'span'>){
   return (
      <span className={twMerge("color", className, color)}>
         {children}
      </span>
   )
}