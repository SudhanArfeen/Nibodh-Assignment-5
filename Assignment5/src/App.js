import logo from './logo.svg';
import './App.css';
import Header from "./components/header/index"
import Navbar from "./components/navbar/index"
import Hero from  "./components/hero-div/index"
import Banner1 from "./components/banner/banner1"
import DonateInfo from "./components/donate-info/index"
import MiscHd1 from "./components/misc_components/header1"
import Card1 from "./components/card/card1"
import InfoBanner from "./components/misc_components/listing_react"
import Card2 from "./components/card2"
import ContactUs from "./components/contactus/index"
import TeamSlider from "./components/misc_components/teamslider"
import Nature from "./components/banner/banner2"
import Footer from "./components/footer/index"
function App() {
  return (
    <div className="App">

      <Header/>
      <Navbar/>
      <Hero/>
      <Banner1/>
      <DonateInfo/>
      <MiscHd1/>
      <Card1/>
      <InfoBanner/>
      <Card2/>
     <ContactUs/>
  <TeamSlider/>
  <Nature/>
     <Footer/>
     
    </div>
  );
}

export default App;
