using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApiForAngular.Models
{
    public class LoginController : ApiController
    {
        crudangularEntities enitites = new crudangularEntities();
        
        public IEnumerable<employee> Get()
        {
             return enitites.employees.ToList();
        }
        
        public IHttpActionResult Post(employee employee)
        {

            if (enitites.employees.Where(c => c.email == employee.email && c.password == employee.password).Count() > 0)
            {
                    
                return Ok();
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "Any object");
            }
        }
    }
}
