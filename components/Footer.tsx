import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/av-corp-logo.png" alt="AV Corp" />
            <p>
              Performance textiles, corporate apparel and industrial uniform
              solutions backed by three generations of textile knowledge and over
              30 years of experience.
            </p>
          </div>
          <div>
            <div className="footer-title">Quick Links</div>
            <div className="footer-links">
              <Link href="/products">Product Solutions</Link>
              <Link href="/#industries">Industries We Serve</Link>
              <Link href="/#process">How We Work</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          <div>
            <div className="footer-title">Reach Us</div>
            <div className="footer-links">
              <span>
                B-1204, Titanium Heights,
                <br />
                Corporate Road, Prahladnagar,
                <br />
                Ahmedabad 380015 (Guj) India
              </span>
              <a href="tel:+919879579630">+91-9879579630</a>
              <a href="mailto:avcorp86@gmail.com">avcorp86@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 A V CORP. All rights reserved.</span>
          <span>Global quality. Local commitment.</span>
        </div>
      </div>
    </footer>
  );
}
