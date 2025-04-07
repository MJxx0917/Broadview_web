import home from "../assets/home.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <main className="text-5xl md:text-6xl font-bold">
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

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          <img src={home} alt="Home" className="w-full h-auto" />
        </p>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
