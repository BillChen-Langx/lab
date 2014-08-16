using GalaSoft.MvvmLight.Command;
using LibToBeUsed;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Windows.Input;

namespace WpfUsingLib.ViewModels
{
    public class MainWindowViewModel : INotifyPropertyChanged
    {
        private readonly Calculator _calculator = new Calculator();

        private double _result;
        private double _input;
        public MainWindowViewModel()
        {
            InitializeCommands();
        }

        private void InitializeCommands()
        {
            CalculateCommand = new RelayCommand(() => { Calculate(Input + 10); Result = _calculator.ResultValue; });
        }

        public double Result 
        { 
            get
            {
                return _result;
            }

            set
            {
                if(value != _result)
                {
                    _result = value;
                    NotifyPropertyChanged("Result");
                }
            }
        }

        private void NotifyPropertyChanged(string propertyName)
        {
            if (PropertyChanged != null)
            {
                PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
            }
        }

        public double Input 
        {
            get { return _input; }
            set 
            {
                if (value != _input)
                {
                    _input = value;
                    RecalculateResult();
                    NotifyPropertyChanged("Input");
                }
            }
        }

        private void RecalculateResult()
        {
            Result = Calculate(_input);
        }

        private double Calculate(double input)
        {
            _calculator.DoCalculation(input);

            return _calculator.ResultValue;
        }

        public event PropertyChangedEventHandler PropertyChanged;

        public ICommand CalculateCommand { get; private set; } 
    }
}
