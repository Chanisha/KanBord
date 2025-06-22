"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-20 pb-40 gap-10 overflow-hidden">
      <main className="pb-28 pt-5">
      <Image
        src="/logo.png"
        alt=""
        width={140}
        height={15}
        priority
      />
      </main>

      <h1 className="text-4xl text-center pb-2 sm:text-5xl font-semi-bold text-black ">
        Welcome to Kanbord
      </h1>


      <button
        onClick={() => router.push('/auth')}
        className="flex items-center mb-28 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
      >
        Continue with Google
      </button>

      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/illustration.png"
          alt=""
          width={1920}
          height={300}
          layout="responsive"
          priority
        />
      </div>
    </div>
  );
}
