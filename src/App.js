
import './App.css';
import Carosoul from './components/Carosoul';
import Header from './components/Header';
import Accordion from './Accordion';
import Cards from './components/Cards';
import CardGroup from './components/CardGroup';
import ProductHead from './components/ProductHead';
import HeadingForReview from './components/HeadingForReview';
import EnquiryForm from './components/EnquiryForm';
import ValueRelation from './components/ValueRelation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
    <Carosoul/>
  <Accordion/>
  <ProductHead/>
  <Cards/>
 <HeadingForReview/>
  <CardGroup/>
  <ValueRelation/>
  <EnquiryForm/>
  <Footer/>
  </>
  );
}

export default App;
