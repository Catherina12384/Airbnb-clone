import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import logo from "../../assests/logo/long-logo.png";
import logo1 from "../../assests/logo/logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar";
import GuestDropdown from "./GuestDropdown";

function Header() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [showGuestDropdown, setShowGuestDropdown] = useState(false);
    const [guestCount, setGuestCount] = useState(1);

    const handleGuestClick = () => {
        setShowGuestDropdown(!showGuestDropdown);
    };

    const handleGuestCountChange = (count) => {
        setGuestCount(count);
    };

    const handleCheckInChange = (date) => {
        setCheckInDate(date);
        if (checkOutDate && date >= checkOutDate) {
            toast.error("Checkout date cannot be earlier than check-in date");
            setCheckOutDate(null);
        }
    };

    const handleCheckOutChange = (date) => {
        setCheckOutDate(date);

    };

    return (
        <div className="navbar">
            <ToastContainer />
            <img src={logo} alt="logo" className="navbar-logo" />
            <img src={logo1} alt="logo" className="navbar-small-logo" />
            <div className="navbar-middle">
                <div className='above-search-bar'>
                    <button>Stays</button>
                    <button>Experience</button>
                </div>
                <div className="search-bar">
                    <div className="item" id='where'>
                        <h4>Where</h4>
                        <input type="text" placeholder="Search destinations" />
                    </div>
                    <div className="item" id='checkin'>
                        <h4>Check in</h4>
                        <DatePicker
                            selected={checkInDate}
                            onChange={handleCheckInChange}
                            selectsStart
                            startDate={checkInDate}
                            endDate={checkOutDate}
                            placeholderText="Add dates"
                            className="date-picker-input"
                        />
                    </div>
                    <div className="item" id='checkout'>
                        <h4>Check out</h4>
                        <DatePicker
                            selected={checkOutDate}
                            onChange={handleCheckOutChange}
                            selectsEnd
                            startDate={checkInDate}
                            endDate={checkOutDate}
                            minDate={checkInDate}
                            placeholderText="Add dates"
                            className="date-picker-input"
                        />
                    </div>
                    <div className="item" id='guest'>
                        <h4>Who</h4>
                        <input
                        type="text"
                        value={`${guestCount} guest${guestCount > 1 ? 's' : ''}`}
                        onClick={handleGuestClick}
                        />
                        {showGuestDropdown && (
                        <GuestDropdown
                            onGuestCountChange={handleGuestCountChange}
                        />
                        )}
                    </div>
                    <div className="search-icon-div">
                        <SearchRoundedIcon className="search-icon" />
                    </div>
                </div>
            </div>
            <div className="small-search-bar">
                <div className="search-bar-text">Anywhere</div>
                <div className="search-bar-text">Any Week</div>
                <div className="search-bar-text2">Add guests</div>
                <div className="search-icon-div">
                    <SearchRoundedIcon className="search-icon" />
                </div>
            </div>
            <div className="profile-container">
                <div className="airbnb-your-home">Airbnb your home</div>
                <div className="airbnb-your-home">
                    <LanguageIcon sx={{ fontSize: "1.3rem" }} />
                </div>
                <div className="dropdown">
                    <button className="dropbtn">
                        <MenuRoundedIcon />
                        <AccountCircleRoundedIcon sx={{ fontSize: "1.6rem" }} />
                    </button>
                    <div className="dropdown-content">
                        <div className='first'>
                            <a href="#">Messages</a>
                            <a href="#">Notifications</a>
                            <a href="#">Trips</a>
                            <a href="#" style={{ borderBottom: '2px solid #ddd' }}>Wishlist</a>
                        </div>
                        <div className='second'>
                            <a href="#">Airbnb your home</a>
                            <a href="#" style={{ borderBottom: '2px solid #ddd' }}>Account</a>
                            <a href="#">Help Center</a>
                            <a href="#">Sign in</a>
                        </div>
                    </div>
                </div>
            </div>
            <SimpleBottomNavigation />
            <MobileSearchBar />
        </div>
    );
}

export default Header;
