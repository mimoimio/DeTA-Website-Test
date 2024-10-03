import GalleryDisplay from "./GalleryDisplay";

const FeaturedProjects = () => {
    return (
        <div className="flex justify-center bg-white flex-col w-full p-4 lg:p-16">
            <div className="pb-2 lg:pb-16">
                <p className="text-2xl lg:text-4xl">Featured Projects done in DeTA</p>
                <p className="text-slate-500 lg:text-2xl">Here's a few, and more to come!</p>
            </div>

            <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-4">
                <GalleryDisplay title="IIUMKPassa" desc="https://x.com/JustAiman/status/1826980703738990769"/>
                <GalleryDisplay title="Projek" desc="Description"/>
                <GalleryDisplay title="Projek" desc="Description"/>

            </div>
        </div>
    );
};
export default FeaturedProjects;