import Image from "next/image";
import Modal from "./components/modal";
import Dropdown from "./components/Dropdown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-24">
      {/* flex min-h-screen flex-col items-center justify-between p-24 */}
      {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      /> */}
      {/* <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      /> */}

      <Modal />

      <Dropdown />

      {/* <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div> */}
    </main>
  );
}
