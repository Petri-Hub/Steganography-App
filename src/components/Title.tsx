export default function Title({ children }: React.PropsWithChildren) {
   return (
      <h2 className="text-primary font-semibold text-xl">
         {children}
      </h2>
   )
}