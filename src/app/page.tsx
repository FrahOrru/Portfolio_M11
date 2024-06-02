import Image from "next/image";
import { sdk } from "../lib/client";

export default async function Home() {
  const experiences = await sdk.Experiences();

  console.log(experiences);

  return (
    <div className="main">
      <div className="sectionH mx-20 grid">
        <div className="first"></div>
        <div className="second">
          <h2>Francesca Orrù</h2>
        </div>
        <div className="third">
          <div className="mt-4">
          <Image src={'/header2.jpg'} alt="header pic" width={500} height={200}></Image>
          <p className="mt-6">Frontend Developer <br /> & <br /> Entrepreneur</p>
          </div>
        </div>
      </div>
      <div className="sectionA mx-20 grid">
        <div className="first">
          <h2>Experience</h2>
          {experiences.data.experiences.map((experience) => {
            return(
            <div key={experience.id} className="experience-blog">
              <h3>{experience.position}</h3>
              <h4>{experience.company}</h4>
            </div>)
          })}
          <Image className="absolute-image2" src={'/section2.jpg'} alt="section2" width={300} height={600}></Image>
          <Image className="absolute-image" src={'/section2-2.jpg'} alt="section2 img2" width={300} height={600}></Image>
        </div>
        <div className="second"></div>
        <div className="third"></div>
      </div>
      <div className="sectionB mx-20 grid">
        <div className="first">
        </div>
        <div className="second">
        </div>
        <div className="third">
          <p>Do you wanna know more about me?</p>
          <p>Read my posts where I write about my interests</p>
          <div className="button-blog">
            See my Blog
          </div>
        </div>
        <Image className="absolute-image3" src={'/section3-2.jpg'} alt="section3 img" width={500} height={200}></Image>   
      </div>
      <div className="sectionC mx-20 grid">
        <div className="first">
        </div>
        <div className="second">
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
        </div>
        <div className="third">
        </div>
      </div>
      <div className="sectionD mx-20 grid">
        <div className="first">
        </div>
        <div className="second">
        </div>
        <div className="third">
        </div>
      </div>
    </div>
  );
}
