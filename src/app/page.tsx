import Image from "next/image";
import { Test } from "@/utils/Test";

export default function Home() {
    const test = new Test();

    return (
        <div className="flex items-center justify-center min-h-screen">
            <main className="flex flex-col items-center justify-between min-h-screen w-full max-w-6xl py-8 px-8">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={100}
                    height={20}
                    priority
                />
                <div>{test.hello()}</div>
            </main>
        </div>
    );
}
