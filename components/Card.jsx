import Image from 'next/image';

const Card = ({ title, desc }) => {
    return (
        // hover:scale-105
        <div className='bg-slate-100 bg-opacity-25 w-full shadow-xl hover:-translate-y-1 duration-150 rounded-2xl p-2 lg:p-16 text-justify'>
            <p className="lg:text-4xl">{title}</p>
            <p className="text-slate-500 text-sm lg:text-2xl">{desc}</p>
        </div>
    );
};

export default Card;