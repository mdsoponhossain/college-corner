import { TfiEmail } from "react-icons/tfi";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineFax } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../contextProvider/ContextProvider";
const Footer = () => {
  // bg-[rgb(20,69,47)] text-white
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="bg-[rgb(20,69,47)] py-4 md:py-5 lg:py-9">
      <footer className="footer   text-white pt-10 px-3 max-w-[1280px] mx-auto">
        <aside>
          <img className="w-20 h-20" src="https://i.ibb.co/Fw5wkkX/college-Corner.png" alt="" />
          <p>
            CollegeCorner.edu
            <br />
            Providing educational services since 1992
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Useful Links</h6>
          <a href='/' className="link link-hover">Home</a>
          <a href="/colleges" className="link link-hover">Colleges</a>
          {
            !currentUser && <a href="/login" className="link link-hover">Login</a>
          }
          {
            !currentUser && <a href="/sign-up" className="link link-hover">Sign Up</a>
          }
          {
            currentUser?.email && <a href="/admission" className="link link-hover">Admisssion</a>
          }
          {
            currentUser?.email && <a href={`/my-college/${currentUser?.email}`} className="link link-hover">My College</a>
          }
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover flex items-center gap-3">
            <FaHome className="text-xl font-bold"></FaHome>
            <span>Melbourne,Austrilia</span>
          </a>
          <a className="link link-hover flex items-center gap-3">
            <TfiEmail className="text-xl font-bold"></TfiEmail>
            <span>college@corner.gmail.com</span>
          </a>
          <a className="link link-hover flex items-center gap-3">
            <FaPhoneAlt className="text-xl font-bold"></FaPhoneAlt>
            <span>+61 36749236</span>
          </a>
          <a className="link link-hover flex items-center gap-3">
            <MdOutlineFax className="text-xl font-bold"></MdOutlineFax>
            <span>+61 464783436</span>
          </a>


        </nav>
      </footer>
    </div>
  );
};

export default Footer;