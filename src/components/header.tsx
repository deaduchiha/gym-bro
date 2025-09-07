import Link from "next/link";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 mb-10 z-50 px-2 py-1 backdrop-blur-lg bg-white/0 shadow dark:sm:border dark:shadow-none">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Button variant={"ghost"} asChild>
            <Link href={"/tricks"}>راهنما</Link>
          </Button>

          <Button variant={"ghost"} asChild>
            <Link href={"/"}>برنامه</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
