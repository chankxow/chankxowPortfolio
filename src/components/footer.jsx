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
              
              เกียรติภูมิ พละสาร
            </h6>
            <p>
              ผลงานนี้จัดทำขึ้นเพื่อเป็นผลงานในพอร์ตฟอลิโอเพื่อพิจารณาคุณสมบัติการเข้าศึกษาต่อในมหาวิทยาลัย
            </p>
          </div>
          <div className="mx-auto">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              MADE WITH
            </h6>
            <p className="mb-4">
              <a href="https://vitejs.dev/" className="text-neutral-600 dark:text-neutral-200">
                ReactJS & ViteJS
              </a>
            </p>
            <p className="mb-4">
              <a href="https://tailwindcss.com/" className="text-neutral-600 dark:text-neutral-200">
                TAILWIND CSS
              </a>
            </p>
            
            <p>
              <a href="https://www.w3schools.com/html/html_css.asp" className="text-neutral-600 dark:text-neutral-200">
                HTML & CSS
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
          href="https://github.com/chankxow/chankxowPortfolio"
        >
          Chankxow
        </a>
      </div>
    </footer>
  );
};

export default Footer;
