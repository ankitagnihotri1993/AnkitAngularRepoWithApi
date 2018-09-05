using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApiForAngular.Models;
using System.Web.Http.Cors;
using System.Data.SqlClient;
using System.Configuration;

namespace WebApiForAngular.Controllers
{
    //[EnableCors(origins:"http://localhost:4200",headers:"*",methods:"*")]
    public class EmployeesController : ApiController
    {

        private crudangularEntities db = new crudangularEntities();

        // GET: api/Employees
        public IQueryable<employee> Getemployees()
        {
            return db.employees;
        }

        // GET: api/Employees/5
        [ResponseType(typeof(employee))]
        public IHttpActionResult Getemployee(int id)
        {
            employee employee = db.employees.Find(id);
            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        // PUT: api/Employees/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putemployee(int id, employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employee.empid)
            {
                return BadRequest();
            }

            db.Entry(employee).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!employeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Employees
        [ResponseType(typeof(employee))]
        [ActionName("f")]
        public IHttpActionResult Postemployee(employee employee)
        {
            //    if(db.employees.Where(c=>c.email==employee.email && c.password==employee.password).Count()>0)
            //    {
            //        return Content(HttpStatusCode.BadRequest, "Loing failed");
            //    }

            

            if (db.employees.Where(c => c.email == employee.email).Count() > 0)
            {
                return Content(HttpStatusCode.BadRequest, "email already registered !! enter another email");
            }
            else
            {
                db.employees.Add(employee);
                db.SaveChanges();
            }


            return CreatedAtRoute("DefaultApi", new { id = employee.empid }, employee);
        }

        // DELETE: api/Employees/5
        [ResponseType(typeof(employee))]
        public IHttpActionResult Deleteemployee(int id)
        {
            employee employee = db.employees.Find(id);
            if (employee == null)
            {
                return NotFound();
            }

            db.employees.Remove(employee);
            db.SaveChanges();

            return Ok(employee);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool employeeExists(int id)
        {
            return db.employees.Count(e => e.empid == id) > 0;
        }
    }
}