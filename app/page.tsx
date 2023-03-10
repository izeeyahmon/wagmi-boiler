import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="relative z-10 flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-start px-4 py-4">
          <p className="mb-6 text-8xl font-medium text-white">
            wagmi boilerplate
          </p>
          <a
            href="https://github.com/zkSoju/wagmi-boiler"
            target="_blank"
            className="border-1 cursor-pointer rounded-full border border-white/5 bg-white/10 px-2 py-0.5 text-white backdrop-blur-lg transition duration-300 ease-linear hover:text-white"
          >
            <div className="flex flex-row items-center space-x-2">
              <FaGithub />
              <p>Use this template</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
