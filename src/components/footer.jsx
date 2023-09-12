import {BiLogoFacebookCircle,BiLogoInstagram,BiLogoGithub } from "react-icons/bi";





const Footer = () => {
  return (
    <footer className=" f-anupan bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>ติดต่อผ่านทางโซเซียลได้ที่ :</span>
        </div>
        <div className="flex justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=100011973946922"
            className="mr-6 text-neutral-600 dark:text-neutral-200 text-3xl"
          ><BiLogoFacebookCircle/> </a>
          <a
            href="https://www.instagram.com/grv.kx/?hl=en"
            className="mr-6 text-neutral-600 dark:text-neutral-200 text-3xl"
          ><BiLogoInstagram/></a>
          <a
            href="https://github.com/chankxow"
            className="mr-6 text-neutral-600 dark:text-neutral-200 text-3xl"
          ><BiLogoGithub/></a>
          
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="mx-auto">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              Tailwind ELEMENTS
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="mx-auto">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              MADE WITH
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                REACT
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                TAILWIND CSS
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                VITEJS
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Laravel
              </a>
            </p>
          </div>

          <div className="mx-auto">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              Udonthani Nongyasai Wangsamo 77 4 41280
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              kittipoomzx555@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              +66 6222 376 42
            </p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 py-28 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
          Chankxow
        </a>
      </div>
    </footer>
  );
};

export default Footer;
