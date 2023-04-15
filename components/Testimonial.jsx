import React from "react";
import Layout from "./Layout";
import Image from "next/image";

const Testimonial = () => {
  return (
    <Layout>
      <div className="my-[10rem]">
        <h2 className="font-bold text-center text-[3.5rem] md:text-[5rem] mb-[8rem]">
          Client Testimonial
        </h2>
        <div className="flex justify-between gap-[10rem] flex-wrap sm:flex-nowrap">
          {/* 1 */}
          <div>
            <p className="text-[1.8rem] leading-[1.5]">
              “A testimonial from a client who benefited from your product or
              service. Testimonials can be a highly effective way of
              establishing credibility and increasing your company's
              reputation.”
            </p>
            <div className="flex gap-[2rem] mt-[4rem]">
              <div className="flex items-center gap-[3rem]">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="user-img"
                  className="h-[50px] md:h-[70px] w-[50px] md:w-[70px] rounded-full object-cover"
                />
                <p className="text-[2rem]">Amelia Jones</p>
              </div>
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
              <div className="flex items-center gap-[3rem]">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="user-img"
                  className="h-[50px] md:h-[70px] w-[50px] md:w-[70px] rounded-full object-cover"
                />
                <p className="text-[2rem]">Amelia Jones</p>
              </div>
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
              <div className="flex items-center gap-[3rem]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="user-img"
                  className="h-[50px] md:h-[70px] w-[50px] md:w-[70px] rounded-full object-cover"
                />
                <p className="text-[2rem]">William Nguyen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonial;
