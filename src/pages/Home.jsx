import React, { useState } from "react";
import Navbar from "../layouts/Navbar";

import Monke from "../assets/Monke.png";
import Tweet from "../assets/tweet.png";
import Mask from "../assets/mask.png";
import Discord from "../assets/discord.png";
import FilterMonk from "../assets/filterMonk.png";
import MonkeLogo from "../assets/monkLogo.png";
import BgMonk from "../assets/bgmonk.png";
import Union from "../assets/Union.png";
import footerImg from "../assets/image 20.png";
import footerImg1 from "../assets/image 14.png";
import footerImg2 from "../assets/image 24.png";
import footerImg3 from "../assets/image 47.png";
import footerImg4 from "../assets/image 48.png";
import footerImg5 from "../assets/image 49.png";
import footerImg6 from "../assets/image 50.png";
import footerImg7 from "../assets/image 51.png";
import FooterBackgroundImage from "../assets/footerbg.png";
import Mobiledevice from "../assets/Mobiledevice.png";
import Mobiledevice1 from "../assets/Mobiledevice1.png";
import Line from "../assets/line.png";
import Ex from "../pages/ex";

const Home = () => {
  const footerImages = [
    footerImg,
    footerImg1,
    footerImg2,
    footerImg3,
    footerImg4,
    footerImg5,
    footerImg6,
    footerImg7,
  ];
  const divData = [
    { text1: "Gen 2", text2: "SMB #1741", imgSrc: Monke },
    { text1: "Gen 2", text2: "SMB #1741", imgSrc: Monke },
    { text1: "Gen 2", text2: "SMB #1741", imgSrc: Monke },
    { text1: "Gen 2", text2: "SMB #1741", imgSrc: Monke },
    { text1: "Gen 2", text2: "SMB #1741", imgSrc: Monke },
    { text1: "Gen 2", text2: "SMB #1741", imgSrc: Monke },
    { text1: "Gen 2", text2: "SMB #1741", imgSrc: Monke },
  
  ];
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);

    console.log(index);
  };

  return (
    <div className="bg-[#FDFBEE]  relative overflow-hidden">
      <Navbar />
      {/* <Ex /> */}
      {/* Mobile Layout */}
      <div className="sm:hidden">
        <div className="flex mt-14 mb-8 px-4 md:px-0">
          <div className="flex-1 font-black text-[#184623]">
            <img
              src={FilterMonk}
              alt=""
              className="inline-block align-middle mr-1 "
            />{" "}
            MY SMB
          </div>
          <div className="font-black text-[#184623]">Points: 5,000</div>
        </div>

        <div className="flex w-[128px] ">
          <img
            className="mr-2"
            src={footerImg3}
            alt="alt"
            onClick={() => handleImageClick(footerImg3)}
          />
          <img
            src={Mobiledevice}
            alt="alt"
            onClick={() => handleImageClick(Mobiledevice)}
          />
          <div
            className=" bg-cover bg-no-repeat bg-center p-4"
            style={{ backgroundImage: `url(${Mobiledevice1})`, width: "128px" }}
          >
            <p className="text-[#FF93A4] font-medium">Gen 3</p>
            <p className="text-[#FF93A4] font-black">SMB #1741</p>
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <img src={Line} alt="" />
        </div>
      </div>
      {/* end  */}

      <div className="md:h-screen relative md:mx-72 ">
        <img
          src={Union}
          alt="Watermark"
          className="absolute w-full top-[140px] right-4"
        />
        <div className="flex flex-col max-w-[1000px] mx-auto   mt-20">
          <div className=" md:flex  opacity-95 ">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={selectedImage ? selectedImage : footerImg3}
                alt="Sample Image"
                className={" h-[340px] md:h-[450px] rounded-lg flex"}
              />
            </div>

            {/* Text */}
            <div>
              <div className=" p-4 bg-white relative h-full">
                <div className="">
                  <img src={BgMonk} alt="" className="absolute bottom-0 " />
                </div>

                <div className="flex">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-[#184623]  ">
                      Gen 3
                    </h2>
                    <h2 className="text-xl  mb-1 text-[#184623] font-black ">
                      SMB #1741
                    </h2>

                    <h2 className="text-sm  mb-2 text-[#184623] font-medium ">
                      Multiplier: 1x
                    </h2>
                  </div>
                  <div className="">
                    <img src={Monke} alt="" className="h-14" />
                  </div>
                </div>
                <hr style={{ borderColor: "#F5F5F5" }} />
                <div className="flex gap-4 p-3">
                  <p className="font-semibold text-[#184623]">All Task (5)</p>
                  <p className="font-normal text-[#AAAAAA]">Completed</p>
                </div>
                <hr style={{ borderColor: "#F5F5F5" }} />
                {/* inner content  */}
                <div className="flex">
                  <div className="flex-1 p-4">
                    <p className="font-medium text-[#184623]">
                      <img
                        src={Tweet}
                        alt="logo"
                        className="inline-block align-middle mr-1"
                      />{" "}
                      Twitter PFP
                    </p>
                    <p className="font-normal text-[#AAAAAA]">
                      User is awarded for using NFT as Twitter
                    </p>
                  </div>
                  <div className="p-4 font-bold text-[#184623] flex items-center">
                    <img
                      src={MonkeLogo}
                      alt="img"
                      className="inline-block align-middle mr-2"
                    />
                    200 Points
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-1 p-4">
                    <p className="font-medium text-[#184623]">
                      <img
                        src={Discord}
                        alt="logo"
                        className="inline-block align-middle mr-1"
                      />{" "}
                      Discord Reaction
                    </p>
                    <p className="font-normal text-[#AAAAAA]">
                      User is awarded for Reacting to the latest annoucement
                    </p>
                  </div>
                  <div className="p-4 font-bold text-[#68846E] flex items-center">
                    <img
                      src={FilterMonk}
                      alt=""
                      className="inline-block align-middle mr-2 "
                    />
                    200 Points
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-1 p-4">
                    <p className="font-medium text-[#184623] ">
                      <img
                        src={Tweet}
                        alt="logo"
                        className="inline-block align-middle mr-1"
                      />{" "}
                      Twitter PFP
                    </p>
                    <p className="font-normal text-[#AAAAAA]">
                      User is awarded for using NFT as Twitter
                    </p>
                  </div>
                  <div className="p-4 font-bold text-[#68846E] flex items-center">
                    <img
                      src={FilterMonk}
                      alt=""
                      className="inline-block align-middle mr-2"
                    />
                    200 Points
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer images */}

          <div className="hidden sm:block">
            <div className="flex mt-14 mb-8 px-4 md:px-0">
              <div className="flex-1 font-black text-[#184623]">
                <img
                  src={FilterMonk}
                  alt=""
                  className="inline-block align-middle mr-1 "
                />{" "}
                MY SMB
              </div>
              <div className="font-black text-[#184623]">Points: 5,000</div>
            </div>

            <div className="flex">
              {divData.map((item, index) => (
                <>
                  {/* {selectedImageIndex === index ? ( */}
                    <>
                      <div
                        key={index}
                        className={`footer w-[128px] ${selectedImageIndex !== index && 'opacity-0' } px-2 py-2 flex`}
                        style={{
                          backgroundImage: `url(${FooterBackgroundImage})`,
                        }}
                      >
                        <div>
                          <p className="font-medium text-[#8D95C8]">
                            {item.text1}
                          </p>
                          <p className="font-black text-[#8D95C8]">
                            {item.text2}
                          </p>
                        </div>
                        <div>
                          <img src={Monke} alt="" className="h-6" />
                        </div>
                      </div>
                    </>
               
                </>
              ))}

              {/* end footerbg  */}
            </div>

            <div className="flex w-[128px]">
              {footerImages.map((item, index) => (
                <>
                  <img
                    src={item}
                    alt="alt"
                    key={index}
                    onClick={() => handleImageClick(item, index)}
                    style={{ backgroundImage: `url(${FooterBackgroundImage})` }}
                    className={` ${
                      selectedImageIndex === index
                        ? "opacity-50"
                        : "opacity-100"
                    }`}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
