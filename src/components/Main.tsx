export default function Main({ children }: React.PropsWithChildren) {
   return (
      <main className="size-full bg-secondary flex justify-center items-center flex-col">
         {children}
      </main>
   )
}