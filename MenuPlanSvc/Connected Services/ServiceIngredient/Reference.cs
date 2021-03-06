﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MenuPlanSvc.ServiceIngredient {
    using System.Runtime.Serialization;
    using System;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="Ingredient", Namespace="http://schemas.datacontract.org/2004/07/RestoReviewService.Business")]
    [System.SerializableAttribute()]
    public partial class Ingredient : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged {
        
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private MenuPlanSvc.ServiceIngredient.Category CategoryField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int CategoryIdField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string DescriptionField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int IdField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string NameField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private decimal PriceField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string UnitOfMeasureField;
        
        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData {
            get {
                return this.extensionDataField;
            }
            set {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public MenuPlanSvc.ServiceIngredient.Category Category {
            get {
                return this.CategoryField;
            }
            set {
                if ((object.ReferenceEquals(this.CategoryField, value) != true)) {
                    this.CategoryField = value;
                    this.RaisePropertyChanged("Category");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int CategoryId {
            get {
                return this.CategoryIdField;
            }
            set {
                if ((this.CategoryIdField.Equals(value) != true)) {
                    this.CategoryIdField = value;
                    this.RaisePropertyChanged("CategoryId");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Description {
            get {
                return this.DescriptionField;
            }
            set {
                if ((object.ReferenceEquals(this.DescriptionField, value) != true)) {
                    this.DescriptionField = value;
                    this.RaisePropertyChanged("Description");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int Id {
            get {
                return this.IdField;
            }
            set {
                if ((this.IdField.Equals(value) != true)) {
                    this.IdField = value;
                    this.RaisePropertyChanged("Id");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Name {
            get {
                return this.NameField;
            }
            set {
                if ((object.ReferenceEquals(this.NameField, value) != true)) {
                    this.NameField = value;
                    this.RaisePropertyChanged("Name");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal Price {
            get {
                return this.PriceField;
            }
            set {
                if ((this.PriceField.Equals(value) != true)) {
                    this.PriceField = value;
                    this.RaisePropertyChanged("Price");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string UnitOfMeasure {
            get {
                return this.UnitOfMeasureField;
            }
            set {
                if ((object.ReferenceEquals(this.UnitOfMeasureField, value) != true)) {
                    this.UnitOfMeasureField = value;
                    this.RaisePropertyChanged("UnitOfMeasure");
                }
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="Category", Namespace="http://schemas.datacontract.org/2004/07/RestoReviewService.Business")]
    [System.SerializableAttribute()]
    public partial class Category : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged {
        
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string DescriptionField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int IdField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string NameField;
        
        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData {
            get {
                return this.extensionDataField;
            }
            set {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Description {
            get {
                return this.DescriptionField;
            }
            set {
                if ((object.ReferenceEquals(this.DescriptionField, value) != true)) {
                    this.DescriptionField = value;
                    this.RaisePropertyChanged("Description");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int Id {
            get {
                return this.IdField;
            }
            set {
                if ((this.IdField.Equals(value) != true)) {
                    this.IdField = value;
                    this.RaisePropertyChanged("Id");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Name {
            get {
                return this.NameField;
            }
            set {
                if ((object.ReferenceEquals(this.NameField, value) != true)) {
                    this.NameField = value;
                    this.RaisePropertyChanged("Name");
                }
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="ServiceIngredient.IServiceIngredient")]
    public interface IServiceIngredient {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceIngredient/AddIngredient", ReplyAction="http://tempuri.org/IServiceIngredient/AddIngredientResponse")]
        void AddIngredient(MenuPlanSvc.ServiceIngredient.Ingredient ingredient);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceIngredient/AddIngredient", ReplyAction="http://tempuri.org/IServiceIngredient/AddIngredientResponse")]
        System.Threading.Tasks.Task AddIngredientAsync(MenuPlanSvc.ServiceIngredient.Ingredient ingredient);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceIngredient/DeleteIngredient", ReplyAction="http://tempuri.org/IServiceIngredient/DeleteIngredientResponse")]
        void DeleteIngredient(int id);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceIngredient/DeleteIngredient", ReplyAction="http://tempuri.org/IServiceIngredient/DeleteIngredientResponse")]
        System.Threading.Tasks.Task DeleteIngredientAsync(int id);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceIngredient/EditIngredient", ReplyAction="http://tempuri.org/IServiceIngredient/EditIngredientResponse")]
        MenuPlanSvc.ServiceIngredient.Ingredient EditIngredient(MenuPlanSvc.ServiceIngredient.Ingredient ingredient);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceIngredient/EditIngredient", ReplyAction="http://tempuri.org/IServiceIngredient/EditIngredientResponse")]
        System.Threading.Tasks.Task<MenuPlanSvc.ServiceIngredient.Ingredient> EditIngredientAsync(MenuPlanSvc.ServiceIngredient.Ingredient ingredient);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceIngredient/GetAllIngredients", ReplyAction="http://tempuri.org/IServiceIngredient/GetAllIngredientsResponse")]
        MenuPlanSvc.ServiceIngredient.Ingredient[] GetAllIngredients();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceIngredient/GetAllIngredients", ReplyAction="http://tempuri.org/IServiceIngredient/GetAllIngredientsResponse")]
        System.Threading.Tasks.Task<MenuPlanSvc.ServiceIngredient.Ingredient[]> GetAllIngredientsAsync();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceIngredient/GetIngredientsByCategory", ReplyAction="http://tempuri.org/IServiceIngredient/GetIngredientsByCategoryResponse")]
        MenuPlanSvc.ServiceIngredient.Ingredient[] GetIngredientsByCategory(string categoryName);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceIngredient/GetIngredientsByCategory", ReplyAction="http://tempuri.org/IServiceIngredient/GetIngredientsByCategoryResponse")]
        System.Threading.Tasks.Task<MenuPlanSvc.ServiceIngredient.Ingredient[]> GetIngredientsByCategoryAsync(string categoryName);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceIngredient/GetAllIngredientsWithCategory", ReplyAction="http://tempuri.org/IServiceIngredient/GetAllIngredientsWithCategoryResponse")]
        MenuPlanSvc.ServiceIngredient.Ingredient[] GetAllIngredientsWithCategory();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceIngredient/GetAllIngredientsWithCategory", ReplyAction="http://tempuri.org/IServiceIngredient/GetAllIngredientsWithCategoryResponse")]
        System.Threading.Tasks.Task<MenuPlanSvc.ServiceIngredient.Ingredient[]> GetAllIngredientsWithCategoryAsync();
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IServiceIngredientChannel : MenuPlanSvc.ServiceIngredient.IServiceIngredient, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class ServiceIngredientClient : System.ServiceModel.ClientBase<MenuPlanSvc.ServiceIngredient.IServiceIngredient>, MenuPlanSvc.ServiceIngredient.IServiceIngredient {
        
        public ServiceIngredientClient() {
        }
        
        public ServiceIngredientClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public ServiceIngredientClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public ServiceIngredientClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public ServiceIngredientClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public void AddIngredient(MenuPlanSvc.ServiceIngredient.Ingredient ingredient) {
            base.Channel.AddIngredient(ingredient);
        }
        
        public System.Threading.Tasks.Task AddIngredientAsync(MenuPlanSvc.ServiceIngredient.Ingredient ingredient) {
            return base.Channel.AddIngredientAsync(ingredient);
        }
        
        public void DeleteIngredient(int id) {
            base.Channel.DeleteIngredient(id);
        }
        
        public System.Threading.Tasks.Task DeleteIngredientAsync(int id) {
            return base.Channel.DeleteIngredientAsync(id);
        }
        
        public MenuPlanSvc.ServiceIngredient.Ingredient EditIngredient(MenuPlanSvc.ServiceIngredient.Ingredient ingredient) {
            return base.Channel.EditIngredient(ingredient);
        }
        
        public System.Threading.Tasks.Task<MenuPlanSvc.ServiceIngredient.Ingredient> EditIngredientAsync(MenuPlanSvc.ServiceIngredient.Ingredient ingredient) {
            return base.Channel.EditIngredientAsync(ingredient);
        }
        
        public MenuPlanSvc.ServiceIngredient.Ingredient[] GetAllIngredients() {
            return base.Channel.GetAllIngredients();
        }
        
        public System.Threading.Tasks.Task<MenuPlanSvc.ServiceIngredient.Ingredient[]> GetAllIngredientsAsync() {
            return base.Channel.GetAllIngredientsAsync();
        }
        
        public MenuPlanSvc.ServiceIngredient.Ingredient[] GetIngredientsByCategory(string categoryName) {
            return base.Channel.GetIngredientsByCategory(categoryName);
        }
        
        public System.Threading.Tasks.Task<MenuPlanSvc.ServiceIngredient.Ingredient[]> GetIngredientsByCategoryAsync(string categoryName) {
            return base.Channel.GetIngredientsByCategoryAsync(categoryName);
        }
        
        public MenuPlanSvc.ServiceIngredient.Ingredient[] GetAllIngredientsWithCategory() {
            return base.Channel.GetAllIngredientsWithCategory();
        }
        
        public System.Threading.Tasks.Task<MenuPlanSvc.ServiceIngredient.Ingredient[]> GetAllIngredientsWithCategoryAsync() {
            return base.Channel.GetAllIngredientsWithCategoryAsync();
        }
    }
}
