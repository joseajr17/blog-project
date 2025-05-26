import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center pb-5 text-center gap-2">
      <p>
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link href='/'>Flamengo News </Link>
      </p>

      <div className="flex space-x-6">
        {/* GitHub */}
        <a
          href="https://github.com/joseajr17"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-black transition"
        >
          <FaGithub size={28} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/joseantonio1712/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500  transition"
        >
          <FaLinkedin size={28} />
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=josejr017@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-red-500 transition"
        >
          <FaEnvelope size={28} />
        </a>
      </div>
    </footer>
  )
}