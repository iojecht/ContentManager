using System.Web.Http;
using Core.Data.Model;

namespace Core.Controller
{
    public class OrdersController : ApiController
    {
        [Authorize]
        //[Route("")]
        public IHttpActionResult Get()
        {
            return Ok(Order.CreateOrders());
        } 
    }
}