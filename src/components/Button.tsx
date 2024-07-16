import { twMerge } from "tailwind-merge"

export default function Button({ 
   type = 'button', 
   className, 
   children, 
   ...props 
}: React.ComponentProps<'button'>) {
   return (
      <button
         className={twMerge("rounded cursor-pointer text-primary bg-third py-3 w-full", className)}
         type={type}
         {...props}>
         {children}
      </button>
   )
}