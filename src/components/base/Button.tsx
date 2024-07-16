import { twMerge } from "tailwind-merge"

export default function Button({ 
   type = 'button', 
   className, 
   children, 
   ...props 
}: React.ComponentProps<'button'>) {
   return (
      <button
         className={twMerge("rounded cursor-pointer duration-100 hover:opacity-90 md:text-sm text-sm text-primary bg-third py-3 px-8", className)}
         type={type}
         {...props}>
         {children}
      </button>
   )
}