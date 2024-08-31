import Header from './Header';
import Footer from './Footer';
import PokemonCard from './PokemonCard';

const App = () => {
    return (
        <div className='flex flex-col items-center justify-start min-h-screen w-screen'>
            <Header />
            <PokemonCard />
            <Footer />
        </div>
    );
};

export default App;
