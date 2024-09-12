import Link from "next/link";
const FooterButton = ({ address, title }) => {
  return (
    <Link className="hover:underline" href={"/".concat(address)}>
      <li>{title}</li>
    </Link>
  );
};
export default FooterButton;
