import React from "react";

const MyAddress = () => {
  const address = {
    city: "Manouba",
    postalCode: "2010",
    country: "Tunisie",
  };

  return (
    <div className="adressdiv">
      <p>
        {address.city}, {address.postalCode}, {address.country}
      </p>
    </div>
  );
};

export default MyAddress;
