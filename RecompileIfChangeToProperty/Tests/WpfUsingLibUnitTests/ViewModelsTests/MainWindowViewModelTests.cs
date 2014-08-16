using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WpfUsingLib.ViewModels;

namespace WpfUsingLibUnitTests.ViewModelsTests
{
    [TestClass]
    public class MainWindowViewModelTests
    {
        private readonly MainWindowViewModel _viewModel = new MainWindowViewModel();

        [TestMethod]
        public void UpdateInputPropertyShouldAlsoUpdateResult()
        {
            var originalResult = _viewModel.Result;
            _viewModel.Input = 23;

            Assert.AreNotEqual(_viewModel.Result, originalResult);
        }
    }
}
