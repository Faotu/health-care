import aboutImg from "../../assets/images/about.png";
import aboutCartImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0 flex-col lg:flex-row ">
          <div className="relative w-3/4 lg:w-3/4 xl:w-[770px] z-10 order-2 lg:order-1 ">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w[200px] md:w-[300px] right-[300px] md:right-[-10%] lg:right-[22%]">
              <img src={aboutCartImg} alt="" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text_para ">
              For 30 years in a row, Nigeria News and World report has
              recognized us as one of the best public hospitals in the Nation
              and number one in Abuja. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Excepturi repellat neque ab ducimus iure,
              consequatur, suscipit, molestias impedit at cupiditate est. Sequi
              saepe velit non laboriosam odio? Voluptatum, nam quasi.
            </p>
            <p className="text_para mt-[30px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              deserunt assumenda aut eligendi iure odit, fugit magnam voluptatum
              voluptas laborum! Molestiae nulla rerum veritatis recusandae
              tempore voluptates fugit laudantium maiores.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
