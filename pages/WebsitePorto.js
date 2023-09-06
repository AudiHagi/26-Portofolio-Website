import Image from "next/image";
import flavorfulfeastweb from "../public/asset/images/website/flavorfulfeast-web.png";
import linktryweb from "../public/asset/images/website/linktry-web.png";
import moviesyncweb from "../public/asset/images/website/moviesync-web.png";
import portofolioweb from "../public/asset/images/website/portofolio-web.png";


export default function WebsitePorto() {
  return (
    <div>
      <div
        class="flex flex-col justify-center items-center flex-wrap p-20 lg:p-4"
        id="WebsitePorto"
      ></div>

      <section className="min-h-screen">
        <div>
          <h3 className="text-3xl py-1">Website Portofolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 text-justify">
            I specialize in web development, leveraging my expertise to create
            modern and innovative web applications using JavaScript with the
            React.js framework. I design user-friendly and intuitive interfaces,
            with a focus on seamless user experiences. I have a passion for
            exploring the latest technologies and trends in the world of web
            development, which drives me to deliver high-quality solutions that
            have a positive impact on users. I am committed to continuous
            learning and eagerly embrace new challenges to stay at the forefront
            of the dynamic web development landscape powered by React.js.
            Through my portfolio, I aim to showcase a diverse range of web
            development projects, demonstrating my dedication to creating
            exceptional web experiences with this powerful framework.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 border">
            <a href="https://audilinktree.vercel.app" target="_blank">
              <Image
                src={linktryweb}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1 border">
            <a href="https://moviesyncweb.vercel.app" target="_blank">
              <Image
                src={moviesyncweb}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1 border">
            <a href="https://audifolio.vercel.app" target="_blank">
              <Image
                src={portofolioweb}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1 border">
            <a href="https://flavorfulfeast.vercel.app" target="_blank">
              <Image
                src={flavorfulfeastweb}
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
