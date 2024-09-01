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
        <div className="grid grid-cols-3 gap-16 w-full p-10 bg-white rounded-xl">
          <GalleryDisplay title="Gambar 1" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczPAB1lzyBQP7r9aJmZaRNh-xeSPQ-SC6VKE4UulBqDcpo0f3BmYTRg3FdGYboXmOXU7GTcd3qmCLOEMOasrjE4GXAXkjcbUS5llji-q5T20JJO6JO1N5g1ey0A3ost3Dt1Z8Ol6iFSscbAVYXEUiCxLhg=w1260-h945-s-no-gm?authuser=0"></GalleryDisplay>
          <GalleryDisplay title="Gambar 1" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczOrpDpVAfk8Nbn5oKq0bDXsgi6lMz1iGfVtVDneBdpVbGG-Bo6Ks_QGYWy4DDp869dpWafxFanzES4vsrWU_Cez3NHAjn9H1D5irf8Gp2Z8oICV6n-ZWgUt9dHX82ovyKOdkkscMOVVGG0TtHJZ-IFR=w1260-h945-s-no-gm?authuser=0"></GalleryDisplay>
          <GalleryDisplay title="Gambar 1" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczPcvLFd90OsFrTBjbFEkHQl2Yru6V8p0Q5-ExicfANyt5UjNHte6XtBEQN2pxj9uZ7F40H5iCWHyqmeJ7eqGIwaOY78-hMJKIJS3c4bqzpS6hpsh5abri0ljk1xDpmV_CsZXhktTo2ldrC_eq90lBxj=w1260-h945-s-no-gm?authuser=0"></GalleryDisplay>
          <GalleryDisplay title="Gambar 1" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczOmo_yLsnPA6SiHhOcaILvrQ6KJWeC6_yPWZZ4L4FaystIFHOlqjSZoSmBnF2A8QY-eGBjz5BVWr3HObdeguNa9-dM_4mrrcnaLMY2_LfoswRNLdktsd_xTxxpk8x7QLrsRDnB8NU60MyTvh-mz--1M=w1260-h945-s-no-gm?authuser=0"></GalleryDisplay>
          <GalleryDisplay title="Gambar 1" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczMAmlqWtAiYcQGT9DUKak-bgZ1hLtR--fWgdqe7w9yiwoHF_cs_KTHUduyj4WpcHfkRueIV8qpDVHvCFuj70JzI3k3tgLEY2HkzfgwvaJZ84Rua9vJrvT-Iv1MYZ6baptPNSlnMRl3s2J6RLW3D4kli=w1020-h768-s-no-gm?authuser=0"></GalleryDisplay>
          <GalleryDisplay title="Gambar 1" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczM04VSLMTRrteuIZ-3G4gix7AqcTntI6ST9gYuaar6k3o-DDrFzFCPdoSQpJnJbLnxB9Lre1JCO3Hxrk8SDSClCAUBY71VqnWKmEzON9N3b1h8SzjJFVbX0pt1SH8bo-QGDTCbaaNmBWGvb59ShhXhN=w1020-h768-s-no-gm?authuser=0"></GalleryDisplay>
        </div>
      </div>
      <Footer />
    </main>
  );
}
