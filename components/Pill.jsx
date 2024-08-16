import Link from "next/link";
const Pill = ({ address, title }) => {
    return (
        <Link href={"/".concat(address)} className="bg-opacity-40 bg-slate-50 px-6 rounded-full hover:bg-slate-500 transition-all duration-100 hover:scale-110">
            <li>
                {title}
            </li>
        </Link>

    );
}
export default Pill;