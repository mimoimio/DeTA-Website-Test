import Image from 'next/image';

const Card = ({ title, desc }) => {
    return (
        // hover:scale-105
        <div className='relative w-full shadow-xl hover:-translate-y-1 duration-150 rounded-2xl p-16'>
            <p className="text-4xl">{title}</p>
            <p className="text-slate-500 text-2xl">{desc}</p>
        </div>
    );
};

export default Card;