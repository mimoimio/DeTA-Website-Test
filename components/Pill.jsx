import Link from "next/link";
const Pill = ({ address, title }) => {

    const styling ="bg-white py-1 px-3 rounded-xl transition-all duration-100 hover:bg-slate-50 hover:-translate-y-1 hover:drop-shadow-lg hover:shadow-black text-center";
    return (
        <Link href={"/".concat(address)} className= {styling}>
            <li>
                {title}
            </li>
        </Link>

    );
}
export default Pill;