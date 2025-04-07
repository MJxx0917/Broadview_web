import pilot from "../assets/logo.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Us
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Registered in New Zealand and headquartered in Auckland, the Foundation is committed to promoting exchanges and cooperation between New Zealand and China in the fields of culture, education, sports and tourism. The Foundation's core mission is to promote bilateral understanding and friendship, build a diverse and inclusive society, and build a bridge between the two countries through various activities and platform construction to promote long-term international cooperation and social development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
