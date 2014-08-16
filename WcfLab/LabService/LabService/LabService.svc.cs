using LabService.DataTransferObjects;
using System;
using System.IO;

namespace LabService
{
    public class LabService : ILabService
    {
        public string PlaceOrder(Order newOrder)
        {
            newOrder.Id = DateTime.UtcNow.Ticks;
            
            return newOrder.SubmitTime.ToString();
        }
    }
}
