import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { convertPLNToUSD } from './../../utils/convertPLNToUSD';
import { convertUSDToPLN } from './../../utils/convertUSDToPLN';

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });

  it('should render proper info about conversion when PLN -> USD', () => {

    const testCases = [
      { amount: '100' },
      { amount: '20' },
      { amount: '200' },
      { amount: '345' },
    ];

    for (const testObj of testCases) {
      render(<ResultBox from='PLN' to='USD' amount={testObj.amount} />);
      const output = screen.getByTestId('result');
      const amount = parseInt(testObj.amount)
      expect(output).toHaveTextContent(`PLN ${amount.toFixed(2)} = ${convertPLNToUSD(amount)}`);
      cleanup();
    }
  })

  it('should render proper info about conversion when USD -> PLN', () => {

    const testCases = [
      { amount: '100' },
      { amount: '20' },
      { amount: '200' },
      { amount: '345' },
    ];

    for (const testObj of testCases) {
      render(<ResultBox from='USD' to='PLN' amount={testObj.amount} />);
      const output = screen.getByTestId('result');
      const amount = parseInt(testObj.amount)
      expect(output).toHaveTextContent(`$${amount.toFixed(2)} = ${convertUSDToPLN(amount)}`);
      cleanup();
    }
  })

  it('should render proper info about conversion when PLN -> PLN', () => {

    const testCases = [
      { amount: '100' },
      { amount: '20' },
      { amount: '200' },
      { amount: '345' },
    ];

    for (const testObj of testCases) {
      render(<ResultBox from='PLN' to='PLN' amount={testObj.amount} />);
      const output = screen.getByTestId('result');
      const amount = parseInt(testObj.amount)
      expect(output).toHaveTextContent(`PLN ${amount.toFixed(2)} = PLN ${amount.toFixed(2)}`);
      cleanup();
    }
  })

  it('should render proper info about conversion when USD -> USD', () => {

    const testCases = [
      { amount: '100' },
      { amount: '20' },
      { amount: '200' },
      { amount: '345' },
    ];

    for (const testObj of testCases) {
      render(<ResultBox from='USD' to='USD' amount={testObj.amount} />);
      const output = screen.getByTestId('result');
      const amount = parseInt(testObj.amount)
      expect(output).toHaveTextContent(`$${amount.toFixed(2)} = $${amount.toFixed(2)}`);
      cleanup();
    }
  })

 /* it('should render proper info about conversion when negative value', () => {

    const testCases = [
      { amount: '-100' },
      { amount: '-20' },
      { amount: '-200' },
      { amount: '-345' },
    ];

    for (const testObj of testCases) {
      render(<ResultBox from='PLN' to='USD' amount={testObj.amount} />);
      const output = screen.getByTestId('result');
      expect(output).toHaveTextContent("Wrong value...");
      cleanup();
    }
  }) */

});