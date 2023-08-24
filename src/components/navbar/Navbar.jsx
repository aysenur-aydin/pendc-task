import React from 'react';
import { PiSquaresFour } from 'react-icons/pi';
import { LuLayers } from 'react-icons/lu';
import { PiHardDrives } from 'react-icons/pi';
import { LuHardDrive } from 'react-icons/lu';
import { LuClipboard } from 'react-icons/lu';
import { HiOutlineChatBubbleLeft } from 'react-icons/hi2';
import { LuCreditCard } from 'react-icons/lu';
import { BiReceipt } from 'react-icons/bi';
import { BiWalletAlt } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Example of redirecting to the login page
  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg text-small ">
      <div className="container-fluid">
        <span className="navbar-brand">
          <img src="/logo.svg" alt="PENDC" className="navbar-brand" />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarTogglerDemo02"
          className="collapse navbar-collapse justify-content-center"
        >
          <ul className="nav navbar-nav nav-underline">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <PiSquaresFour className="icon" />
                <span>Ana Menü</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <LuLayers className="icon" />
                <span>Stoklar</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <PiHardDrives
                  className="icon"
                  style={{ transform: 'rotate(180deg)' }}
                />
                <span>Ürünler</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <LuHardDrive className="icon" />
                <span>Siparişler</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                <LuClipboard className="icon" />
                <span>Teklifler</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <HiOutlineChatBubbleLeft className="icon" />
                <span>Ticket</span>
              </a>
            </li>
            <li className="nav-item d-flex align-items-center  dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
              >
                <LuCreditCard className="icon" />
                <span>
                  Finans
                  <FiChevronDown className="icon ms-1 me-0" />
                  <ul className="dropdown-menu shadow-sm mt-2 py-2 border border-gray-200">
                    <li>
                      <span className="dropdown-item active" href="#">
                        <BiReceipt className="icon" />
                        Faturalar
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item" href="#">
                        <BiWalletAlt className="icon" />
                        Ekstre
                      </span>
                    </li>
                  </ul>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav account">
          <li className="nav-item dropdown">
            <a
              className="d-flex justify-content-between dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
            >
              <img src=".\avatar.svg" className="me-2" />
              <div className="d-flex flex-column">
                <p className="">Burak Güneş</p>
                <p className=" text-x-small text-gray-500">Pentech Bilişim</p>
              </div>
              <FiChevronDown className="icon m-0" />
              <ul className="dropdown-menu shadow-sm mt-4 border border-gray-200">
                <li>
                  <a className="dropdown-item" href="#">
                    Hesap
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ayarlar
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={redirectToLogin}
                  >
                    Çıkış
                  </a>
                </li>
              </ul>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
