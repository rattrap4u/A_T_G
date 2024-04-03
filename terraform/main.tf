terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
  }
}

provider "azurerm" {
  features {}
  skip_provider_registration = true  # Skip automatic provider registration

  client_id         = var.client_id
  client_secret     = var.client_secret
  subscription_id   = var.subscription_id
  tenant_id         = var.tenant_id
}

resource "azurerm_resource_group" "rg" {
  name     = var.rgname
  location = var.location
}

resource "azurerm_storage_account" "sta" {
  name                     = var.sname
  resource_group_name      = var.rgname
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"

  tags = {
    environment = "dev"
  }
}
