using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using LibToBeUsed;

namespace LibToBeUsedUnitTests
{
    [TestClass]
    public class CalculatorTests
    {
        private readonly Calculator _calculator = new Calculator();

        private List<double> Inputs
        {
            get
            {
                return new List<double> { 1, 0, 12 };
            }
        }

        private List<double> Results
        {
            get
            {
                return new List<double> { 10, 0, 120 };
            }
        }

        [TestMethod]
        public void DoCalculateReturnsCorrectResult()
        {
            for(var i = 0 ; i < Inputs.Count; ++i)
            {
                var input = Inputs[i];
                var expectedResult = Results[i];

                _calculator.DoCalculation(input);
                var result = _calculator.ResultValue;

                Assert.AreEqual(expectedResult, result);
            }
        }
    }
}
