import React from 'react';
import Search from '../components/Search';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Options from '../components/Options';

export const metadata = {
  title: 'myCocktail.io | Cocktail Search Made Easy.'
}

function App() {
  return (
      <div className="flex flex-col min-h-screen container mx-auto mt-5 mb-10 max-w-4xl">
        <main className="flex-grow">
        <Header />
        {/* <Options /> */}
        <Search />
        </main>

        <Footer />
      </div>
  );
}

export default App;
