
import { SocialIcon } from 'react-social-icons';
const TeamCard = ({ team }) => {
  const { name, image, title } = team;

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{title}</p>
        </div>
        <div className=" mx-auto space-x-4 mb-6">
        <SocialIcon url="https://linkedin.com/in/jaketrent" />
        <SocialIcon url="https://facebook.com/in/jaketrent" />
        <SocialIcon url="https://instagram.com/in/jaketrent" />
        <SocialIcon url="https://twitter.com/in/jaketrent" />
        </div>
      </div>
    </>
  );
};

export default TeamCard;
