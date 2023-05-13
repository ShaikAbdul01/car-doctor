import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data.experts));
  }, []);

  return (
    <>
      <div className="mt-12">
        <div className="text-center space-y-2 mb-">
          <p className="text-orange-500 font-bold ">Team</p>
          <h1 className="text-5xl font-semibold">Meet Our Team</h1>
          <p className="text-gray-700">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which donot look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {teams?.slice(0, showAll ? teams.length : 6).map((team) => (
            <TeamCard key={team.id} team={team}></TeamCard>
          ))}
        </div>
        <div className="mx-auto text-center mb-12">

        <div className="  ">
          {showAll ? (
            <button onClick={() => setShowAll(!showAll)} className="hidden btn btn-error">
              Show All
            </button>
          ) : (
            <button onClick={() => setShowAll(!showAll)} className="btn btn-error">
              Show All
            </button>
          )}
        </div>
        </div>
      </div>
    </>
  );
};

export default Team;
