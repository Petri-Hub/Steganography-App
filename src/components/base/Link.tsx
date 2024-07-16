import { twMerge } from "tailwind-merge"

export default function Link({ 
   className, 
   children,
   ...props 
}: React.ComponentProps<'a'>) {
   return (
      <a
         className={twMerge("cursor-pointer text-links duration-100 hover:opacity-90", className)}
         {...props}>
         {children}
      </a>
   )
}