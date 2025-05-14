import React from "react";
import AboutHeader from "../AboutHeader";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="border border-amber-300 h-screen w-[calc(100vw_-_240px)] ml-60 py-8 px-16">
      <AboutHeader />
      <section className="border border-amber-300 flex justify-center items-center h-full">
        <div>
          <h3>Let's create magic together</h3>

          <div>
            <Link href={""}></Link>

            <Link href={""}></Link>

            <Link href={""}></Link>
          </div>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default ContactPage;
