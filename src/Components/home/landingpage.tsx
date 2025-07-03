import landingimg from "../../assets/landingpage.jpg";

export default function LandingPage() { 
  return (
    <div className="font-serif overflow-hidden mb-[20px]">
      <div className="relative h-[300px]">
        {/* Blurred Background Image */}
        <img
          src={landingimg}
          alt="Sustainable Background"
          className="absolute inset-0 w-full h-full object-cover z-0 blur-sm scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Centered Text Content */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-[#e9f5e9] text-center px-4">
          <h1 className="text-4xl md:text-7xl font-extrabold drop-shadow-lg tracking-wide">
            Sustainable Hub
          </h1>
          <p className="text-lg md:text-3xl mt-4 drop-shadow-md">
            Helping retail go green
          </p>
        </div>
      </div>
    </div>
  );
}