using LibToBeUsed;
using System;
using System.ComponentModel;
using System.Threading;

namespace WpfUsingLib.ViewModels
{
	public class MainWindowViewModel : INotifyPropertyChanged
	{
		private readonly Calculator _calculator = new Calculator();

		private double _result;

		private double _input;

		public double Input
		{
			get
			{
				return this._input;
			}
			set
			{
				if (value != this._input)
				{
					this._input = value;
					this.RecalculateResult();
					this.NotifyPropertyChanged("Input");
				}
			}
		}

		public double Result
		{
			get
			{
				return this._result;
			}
			set
			{
				if (value != this._result)
				{
					this._result = value;
					this.NotifyPropertyChanged("Result");
				}
			}
		}

		public MainWindowViewModel()
		{
		}

		private double Calculate(double input)
		{
			this._calculator.DoCalculation(input);
			return this._calculator.ResultValue;
		}

		private void NotifyPropertyChanged(string propertyName)
		{
			if (this.PropertyChanged != null)
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}

		private void RecalculateResult()
		{
			this.Result = this.Calculate(this._input);
		}

		public event PropertyChangedEventHandler PropertyChanged;
	}
}