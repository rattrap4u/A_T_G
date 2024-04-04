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

  client_id       = var.client_id
  subscription_id = var.subscription_id
  tenant_id       = var.tenant_id
}

# Create a resource group
resource "azurerm_resource_group" "rg" {
  name     = "Tushar"
  location = "centralindia"
}

# Create a storage account
resource "azurerm_storage_account" "storage" {
  name                     = "tusharport"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"

  static_website {
    index_document = "index.html"
  }
}

# resource "azurerm_storage_container" "container" {
#   name                  = "content"
#   storage_account_name  = azurerm_storage_account.storage.name
#   container_access_type = "private"
# }

# Add a index.html file
resource "azurerm_storage_blob" "blob" {
  name                   = "index.html"
  storage_account_name   = azurerm_storage_account.storage.name
  storage_container_name = "$web"
  type                   = "Block"
  content_type           = "text/html"
  source_content         = "<div><h2></h2><a href=\"https://precious-llama-151610.netlify.app/\">Click here to visit my Portfolio</a></div>"
}




