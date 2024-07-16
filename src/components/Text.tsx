import { twMerge } from "tailwind-merge"

export default function Text({ children, className, ...props }: React.ComponentProps<'p'>) {
   return (
      <p 
         className={twMerge("text-fourth w-full font-normal text-base", className)}
         {...props}   
      >
         {children}
      </p>
   )
}