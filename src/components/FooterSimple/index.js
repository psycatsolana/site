import SocialFooterIcons from "./social";

const FooterSimple = () => {
  return (
    <footer className="bg-[#f4ead7]">
      <div className="max-w-7xl mx-auto content-center justify-center px-5">
        
        <div className="mx-auto py-12 px-4 sm:px-6 flex flex-col items-center justify-center lg:px-8 max-w-7xl">
        <SocialFooterIcons />
          <p
            className="text-center text-sm text-black font-mono mt-3"
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="1500"
          >
            &copy; {new Date().getFullYear()} - Psycat - Just a raver cat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSimple;
