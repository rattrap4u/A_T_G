terraform {
    required_providers {
        azurerm = {
            source = "hashicorp/azurerm"
            version = "=2.46.0"
        }
    }
}
provider "azurerm" {
    feature {}
    client_id       = "your-client-id"
    client_secret   = "your-client-secret"
    subscription_id = "your-subscription-id"
    tenant_id       = "your-tenant-id"
}

resource "azurerm_resource_group" "rg" {
  name     = "var.rgname"
  location = "var.location"
}

resource "azurerm_storage_account" "STA" {
  name                     = var.sname
  resource_group_name      = var.rgname
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "GRS"

  tags = {
    environment = "dev"
  }
}

