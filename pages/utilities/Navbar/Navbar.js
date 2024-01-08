const Navbar = () => {
  return (
    <nav class="flex flex-col justify-center items-center flex-wrap bg-teal-600 p-2 sticky top-0">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#About"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#Education"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Education
          </a>
          <a
            href="#MobilePorto"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Mobile
          </a>
          <a
            href="#WebsitePorto"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Website
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar