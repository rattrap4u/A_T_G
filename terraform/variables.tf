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

variable "sname" {
    description = "Azure Storage Account"
    default     = "rgportstorage"
    type        = string
}
