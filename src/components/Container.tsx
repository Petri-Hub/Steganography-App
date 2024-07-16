import { twMerge } from "tailwind-merge"

export default function Container({ children, className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         className={twMerge("bg-secondary border border-third border-solid rounded-md p-4", className)}
         {...props}
      >
         {children}
      </div>
   )
}