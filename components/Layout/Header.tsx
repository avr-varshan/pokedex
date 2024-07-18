// components/Header.js
import { ModeToggle } from "../ModeToggle";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/Pokedex.png"
            alt="Pokedex Logo"
            width={150}
            height={150}
          />
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
