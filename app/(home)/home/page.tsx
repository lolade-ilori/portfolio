"use client";
import Pills from "../../components/Pills";
import Link from "next/link";
import JobsCarousel from "../../components/JobsCarousel";

export default function Home() {
  return (
    <main className="">
      <div className="font-faro-local w-full flex flex-col justify-center items-center py-[80px]">
        <div className="font-black flex flex-col justify-center items-center relative">
          <Pills
            pillName="GitHub"
            zIndex="z-15"
            topPosition="-top-2"
            rightPosition="right-0"
          />

          <Pills
            pillName="React"
            topPosition="-top-3"
            rightPosition="left-15 md:left-30"
          />

          <Pills
            pillName="Vue"
            topPosition="top-15 md:top-30"
            rightPosition="right-0"
          />

          <Pills
            pillName="Kotlin"
            zIndex="z-11"
            bottomPosition="-bottom-3"
            leftPosition="left-0"
          />

          <Pills pillName="Python" zIndex="z-11" leftPosition="left-0" />

          <Pills
            pillName="Docker"
            zIndex="z-11"
            bottomPosition="-bottom-2 md:-bottom-4"
            rightPosition="right-10"
          />

          {/* <Pills pillName="" topPosition="-top-3" rightPosition="left-30" /> */}
          <h1 className=" text-7xl md:text-9xl uppercase relative z-6">
            Hello
          </h1>
          <h1 className=" text-7xl md:text-9xl uppercase relative z-6">
            World
          </h1>
        </div>
      </div>

      <div className="w-full pt-10">
        <div className="font-faro-local flex justify-end px-3 md:px-15 mb-3">
          <Link
            href={"/projects"}
            className="underline underline-offset-2 uppercase text-sm"
          >
            view full project archive
          </Link>
        </div>

        {/* <div>
          <div className="flex items-center pl-10 gap-4 my-7">
            <ProjectCard />
            <ProjectImageCard image={gamey} />
            <ProjectCard />
            <ProjectImageCard image={gamey} />
          </div>
        </div> */}

        <JobsCarousel />
      </div>
    </main>
  );
}
