import Image from "next/image";
import { sdk } from "../lib/client";
import Link from "next/link";

export default async function Home() {
  const experiences = await sdk.Experiences();
  const educations = await sdk.Educations();

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
            <Link href={'/blog'}>See my Blog</Link>
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
          <Image src={'/section5-2.jpg'} alt="section 5 image" height={500} width={200}></Image>
        </div>
        <div className="second">
        </div>
        <div className="third">
        </div>
        <Image className="absolute-image4" src={'/section5.jpg'} alt="section 5 image" height={500} width={200}></Image>

        <div className="absolute-text">
        <h2>Education</h2>
          {educations.data.educations.map((education) => {
            return(
            <div key={education.id} className="experience-blog">
              <h3>{education.title}</h3>
              <h4>{education.name}</h4>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}
