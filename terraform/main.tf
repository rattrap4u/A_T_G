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

