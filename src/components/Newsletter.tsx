
export const Newsletter = () => {

  return (
    <section id="newsletter">
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

        <div className="flex flex-col items-center text-white font-medium space-y-6">
        {/* Kelly Zhou */}
        <div className="text-left">
          <p><strong>Name:</strong> Kelly Zhou</p>
          <p><strong>Phone:</strong> +64 21988667</p>
          <p><strong>Email:</strong> kelly@nzbso.com</p>
          <p><strong>Website:</strong> www.broadview.org.nz</p>
        </div>

        {/* Sophia Cheng */}
        <div className="text-left">
          <p><strong>Name:</strong> Sophia Cheng</p>
          <p><strong>Phone:</strong> +64 21309006</p>
          <p><strong>Email:</strong> sophia.cheng@lander.co.nz</p>
          <p><strong>Website:</strong> www.broadview.org.nz</p>
        </div>
</div>


      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
