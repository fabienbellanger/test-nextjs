import Image from "next/image";
import { Test } from "@/utils/Test";

export default function Home() {
    const test = new Test();
    const hello = test.hello();

    return (
        <div className="flex min-h-screen items-center justify-center">
            <main className="flex flex-col items-center sm:items-start justify-between min-h-screen w-full max-w-6xl py-32 px-16">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={100}
                    height={20}
                    priority
                />
                <div>{hello}</div>
            </main>
        </div>
    );
}
