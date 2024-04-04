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


variable "client_id" {}
variable "subscription_id" {}
variable "tenant_id" {}