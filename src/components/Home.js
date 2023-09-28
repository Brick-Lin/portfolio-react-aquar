import Opening from './Opening';
// import Header from './Header';
import HomeMain from './HomeMain';
import Marquee from './Marquee';
// import Footer from './Footer';
// import Sidebar from './Sidebar';
import ScrollTop from './ScrollTop';
// import MouseLight from './MouseLight';
import FishAni from './FishAni';

// import HeaderForPages from './HeaderForPages'

const Home = () => {

  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  })

  return (
    <div className="position-relative">
      <Opening />
      <HomeMain />
      <Marquee />
      <ScrollTop />
      <FishAni />
    </div>
  )
}
export default Home;