import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/16/solid'


export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <Image src="/home-hero.png" alt="Apple" width={375} height={560}
        className="w-full absolute z-[-1]" />
      <div className="mt-[80vh] mb-16">
        <h1 className="text-3xl font-bold mb-4">
          Task Management & <br />To-Do List</h1>
        <p className="max-w-[250px] mx-auto mb-8">
          This productive tool is designed to help
          you better manage your task
          project-wise conveniently!
        </p>
        <Link href="/dashboard" className="db bg-[#5F33E1]
          px-16 py-2 rounded-xl
          text-white text-2xl font-bold min-w-[75vw]
          drop-shadow-lg drop-shadow-[#2588FF]">
          <button className="relative text-center w-full db">
            <span>Let's Start</span>
            <ArrowRightIcon className="w-5 h-full
            size-8 text-white absolute right-0" />
          </button>
        </Link>
      </div>
    </div>
  );
}