import React from "react";
import Layout from "./Layout";

const Testimonial = () => {
  return (
    <Layout>
      <div className="my-[10rem]">
        <h2 className="font-bold text-center text-[5rem] mb-[8rem]">
          Client Testimonial
        </h2>
        <div className="flex justify-between gap-[10rem]">
          {/* 1 */}
          <div>
            <p className="text-[1.8rem] leading-[1.5]">
              “A testimonial from a client who benefited from your product or
              service. Testimonials can be a highly effective way of
              establishing credibility and increasing your company's
              reputation.”
            </p>
            <div className="flex gap-[2rem] mt-[4rem]">
              <div>image</div>
              <div>Client Name</div>
            </div>
          </div>
          {/* 2 */}

          <div>
            <p className="text-[1.8rem] leading-[1.5]">
              “A testimonial from a client who benefited from your product or
              service. Testimonials can be a highly effective way of
              establishing credibility and increasing your company's
              reputation.”
            </p>
            <div className="flex gap-[2rem] mt-[4rem]">
              <div>image</div>
              <div>Client Name</div>
            </div>
          </div>

          {/* 3 */}

          <div>
            <p className="text-[1.8rem] leading-[1.5]">
              “A testimonial from a client who benefited from your product or
              service. Testimonials can be a highly effective way of
              establishing credibility and increasing your company's
              reputation.”
            </p>
            <div className="flex gap-[2rem] mt-[4rem]">
              <div>image</div>
              <div>Client Name</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonial;
