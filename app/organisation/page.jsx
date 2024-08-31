import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganisationDisplay from "@/components/OrganistaionDisplay";

export default function Organisation() {
  return (
    <main>
      <Header />
      <div className="mx-auto container">
        <div className="flex flex-col items-center gap-4 p-[2rem]">
          <h1 className="text-7xl">Know The Team</h1>
        </div>

        <div className="mx-auto container p-4 space-y-8">
          <div className="flex flex-col bg-blue-100 p-10 rounded-lg gap-4 ">
            <div className="text-xl text-center mb-4 lg:text-4xl"> The Mainboards </div>
            <OrganisationDisplay position="President" name="Hakim" linkedin="https://www.linkedin.com/in/hakim-nazri/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3BXAF8PsjNRzekGbj3gerkyQ%3D%3D" />
            <OrganisationDisplay position="Vice President" name="Luqman" />
            <OrganisationDisplay position="Secretary" name="Syamil" />
          </div>

          <div className="bg-blue-100 p-10 rounded-lg grid gap-4 ">
            <div className="text-xl text-center mb-4  lg:text-4xl "> Executive Members </div>
            <div className=" grid md:grid-cols-2 p-5 gap-4">
              <div> <OrganisationDisplay position="Exco Meetup" name="Mior" linkedin="https://www.linkedin.com/in/adib-bida-4b312a296/"></OrganisationDisplay> </div>
              <div> <OrganisationDisplay position="Exco Alumni Talk" name="Fadzwan" linkedin="https://www.linkedin.com/in/mohd-fadzwan-ashriq-5114a41aa/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3BXAF8PsjNRzekGbj3gerkyQ%3D%3D"></OrganisationDisplay> </div>
              <div> <OrganisationDisplay position="Exco Hackathon" name="John Doe"></OrganisationDisplay> </div>
              <div> <OrganisationDisplay position="Exco Workshop" name="Emrul"></OrganisationDisplay> </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
