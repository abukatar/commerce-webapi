---
title: removeReturnTracking mutation | Commerce Web APIs
---

# removeReturnTracking mutation

The `removeReturnTracking` mutation deletes a customer-entered entry that defines the shipping carrier and tracking number for a return request. Use the [`customer` query](../../customer/queries/customer.md) to retrieve valid `carrier_uid` values.

## Syntax

```graphql
mutation: {
    removeReturnTracking(input: RemoveReturnTrackingInput!): RemoveReturnTrackingOutput
}
```

## Example usage

The following example removes customer-entered tracking information for the specified return request. In the response, the `shipping` object is empty because the tracking information has been deleted.

**Request:**

```graphql

mutation{
  removeReturnTracking(input: {
    return_shipping_tracking_uid: "Mw=="
  }){
    return {
      uid
      shipping {
        tracking {
          carrier {
            uid
            label
          }
          tracking_number
          status {
            text
            type
          }
        }
      }
      items {
        order_item {
          product_name
          product_sku
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "removeReturnTracking": {
      "return": {
        "uid": "Mw==",
        "shipping": {
          "tracking": []
        },
        "items": [
          {
            "order_item": {
              "product_name": "Ryker LumaTech&trade; Tee (Crew-neck)",
              "product_sku": "MS09-M-Red"
            }
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `RemoveReturnTrackingInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`return_shipping_tracking_uid` | ID! | The encoded ID of the tracking item to delete

## Output attributes

The `RemoveReturnTrackingOutput` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`return` | [Return](#return-object) | Contains details about the modified return

### Return object

import Return from '/src/pages/_includes/graphql/return.md'

<Return />

## Related topics

*  [`requestReturn` mutation](request-return.md)
*  [`addReturnComment` mutation](add-return-comment.md)
*  [`addReturnTracking` mutation](add-return-tracking.md)
