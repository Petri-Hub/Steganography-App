export default function Main({ children }: React.PropsWithChildren) {
   return (
      <main className="size-full bg-secondary">
         <div className="size-full absolute top-0 left-0 z-0 bg-question-mark-pattern bg-[length:300px] opacity-5"></div>
         <div className="size-full absolute top-0 left-0 z-10 grid place-items-center">
            {children}
         </div>
      </main>
   )
}