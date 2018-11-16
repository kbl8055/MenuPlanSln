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

        //[Route("api/Ingredient/Categories/")]
        //public Category[] GetCategories()
        //{
        //    var client = new ServiceIngredientClient();
        //    var result = client.GetCategories();

        //    return result;
        //}

        // GET api/<controller>/5
        [Route("api/Ingredient/GetByCategory/{catName}")]
        public Ingredient[] Get(string catName)
        {
            var client = new ServiceIngredientClient();
            var result = client.GetIngredientsByCategory(catName);
            return result;
        }

        [Route("api/Ingredient/GetAllWithCategories/")]
        public Ingredient[] GetAllWithCategories()
        {
            var client = new ServiceIngredientClient();
            var result = client.GetAllIngredientsWithCategory();
            return result;
        }

        // TODO: Complete this request - not working on front-end files?
        // POST api/<controller>
        [Route("api/Ingredient/Add/")]
        public string Post(Ingredient formInput)
        {
            var client = new ServiceIngredientClient();
            client.AddIngredient(formInput);

            return "Add ingredient successful.";
        }

        // PUT api/<controller>/5
        [Route("api/Ingredient/Edit/")]
        public string Put(Ingredient formEdit)
        {
            //var client = new ServiceIngredientClient();
            //client.EditIngredient(formEdit);
            var message = "Editing Ingredient!";
            return message.ToUpper();
        }

        // DELETE api/<controller>/5
        [Route("api/Ingredient/Delete/{id}")]
        public void Delete(int id)
        {
            var client = new ServiceIngredientClient();
            client.DeleteIngredient(id);
        }
    }
}