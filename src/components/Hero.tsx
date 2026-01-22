export function Hero() {
    return (
      <div
        className="
          flex
          min-h-[calc(100vh-7rem)]
          flex-col
          justify-start
          pt-24
          px-6
          md:px-16
          lg:px-32
        "
      >
        <h1 className="m-0 text-[clamp(5rem,20vw,16rem)] font-black leading-[0.9]">
          Hello.
        </h1>
  
        <h2 className="m-0 text-[clamp(2rem,6vw,5rem)] font-black leading-tight text-[#5EEAD4]">
          I'm Bhaskar Ruthvik
        </h2>
        <h1 className="text-[2rem]">
            Graduate Computer Science Student at Texas A&M
        </h1>
      </div>
    );
  }
  