import React from "react";
import GithubIcon from "../../../public/github-icon.png";
import LinkedinIcon from "../../../public/linkedin-icon.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7DE] mb-4 max-w-md">
          {" "}
          I'm currently looking for new possibilites, my inbox is always open.
          I'll do my best to get back to you.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com/lezernack">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <form className="flex flex-col gap-4">
        <label htmlFor="email" typeof="email" className="text-white">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder="jacob@google.com"
        />
      </form>
    </section>
  );
};

export default EmailSection;
