"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; // 1. Import the hook

const Pill = ({ address, title, onClick, back }) => {
  const router = useRouter(); // 2. Initialize the hook

  // 3. Create a safe handler
  const handleBack = (e) => {
    e.preventDefault(); // Prevents the Link from navigating to href
    router.back();
  };

  return (
    <Link
      // If going back, we use a dummy href, otherwise constructs the path
      href={address ? `/${address}` : "#"} 
      onClick={back ? handleBack : onClick}
      className="relative group px-4 py-2 rounded-xl transition-all duration-300 hover:text-[#FF6B00]"
    >
      <span className="relative z-10">{title}</span>
      <span className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF6B00] group-hover:w-full transition-all duration-300 ease-out"></span>
    </Link>
  );
};

export default Pill;
