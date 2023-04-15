import React from "react";
import Layout from "./Layout";
import Image from "next/image";

const GetFeatured = () => {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-[5rem] my-[8rem]" id="featured">
        <div>
          <Image
            src="/image/logos.png"
            alt="logos"
            width={940}
            height={800}
            className="w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-blue-500 font-bold text-[3.5rem] md:text-[5rem] leading-[1.2] mb-[4rem] text-center md:text-start">
            Get <br /> Featured
          </h2>
          <p className="text-[1.6rem] md:text-[2rem] leading-[1.8] md:leading-[1.6]">
            Getting articles featured and published in top online publications
            like Forbes, Fox, Business Insider, and others requires a strategic
            approach and careful planning. The first step is to identify the
            right publications that align with the topic and target audience of
            the article. Once the publications have been identified, it's
            important to research their submission guidelines and pitch relevant
            and interesting topics that align with their editorial focus.
            Building relationships with journalists and editors can also
            increase the likelihood of being featured. Providing valuable
            content and following up in a timely manner can further enhance the
            chances of being published. By crafting high-quality articles and
            following a targeted approach, it is possible to get articles
            featured in top online publications and reach a wider audience.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default GetFeatured;
