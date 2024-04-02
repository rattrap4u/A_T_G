
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
  subscription_id   = "${{ secrets.AZURE_SUBSCRIPTION_ID }}"
  tenant_id         = "${{ secrets.AZURE_TENANT_ID }}"
  client_id         = "${{ secrets.AZURE_CLIENT_ID }}"
  client_secret     = "${{ secrets.AZURE_CLIENT_SECRET }}"
}

resource "azurerm_resource_group" "rg" {
  name     = var.rgname
  location = var.location
}

resource "azurerm_storage_account" "STA" {
  name                     = var.sname
  resource_group_name      = var.rgname
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"

  tags = {
    environment = "dev"
  }
}

