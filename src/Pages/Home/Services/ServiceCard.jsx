import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-[205px]" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className="text-orange-500 flex items-center justify-between font-bold">
          <p className="">Price : ${price}</p>
          <Link to={`bookService/${_id}`}>
            <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
