import ThemeToggle from '@/components/theme-toggle'

export default function Home() {
    return (
        <div className="flex flex-col gap-10 w-screen h-screen justify-center items-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Switching Themes Has Never Felt This Good.
            </h1>
            <ThemeToggle />
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                A Project by Jeremy Cameron
            </p>
        </div>
    )
}
