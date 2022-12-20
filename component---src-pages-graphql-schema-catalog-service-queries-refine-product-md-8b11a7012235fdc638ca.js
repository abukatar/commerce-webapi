"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9173],{80256:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return d},default:function(){return c}});var a=t(87462),l=t(63366),r=(t(15007),t(64983)),o=t(91515),u=t(31958),i=t(52085),m=["components"],d={},p={_frontmatter:d},s=o.Z;function c(n){var e=n.components,t=(0,l.Z)(n,m);return(0,r.mdx)(s,(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"refineproduct-query"},"refineProduct query"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"refineProduct")," query narrows the results of a ",(0,r.mdx)("inlineCode",{parentName:"p"},"products")," query that was run against a complex product. Before you run the ",(0,r.mdx)("inlineCode",{parentName:"p"},"refineProduct")," query, you must run the ",(0,r.mdx)("inlineCode",{parentName:"p"},"products")," query and construct the response so that it returns a list of ",(0,r.mdx)("inlineCode",{parentName:"p"},"options")," within a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ComplexProductView")," inline fragment. When a shopper selects a product option (such as size or color) on the storefront, run the ",(0,r.mdx)("inlineCode",{parentName:"p"},"refineProduct")," query, specifying the SKU and selected option value IDs as input. Depending on the number of product options the complex product has, you might need to run the ",(0,r.mdx)("inlineCode",{parentName:"p"},"refineProduct")," query multiple times, until the shopper has selected a specific variant."),(0,r.mdx)("p",null,"You should construct the response of your query so that it contains both the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ComplexProductView")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"SimpleProductView")," inline fragments. If the shopper has not selected all of the required options, the query will return the IDs of unselected options and the minimum and maximum price of the product, based on the selected options and possible remaining options. If the shopper has selected all the required options, the query returns details about a simple product, which includes a set price."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"refineProduct(sku: String!, optionIds: [String!]!): ProductView\n")),(0,r.mdx)("h2",{id:"required-headers"},"Required headers"),(0,r.mdx)("p",null,"You must specify the following HTTP headers to run this query."),(0,r.mdx)(u.Z,{mdxType:"Docs"}),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("h3",{id:"return-details-about-a-partially-selected-complex-product"},"Return details about a partially selected complex product"),(0,r.mdx)("p",null,"The following query returns details about the color options available for a medium-sized variant of product ",(0,r.mdx)("inlineCode",{parentName:"p"},"MH12"),". The value of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"optionIDs")," input parameter is taken from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"products")," query's ",(0,r.mdx)("a",{parentName:"p",href:"products.html#complex-product-example"},"Return details about a complex product")," example."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'query {\n    refineProduct(optionIds: ["Y29uZmlndXJhYmxlLzE4Ni8xNzc="], sku: "MH12") {\n        __typename\n        id\n        sku\n        name\n        url\n        ... on SimpleProductView {\n            price {\n                final {\n                    amount {\n                        value\n                    }\n                }\n                regular {\n                    amount {\n                        value\n                    }\n                }\n            }\n        }\n        ... on ComplexProductView {\n            options {\n                id\n                title\n                required\n                values {\n                    id\n                    title\n\n                }\n            }\n            priceRange {\n                maximum {\n                    final {\n                        amount {\n                            value\n                        }\n                    }\n                    regular {\n                        amount {\n                            value\n                        }\n                    }\n                }\n                minimum {\n                    final {\n                        amount {\n                            value\n                        }\n                    }\n                    regular {\n                        amount {\n                            value\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "refineProduct": {\n      "__typename": "ComplexProductView",\n      "id": "VFVneE1nAFpHVm1ZWFZzZEEATXpSbE1qYzBNR0V0TnpRM015MDBZemc1TFRnM016QXROVGMwTURObVkyVXlOMkZsAGJXRnBibDkzWldKemFYUmxYM04wYjNKbABZbUZ6WlEAVFVGSFUxUkhNREExTlRjNU1ETTQ",\n      "sku": "MH12",\n      "name": "Ajax Full-Zip Sweatshirt 2",\n      "url": "http://example.com/ajax-full-zip-sweatshirt.html",\n      "options": [\n        {\n          "id": "color",\n          "title": "Color",\n          "required": false,\n          "values": [\n            {\n              "id": "Y29uZmlndXJhYmxlLzkzLzU5",\n              "title": "Blue"\n            },\n            {\n              "id": "Y29uZmlndXJhYmxlLzkzLzY3",\n              "title": "Red"\n            },\n            {\n              "id": "Y29uZmlndXJhYmxlLzkzLzYy",\n              "title": "Green"\n            }\n          ]\n        }\n      ],\n      "priceRange": {\n        "maximum": {\n          "final": {\n            "amount": {\n              "value": 69\n            }\n          },\n          "regular": {\n            "amount": {\n              "value": 69\n            }\n          }\n        },\n        "minimum": {\n          "final": {\n            "amount": {\n              "value": 69\n            }\n          },\n          "regular": {\n            "amount": {\n              "value": 69\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h3",{id:"return-details-about-a-fully-selected-complex-product"},"Return details about a fully selected complex product"),(0,r.mdx)("p",null,"In the following query, the shopper has selected options for both size and color. The response contains details about the corresponding simple product."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'query {\n    refineProduct(optionIds: ["Y29uZmlndXJhYmxlLzE4Ni8xNzc=", "Y29uZmlndXJhYmxlLzkzLzU5"], sku: "MH12") {\n        __typename\n        id\n        sku\n        name\n        url\n        ... on SimpleProductView {\n            price {\n                final {\n                    amount {\n                        value\n                    }\n                }\n                regular {\n                    amount {\n                        value\n                    }\n                }\n            }\n        }\n        ... on ComplexProductView {\n            options {\n                id\n                title\n                required\n                values {\n                    id\n                    title\n\n                }\n            }\n            priceRange {\n                maximum {\n                    final {\n                        amount {\n                            value\n                        }\n                    }\n                    regular {\n                        amount {\n                            value\n                        }\n                    }\n                }\n                minimum {\n                    final {\n                        amount {\n                            value\n                        }\n                    }\n                    regular {\n                        amount {\n                            value\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "refineProduct": {\n      "__typename": "SimpleProductView",\n      "id": "VFVneE1pMU5MVUpzZFdVAFpHVm1ZWFZzZEEATXpSbE1qYzBNR0V0TnpRM015MDBZemc1TFRnM016QXROVGMwTURObVkyVXlOMkZsAGJXRnBibDkzWldKemFYUmxYM04wYjNKbABZbUZ6WlEAVFVGSFUxUkhNREExTlRjNU1ETTQ",\n      "sku": "MH12-M-Blue",\n      "name": "Ajax Full-Zip Sweatshirt -M-Blue",\n      "url": "http://example.com/catalog/product/view/id/235/s/ajax-full-zip-sweatshirt-m-blue/",\n      "price": {\n        "final": {\n          "amount": {\n            "value": 69\n          }\n        },\n        "regular": {\n          "amount": {\n            "value": 69\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"input-fields"},"Input fields"),(0,r.mdx)("p",null,"You must specify a SKU value and at least one option ID as input."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"optionIds")),(0,r.mdx)("td",{parentName:"tr",align:null},"[String!]","!"),(0,r.mdx)("td",{parentName:"tr",align:null},"A list of IDs assigned to the product options the shopper has selected, such specific colors and sizes.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"sku")),(0,r.mdx)("td",{parentName:"tr",align:null},"String!"),(0,r.mdx)("td",{parentName:"tr",align:null},"The SKU of a complex product.")))),(0,r.mdx)("h2",{id:"output-fields"},"Output fields"),(0,r.mdx)(i.default,{mdxType:"Docs2"}))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-catalog-service-queries-refine-product-md-8b11a7012235fdc638ca.js.map