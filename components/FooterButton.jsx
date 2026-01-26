import Link from "next/link";

const FooterButton = ({ address, title }) => {
  return (
    <li>
      <Link
        href={address ? `/${address}` : "/"}
        className="text-white/60 hover:text-[#FF6B00] transition-colors duration-300 inline-block"
      >
        {title}
      </Link>
    </li>
  );
};

export default FooterButton;
