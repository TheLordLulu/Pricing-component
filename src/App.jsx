import "./App.css";
import Toggle from "./components/Toggle";
import Card1 from "./components/Card1";

import Header from './components/Header';
import Nav from "./components/Nav";
import { PricingProvider } from './components/PricingContent';

function App() {
  return (
    <PricingProvider>

    <div className="text-center text-white w-full gap-16 p-20 min-h-screen relative">
    <header className="flex  justify-items-start flex-row justify-center p-20 text-white w-full md:justify-between md:max-w-screen-xl md:m-auto">
  
      <div className="bg-white h-full w-full mx-auto rounded-2xl p-8 md:p-16 text-black border-none text-center transition-transform duration-300 text-2xl shadow-lg">
      <Nav />
      <hr  className="w-full "/>
        <Header />
        <Toggle />
          <Card1 />
      </div>
         
    </header>
  </div>
    </PricingProvider>
  
  );
}

export default App;

  {/* <Nav />
        <Header />
        <Toggle />
          <Card1 /> */}