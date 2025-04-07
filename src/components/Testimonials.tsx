import member1 from "../members/Member1.png";
import member2 from "../members/Member2.png";
import member3 from "../members/Member3.png";
import member4 from "../members/Member4.png";
import member5 from "../members/Member5.png";
import member6 from "../members/Member6.png";
import member7 from "../members/Member7.png";

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Our 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Members{" "}
        </span>
       Of Broadview Foundation 
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Explore our members
      </p>

      {/* Grid Layout for Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        <div>
          <img src={member1} alt="Member 1" className="w-full h-36 object-cover" />
        </div>

        <div>
          <img src={member2} alt="Member 2" className="w-full h-36 object-cover" />
        </div>

        <div>
          <img src={member5} alt="Member 5" className="w-full h-36 object-cover" />
        </div>

        <div>
          <img src={member4} alt="Member 4" className="w-full h-auto" />
        </div>

        <div>
          <img src={member3} alt="Member 3" className="w-full h-auto" />
        </div>

        <div>
          <img src={member7} alt="Member 7" className="w-full h-auto" />
        </div>

        <div>
          <img src={member6} alt="Member 6" className="w-full h-auto" />
        </div>

      </div>


    </section>
  );
};
