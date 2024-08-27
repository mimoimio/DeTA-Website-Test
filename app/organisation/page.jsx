import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganisationDisplay from "@/components/OrganistaionDisplay";

export default function Organisation() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center gap-4 p-[2rem]">
        <h1 className="text-7xl">Know The Team</h1>
      </div>

      <div className="container mx-auto p-4 space-y-8">
        <div className="bg-blue-100 p-10 rounded-lg grid gap-4 ">
          <div className="text-xl text-center mb-4 lg:text-4xl"> The Mainboards </div>

          <div> <OrganisationDisplay position="President" description="Abdul Hakim"></OrganisationDisplay> </div>
          <div> <OrganisationDisplay position="Vice President" description="Abdul Hakim"></OrganisationDisplay> </div>
          <div> <OrganisationDisplay position="Secretary" description="Abdul Hakim"></OrganisationDisplay> </div>
        </div>

        <div className="bg-blue-100 p-10 rounded-lg grid gap-4 ">
          <div className="text-xl text-center mb-4  lg:text-4xl "> Executive Members </div>
          <div className=" grid md:grid-cols-2 p-5 ">
            <div> <OrganisationDisplay position="Exco Meetup" description="Abdul Hakim"></OrganisationDisplay> </div>
            <div> <OrganisationDisplay position="Exco Alumni Talk" description="Abdul Hakim"></OrganisationDisplay> </div>
            <div> <OrganisationDisplay position="Exco Hackathon" description="Abdul Hakim"></OrganisationDisplay> </div>
            <div> <OrganisationDisplay position="Exco Workshop" description="Abdul Hakim"></OrganisationDisplay> </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
