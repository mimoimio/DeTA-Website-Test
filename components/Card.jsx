import Image from 'next/image';

const Card = ({ title, desc }) => {
    return (
        <div className="bg-[#F7F7F7] border hover:bg-[#F2F2F2] transition duration-150 rounded-2xl p-4 lg:p-8">
            <h2 className="text-2xl lg:text-4xl font-bold">{title}</h2>
            <p className="text-slate-500 text-sm lg:text-2xl mt-2 lg:mt-4">{desc}</p>
        </div>
    );
};

export default Card;