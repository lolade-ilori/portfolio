import Pills from "./components/Pills";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import gamey from "./assets/img/gamey.jpeg";
import ProjectImageCard from "./components/ProjectImageCard";

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
            rightPosition="left-30"
          />

          <Pills pillName="Vue" topPosition="top-30" rightPosition="right-0" />

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
            bottomPosition="-bottom-4"
            rightPosition="right-10"
          />

          {/* <Pills pillName="" topPosition="-top-3" rightPosition="left-30" /> */}
          <h1 className="text-9xl uppercase relative z-6">Hello</h1>
          <h1 className="text-9xl uppercase relative z-6">World</h1>
        </div>
      </div>

      <div className="w-full pt-10">
        <div className="font-faro-regular flex pb-10 justify-end">
          <Link
            href={""}
            className="underline underline-offset-2 uppercase text-sm"
          >
            view full project archive
          </Link>
        </div>

        <div>
          <div className="flex items-center gap-8 pl-28 my-7">
            <ProjectCard />
            <ProjectImageCard image={gamey} />
          </div>
        </div>
      </div>
    </main>
  );
}
