import home from "../assets/home.png";
import pilot from "../assets/logo.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="container flex flex-col items-center py-20 md:py-32 gap-10">

        {/* Title Section */}
        <main className="text-5xl md:text-6xl font-bold text-center">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Broadview
            </span>{" "}
            Cultural
          </h1>{" "}
          And{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Education
            </span>{" "}
            Foundation
          </h2>
        </main>

        {/* Larger Image Section */}
        <div className="w-full max-w-4xl">
          <img src={home} alt="Home" className="w-full h-auto rounded-xl shadow-lg" />
        </div>

        {/* About Us Card Section */}
        <div className="bg-muted/50 border rounded-lg py-12 w-full max-w-6xl">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
              src={pilot}
              alt=""
              className="w-[500px] object-contain rounded-lg"
            />
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Foundation{" "}
                  </span>
                   Introduction 
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  Registered in New Zealand and headquartered in Auckland, the Foundation is committed to promoting exchanges and cooperation between New Zealand and China in the fields of culture, education, sports and tourism. The Foundation's core mission is to promote bilateral understanding and friendship, build a diverse and inclusive society, and build a bridge between the two countries through various activities and platform construction to promote long-term international cooperation and social development.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
