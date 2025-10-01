import Image from "next/image";
import ModeToggle from "./mode-toggle";

const Header = () => {
  return (
    <header className="p-4 mb-4 border-b sticky top-0 z-50 backdrop-blur-3xl flex items-center justify-between">
      <Image
        src="/icon-512x512.png"
        className="rounded-full size-12"
        alt="gym bro"
        width={100}
        height={100}
      />

      <ModeToggle />
    </header>
  );
};

export default Header;
