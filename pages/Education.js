import Image from "next/image";
import ubm from "../public/asset/images/ubm.png";
import bangkit from "../public/asset/images/bangkit.jpg";

export default function Education() {
  return (
    <div>
      <div
        class="flex flex-col justify-center items-center flex-wrap p-20 lg:p-4"
        id="Education"
      ></div>

      <section className="min-h-screen top-10">
        <div>
          <h3 className="text-3xl py-1">Education Background</h3>
          <p className="text-md py-2 leading-8 text-gray-800 text-justify">
            I am currently pursuing a Bachelor's degree in
            <span className="text-teal-500">
              {" "}
              Informatics at Bunda Mulia University,{" "}
            </span>
            and I am in my seventh semester of study. As part of my academic
            journey, I have had the privilege of participating in an independent
            study program at
            <span className="text-teal-500">
              {" "}
              Bangkit Academy by Google, GoTo, and Traveloka.{" "}
            </span>
            Throughout this program, I focused on the Android/Mobile Development
            learning path, which provided me with invaluable knowledge and
            skills in this dynamic and fast-evolving field.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <a href="https://www.ubm.ac.id/en/home-en" target="_blank">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="mx-auto" src={ubm} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Bunda Mulia University
              </h3>
              <p className="py-2">Informatics</p>
              <h4 className="py-4 text-teal-600">Skills</h4>
              <p className="text-gray-800 py-1">UI/UX Design</p>
              <p className="text-gray-800 py-1">Web Development</p>
              <p className="text-gray-800 py-1">Mobile development (Java)</p>
              <p className="text-gray-800 py-1">Data Structures</p>
            </div>
          </a>
          <a href="https://grow.google/intl/id_id/bangkit" target="_blank">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                className="mx-auto"
                src={bangkit}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt- pb-2">
                Bangkit Academy 2023
              </h3>
              <p className="py-2">Android Learning Path</p>
              <h4 className="py-4 text-teal-600">Skills</h4>
              <p className="text-gray-800 py-1">Mobile development (Kotlin)</p>
              <p className="text-gray-800 py-1">UI/UX Design</p>
              <p className="text-gray-800 py-1">SOLID Principles</p>
              <p className="text-gray-800 py-1">Version Control System</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
