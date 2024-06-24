import React, { useState } from 'react';
import "./styles.css"

function GuestCounter({ initialCount, label, onChange }) {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(count + 1);
    onChange(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onChange(count - 1);
    }
  };

  return (
    <div className="guest-counter">
      <label htmlFor={label}>{label}</label>
      <div className="counter-buttons">
        <button onClick={handleDecrement} disabled={count === 0}>-</button>
        <span className="count">{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

function GuestDropdown({ onGuestCountChange }) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const handleGuestCountChange = () => {
    const totalGuests = adults + children + infants + pets;
    onGuestCountChange(totalGuests);
  };

  return (
    <div className="guest-dropdown">
      <GuestCounter
        initialCount={adults}
        label="Adults"
        onChange={(count) => setAdults(count)}
      />
      <GuestCounter
        initialCount={children}
        label="Children"
        onChange={(count) => setChildren(count)}
      />
      <GuestCounter
        initialCount={infants}
        label="Infants"
        onChange={(count) => setInfants(count)}
      />
      <GuestCounter
        initialCount={pets}
        label="Pets"
        onChange={(count) => setPets(count)}
      />
      {handleGuestCountChange()}
    </div>
  );
}

export default GuestDropdown;