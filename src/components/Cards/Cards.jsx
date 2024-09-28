import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";
import image5 from "../../assets/images/5.png";
import image6 from "../../assets/images/6.png";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
        },
      });
    });
  });

  return (
    <div
      className="w-full text-white flex flex-col gap-5 items-center pt-[15vh] pb-[20vh]"
      data-testid="section-cards"
    >
      {images.map((image, i) => {
        return (
          <div
            key={i}
            className="card sticky top-[15vh] w-[27vw] flex flex-col items-center gap-5 px-[30px] py-[10vh] rounded-lg bg-[#383027]"
          >
            <img src={image} alt="" className="w-[150px]" />
            <h1 className="text-4xl">
              The <br /> <span className="font-bold">Algorithm</span>
            </h1>
            <p className="font-thin">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
