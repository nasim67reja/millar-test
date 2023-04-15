import React from "react";
import Layout from "./Layout";

const SectionContact = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-fit px-[4rem] py-[5rem]">
        <h1 className="text-[3.5rem] md:text-[6.5rem] font-bold   leading-[1.3] mb-[3rem] md:mb-[5rem] text-center">
          Get The Exposure you need NOW
        </h1>
      </div>

      <section id="contactUs" className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-[4rem] tracking-tight  text-center  dark:text-white">
            Contact Us
          </h2>

          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-[1.6rem] md:text-[1.8rem] font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-[1.6rem] md:text-[1.8rem]  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-[1.6rem] md:text-[1.8rem]  font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-[1.6rem] md:text-[1.8rem]  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-[1.6rem] md:text-[1.8rem]  font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-[1.6rem] md:text-[1.8rem]  text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-[1.6rem] md:text-[1.8rem] font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-500 transition-all"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default SectionContact;
