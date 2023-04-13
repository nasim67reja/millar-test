import { Contact } from "@/components/Contact";
import Featured from "@/components/Featured";
import GetFeatured from "@/components/GetFeatured";
import Impact from "@/components/Impact";
import SectionContact from "@/components/Section-contact";
import Services from "@/components/Services";
import Test from "@/components/Test";
import Testimonial from "@/components/Testimonial";

const HomePage = () => {
  return (
    <>
      {/* <Test /> */}
      <Contact />
      <Services />
      <Impact />
      <GetFeatured />
      <Test />
      <Testimonial />
      <SectionContact />
    </>
  );
};

export default HomePage;
