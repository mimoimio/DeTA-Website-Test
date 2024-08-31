import Header from "@/components/Header";
import GalleryDisplay from "@/components/GalleryDisplay";
import Footer from "@/components/Footer";
export default function Gallery() {
  return (
    <main>
      <Header />
      <div className="mx-auto container">
        <div className="flex justify-center p-[2rem]">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <p className="text-7xl">Gallery</p>
              <p className="text-2xl">For the memories within DeTA</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-16 w-full p-10">
          <GalleryDisplay title="Gambar 1" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczPAB1lzyBQP7r9aJmZaRNh-xeSPQ-SC6VKE4UulBqDcpo0f3BmYTRg3FdGYboXmOXU7GTcd3qmCLOEMOasrjE4GXAXkjcbUS5llji-q5T20JJO6JO1N5g1ey0A3ost3Dt1Z8Ol6iFSscbAVYXEUiCxLhg=w1260-h945-s-no-gm?authuser=0"></GalleryDisplay>
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
      </div>
      <Footer />
    </main>
  );
}
