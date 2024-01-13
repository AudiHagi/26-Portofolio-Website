import Image from "next/image";
import covidtracker from "../../public/asset/images/mobile/covidtracker.webp";
import githubuser from "../../public/asset/images/mobile/githubuser.webp";
import renata from "../../public/asset/images/mobile/renata.webp";
import todo from "../../public/asset/images/mobile/todo.webp";
import courseschedule from "../../public/asset/images/mobile/courseschedule.webp";
import habittracer from "../../public/asset/images/mobile/habittracker.webp";
import story from "../../public/asset/images/mobile/story.webp";
import moviesync from "../../public/asset/images/mobile/moviesync.webp";
import Link from "next/link";

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
            <a target="_blank" href="https://www.dropbox.com/scl/fi/juwh30z5fl54rjqpe17d1/Covid-19-Tracker.apk?rlkey=vlhi9u11iujcrcod7lxzzr6dv&dl=0">
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
            <a target="_blank" href="https://www.dropbox.com/scl/fi/nj0c1ijngo73nlykmi4mr/Github-User.apk?rlkey=9wa6vmt24n4jts22o8clyytxm&dl=0">
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
            <a target="_blank" href="https://www.dropbox.com/scl/fi/c38j0o55pz44z075y8pq9/Renata.apk?rlkey=acmjn4nnz1n79xtk6c24b7c5c&dl=0">
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
            <a target="_blank" href="https://www.dropbox.com/scl/fi/6qezioecuvey2chqd4dsg/Todo-App.apk?rlkey=evukvd4bi71254g4kninv0c2s&dl=0">
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
            <a target="_blank" href="https://www.dropbox.com/scl/fi/qz572ce4vptndekwoaml8/Course-Schedule.apk?rlkey=1ufxdyik7jw7wwgdn261v5i4m&dl=0">
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
            <a target="_blank" href="https://www.dropbox.com/scl/fi/1n4v2rhxc4iw2goeugzzt/Habit-Tracker.apk?rlkey=bpw8ylt4n4qtrjyul26nnrr13&dl=0">
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
            <a target="_blank" href="https://www.dropbox.com/scl/fi/f0c123n1rnd1ydt7fumov/Story-App.apk?rlkey=c5054bkzqmtg0muor05ornvvn&dl=0">
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