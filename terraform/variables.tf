variable "subscription_id" {
  description = "Azure subscription ID"
}

variable "tenant_id" {
  description = "Azure tenant ID"
}

variable "client_id" {
  description = "Azure client ID"
}

variable "client_secret" {
  description = "Azure client secret"
}

variable "rgname" {
  description = "Resource Group Name"
  default     = "rg"
}

variable "location" {
  description = "Azure location"
  default     = "centralindia"
}

variable "sname" {
  description = "Azure Storage Account"
  default     = "rgportstorage"
}
