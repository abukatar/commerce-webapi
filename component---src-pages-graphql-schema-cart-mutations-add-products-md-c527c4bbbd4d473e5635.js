"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4522],{74801:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return g}});var a,d=t(87462),r=t(63366),o=(t(15007),t(64983)),i=t(91515),l=t(3015),p=t(15929),m=t(54413),u=t(63587),s=["components"],c={},x=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),h={_frontmatter:c},N=i.Z;function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.mdx)(N,(0,d.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"addproductstocart-mutation"},"addProductsToCart mutation"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"addProductsToCart")," mutation adds any type of product to the shopping cart. It streamlines the process of adding products by allowing you to specify multiple product types in a single call. We recommend using this mutation to add products to the cart instead of the single-purpose mutations, such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"addSimpleProductsToCart")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"addConfigurableProductsToCart"),"."),(0,o.mdx)("p",null,"You must specify the Cart ID along with the list of SKU and quantity pairs as parameters to add the products to the shopping cart."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"CartItemInput")," object now contains the ",(0,o.mdx)("inlineCode",{parentName:"p"},"selected_options")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"enter_options")," attributes. A selected option is predefined, and the shopper chooses from a set of possible values. Entered options generally contain text the shopper types, but other possibilities exist."),(0,o.mdx)("p",null,"Selected options can be used in the following product types:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Customizable options such those presented in drop-down menu, radio buttons, and checkboxes")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Bundle products")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Configurable products")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Downloadable products")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Gift cards (amount)")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Grouped products"))),(0,o.mdx)("p",null,"Entered options can be used in the following product types:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Customizable options such as those presented in a text field, text area, or file")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Gift cards (custom amounts, sender and recipient fields, messages)"))),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"uid")," attribute to reference selected or entered options. For entered options, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"uid")," represents an option value, while for entered options, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"uid")," represents an option. Each ",(0,o.mdx)("inlineCode",{parentName:"p"},"uid")," is unique across different options in a set."),(0,o.mdx)("h2",{id:"syntax"},"Syntax"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  addProductsToCart(\n    cartId: String!\n    cartItems: [CartItemInput!]!\n  ) {\n    AddProductsToCartOutput\n  }\n}\n")),(0,o.mdx)("h2",{id:"example-usage"},"Example usage"),(0,o.mdx)("p",null,"These examples show the minimal payload for adding products, including those with customizable options."),(0,o.mdx)("h3",{id:"add-a-simple-product-to-a-cart"},"Add a simple product to a cart"),(0,o.mdx)("p",null,"The following example adds a simple product to a cart."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addProductsToCart(\n    cartId: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz"\n    cartItems: [\n      {\n        quantity: 1\n        sku: "24-MB04"\n      }\n    ]\n  ) {\n    cart {\n      items {\n        product {\n          name\n          sku\n        }\n        quantity\n      }\n    }\n    user_errors {\n      code\n      message\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addProductsToCart": {\n      "cart": {\n        "items": [\n          {\n            "product": {\n              "name": "Strive Shoulder Pack",\n              "sku": "24-MB04"\n            },\n            "quantity": 1\n          }\n        ]\n      },\n      "user_errors": []\n    }\n  }\n}\n')),(0,o.mdx)("h3",{id:"add-a-configurable-product-to-a-cart"},"Add a configurable product to a cart"),(0,o.mdx)("p",null,"The following examples show two ways to add the same configurable product (",(0,o.mdx)("inlineCode",{parentName:"p"},"WSH12"),", a pair of shorts) to the cart."),(0,o.mdx)("h4",{id:"specify-a-parent-and-a-child-sku"},"Specify a parent and a child SKU"),(0,o.mdx)("p",null,"In this example, the configurable product SKU is the ",(0,o.mdx)("inlineCode",{parentName:"p"},"parent_sku")," attribute, while the simple product variant is the ",(0,o.mdx)("inlineCode",{parentName:"p"},"sku")," attribute."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addProductsToCart(\n    cartId: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz"\n    cartItems: [\n      {\n        quantity: 1\n        parent_sku: "WSH12"\n        sku: "WSH12-28-Green"\n      }\n    ]\n  ) {\n    cart {\n      items {\n        id\n        product {\n          name\n          sku\n        }\n        quantity\n      }\n    }\n    user_errors {\n      code\n      message\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addProductsToCart": {\n      "cart": {\n        "items": [\n          {\n            "id": "24",\n            "product": {\n              "name": "Erika Running Short",\n              "sku": "WSH12"\n            },\n            "quantity": 1\n          },\n          {\n            "id": "26",\n            "product": {\n              "name": "Erika Running Short-28-Green",\n              "sku": "WSH12-28-Green"\n            },\n            "quantity": 1\n          }\n        ]\n      },\n      "user_errors": []\n    }\n  }\n}\n')),(0,o.mdx)("h4",{id:"specify-the-sku-with-selected-options"},"Specify the SKU with selected options"),(0,o.mdx)("p",null,"In this example, the mutation specifies the size and color as selected options. The first option specifies the color, while the second option specifies the size. The ",(0,o.mdx)("a",{parentName:"p",href:"../../products/queries/products.md#retrieve-variant-uid-values"},(0,o.mdx)("inlineCode",{parentName:"a"},"products")," query")," shows how to obtain the values specified in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"selected_options")," array."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addProductsToCart(\n    cartId: "2m3Wpue1L3bNARhErAKbZ8Lb7czvgq6R"\n    cartItems: [\n      {\n        quantity: 1\n        sku: "WSH12"\n        selected_options: ["Y29uZmlndXJhYmxlLzkzLzUz","Y29uZmlndXJhYmxlLzE2MS8xNzQ="]\n      }\n    ]\n  ) {\n    cart {\n      items {\n        product {\n          name\n          sku\n        }\n        ... on ConfigurableCartItem {\n          configurable_options {\n            configurable_product_option_uid\n            option_label\n            configurable_product_option_value_uid\n            value_label\n          }\n        }\n        quantity\n      }\n    }\n    user_errors {\n      code\n      message\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addProductsToCart": {\n      "cart": {\n        "items": [\n          {\n            "product": {\n              "name": "Erika Running Short",\n              "sku": "WSH12"\n            },\n            "configurable_options": [\n              {\n                "configurable_product_option_uid": "Y29uZmlndXJhYmxlLzIwNDgvOTM=",\n                "option_label": "Color",\n                "configurable_product_option_value_uid": "Y29uZmlndXJhYmxlLzkzLzUz",\n                "value_label": "Green"\n              },\n              {\n                "configurable_product_option_uid": "Y29uZmlndXJhYmxlLzIwNDgvMTYx",\n                "option_label": "Size",\n                "configurable_product_option_value_uid": "Y29uZmlndXJhYmxlLzE2MS8xNzQ=",\n                "value_label": "28"\n              }\n            ],\n            "quantity": 1\n          }\n        ]\n      },\n      "user_errors": []\n    }\n  }\n}\n')),(0,o.mdx)("h3",{id:"add-a-simple-product-with-entered-options"},"Add a simple product with entered options"),(0,o.mdx)("p",null,"The following example adds a simple product with a customizable option to the cart. The customizable option allows the shopper to specify a message for engraving."),(0,o.mdx)(x,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The customizable option is not part of the Luma sample data."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addProductsToCart(\n    cartId: "2m3Wpue1L3bNARhErAKbZ8Lb7czvgq6R"\n    cartItems: [\n      {\n        quantity: 1\n        sku: "24-WG03"\n        entered_options: [{\n          uid: "Y3VzdG9tLW9wdGlvbi8x"\n          value: "Congrats, Julie!"\n        }]\n      }\n    ]\n  ) {\n    cart {\n      items {\n        product {\n          name\n          sku\n        }\n        ... on SimpleCartItem {\n          customizable_options {\n            customizable_option_uid\n            label\n            values {\n              customizable_option_value_uid\n              value\n            }\n          }\n        }\n        quantity\n      }\n    }\n    user_errors {\n      code\n      message\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addProductsToCart": {\n      "cart": {\n        "items": [\n          {\n            "id": "19",\n            "product": {\n              "name": "Clamber Watch",\n              "sku": "24-WG03"\n            },\n            "customizable_options": [\n              {\n                "customizable_option_uid": "Y3VzdG9tLW9wdGlvbi8x",\n                "label": "Engraving",\n                "values": [\n                  {\n                    "customizable_option_value_uid": "Y3VzdG9tLW9wdGlvbi8x",\n                    "value": "Congrats, Julie!"\n                  }\n                ]\n              }\n            ],\n            "quantity": 1\n          }\n        ]\n      },\n      "user_errors": []\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"add-a-bundle-product-with-selected-options-to-a-cart"},"Add a bundle product with selected options to a cart"),(0,o.mdx)("p",null,"The following example adds the Sprite Yoga Companion Kit bundle product to the cart. The bundle product is comprised of four simple products, and the selected simple products are specified with a value in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"selected_options")," array. Use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"products")," query to determine these UID values. Note that each UID value is an encoded value representing the following string:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"bundle/<bundle_option_id>/<bundle_option_selection_id>/<quantity>")),(0,o.mdx)("p",null,"Because the encoded value includes the quantity, the schema does not contain a ",(0,o.mdx)("inlineCode",{parentName:"p"},"quantity")," attribute for individual simple products."),(0,o.mdx)("p",null,"In this example, the UID values are encoded versions of these strings:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"bundle/1/1/1\nbundle/2/4/1\nbundle/3/5/1\nbundle/4/8/1\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addProductsToCart(\n    cartId: "ELwvX8VJinGJ9Q2vOXSiCTS4gvCDKP8U"\n    cartItems: [\n      {\n        quantity: 1\n        sku: "24-WG080"\n        selected_options: [\n          "YnVuZGxlLzEvMS8x"\n          "YnVuZGxlLzIvNC8x"\n          "YnVuZGxlLzMvNS8x"\n          "YnVuZGxlLzQvOC8x"\n        ]\n      }\n    ]\n  ) {\n    cart {\n      items {\n        uid\n        product {\n          name\n          sku\n        }\n        quantity\n        ... on BundleCartItem {\n          bundle_options {\n            uid\n            label\n            type\n            values {\n              id\n              label\n              price\n              quantity\n            }\n          }\n        }\n      }\n    }\n    user_errors {\n      code\n      message\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addProductsToCart": {\n      "cart": {\n        "items": [\n          {\n            "uid": "MTQ=",\n            "product": {\n              "name": "Sprite Yoga Companion Kit",\n              "sku": "24-WG080"\n            },\n            "quantity": 1,\n            "bundle_options": [\n              {\n                "uid": "YnVuZGxlLzE=",\n                "label": "Sprite Stasis Ball",\n                "type": "radio",\n                "values": [\n                  {\n                    "id": 1,\n                    "label": "Sprite Stasis Ball 55 cm",\n                    "price": 23,\n                    "quantity": 1\n                  }\n                ]\n              },\n              {\n                "uid": "YnVuZGxlLzI=",\n                "label": "Sprite Foam Yoga Brick",\n                "type": "radio",\n                "values": [\n                  {\n                    "id": 4,\n                    "label": "Sprite Foam Yoga Brick",\n                    "price": 5,\n                    "quantity": 1\n                  }\n                ]\n              },\n              {\n                "uid": "YnVuZGxlLzM=",\n                "label": "Sprite Yoga Strap",\n                "type": "radio",\n                "values": [\n                  {\n                    "id": 5,\n                    "label": "Sprite Yoga Strap 6 foot",\n                    "price": 14,\n                    "quantity": 1\n                  }\n                ]\n              },\n              {\n                "uid": "YnVuZGxlLzQ=",\n                "label": "Sprite Foam Roller",\n                "type": "radio",\n                "values": [\n                  {\n                    "id": 8,\n                    "label": "Sprite Foam Roller",\n                    "price": 19,\n                    "quantity": 1\n                  }\n                ]\n              }\n            ]\n          }\n        ]\n      },\n      "user_errors": []\n    }\n  }\n}\n')),(0,o.mdx)("h3",{id:"add-a-bundle-product-with-entered-options-to-the-cart"},"Add a bundle product with entered options to the cart"),(0,o.mdx)("p",null,"For ",(0,o.mdx)("inlineCode",{parentName:"p"},"entered_options"),", the ",(0,o.mdx)("inlineCode",{parentName:"p"},"uid")," attribute contains the encoded entered value. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"value")," attribute defines the quantity. If the ",(0,o.mdx)("inlineCode",{parentName:"p"},"BundleProduct.items.options.can_change_quantity")," attribute is ",(0,o.mdx)("inlineCode",{parentName:"p"},"false"),", then the bundle product definition sets the quantity for the simple product. Otherwise, the shopper decides the quantity."),(0,o.mdx)("p",null,"The Luma sample data does not provide any bundle products with entered options. The following snippet shows how to construct the mutation."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addProductsToCart(\n    cartId: "ELwvX8VJinGJ9Q2vOXSiCTS4gvCDKP8U"\n    cartItems: [\n      {\n        quantity: 1\n        sku: "bundle1"\n        entered_options: [\n          {\n            uid: "EncodedEnteredValue1"\n            value: 1\n          }\n        ]\n        selected_options: [\n          "EncodedSelectedValue1"\n          "EncodedSelectedValue2"\n        ]\n      }\n    ]\n  ) {\n    cart {\n      items {\n        uid\n        product {\n          name\n          sku\n        }\n        quantity\n        ... on BundleCartItem {\n          bundle_options {\n            uid\n            label\n            type\n            values {\n              id\n              label\n              price\n              quantity\n            }\n          }\n        }\n      }\n    }\n    user_errors {\n      code\n      message\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"addProductsToCart")," mutation must contain the following attributes:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,o.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"cartId")),(0,o.mdx)("td",{parentName:"tr",align:null},"String!"),(0,o.mdx)("td",{parentName:"tr",align:null},"The unique ID that identifies the customer's cart")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"cartItems")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"#cartiteminput-object"},"[CartItemInput!]!")),(0,o.mdx)("td",{parentName:"tr",align:null},"Contains the cart item IDs and quantity of each item")))),(0,o.mdx)("h3",{id:"cartiteminput-object"},"CartItemInput object"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"CartItemInput")," object must contain the following attributes:"),(0,o.mdx)(l.default,{mdxType:"CartItemInput"}),(0,o.mdx)("h3",{id:"enteredoptioninput-object"},"EnteredOptionInput object"),(0,o.mdx)(p.default,{mdxType:"EnteredOptionInput"}),(0,o.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"AddProductsToCartOutput")," object contains the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Cart")," object."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,o.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"cart")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"#cart-object"},"Cart!")),(0,o.mdx)("td",{parentName:"tr",align:null},"Describes the contents of the specified shopping cart")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"user_errors")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"#cartuserinputerror-attributes"},"CartUserInputError!")),(0,o.mdx)("td",{parentName:"tr",align:null},"An array of errors encountered while adding products to a cart")))),(0,o.mdx)("h3",{id:"cart-object"},"Cart object"),(0,o.mdx)(m.default,{mdxType:"CartObject"}),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"../../cart/queries/cart.md#output-attributes"},"Cart query output")," provides more information about the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Cart")," object."),(0,o.mdx)("h3",{id:"cartuserinputerror-attributes"},"CartUserInputError attributes"),(0,o.mdx)(u.default,{mdxType:"CartUserInputErrors"}),(0,o.mdx)("h2",{id:"errors"},"Errors"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Code"),(0,o.mdx)("th",{parentName:"tr",align:null},"Error"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"CART_ID_INVALID")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"Could not find a cart with ID")),(0,o.mdx)("td",{parentName:"tr",align:null},"The specified cart ID is invalid.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"PRODUCT_NOT_FOUND")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},'Could not find a product with SKU "XXX"')),(0,o.mdx)("td",{parentName:"tr",align:null},"A product with the SKU specified in the argument ",(0,o.mdx)("inlineCode",{parentName:"td"},"data"),".",(0,o.mdx)("inlineCode",{parentName:"td"},"sku")," does not exist.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"NOT_SALABLE")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"Product that you are trying to add is not available.")),(0,o.mdx)("td",{parentName:"tr",align:null},"A requested product is not available")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"INSUFFICIENT_STOCK")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"This product is out of stock")),(0,o.mdx)("td",{parentName:"tr",align:null},"The requested product is out of stock")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"UNDEFINED")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"UNDEFINED")),(0,o.mdx)("td",{parentName:"tr",align:null},"The error message does not match any error code")))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-cart-mutations-add-products-md-c527c4bbbd4d473e5635.js.map