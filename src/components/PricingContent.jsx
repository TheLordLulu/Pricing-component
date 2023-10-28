// PricingContext.js
import React, { createContext, useContext, useState } from 'react';

const PricingContext = createContext();

export const usePricing = () => {
  return useContext(PricingContext);
};

export const PricingProvider = ({ children }) => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return (
    <PricingContext.Provider value={{ isYearly, togglePricing }}>
      {children}
    </PricingContext.Provider>
  );
};
