import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/KD.jpg";
import Mountain4 from "../assets/KD2.jpg";
import Mountain5 from "../assets/shiva-temples.jpg"
import Mountain6 from "../assets/131m.jpg"

const Destination = () => {
  return (
    <div className="destination">
      <h1>Famous Destinations in India</h1>
      <p>Tours give you the opportunity to see alot within a time frame</p>
      
      <DestinationData
        className="first-des"
        heading="Thirunamam at Coimbatore, Tamil Nadu"
        text="Exceptional idol of shiva with an extremely blissful facial expression. there’s a small shiva linga in the fore ground where you can offer holy water to the god and spend some time in peace or in meditation. Place is enveloped in divine silence and spiritual energy." 
        

        img1={Mountain1}
        img2={Mountain2}
         />


      <DestinationData
       className="first-des-reverse"
        heading="Kashi Vishwanath Temple, Varanasi"
        text="Situated on the western bank of holy river Ganga in Varanasi, Kashi Vishwanath Temple is one of the 12 Jyotirlingas or temples dedicated to Lord Shiva. The main deity of Kashi Vishwanath Temple is Lord Shiva, also known as Vishwanatha or Vishweshwarar meaning 'the ruler of the universe'. The city of Varanasi, the cultural capital of India, is thus known as the city of Lord Shiva. The temple has 800 kg of gold plating on its tower." 
        img1={Mountain5}
        img2={Mountain6}
         />   

      <DestinationData
       className="first-des"
        heading="Kedarnath Dham Yatra"
        text="One of the most revered temple destinations of India, Kedarnath town is nestled in the mighty Garhwal Himalayas. The town, built around the revered Kedarnath temple, is located at an altitude of 3,580 m, near Chorabari glacier, which is the source of the Mandakini river. Dedicated to Lord Shiva, the ancient temple has exquisite architecture and is built of extremely large but evenly shaped grey stone slabs. A conical rock formation inside the temple is worshipped as Lord Shiva in his “Sadashiva” form.  The Kedarnath temple, dedicated to Lord Shiva, is a part of Char Dham pilgrimage circuit, and is one of the 12 Jyotirlingas of Lord Shiva in India. Behind the Kedarnath temple, stand the Kedarnath peak, Kedar Dome and other Himalayan peaks." 
        img1={Mountain3}
        img2={Mountain4}
         />
    </div>
  );
};

export default Destination;
