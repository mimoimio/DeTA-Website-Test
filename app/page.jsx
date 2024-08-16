import Header from "@/components/Header";
import DisplayProgram from "@/components/DisplayProgram";
import NavBar from "@/components/NavBar"
export default function Home() {
  return (
    <main className="bg-blue-50">
      {/* className="flex flex-col items-center justify-between p-16" */}
      <Header />
      <NavBar />
      Home page
    </main>
  );
}