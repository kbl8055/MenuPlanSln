﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MenuPlanSvc.ServiceLookup {
    using System.Runtime.Serialization;
    using System;
    
    
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
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="ServiceLookup.IServiceLookup")]
    public interface IServiceLookup {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceLookup/GetCategories", ReplyAction="http://tempuri.org/IServiceLookup/GetCategoriesResponse")]
        MenuPlanSvc.ServiceLookup.Category[] GetCategories();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceLookup/GetCategories", ReplyAction="http://tempuri.org/IServiceLookup/GetCategoriesResponse")]
        System.Threading.Tasks.Task<MenuPlanSvc.ServiceLookup.Category[]> GetCategoriesAsync();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceLookup/GetCategoryById", ReplyAction="http://tempuri.org/IServiceLookup/GetCategoryByIdResponse")]
        MenuPlanSvc.ServiceLookup.Category GetCategoryById(int id);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceLookup/GetCategoryById", ReplyAction="http://tempuri.org/IServiceLookup/GetCategoryByIdResponse")]
        System.Threading.Tasks.Task<MenuPlanSvc.ServiceLookup.Category> GetCategoryByIdAsync(int id);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IServiceLookupChannel : MenuPlanSvc.ServiceLookup.IServiceLookup, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class ServiceLookupClient : System.ServiceModel.ClientBase<MenuPlanSvc.ServiceLookup.IServiceLookup>, MenuPlanSvc.ServiceLookup.IServiceLookup {
        
        public ServiceLookupClient() {
        }
        
        public ServiceLookupClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public ServiceLookupClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public ServiceLookupClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public ServiceLookupClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public MenuPlanSvc.ServiceLookup.Category[] GetCategories() {
            return base.Channel.GetCategories();
        }
        
        public System.Threading.Tasks.Task<MenuPlanSvc.ServiceLookup.Category[]> GetCategoriesAsync() {
            return base.Channel.GetCategoriesAsync();
        }
        
        public MenuPlanSvc.ServiceLookup.Category GetCategoryById(int id) {
            return base.Channel.GetCategoryById(id);
        }
        
        public System.Threading.Tasks.Task<MenuPlanSvc.ServiceLookup.Category> GetCategoryByIdAsync(int id) {
            return base.Channel.GetCategoryByIdAsync(id);
        }
    }
}
