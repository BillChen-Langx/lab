using System;
using System.Runtime.CompilerServices;

namespace LibToBeUsed
{
	public class Calculator
	{
		private readonly static double Factor;

		public double ResultValue
		{
			get;
			set;
		}

		static Calculator()
		{
			Calculator.Factor = 10;
		}

		public Calculator()
		{
		}

		public void DoCalculation(double input)
		{
			this.ResultValue = Calculator.Factor * input;
		}
	}
}