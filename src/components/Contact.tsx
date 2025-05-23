import bc1 from "../assets/bc1.png";
import bc2 from "../assets/bc2.png";

export const Contact = () => {
  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Contact{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
           Us 
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          If you have any questions, feel free to contact us.
        </p>
        <div className="flex flex-row items-center justify-center gap-8 flex-wrap">
          <img src={bc2} alt="bc2" className="w-[400px] h-auto rounded-xl shadow-lg" />
          <img src={bc1} alt="bc1" className="w-[400px] h-auto rounded-xl shadow-lg" />
        </div>
      </div>
      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
