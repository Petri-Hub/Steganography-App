import { twMerge } from "tailwind-merge"

export default function Title({ children, className, ...props }: React.ComponentProps<'h2'>) {
   return (
      <h2 
         className={twMerge("text-primary font-semibold md:text-xl text-base text-center", className)}
         {...props}
      >
         {children}
      </h2>
   )
}