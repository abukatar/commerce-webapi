---
title: createCustomerAddress mutation | Commerce Web APIs
---

# createCustomerAddress mutation

Use the `createCustomerAddress` mutation to create the customer's address.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`mutation: {createCustomerAddress(input: CustomerAddressInput!) {CustomerAddress}}`

## Example usage

The following call creates an address for the specified customer.

**Request:**

```graphql
mutation {
  createCustomerAddress(input: {
    region: {
      region: "Arizona"
      region_code: "AZ"
    }
    country_code: US
    street: ["123 Main Street"]
    telephone: "7777777777"
    postcode: "77777"
    city: "Phoenix"
    firstname: "Bob"
    lastname: "Loblaw"
    default_shipping: true
    default_billing: false
  }) {
    id
    region {
      region
      region_code
    }
    country_code
    street
    telephone
    postcode
    city
    default_shipping
    default_billing
  }
}
```

**Response:**

```json
{
  "data": {
    "createCustomerAddress": {
      "id": 4,
      "region": {
        "region": "Arizona",
        "region_code": "AZ"
      },
      "country_code": "US",
      "street": [
        "123 Main Street"
      ],
      "telephone": "7777777777",
      "postcode": "77777",
      "city": "Phoenix",
      "default_shipping": true,
      "default_billing": false
    }
  }
}
```

## Input attributes

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int | The ID assigned to the address object
`CustomerAddressInput` | [CustomerAddress](#customeraddressinput-attributes) | An array containing the customer's shipping and billing addresses

import CustomerAddressInput from '/src/pages/_includes/graphql/customer-address-input-24.md'

<CustomerAddressInput />

## Output attributes

The `createCustomerAddress` mutation returns the following attributes:

import CustomerAddressOutput from '/src/pages/_includes/graphql/customer-address-output-24.md'

<CustomerAddressOutput />

## Errors

Error | Description
--- | ---
`Expected type CustomerAddressInput!, found "".` | The `input` attribute contains an empty value.
`"input" value should be specified` | The `input` argument is specified but is empty.
`Required parameters are missing: firstname` | The `input.firstname` argument was omitted or contains an empty value.
`"Street Address" cannot contain more than 2 lines.` | The `input.street` argument contains array with more than two elements.
`Syntax Error: Expected Name, found )` | The `input` argument was omitted.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

*  [customer query](../queries/customer.md)
*  [createCustomer mutation](create.md)
*  [updateCustomer mutation](update.md)
*  [updateCustomerAddress mutation](update-address.md)
*  [deleteCustomerAddress mutation](delete-address.md)
