"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[8445],{63999:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return u}});var a,r=t(87462),s=t(63366),o=(t(15007),t(64983)),d=t(91515),i=["components"],l={},m=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),p={_frontmatter:l},c=d.Z;function u(e){var n=e.components,t=(0,s.Z)(e,i);return(0,o.mdx)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"step-5-set-billing-address"},"Step 5. Set billing address"),(0,o.mdx)(m,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"You must always set the billing address to place an order."),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("a",{parentName:"p",href:"../../schema/cart/mutations/set-billing-address.md"},"setBillingAddressOnCart")," mutation to set a billing address."),(0,o.mdx)("h2",{id:"add-a-billing-address-to-the-cart"},"Add a billing address to the cart"),(0,o.mdx)("p",null,"Similar to the shipping address, add a billing address to the cart. ",(0,o.mdx)("inlineCode",{parentName:"p"},"{ CART_ID }")," is the unique shopping cart ID from ",(0,o.mdx)("a",{parentName:"p",href:"../../tutorials/checkout/add-product-to-cart.md"},"Step 2. Create empty cart"),". The street address is also different, so we can see that different addresses are being created."),(0,o.mdx)("p",null,"Send the customer's authorization token in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Authorization")," parameter of the header. See ",(0,o.mdx)("a",{parentName:"p",href:"../../usage/authorization-tokens.md"},"Authorization tokens")," for more information."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  setBillingAddressOnCart(\n    input: {\n      cart_id: "{ CART_ID }"\n      billing_address: {\n        address: {\n          firstname: "John"\n          lastname: "Doe"\n          company: "Company Name"\n          street: ["64 Strawberry Dr", "Beverly Hills"]\n          city: "Los Angeles"\n          region: "CA"\n          region_id: 12\n          postcode: "90210"\n          country_code: "US"\n          telephone: "123-456-0000"\n          save_in_address_book: true\n        }\n      }\n    }\n  ) {\n    cart {\n      billing_address {\n        firstname\n        lastname\n        company\n        street\n        city\n        region{\n          code\n          label\n        }\n        postcode\n        telephone\n        country {\n          code\n          label\n        }\n      }\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setBillingAddressOnCart": {\n      "cart": {\n        "billing_address": {\n          "firstname": "John",\n          "lastname": "Doe",\n          "company": "Company Name",\n          "street": [\n            "64 Strawberry Dr",\n            "Beverly Hills"\n          ],\n          "city": "Los Angeles",\n          "region": {\n            "code": "CA",\n            "label": "California"\n          },\n          "postcode": "90210",\n          "telephone": "123-456-0000",\n          "country": {\n            "code": "US",\n            "label": "US"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Sign in as a customer to the website using the email ",(0,o.mdx)("inlineCode",{parentName:"p"},"john.doe@example.com")," and password ",(0,o.mdx)("inlineCode",{parentName:"p"},"b1b2b3l@w+"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Go to Checkout.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Go to the Review & Payments step. The Billing Address form is populated with the address details you entered."))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-tutorials-checkout-set-billing-address-md-a41a40cc46386f0d3fec.js.map