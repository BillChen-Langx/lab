using System;
using System.Runtime.Serialization;

namespace LabService.DataTransferObjects
{
    [DataContract]
    public class Order
    {
        [DataMember(IsRequired = true)]
        public long Id { get; set; }

        [DataMember(IsRequired = true)]
        public DateTime SubmitTime { get; set; }
    }
}
