import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="section-container flex flex-col gap-6 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl leading-tight font-bold tracking-wide md:text-5xl">
          <span className="text-[#f56551]">
            Discover Your Next Adventure with AI:
          </span>{" "}
          personalize your itineraries at your fingertips
        </h1>
        <p className="mt-4 text-lg font-medium text-gray-500 md:text-xl">
          You personalize your trip plans—curating custom itineraries tailored
          to your interests and budget using AI, and we'll help you plan your
          next adventure.
        </p>
        <Link to="/create-trip">
          <Button className="mt-6 text-base font-medium">
            Get Started, it’s Free
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
