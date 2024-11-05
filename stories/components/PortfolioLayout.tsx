import React from 'react';
import Footer from './Footer';

interface Portfolio {
  name: string;
  email: string;
  address: string;
  checkingAccountName: string;
  savingsBalance: number;
  bankName: string;
  investments: string[];
}

interface PortfolioLayoutProps {
  portfolio: Portfolio | null;
}

const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ portfolio }) => {
  return (
    <div>
      <div className="mt-10 max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Portfolio Information</h2>
        {portfolio ? (
          <div className="space-y-4 text-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries({
                Name: portfolio.name,
                Email: portfolio.email,
                Address: portfolio.address,
                'Checking Account Name': portfolio.checkingAccountName,
              }).map(([label, value]) => (
                <div key={label} className="p-6 bg-gray-100 rounded-md shadow-sm">
                  <p className="text-sm text-gray-500">{label}</p>
                  <p className="text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-6 bg-gray-100 rounded-md shadow-sm">
              <p className="text-sm text-gray-500">Savings Balance</p>
              <p className="text-2xl font-bold text-green-600">
                ${portfolio.savingsBalance.toFixed(2)}
              </p>
            </div>

            <div className="mt-6 p-6 bg-gray-100 rounded-md shadow-sm">
              <p className="text-sm text-gray-500">Bank Name</p>
              <p className="text-lg font-semibold">{portfolio.bankName}</p>
            </div>

            <div className="mt-6 p-6 bg-gray-100 rounded-md shadow-sm">
              <p className="text-sm text-gray-500">Investments</p>
              <p className="text-lg font-semibold">{portfolio.investments.join(', ')}</p>
            </div>
          </div>
        ) : (
          <p className="text-red-500 text-center">No portfolio information available.</p>
        )}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioLayout;
