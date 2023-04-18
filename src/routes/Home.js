import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
       <Navbar />
       <Hero 
       cName="hero" 
      heroImg="https://media.istockphoto.com/id/655235152/photo/hindu-god-statue-lord-shiva-sculpture-sitting-in-meditation-india-2011.jpg?s=612x612&w=0&k=20&c=P6PjGI9ZXxF1_3BebDrxK5etDM7JM4VFvNPJLm2dvYU=" 
      title="Explore your Living by Travelling"
       text="Choose Your Favourite Destination" 
       buttonText="Book your Journey"
       url="/"
       btnClass="show" 
       />
       <Destination />
       <Trip />
       <Footer />
    </>
  );
}

export default Home;
