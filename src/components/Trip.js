import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Foregin Destinations</h1>
      <p>Explore the places outside India </p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Niagara Falls"
          text="Niagara Falls is one of the most famous historic landmarks in the world. It consists of a group of waterfalls located at the border of the United States and Canada. It is a major tourist attraction site since the time in memorial. It is the second biggest waterfall in the world "
           />

        <TripData
          image={Trip2}
          heading="MALDIVES"
          text="Maldives is a Southeast Asian country occupying parts of Malay Peninsula and the island of Borneo. It's known for
          its beaches, rainforests and mix of Malay. Chinese, Indian and European cultural influences." 
           />

        <TripData
          image={Trip3}
          heading="TIBET "
          text="Entering Tibet you feel as though you've entered an entirely different world. The traditional Tibetan culture remains strong and central to the region despite economic development and migration of other Chinese ethnic groups to Lhasa."
           />
      </div>
    </div>
  );
}

export default Trip;
