import { twMerge } from "tailwind-merge"

type ContainerProps = {
   className?: string
}

export default function Container({
   children,
   className,
}: ContainerProps & React.PropsWithChildren) {
   return (
      <div
         className={twMerge("bg-secondary border border-third border-solid rounded-md p-4", className)}>
         {children}
      </div>
   )
}