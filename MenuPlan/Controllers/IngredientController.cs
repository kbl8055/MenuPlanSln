using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MenuPlanSvc.ServiceIngredient;

namespace MenuPlan.Controllers
{
    public class IngredientController : ApiController
    {
        // TODO: Fix Retrieval with proper structuring
        // GET api/<controller>
        [Route("api/Ingredient/GetAll/")]
        public Ingredient[] Get()
        {
            var client = new ServiceIngredientClient();
            var result = client.GetAllIngredients();

            return result;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // TODO: Complete this request - not working on front-end files?
        // POST api/<controller>
        [Route("api/Ingredient/Add/")]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}