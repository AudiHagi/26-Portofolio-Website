import Image from "next/image";
import covidtracker from "../../public/asset/images/mobile/covidtracker.png";
import githubuser from "../../public/asset/images/mobile/githubuser.png";
import renata from "../../public/asset/images/mobile/renata.png";
import todo from "../../public/asset/images/mobile/todo.png";
import courseschedule from "../../public/asset/images/mobile/courseschedule.png";
import habittracer from "../../public/asset/images/mobile/habittracker.png";
import story from "../../public/asset/images/mobile/story.png";
import moviesync from "../../public/asset/images/mobile/moviesync.png";

const MobilePorto = () => {
  return (
    <div>
      <div
        class="flex flex-col justify-center items-center flex-wrap p-20 lg:p-4"
        id="MobilePorto"
      ></div>

      <section className="min-h-screen">
        <div>
          <h3 className="text-3xl py-1">Mobile App Portofolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 text-justify">
            I specialize in Android Development, leveraging my expertise in
            creating cutting-edge mobile applications. With a strong foundation
            in Java and Kotlin, I craft user-friendly and intuitive interfaces,
            emphasizing seamless user experiences. Throughout my academic
            journey and participation in industry-driven programs like Bangkit
            Academy, powered by tech leaders such as Google, GoTo, and
            Traveloka, I have honed my skills in building innovative and robust
            Android apps. My passion for exploring the latest technologies and
            trends drives me to deliver high-quality solutions that leave a
            positive impact on users. I am committed to continuous learning and
            eagerly embrace new challenges to remain at the forefront of the
            dynamic Android development landscape. Through my portfolio, I aim
            to showcase my diverse range of Android projects, demonstrating my
            dedication to creating exceptional mobile experiences.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <a>
              <Image
                src={covidtracker}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1 ">
            <a>
              <Image
                src={githubuser}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1 ">
            <a>
              <Image
                src={renata}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1 ">
            <a>
              <Image
                src={todo}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1 ">
            <a>
              <Image
                src={courseschedule}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1 ">
            <a>
              <Image
                src={habittracer}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1 ">
            <a>
              <Image
                src={story}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1 ">
            <a>
              <Image
                src={moviesync}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobilePorto