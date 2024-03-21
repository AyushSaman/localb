"use client"
import Image from 'next/image'
import Head from 'next/head';
import SlideBottomToTopTransition from '@/components/StyleUtilities/Transitions/SlideBottomToTopTransition';
// import SlideLeftToRightTransition from '@/components/StyleUtilities/Transitions/SlideLeftToRightTransition';
import OpacityTransition from '@/components/StyleUtilities/Transitions/OpacityTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <OpacityTransition>    
    <div className='w-screen overflow-hidden'>
      <Head>
        <title>Advertising Website</title>
        <meta name="description" content="Your advertising website description" />
      </Head>

      <Navbar />

      <main>
        {/* <section className="hero bg-cover" style={{ backgroundImage: `url('/special_offer.png')` }}> */}
        <section className="hero bg-cover bg-gradient-to-t from-yellow-500 to-blue-500">
      <SlideBottomToTopTransition>
          <div className="bg-opacity-80 p-8 text-white text-center">
            <h1 className="text-4xl font-bold my-3">Welcome to LocalBajar.com</h1>
            <p>Where you grab and upload offers at offline stores.</p>
          </div>
    </SlideBottomToTopTransition>
        </section>

        <section className="features p-8 bg-yellow-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-500 text-white rounded-3xl p-6 shadow-blue-500">
              <SlideBottomToTopTransition>
              <h2 className="text-xl font-semibold mb-5">Feature 1</h2>
              <p>Describe a feature of your advertising service.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem dolores quos autem exercitationem tempore sunt ducimus, enim tenetur quis sint natus minima quo sed? Repellat ea aliquid impedit debitis neque!
              </p>
              </SlideBottomToTopTransition>
            </div>
            <div className="bg-blue-500 text-white rounded-3xl p-6 shadow-lg">
            <SlideBottomToTopTransition>

              <h2 className="text-xl font-semibold mb-5">Feature 2</h2>
              <p>Another feature of your advertising service. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quia tenetur est! Quasi reprehenderit, repudiandae nihil veniam sequi ut facere fuga culpa quo error, nemo esse modi asperiores consequuntur dolor.</p>
              </SlideBottomToTopTransition>

            </div>
            <div className="bg-blue-500 text-white rounded-3xl p-6 shadow-lg">
            <SlideBottomToTopTransition>

              <h2 className="text-xl font-semibold mb-5">Feature 3</h2>
              <p>Highlight another feature here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt sequi quaerat! Tempora, quos. Distinctio sapiente tenetur commodi iusto animi illum illo consequuntur cumque, suscipit fugiat consequatur esse. Facere, omnis.</p>
              </SlideBottomToTopTransition>

            </div>
          </div>
        </section>      </main>


      {/* <footer className="bg-blue-500 p-4 text-white text-center">
        <p>&copy; 2023 LocalBajar.com</p>
      </footer> */}
      <Footer />
    </div>
    </OpacityTransition>

  )
}
