import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="blur">
        {/* navbar section */}
        <section className="navbar">
          <nav>
            <div className="logo">
              <h3>
                .web<span>design</span>
              </h3>
            </div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/carrers">Carrers</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </section>
        {/* Hero section */}
        <div className="container">
          <section className="hero-section">
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              pariatur consequuntur corporis, voluptas vitae dignissimos fuga
              quasi nobis natus molestias. Fuga doloribus laborum ut sapiente
              perferendis, illo eveniet in deleniti.
            </p>
            <button className="btn-primary">Explore</button>
          </section>
        </div>
      </div>
    </div>
  );
}
