using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LibToBeUsed
{
    public class Calculator
    {
        private static readonly double Factor = 10;

        public double ResultValue
        {
            get;
            set;
        }

        public void DoCalculation(double input)
        {
            ResultValue = Factor * input;
        }
    }
}

