import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-2xl">
      <div id="slide1" className="carousel-item relative w-full h-[700px] ">
        <img src={img1} className="w-full" />
        <div className="absolute flex items-center  text-white w-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
          <div className="p-16 space-y-5 my-auto">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 text-white">
          <a href="#slide6" className="btn btn-circle btn-outline mr-3">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-error">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[700px] ">
        <img src={img2} className="w-full" />
        <div className="absolute flex items-center  text-white w-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
          <div className="p-16 space-y-5 my-auto">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 text-white">
          <a href="#slide1" className="btn btn-circle btn-outline mr-3">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-error">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[700px] ">
        <img src={img3} className="w-full" />
        <div className="absolute flex items-center  text-white w-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
          <div className="p-16 space-y-5 my-auto">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 text-white">
          <a href="#slide2" className="btn btn-circle btn-outline mr-3">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-error">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[700px] ">
        <img src={img4} className="w-full" />
        <div className="absolute flex items-center  text-white w-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
          <div className="p-16 space-y-5 my-auto">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 text-white">
          <a href="#slide3" className="btn btn-circle btn-outline mr-3">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle btn-error">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full h-[700px] ">
        <img src={img5} className="w-full" />
        <div className="absolute flex items-center  text-white w-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
          <div className="p-16 space-y-5 my-auto">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 text-white">
          <a href="#slide4" className="btn btn-circle btn-outline mr-3">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle btn-error">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full h-[700px] ">
        <img src={img6} className="w-full" />
        <div className="absolute flex items-center  text-white w-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
          <div className="p-16 space-y-5 my-auto">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 text-white">
          <a href="#slide5" className="btn btn-circle btn-outline mr-3">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-error">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
