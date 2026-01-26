import Link from "next/link";

const Pill = ({ address, title, onClick }) => {
  return (
    <Link
      href={address ? `/${address}` : "/"}
      onClick={onClick}
      className="relative group px-4 py-2 rounded-xl transition-all duration-300 hover:text-[#FF6B00]"
    >
      <span className="relative z-10">{title}</span>
      <span className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF6B00] group-hover:w-full transition-all duration-300 ease-out"></span>
    </Link>
  );
};

export default Pill;
