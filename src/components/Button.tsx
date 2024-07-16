import { twMerge } from "tailwind-merge"

type ButtonProps = Partial<{
   className: string
}> & React.PropsWithChildren & React.ComponentProps<'button'>

export default function Button({
   className,
   type = 'button',
   children,
   ...props
}: ButtonProps) {
   return (
      <button
         className={twMerge("rounded cursor-pointer text-primary bg-third py-3 w-full", className)}
         type={type}
         {...props}>
         {children}
      </button>
   )
}