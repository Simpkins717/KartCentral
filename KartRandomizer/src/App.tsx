import Hero from './components/Hero';
import Footer from './components/Footer';
import ToggleableSelectComponent from './utils/toggleableSelectComponent';
import HeaderTwo from './components/HeaderTwo';

function App() {
  return (
    <div className='text-center align-middle min-h-screen font-barlowSemiCondensed sm:max-w-screen sm:flex sm:flex-col lg:max-w-7xl mx-auto'>
      <HeaderTwo />
      <div className='  max-w-full mx-auto md:mx-0  pt-4 md:pt-12 pb-16 px-6 xl:border-2 border-cyan-700 border-0 my-8 rounded-md'>
        <Hero />
        <ToggleableSelectComponent />
      </div>
      <Footer companyName='davideveloped' year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
