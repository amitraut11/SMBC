// src/components/features/PortfolioLayout.stories.tsx

import React from 'react';
import PortfolioLayout from './PortfolioLayout';

export default {
  title: 'Features/PortfolioLayout',
  component: PortfolioLayout,
};

const samplePortfolio = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  address: '123 Main St, Anytown, USA',
  checkingAccountName: 'John\'s Checking',
  savingsBalance: 2500.75,
  bankName: 'XYZ Bank',
  investments: ['Stocks', 'Bonds', 'Real Estate'],
};

export const Default = () => <PortfolioLayout initialPortfolio={samplePortfolio} />;
export const Editable = () => <PortfolioLayout initialPortfolio={samplePortfolio} />;
