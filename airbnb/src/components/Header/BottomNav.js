import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeOfTravelOutlinedIcon from '@mui/icons-material/ModeOfTravelOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="bottom-nav">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label='Explore'
          icon={<SearchIcon />}
          style={{
            color: value === 0 ? '#ff385c' : '#ddd',
          }}
        />
        <BottomNavigationAction
          label='Wishlists'
          icon={<FavoriteBorderIcon  />}
          style={{
            color: value === 1 ? '#ff385c' : '#ddd',
          }}
        />
        <BottomNavigationAction
          label='Trips'
          icon={<ModeOfTravelOutlinedIcon  />}
          style={{
            color: value === 2 ? '#ff385c' : '#ddd',
          }}
        />
        <BottomNavigationAction
          label='Messages'
          icon={<ChatBubbleOutlineOutlinedIcon />}
          style={{
            color: value === 3 ? '#ff385c' : '#ddd',
          }}
        />
        <BottomNavigationAction
          label='Profile'
          icon={<AccountCircleOutlinedIcon />}
          style={{
            color: value === 4 ? '#ff385c' : '#ddd',
          }}
        />
      </BottomNavigation>
    </div>
  );
}
