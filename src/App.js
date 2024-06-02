import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import { FaFacebook, FaBars, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { RxSwitch } from "react-icons/rx";
import { RxDividerVertical } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiMouseSimpleLight } from "react-icons/pi";
import s11 from './image/sec1.1.png';
import s21 from './image/sec2.jpeg';
import s22 from './image/sec2.1.jpeg';
import s23 from './image/1.jpg';
import s24 from './image/2.jpg';
import s25 from './image/2.jpg';
import s26 from './image/1.jpg';
import s27 from './image/5.jpg';

import s31 from './image/sec3.1.png'
import s32 from './image/s32.jpg'
import { FaHeadphonesSimple } from "react-icons/fa6";
import { MdOutlineKeyboardAlt } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { PiOfficeChairFill } from "react-icons/pi";
// import mylogo from ''
function App() {
  return (
    <div>
      {/* <div className='head  d-flex justify-content-between align-items-center'>
    <div className='l_icon d-flex justify-content-between m-1 '>
      <a><FaFacebook></FaFacebook></a>
      <a><FaFacebook></FaFacebook></a>
      <a><FaFacebook></FaFacebook></a>
      <a><FaFacebook></FaFacebook></a>
      <a><FaFacebook></FaFacebook></a>
      <a><FaFacebook></FaFacebook></a>

    </div>
    <ul className='d-flex  justify-content-between  m-0'>
        <li className='p-3 menu'>HOME</li>
        <li className='p-3 menu'>HOME</li>
        <li className='p-3 menu'>HOME</li>
        <li className='logo menu'><a>V</a></li>
        <li className='p-3 menu'>HOME</li>
        <li className='p-3 menu'>HOME</li>
        <li className='p-3 menu'>HOME</li>
    </ul>
    <div className='icon d-flex justify-content-between p-2 '>
          <a><RxSwitch></RxSwitch></a>
          <a><VscAccount></VscAccount></a>
          <a><RiDeleteBinLine></RiDeleteBinLine></a>
    </div>
  </div> */}
      <Row className='header d-flex justify-content-between'>
        <Container className='d-flex justify-content-between'>
          <Col className='logo d-lg-none d-block margin-top-0 orber-lg-1'><a >V</a></Col>
          <Col xl={2} className='d-none d-lg-block l_icon justify-content align-self-center'>
            <a><FaFacebook></FaFacebook></a>
            <a ><FaTwitter></FaTwitter></a>
            <a ><FaInstagram ></FaInstagram ></a>
            <a ><FaMessage></FaMessage></a>
            <a ><FaFacebook></FaFacebook></a>
            <a ><FaFacebook></FaFacebook></a>
          </Col>
          {/* <Col><Navbar.Toggle aria-controls="" /></Col> */}
          <Col xl={2} className='d-flex   d-lg-none icon justify-content-between align-self-center'>
            <a className='p-2 '><RxSwitch></RxSwitch></a>
            <a className='p-2'><VscAccount></VscAccount></a>
            <a className='p-2'><RiDeleteBinLine></RiDeleteBinLine></a>
          </Col>
          <Col xl={7} className='menu nav1'>
            <Navbar expand="lg" className="nav">

              <Navbar.Toggle aria-controls="" className='pt-4 ' />
              <Navbar.Collapse id="  " className='justify-content-center'>
                <Nav className="main_menu "

                >
                  <Nav.Link href="#action1" className='ps-4 pe-4'>Home</Nav.Link>
                  <Nav.Link href="#action2" className='ps-4 pe-4'>Link</Nav.Link>
                  <Nav.Link href="#action2" className='ps-4 pe-4'>Link</Nav.Link>
                  <li className='logo d-none d-lg-block '><a >V</a></li>
                  <Nav.Link href="#action2" className='ps-4 pe-4'>Link</Nav.Link>
                  <Nav.Link href="#action2" className='ps-4 pe-4'>Link</Nav.Link>
                  <Nav.Link href="#action2" className='ps-4 pe-4'>Link</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {/* <div className='bar'>
                  <FaBars ></FaBars>
                  </div>
                  <ul className='main_menu justify-content-between  m-0'>
        <li className='p-3 menu'>HOME</li>
        <li className='p-3 menu'>HOME</li>
        <li className='p-3 menu'>HOME</li>
        <li className='logo menu'><a>V</a></li>
        <li className='p-3 menu'>HOME</li>
        <li className='p-3 menu'>HOME</li>
        <li className='p-3 menu'>HOME</li>
    </ul> */}

          </Col>
          <Col xl={2} className='d-flex  d-none d-lg-block icon justify-content-between align-self-center'>
            <a className='p-2 '><RxSwitch></RxSwitch></a>
            <a className='p-2'><VscAccount></VscAccount></a>
            <a className='p-2'><RiDeleteBinLine></RiDeleteBinLine></a>
          </Col>
        </Container>
      </Row>
      <div className='slider'>
        <div className='d-flex justify-content-between'>
          <div className='s1 w-50 d-none d-lg-block'>
            {/* <img src={sli1}></img> */}
          </div>
          <div className='s_content '>
            <h2 className='red'>RETRO</h2>
            <h2>GAMING</h2>
            <h4>MON-WES-SUN-9.00PM PCT</h4>
          </div>
        </div>
      </div>


      <div className='sec1'>
        <Container>
          <h5 className='text-light'>THESE ARE SOME OF MY PARTNERS AND BRANDS I'VE WORKED WITH</h5>
          <Row className='  row-cols-lg-6 row-cols-3 d-flex justify-content-between'>
            <Col className='p-4'><img src={s11}></img></Col>
            <Col className='p-4'><img src={s11}></img></Col>
            <Col className='p-4'><img src={s11}></img></Col>
            <Col className='p-4'><img src={s11}></img></Col>
            <Col className='p-4'><img src={s11}></img></Col>
            <Col className='p-4'><img src={s11}></img></Col>
          </Row>
          <Row className='sec11 row-cols-md-2 row-cols-1'>
            <Col>
              <p className='red'>ABOUT ME</p>
              <h3>HI! I'M NEKO MAGIX
                THE RETRO STREAMER FROM L.A.</h3>
              <p className='text-light'>My name is Marina Valentine, but lots of you may know me as NekoMaGiX! I started streaming in 2016 and never stopped since then. I mostly play retro games from the 90’s and 00’s to bring back that nostalgic feel!</p>
            </Col>
            <Col>
              <img src={s21}></img>
            </Col>
          </Row>
        </Container>

      </div>
      <div className='sec2'>
        <Container>
          <p className='text-center ps-0 red'>MY STREAMING</p>
          <h3 className='text-center  m-0 p-0'>GEAR</h3>
          <Row className=' row-cols-2 row-cols-lg-4 row-cols-xl-6'>
            <Col>
              <img src={s22}></img>
              <FaHeadphonesSimple className='red d-flex justify-content-left symbol'></FaHeadphonesSimple>
              {/* <PiMouseSimpleLight ></PiMouseSimpleLight> */}
              <p>RAPTOR RM ANYWHERE</p>
              <p className='red'>RAXOR</p>
              <div className='btn'><a>GET IT HERE!</a></div>
            </Col>
            <Col>
              <img src={s23}></img>
              {/* <FaHeadphonesSimple></FaHeadphonesSimple> */}
              <PiMouseSimpleLight className='red d-flex justify-content-left symbol'></PiMouseSimpleLight>
              <p>RAPTOR RM ANYWHERE</p>
              <p className='red'>RAXOR</p>
              <div className='btn'><a>GET IT HERE!</a></div>
            </Col>
            <Col>
              <img src={s24}></img>
              {/* <FaHeadphonesSimple></FaHeadphonesSimple> */}
              <MdOutlineKeyboardAlt  className='red d-flex justify-content-left symbol'></MdOutlineKeyboardAlt>
              <p>RAPTOR RM ANYWHERE</p>
              <p className='red'>RAXOR</p>
              <div className='btn'><a>GET IT HERE!</a></div>
            </Col>
            <Col>
              <img src={s25}></img>
              {/* <FaHeadphonesSimple></FaHeadphonesSimple> */}
              <FiMonitor className='red d-flex justify-content-left symbol'></FiMonitor>
              <p>RAPTOR RM ANYWHERE</p>
              <p className='red'>RAXOR</p>
              <div className='btn'><a>GET IT HERE!</a></div>
            </Col>
            <Col>
              <img src={s26}></img>
              {/* <FaHeadphonesSimple></FaHeadphonesSimple> */}
              <PiOfficeChairFill className='red d-flex justify-content-left symbol'></PiOfficeChairFill>
              <p>RAPTOR RM ANYWHERE</p>
              <p className='red'>RAXOR</p>
              <div className='btn'><a>GET IT HERE!</a></div>
            </Col>
            <Col>
              <img src={s27}></img>
              {/* <FaHeadphonesSimple></FaHeadphonesSimple> */}
              <PiMouseSimpleLight className='red d-flex justify-content-left symbol'></PiMouseSimpleLight>
              <p>RAPTOR RM ANYWHERE</p>
              <p className='red'>RAXOR</p>
              <div className='btn'><a>GET IT HERE!</a></div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='sec3'>
        <Container>

          <Col>      <p className='  ps-0'>MY STREAMING</p>
            <h3 className='pt-0'>GEAR</h3>
          </Col>
          <div className='row  row-cols-1 row-cols-md-2 row-cols-lg-3'>
            <div className='col'>
              <Row className='profile'>
                <img src={s31} ></img>
                <p>Remember that this Friday at 9:00PM PCT I’ll be live streaming with @gamehuntress playing the new story mode DLC of Witch Hunters!</p>
                <p>26 minutes ago</p>
              </Row>
              <Row className='profile'>
                <img src={s31} ></img>
                <p>Remember that this Friday at 9:00PM PCT I’ll be live streaming with @gamehuntress playing the new story mode DLC of Witch Hunters!</p>
                <p>26 minutes ago</p>
              </Row>
            </div>
            <div className='col'>
              <Row className='profile'>
                <img src={s31} className=''></img>
                <p className=''>Remember that this Friday at 9:00PM PCT I’ll be live streaming with @gamehuntress playing the new story mode DLC of Witch Hunters!</p>
                <p>26 minutes ago</p>
                <img src={s32} className='sec3_img'></img>
              </Row>
            </div>
            <div className='col'>
              <Row className='profile'>
                <img src={s31} ></img>
                <p>Remember that this Friday at 9:00PM PCT I’ll be live streaming with @gamehuntress playing the new story mode DLC of Witch Hunters!</p>
                <p>26 minutes ago</p>
              </Row>
              <Row className='profile'>
                <img src={s31} ></img>
                <p>Remember that this Friday at 9:00PM PCT I’ll be live streaming with @gamehuntress playing the new story mode DLC of Witch Hunters!</p>
                <p>26 minutes ago</p>
              </Row>
            </div>
          </div>
        </Container>

      </div>
      <div className='footer'>
        <Container>
          <Row className=' d-flex justify-content-between row-cols-1 row-cols-lg-3'>
            <Col className=''>
              <h2 className=''>VALKIVID</h2>
            </Col>
            <Col className='col m-auto'>
              <ul className='d-flex justify-content-center '>
                <li><a>HOME</a></li>
                <li><a>HOME</a></li>
                <li><a>HOME</a></li>
                <li><a>HOME</a></li>
                <li><a>HOME</a></li>
                <li><a>HOME</a></li>
              </ul>

            </Col>
            <Col className='v_icon'>

              <a><FaFacebook></FaFacebook></a>
              <a ><FaTwitter></FaTwitter></a>
              <a >< FaInstagram ></ FaInstagram ></a>
              <a ><FaMessage></FaMessage></a>
              <a ><FaFacebook></FaFacebook></a>
              <a ><FaFacebook></FaFacebook></a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='last_info'>
        <Row className='row-cols-1 row-cols-md-2  '>
          <Col className=' text-center text-md-start text-light' lg={8}>
            <b>Developed & Designed by Dan Fisher & Odin Design - All Rights Reserved 2023</b>
          </Col>
          <Col className='text-md-end text-light text-center' lg={4}>
            <a className='p-2'>Terms of Service</a>
            <RxDividerVertical></RxDividerVertical>
            <a className='p-2'>Terms of Service</a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;