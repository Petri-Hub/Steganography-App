import { twMerge } from "tailwind-merge"

export default function Text({ children, className, ...props }: React.ComponentProps<'p'>) {
   return (
      <p 
         className={twMerge("text-fourth w-full font-normal md:text-sm text-sm text-center", className)}
         {...props}   
      >
         {children}
      </p>
   )
}