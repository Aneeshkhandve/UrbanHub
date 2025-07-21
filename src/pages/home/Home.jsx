import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';

function Home() {
  const context = useContext(myContext);
  console.log(context)
  const {name,rollNo} = context;

  return (
    <Layout>
      <HeroSection />
      <ProductCard />
      <Track />
    </Layout>
  )
}

export default Home
