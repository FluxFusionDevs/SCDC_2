import IndustyExpertiseImages from "../Components/Services/IndustryExpertise";
import OtherService from "../Components/Services/OtherService";
import Contact from "../Components/Contact";

const Services = () => {
  return (
    <div className="w-full min-h-screen flex flex-col font-inter pt-[64px] lg:pt-[80px]">
      <div
        style={{
          backgroundImage: `url(/used_services/Services_banner.png)`,
        }}
        className="w-full lg:h-[65vh] py-8 flex justify-center bg-cover bg-center"
      >
        <div className="text-white p-4 flex flex-col gap-8 items-center text-center">
          <h1 className="text-3xl lg:text-6xl font-extrabold">
            WE DESIGN, BUILD, AND CARE
          </h1>
        </div>
      </div>

      <div className="bg-[#e8e8e8] ">
        <div className="w-full max-w-7xl mx-auto space-y-28 py-20">
          <div className="space-y-8 text-center">
            <div className="space-y-2 text-[#3d444d] flex flex-col items-center">
              <h2 className="text-3xl font-extrabold text-center">
                Industry Expertise
              </h2>
              <p className="max-w-xl text-center">
                SCDC is a comprehensive construction and infrastructure
                solutions provider
              </p>
            </div>

            <IndustyExpertiseImages />
          </div>
        </div>
      </div>

      <div className="bg-[#5a0707]">
        <div className="w-full max-w-7xl mx-auto space-y-28 py-20">
          <div className="space-y-8 text-center">
            <div className="space-y-2 text-white flex flex-col items-center">
              <h2 className="text-3xl font-extrabold text-center">
                Other Services
              </h2>
            </div>

            <OtherService />
          </div>
        </div>
      </div>

      <div>
        <img
          src="/used_services/Services_footer.jpg"
          alt="Company Timeline"
          className="h-[200px] sm:h-[500px] w-full object-cover"
          style={{ filter: "sepia(0.1) brightness(1)" }}
        />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Services;
