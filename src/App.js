import Footer from './Components/Footer';
import Header from './Components/Header';
import faker from 'faker'
import ExpertCardList from './Components/ExpertCardList';
import Background from './Components/Background';
import FeaturedExpertsHeading from './Components/FeaturedExpertsHeading';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Header />
      
      <Background 
        avatar = {faker.image.nature()} />

      <FeaturedExpertsHeading />
      
      <ExpertCardList />

      <Footer />
    </div>
  );
}

export default App;
