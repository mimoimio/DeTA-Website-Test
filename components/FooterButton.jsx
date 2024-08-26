import Link from "next/link";
const FooterButton = ({ address, title }) => {
  return (
    <Link href={"/".concat(address)}>
      <li>{title}</li>
    </Link>
  );
};
export default FooterButton;
