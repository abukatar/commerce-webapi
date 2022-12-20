"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[3057],{63026:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return u},default:function(){return x}});var a,r=n(87462),m=n(63366),d=(n(15007),n(64983)),i=n(91515),o=n(54413),l=["components"],u={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),p={_frontmatter:u},c=i.Z;function x(e){var t=e.components,n=(0,m.Z)(e,l);return(0,d.mdx)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"mergecarts-mutation"},"mergeCarts mutation"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"mergeCarts")," mutation transfers the contents of a guest cart into the cart of a logged-in customer. This mutation must be run on behalf of a logged-in customer."),(0,d.mdx)("p",null,"The mutation retains any items that were already in the logged-in customer's cart. If both the guest and customer carts contain the same item, ",(0,d.mdx)("inlineCode",{parentName:"p"},"mergeCarts")," adds the quantities. Upon success, the mutation deletes the original guest cart."),(0,d.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Use the ",(0,d.mdx)("a",{parentName:"p",href:"assign-customer-to-guest-cart.md"},"assignCustomerToGuestCart")," mutation to assign the contents of a logged-in customer's cart to a guest cart.\nCustomer cart becomes inactive and the guest cart remains active."),(0,d.mdx)("h2",{id:"syntax"},"Syntax"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    mergeCarts(\n        source_cart_id: String!\n        destination_cart_id: String\n    ) {\n        Cart!\n    }\n}\n")),(0,d.mdx)("h2",{id:"example-usage"},"Example usage"),(0,d.mdx)("p",null,"In the following example, the customer had one Overnight Duffle in the cart (",(0,d.mdx)("inlineCode",{parentName:"p"},"CYmiiQRjPVc2gJUc5r7IsBmwegVIFO43"),") before a guest cart (",(0,d.mdx)("inlineCode",{parentName:"p"},"mPKE05OOtcxErbk1Toej6gw6tcuxvT9O"),") containing a Radiant Tee and another Overnight Duffle was merged. The cart now includes three items, including two Overnight Duffles."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Request:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  mergeCarts(\n    source_cart_id: "mPKE05OOtcxErbk1Toej6gw6tcuxvT9O",\n    destination_cart_id: "CYmiiQRjPVc2gJUc5r7IsBmwegVIFO43"\n  ) {\n    items {\n      id\n      product {\n        name\n        sku\n      }\n      quantity\n    }\n  }\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mergeCarts": {\n      "items": [\n        {\n          "id": "14",\n          "product": {\n            "name": "Overnight Duffle",\n            "sku": "24-WB07"\n          },\n          "quantity": 2\n        },\n        {\n          "id": "17",\n          "product": {\n            "name": "Radiant Tee",\n            "sku": "WS12"\n          },\n          "quantity": 1\n        }\n      ]\n    }\n  }\n}\n')),(0,d.mdx)("p",null,"The following example executes the previous request without specifying ",(0,d.mdx)("inlineCode",{parentName:"p"},"destination_cart_id"),"."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Request:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  mergeCarts(\n    source_cart_id: "mPKE05OOtcxErbk1Toej6gw6tcuxvT9O"\n  ) {\n    items {\n      id\n      product {\n        name\n        sku\n      }\n      quantity\n    }\n  }\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mergeCarts": {\n      "items": [\n        {\n          "id": "14",\n          "product": {\n            "name": "Overnight Duffle",\n            "sku": "24-WB07"\n          },\n          "quantity": 2\n        },\n        {\n          "id": "17",\n          "product": {\n            "name": "Radiant Tee",\n            "sku": "WS12"\n          },\n          "quantity": 1\n        }\n      ]\n    }\n  }\n}\n')),(0,d.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"destination_cart_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The ID of the logged-in customer's cart. If you do not specify a value, the mutation determines the customer's cart ID and uses that value.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"source_cart_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The ID of the guest cart")))),(0,d.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"mergeCarts")," mutation returns a ",(0,d.mdx)("inlineCode",{parentName:"p"},"Cart")," object."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"cart")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#cart-object"},"Cart!")),(0,d.mdx)("td",{parentName:"tr",align:null},"Describes the contents of the specified shopping cart")))),(0,d.mdx)("h3",{id:"cart-object"},"Cart object"),(0,d.mdx)(o.default,{mdxType:"CartObject"}),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"../../cart/queries/cart.md#output-attributes"},"Cart query output")," provides more information about the ",(0,d.mdx)("inlineCode",{parentName:"p"},"Cart")," object."),(0,d.mdx)("h2",{id:"errors"},"Errors"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Error"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Current user does not have an active cart.")),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"mergeCarts")," mutation deactivates the guest cart specified in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"source_cart_id")," after merging. The guest cannot make any further operations with it.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'Required parameter "source_cart_id" is missing')),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"source_cart_id")," attribute contains an empty value.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"The current customer isn't authorized.")),(0,d.mdx)("td",{parentName:"tr",align:null},"The current customer is not currently logged in, or the customer's token does not exist in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"oauth_token")," table, or you tried to merge two guest carts.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"The current user cannot perform operations on cart")),(0,d.mdx)("td",{parentName:"tr",align:null},"The authorized customer tried to merge a guest cart into the cart of another customer.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Could not create empty cart for customer")),(0,d.mdx)("td",{parentName:"tr",align:null},"The system could not create an empty cart for the logged-in customer")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-cart-mutations-merge-md-33d309115e3f45d48c33.js.map