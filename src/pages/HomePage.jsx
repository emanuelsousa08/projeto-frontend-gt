import Section from '../components/Section'
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    return ( 
        <>
            <main>
                <div className="container mx-2 py-8 items-center justify-arround">
                    <Section titleAlign="center"></Section>
                    <ProductCard>
                        <h2>Coleções em destaque</h2>
                        <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h6>
                    </ProductCard>
                </div>
            </main>
        </>
     );
}
 
export default HomePage;