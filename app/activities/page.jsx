import Header from "@/components/Header";
import DisplayProgram from "@/components/DisplayProgram";
import NavBar from "@/components/NavBar"
export default function Activities() {
  return (
    <main className="bg-blue-50">
      <Header/>
      <NavBar/>
      <div className="grid grid-cols-5 gap-4 w-full p-10">
        <DisplayProgram title="Program 1" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 2" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 3" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 4" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 5" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 6" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 7" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 8" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 9" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 10" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 11" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 12" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 13" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 14" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 15" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 16" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 17" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 18" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 19" desc="Pernyataan"></DisplayProgram>
        <DisplayProgram title="Program 20" desc="Pernyataan"></DisplayProgram>
      </div>
    </main>
  );
}