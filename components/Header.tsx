import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Montserrat } from "@next/font/google";
import { montserratFont } from "../utils";
function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <header className="flex items-center justify-between w-full px-4 shadow-sm h-36">
      <div className="container flex items-center justify-between w-full h-full mx-auto">
        <Image
          src={require("../assets/Logo.svg")}
          alt="Vercel Logo"
          height={73}
          priority
        />
        <nav className="flex items-center h-full tracking-[0.095em]">
          <ul className="flex items-center space-x-4 font-bold font-Montserrat text-primary/80 gap-14">
            <li>
              <Link
                className={
                  currentRoute === "/"
                    ? "border-b-2 border-primary text-primary/100"
                    : ""
                }
                href="/"
              >
                INICIO
              </Link>
            </li>

            <li>
              <Link
                className={
                  currentRoute === "/about"
                    ? "border-b-2 border-primary text-primary/100"
                    : ""
                }
                href="/about"
              >
                ACERCA DE NOSOTROS
              </Link>
            </li>

            <li>
              <Link
                className={
                  currentRoute === "/faq"
                    ? "border-b-2 border-primary text-primary/100"
                    : ""
                }
                href="/faq"
              >
                PREGUNTAS FRECUENTES
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
