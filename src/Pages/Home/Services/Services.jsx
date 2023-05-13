import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-seven-xi.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-4">
      <div className="text-center space-y-2 mb-12">
        <p className="text-orange-500 font-bold ">Services</p>
        <h1 className="text-5xl font-semibold">Our Service Area</h1>
        <p className="text-gray-700">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which do not look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
