export function Hero() {
    return (
      <section
        className="
          relative
          flex
          h-screen
          items-center
          px-6
          sm:px-10
          md:px-20
          lg:px-32
          xl:px-40
          2xl:px-56
        "
      >
        <div
          className="
            w-full
            max-w-6xl
            -translate-y-12
          "
        >
          <h1
            className="
              font-black
              leading-[0.9]
              text-[clamp(5rem,14vw,14rem)]
              xl:text-[clamp(6rem,13vw,16rem)]
            "
          >
            Hello.
          </h1>
  
          <h2
            className="
              mt-2
              font-black
              leading-tight
              text-[#5EEAD4]
              text-[clamp(2rem,4.5vw,4.5rem)]
              xl:text-[clamp(2.5rem,4vw,5.5rem)]
            "
          >
            I'm Bhaskar Ruthvik
          </h2>
  
          <p
            className="
              mt-6
              max-w-2xl
              text-base
              sm:text-xl
              xl:text-2xl
              text-white/70
            "
          >
            Graduate Computer Science Student at Texas A&amp;M
          </p>
        </div>
      </section>
    );
  }
  