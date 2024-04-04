variable "rgname" {
  description = "Resource Group Name"
  default     = "rg"
  type        = string
}

variable "location" {
  description = "Azure location"
  default     = "centralindia"
  type        = string
}
variable "env" {
  type = map(string)
}
variable "azure_client_id" {}
variable "azure_client_secret" {}
variable "azure_tenant_id" {}
variable "azure_subscription_id" {}
