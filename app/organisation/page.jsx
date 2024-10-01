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
            <div className="text-xl text-center mb-4 lg:text-4xl"> The Mainboards </div>
            <div className="grid grid-cols-3 w-full gap-4">
              <OrganisationDisplay
                position="President"
                name="Hakim"
                linkedin="https://www.linkedin.com/in/hakim-nazri/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3BXAF8PsjNRzekGbj3gerkyQ%3D%3D"
                imageSrc="https://media.licdn.com/dms/image/v2/C5603AQGFQo-iw7WstQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1659781254837?e=1730937600&v=beta&t=qd0Po2EpgV4IXUOoWxb7o3N2AFTMLVZEFgRtTay86SM"
              />
              <OrganisationDisplay position="Vice President" name="Luqman" />
              <OrganisationDisplay position="Secretary" name="Syamil" />
            </div>
          </div>

          <div className="flex flex-col bg-orange-100 p-2 md:p-10 rounded-lg">
            <div className="text-xl text-center mb-4  lg:text-4xl "> Executive Commitees </div>
            <div className=" grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-4">
              <OrganisationDisplay position="Exco Meetup" name="Mior"
                linkedin="https://www.linkedin.com/in/adib-bida-4b312a296/"
                imageSrc="">
              </OrganisationDisplay>
              <OrganisationDisplay position="Exco Alumni Talk" name="Fadzwan" linkedin="https://www.linkedin.com/in/mohd-fadzwan-ashriq-5114a41aa/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3BXAF8PsjNRzekGbj3gerkyQ%3D%3D"></OrganisationDisplay>
              <OrganisationDisplay position="Exco Hackathon" name="To be determined"></OrganisationDisplay>
              <OrganisationDisplay position="Exco Workshop" name="Emrul"></OrganisationDisplay>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
