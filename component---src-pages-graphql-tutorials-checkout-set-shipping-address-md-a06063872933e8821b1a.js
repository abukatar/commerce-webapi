"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[919],{64277:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return l}});var a=t(87462),s=t(63366),r=(t(15007),t(64983)),i=t(91515),d=["components"],o={},p={_frontmatter:o},m=i.Z;function l(e){var n=e.components,t=(0,s.Z)(e,d);return(0,r.mdx)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"step-4-set-the-shipping-address"},"Step 4. Set the shipping address"),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("a",{parentName:"p",href:"../../schema/cart/mutations/set-shipping-address.md"},"setShippingAddressesOnCart")," mutation to set a shipping address."),(0,r.mdx)("h2",{id:"add-shipping-address-to-the-cart"},"Add shipping address to the cart"),(0,r.mdx)("p",null,"In this step, we use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"setShippingAddressesOnCart")," mutation to add a shipping address to the cart."),(0,r.mdx)("p",null,"If using guest checkout, run the following example."),(0,r.mdx)("p",null,"If using a logged in customer, send the customer's authorization token in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Authorization")," parameter of the header. See ",(0,r.mdx)("a",{parentName:"p",href:"../../usage/authorization-tokens.md"},"Authorization tokens")," for more information."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  setShippingAddressesOnCart(\n    input: {\n      cart_id: "{ CART_ID }"\n      shipping_addresses: [\n        {\n          address: {\n            firstname: "John"\n            lastname: "Doe"\n            company: "Company Name"\n            street: ["3320 N Crescent Dr", "Beverly Hills"]\n            city: "Los Angeles"\n            region: "CA"\n            region_id: 12\n            postcode: "90210"\n            country_code: "US"\n            telephone: "123-456-0000"\n            save_in_address_book: false\n          }\n        }\n      ]\n    }\n  ) {\n    cart {\n      shipping_addresses {\n        firstname\n        lastname\n        company\n        street\n        city\n        region {\n          code\n          label\n        }\n        postcode\n        telephone\n        country {\n          code\n          label\n        }\n        available_shipping_methods{\n          carrier_code\n          carrier_title\n          method_code\n          method_title\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"setShippingAddressesOnCart")," returns the new address details."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setShippingAddressesOnCart": {\n      "cart": {\n        "shipping_addresses": [\n          {\n            "firstname": "John",\n            "lastname": "Doe",\n            "company": "Company Name",\n            "street": [\n              "3320 N Crescent Dr",\n              "Beverly Hills"\n            ],\n            "city": "Los Angeles",\n            "region": {\n              "code": "CA",\n              "label": "California"\n            },\n            "postcode": "90210",\n            "telephone": "123-456-0000",\n            "country": {\n              "code": "US",\n              "label": "US"\n            },\n            "available_shipping_methods": [\n              {\n                "carrier_code": "flatrate",\n                "carrier_title": "Flat Rate",\n                "method_code": "flatrate",\n                "method_title": "Fixed"\n              },\n              {\n                "carrier_code": "tablerate",\n                "carrier_title": "Best Way",\n                "method_code": "bestway",\n                "method_title": "Table Rate"\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"{ CART_ID }")," is the unique shopping cart ID from ",(0,r.mdx)("a",{parentName:"p",href:"../../tutorials/checkout/add-product-to-cart.md"},"Step 2. Create empty cart"),"."),(0,r.mdx)("p",null,"Note the ",(0,r.mdx)("inlineCode",{parentName:"p"},"available_shipping_methods")," in the response. We will use this information in a later step."),(0,r.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Sign in as a customer to the website using the email ",(0,r.mdx)("inlineCode",{parentName:"p"},"john.doe@example.com")," and password ",(0,r.mdx)("inlineCode",{parentName:"p"},"b1b2b3l@w+"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Go to Checkout.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"On the Shipping step, the Shipping Address form contains the address details you entered."))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-tutorials-checkout-set-shipping-address-md-a06063872933e8821b1a.js.map