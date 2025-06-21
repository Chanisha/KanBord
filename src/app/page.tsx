import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 bg-white sm:p-20 ">
      <main className=" gap-[12px]">
        <Image
          className=""
          src="/logo.png"
          alt=""
          width={180}
          height={38}
          priority
        />
        </main>
        <div className="font-bold text-6xl text-black  "> Welcome to Kanbord </div>
        <main className=" gap-[12px]">
        <Image
          className=""
          src="/illustration.png"
          alt=""
          width={2000}
          height={100}
          priority
        />
        </main>
        </div>
        )
        }