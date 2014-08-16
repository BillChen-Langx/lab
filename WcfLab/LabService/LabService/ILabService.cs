using LabService.DataTransferObjects;
using System.ServiceModel;

namespace LabService
{
    [ServiceContract]
    public interface ILabService
    {
        [OperationContract]
        string PlaceOrder(Order newOrder);
    }
}
