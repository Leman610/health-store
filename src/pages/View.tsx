import "./View.css";
import arrow from "../assets/About-arrow.png";
import info from "../assets/About-info.png";
import table from "../assets/About-table.png";
import computer from "../assets/About-computer.png";

const View = () => {
  return (
    <div className="view">
      <div className="container view-content">
        <div className="view-info">
          <h2 className="view-title">Behind every product, there’s a vision</h2>
          <p>
            We are a passionate team, dedicated to delivering innovative and
            accessible solutions. Our mission is <br />
            to blend aesthetics, performance, and simplicity to enhance everyday
            life. Every project we undertake <br />
            is driven by a desire to create a unique, human, and authentic
            experience.
          </p>
        </div>

        <div className="view-products">
          <div className="view-product">
            <h3>250+ products sold</h3>
            <p>
              Thousands of happy customers have already shopped with us. Join
              the growing community!
            </p>
          </div>

          <div className="view-product">
            <h3>4.8 / 5 star rating</h3>
            <p>
              Quality matters. Our products are rated 4.8 out of 5 by real
              customers.
            </p>
          </div>

          <div className="view-product">
            <h3>97% satisfaction</h3>
            <p>
              We value your trust. Over 97% of our orders end in complete
              satisfaction, with very few returns.
            </p>
          </div>

          <div className="view-product">
            <h3>Fast delivery</h3>
            <p>
              Place your order today and receive it in just 2 days. Quick and
              reliable shipping guaranteed.
            </p>
          </div>

          <div className="view-product">
            <h3>250+ registered</h3>
            <p>
              Join our community of over 25,000 members and get access to
              exclusive deals and updates.
            </p>
          </div>
        </div>

        <div className="view-images">
          <img src={arrow} className="view-image-arrow" />
          <img src={info} className="view-image-info" />
        </div>

        <div className="view-row">
          <div className="view-row-left">
            <h2 className="view-row-title">Who We Are and Why We Care</h2>
            <p>
              We’re more than just an online store — we’re a team of passionate
              creators, curators, and <br />problem-solvers committed to bringing you
              high-quality products that make a difference.
            </p>
          </div>

          <div className="view-row-right">
            <p>
              From the first click to final delivery, every step is <br />designed
              with care, transparency, and your <br />satisfaction in mind. We believe
              in honest pricing,<br /> great service, and building a lasting
              connection with <br />every customer.
            </p>
          </div>
        </div>

        <p className="view-text">
          We started this journey with a simple idea: make shopping easier, more
          enjoyable, and more trustworthy. Every product we offer is carefully
          selected or <br />crafted to meet high standards of quality, functionality,
          and design. We work directly with trusted suppliers and creators to
          ensure that what you see is <br />exactly what you get — no compromises.
        </p>
        <br />
        <p className="view-text">
          But beyond products, we believe in creating a community. Whether
          you're here for something specific or just browsing, we want you to
          feel welcome and <br />inspired. Your trust means everything to us, and
          we’re here to support you every step of the way — before, during, and
          after your purchase.
        </p>

        <div className="view-commitment">
          <img src={table} className="view-commitment-image" />
          <div className="view-commtment-text">
            <h2>Our Commitment to You</h2>
            <p>
              At the heart of everything we do is a commitment to <br />offering you
              the best shopping experience possible. <br />We’ve built our platform to
              make things simple, secure, <br />and satisfying — because you deserve
              nothing less.
            </p>
            <p>Here’s what you can always expect from us:</p>
            <ul className="view-list">
              <li>Carefully curated and tested products</li>
              <li>Fast and reliable shipping</li>
              <li>Secure and transparent payment options</li>
              <li>Friendly and responsive customer service</li>
              <li>Easy returns and satisfaction guarantee</li>
            </ul>
            <p>
              We don’t just sell products — we build relationships <br />based on
              trust and value. Every customer matters, and <br />we’re here to make
              sure your experience is smooth, <br />personal, and rewarding.
            </p>
          </div>
        </div>

        <div className="view-line"></div>
        <div className="view-row">
          <div className="view-row-left">
            <h2 className="view-title">Why Shop With Us?</h2>
            <p>
              Every item we offer goes through a strict quality check. We
              believe you deserve products that <br />last and perform exactly as
              promised.
            </p>
          </div>

          <div className="view-row-right">
            <p>
              From product discovery to checkout, our platform is <br />designed for
              ease and speed. Enjoy a smooth, <br />intuitive browsing experience on
              any device.
            </p>
          </div>
        </div>

        <p className="view-text">
          Your satisfaction is our priority. Our support team is always ready to
          assist — before, during, and after your order.
        </p>
        <img src={computer} className="view-image-computer" />
        <p className="view-text">
          Over the years, we've earned the trust of thousands of happy
          customers. <br />We don’t just deliver products — we build lasting
          relationships.
        </p>
        <p className="view-text">
          Whether it’s your first visit or your tenth order, we value your
          presence. We continuously listen, improve, and innovate based on your
          feedback, so that <br />your shopping journey keeps getting better.
        </p>
      </div>
    </div>
  );
};

export default View;
