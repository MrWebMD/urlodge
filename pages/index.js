import Head from 'next/head'
import Image from 'next/image'

import Navigation from '../components/Layout/Navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>urlodge | Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navigation/>
      <header className="super text--white">
        <div className="super__bgImage"></div>
        <div className="super__bgBlur"></div>
        <div className="pageBound">
          <div className="super__content">
            <h1 className="super__title text--green">ALL IN ONE<br/> SELF PROMOTION</h1>
            <p className="super__description">Share all your links, URL and URIs here with this
  very cool and amazing, graceful so attention hungry
  website</p>
            <div className="buttonRow">
            <button className="button button--filled">Get started</button>
            <button className="button button--outlined">Learn more</button>
            </div>
            <div className="super__statsRow">
              <p className="super__stat">Over <span className="text--green">1.5M</span> links</p>
              <p className="super__stat">Over <span className="text--green">300K</span> users</p>
              <p className="super__stat">Over <span className="text--green">500</span> things</p>
            </div>
          </div>
        </div>
      </header>
      <main className="pageBound">
        <section className="features">
          <div className="super features__super">
            <div className="super__content">
              <h2 className="super__title">A very cool website with a lot of features and cool things</h2>
              <p className="super__description">Share all your links, URL and URIs here with this
    very cool and amazing, graceful so attention hungry
    website</p>
              <button className="button button--filled">Get started</button>
            </div>
          </div>
          <div className="features__grid">
            <div className="features__card">
              <div className="features__imageWrapper">
                <Image className="features__image" alt="feature" src="/assets/link.svg" width="50px" height="50px"></Image>
              </div>
              <h3 className="features__title">Feature</h3>
              <p className="features__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            </div>
            <div className="features__card">
              <div className="features__imageWrapper">
                <Image className="features__image" alt="feature" src="/assets/link.svg" width="50px" height="50px"></Image>
              </div>
              <h3 className="features__title">Feature</h3>
              <p className="features__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            </div>
            <div className="features__card">
              <div className="features__imageWrapper">
                <Image className="features__image" alt="feature" src="/assets/link.svg" width="50px" height="50px"></Image>
              </div>
              <h3 className="features__title">Feature</h3>
              <p className="features__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            </div>
            <div className="features__card">
              <div className="features__imageWrapper">
                <Image className="features__image" alt="feature" src="/assets/link.svg" width="50px" height="50px"></Image>
              </div>
              <h3 className="features__title">Feature</h3>
              <p className="features__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            </div>
          </div>
        </section>
      
      </main>
      <footer></footer>
    </>
  )
}
