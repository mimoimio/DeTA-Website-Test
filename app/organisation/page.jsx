import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganisationDisplay from "@/components/OrganistaionDisplay";

export default function Organisation() {
  return (
    <main>
      <Header />
      <div className="mx-auto container">
        <div className="flex flex-col items-center gap-4 p-[2rem] lg:p-[2rem]">
          <h1 className="text-5xl lg:text-7xl">Know The Team</h1>
          {/* <h2 className="text-xl lg:text-2xl flex-wrap lg:mx-[26rem] text-center"></h2> */}
        </div>

        <div className="mx-auto container p-4 space-y-8">
          <div className="flex flex-col bg-orange-100 p-2 md:p-10 rounded-lg">

            <div className="text-xl text-center mb-4 lg:text-4xl"> The Benevolent Dictator For Life </div>

            <div className="grid grid-cols-1 w-full gap-4">
              <OrganisationDisplay name="Aiman Rahim" linkedin="https://www.linkedin.com/in/aiman-rahim-grad-eng-4267091a3/"/>
            </div>

          </div>

          <div className="flex flex-col bg-orange-100 p-2 md:p-10 rounded-lg">
            <div className="text-xl text-center mb-4 lg:text-4xl"> The Community Managers </div>
            <div className=" grid grid-cols-2 grid-rows-2 md:grid-cols-5 gap-4">
              <OrganisationDisplay
                name="Hakim"
                linkedin="https://www.linkedin.com/in/hakim-nazri/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3BXAF8PsjNRzekGbj3gerkyQ%3D%3D"
              />
              <OrganisationDisplay position="Vice President" name="Luqman" linkedin="https://www.linkedin.com/in/lqmkim/"/>
              <OrganisationDisplay position="Secretary" name="Syamil" linkedin="https://www.linkedin.com/in/syamil-yusof/" />
              <OrganisationDisplay position="Exco Meetup" name="Mior" linkedin="https://www.linkedin.com/in/adib-bida-4b312a296/" />
              <OrganisationDisplay position="Exco Alumni Talk" name="Fadzwan" linkedin="https://www.linkedin.com/in/mohd-fadzwan-ashriq-5114a41aa/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3BXAF8PsjNRzekGbj3gerkyQ%3D%3D"/>
              <OrganisationDisplay position="Exco Workshop" name="Emrul" linkedin="https://www.linkedin.com/in/arif-emrullah/"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
