import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center p-10">
        <h1 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Audi Hagi
        </h1>
        <h3 className="text-2xl py-2 md:text-3xl">
          Android and Website Development
        </h3>
        {/* <p className="text-md leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
          Informatics Undergraduate Student
        </p> */}
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
  );
}
