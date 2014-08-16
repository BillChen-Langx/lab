using System;
using System.Windows;
using System.Windows.Controls;

namespace WpfUsingLib
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            var d = DataContext;
        }
    }
}
