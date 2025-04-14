import Link from "next/link";
const FooterButton = ({ address, title }) => {
  return (
    <Link
      href={"/".concat(address)}
      className="hover:-translate-y-1 hover:text-slate-400 duration-150"
    >
      <li>{title}</li>
    </Link>
  );
};
export default FooterButton;
