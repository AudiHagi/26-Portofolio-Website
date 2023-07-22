import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from 'react-icons/ai';
import Image from 'next/image';
import ubm from '../public/ubm.png'
import bangkit from '../public/bangkit.jpg'
import covidtracker from '../public/covidtracker.png'
import githubuser from '../public/githubuser.png'
import renata from '../public/renata.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audi Hagi Portofolio</title>
        <meta></meta>
        <link></link>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40">

        <section className="min-h-screen flex flex-col justify-center items-center">
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Audi Hagi</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Android and Website Development</h3>
            <p className="text-md leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">Informatics Undergraduate Student</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <a href="https://www.linkedin.com/in/audihagi">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/AudiHagi">
              <AiFillGithub />
            </a>
            <a href="https://drive.google.com/uc?export=download&id=1HSgKsefLSbXI81YDYobFlfLt-iJK_zUc">
              <AiFillFilePdf />
            </a>
          </div>
        </section>

        <section className="min-h-screen">
          <div>
            <h3 className="text-3xl py-1">Education Background</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-justify">
              I am currently pursuing a Bachelor's degree in
              <span className="text-teal-500"> Informatics at Bunda Mulia University, </span>
              and I am in my seventh semester of study. As part of my academic journey, I have had the privilege of participating in an independent study program at
              <span className="text-teal-500"> Bangkit Academy by Google, GoTo, and Traveloka. </span>
              Throughout this program, I focused on the Android/Mobile Development learning path, which provided me with invaluable knowledge and skills in this dynamic and fast-evolving field.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="mx-auto" src={ubm} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Bunda Mulia University</h3>
              <p className="py-2">Informatics</p>
              <h4 className="py-4 text-teal-600">Skills</h4>
              <p className="text-gray-800 py-1">UI/UX Design</p>
              <p className="text-gray-800 py-1">Web Development</p>
              <p className="text-gray-800 py-1">Mobile development (Java)</p>
              <p className="text-gray-800 py-1">Data Structures</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="mx-auto" src={bangkit} width={100} height={100} />
              <h3 className="text-lg font-medium pt- pb-2">Bangkit Academy 2023</h3>
              <p className="py-2">Android Learning Path</p>
              <h4 className="py-4 text-teal-600">Skills</h4>
              <p className="text-gray-800 py-1">Mobile development (Kotlin)</p>
              <p className="text-gray-800 py-1">UI/UX Design</p>
              <p className="text-gray-800 py-1">SOLID Principles</p>
              <p className="text-gray-800 py-1">Version Control System</p>
            </div>
          </div>
        </section>


        <section className="min-h-screen">
          <div>
            <h3 className="text-3xl py-1">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-justify">
              I specialize in Android Development, leveraging my expertise in creating cutting-edge mobile applications. With a strong foundation in Java and Kotlin, I craft user-friendly and intuitive interfaces, emphasizing seamless user experiences. Throughout my academic journey and participation in industry-driven programs like Bangkit Academy, powered by tech leaders such as Google, GoTo, and Traveloka, I have honed my skills in building innovative and robust Android apps. My passion for exploring the latest technologies and trends drives me to deliver high-quality solutions that leave a positive impact on users. I am committed to continuous learning and eagerly embrace new challenges to remain at the forefront of the dynamic Android development landscape. Through my portfolio, I aim to showcase my diverse range of Android projects, demonstrating my dedication to creating exceptional mobile experiences.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image src={covidtracker} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image src={githubuser} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image src={renata} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
            </div>
          </div>
        </section>

      </main>
    </div >
  );
}