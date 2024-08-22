import Image from 'next/image';

const Perk = ({ title, desc }) => {
    return (
        // hover:scale-105
        <div className='relative w-full shadow-xl hover:-translate-y-1 duration-150 rounded-2xl p-16'>
            <p className="text-4xl">Membership Perks</p>
            <p className="text-slate-500 text-2xl">“What will I get if I joined DeTA?”</p>
        </div>
    );
};

export default Perk;