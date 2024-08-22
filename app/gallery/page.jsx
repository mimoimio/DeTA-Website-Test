import Header from "@/components/Header";
import DisplayProgram from "@/components/GalleryDisplay";
export default function Gallery() {
  return (
    <main>
      <Header/>
      <div className="flex justify-center p-16">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <p className="ml-20 text-9xl">Gallery</p>
            <p className="ml-20 text-lg">For the memories within DeTA</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-16 w-full p-10">
        <DisplayProgram title="Gambar 1" desc="Ayo dong"></DisplayProgram>
        <DisplayProgram title="Gambar 2" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 3" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 4" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 5" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 6" desc="Ayo dong"></DisplayProgram>
        <DisplayProgram title="Gambar 7" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 8" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 9" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 10" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 11" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 12" desc="Ayo dong"></DisplayProgram>
        <DisplayProgram title="Gambar 13" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 14" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 15" desc="Ayo dong"></DisplayProgram>
        <DisplayProgram title="Gambar 16" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 17" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 18" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 19" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Gambar 20" desc="Pernyataan"></DisplayProgram>
      </div>
    </main>
  );
}