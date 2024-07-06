
const Footer = () => {
  // bg-[rgb(20,69,47)] text-white
  return (
    <div className="bg-[rgb(20,69,47)] py-3 md:py-4 lg:py-8">
      <footer className="footer   text-white pt-10 px-3 max-w-[1280px] mx-auto">
        <aside>
          <img className="w-20 h-20" src="https://i.ibb.co/Fw5wkkX/college-Corner.png" alt="" />
          <p>
            CollegeCorner.edu
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Colleges</a>
          <a className="link link-hover">Admisssion</a>
          <a className="link link-hover">My College</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;