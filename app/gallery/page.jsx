import Header from "@/components/Header";
import GalleryDisplay from "@/components/GalleryDisplay";
import Footer from "@/components/Footer";
export default function Gallery() {
  return (
    <main>
      <Header />
      <div className="flex justify-center p-[2rem]">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <p className="text-7xl">Gallery</p>
            <p className="text-2xl">For the memories within DeTA</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-16 w-full p-10">
        <GalleryDisplay title="Gambar 1" desc="Description"></GalleryDisplay>
        <GalleryDisplay title="Gambar 1" desc="Description"></GalleryDisplay>
        <GalleryDisplay title="Gambar 1" desc="Description"></GalleryDisplay>
        <GalleryDisplay title="Gambar 1" desc="Description"></GalleryDisplay>
        <GalleryDisplay title="Gambar 1" desc="Description"></GalleryDisplay>
        <GalleryDisplay title="Gambar 1" desc="Description"></GalleryDisplay>
        <GalleryDisplay title="Gambar 1" desc="Description"></GalleryDisplay>
        <GalleryDisplay title="Gambar 1" desc="Description"></GalleryDisplay>
        <GalleryDisplay title="Gambar 1" desc="Description"></GalleryDisplay>
        <GalleryDisplay title="Gambar 1" desc="Description"></GalleryDisplay>
        <GalleryDisplay title="Gambar 1" desc="Description"></GalleryDisplay>
      </div>
      <Footer />
    </main>
  );
}
