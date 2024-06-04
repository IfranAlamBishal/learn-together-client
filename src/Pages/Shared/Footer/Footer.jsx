import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo/icon.png'
import fb from '../../../assets/icon/fb-icon.png'
import x from '../../../assets/icon/x-icon.png'
import insta from '../../../assets/icon/instagram.png'
const Footer = () => {
  return (
    <footer className=" text-white mt-20">
      <div className=" flex flex-col md:flex-row">
        <aside className="bg-[#1F2937] flex-1 p-10 ">
          <div className=" pl-5 md:pl-10">
            <div className=' flex gap-2 mb-3'>
            <img src={logo} alt="" className=' w-20 h-20'/>
            <h2 className=" text-3xl lg:text-4xl font-bold">Learn <br/>Together</h2>
            </div>
            <p className=" opacity-70">125, ABC Road, Gulshan, Dhaka</p>
          </div>
        </aside>
        <nav className=" bg-[#111827] p-10 flex-1">
          <div className=" pl-5 md:pl-10 md:pt-5">
            <h6 className=" text-2xl font-bold opacity-90 mb-3 uppercase">Social</h6>
            <div className="flex gap-5">
            <Link to='https://www.facebook.com'>
              <img src={fb} alt="" className=' w-9 h-9 bg-white rounded-full p-0.5'/>
             </Link>
             <Link to='https://www.instagram.com'>
              <img src={insta} alt="" className=' w-9 h-9 bg-white rounded-full p-0.5'/>
             </Link>
             <Link to='https://x.com'>
              <img src={x} alt="" className=' w-9 h-9 bg-white rounded-full p-0.5'/>
             </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="footer footer-center p-4 bg-black">
        <aside>
          <p>Copyright © 2024 - All right reserved by Learn Together</p>
        </aside>
      </div>
    </footer>
  );

};

export default Footer;