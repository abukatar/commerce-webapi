"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5385],{73993:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return x}});var a=t(87462),r=t(63366),m=(t(15007),t(64983)),d=t(91515),i=t(78218),u=["components"],l={},p={_frontmatter:l},o=d.Z;function x(e){var n=e.components,t=(0,r.Z)(e,u);return(0,m.mdx)(o,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"removereturntracking-mutation"},"removeReturnTracking mutation"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"removeReturnTracking")," mutation deletes a customer-entered entry that defines the shipping carrier and tracking number for a return request. Use the ",(0,m.mdx)("a",{parentName:"p",href:"../../customer/queries/customer.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"customer")," query")," to retrieve valid ",(0,m.mdx)("inlineCode",{parentName:"p"},"carrier_uid")," values."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation: {\n    removeReturnTracking(input: RemoveReturnTrackingInput!): RemoveReturnTrackingOutput\n}\n")),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following example removes customer-entered tracking information for the specified return request. In the response, the ",(0,m.mdx)("inlineCode",{parentName:"p"},"shipping")," object is empty because the tracking information has been deleted."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'\nmutation{\n  removeReturnTracking(input: {\n    return_shipping_tracking_uid: "Mw=="\n  }){\n    return {\n      uid\n      shipping {\n        tracking {\n          carrier {\n            uid\n            label\n          }\n          tracking_number\n          status {\n            text\n            type\n          }\n        }\n      }\n      items {\n        order_item {\n          product_name\n          product_sku\n        }\n      }\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "removeReturnTracking": {\n      "return": {\n        "uid": "Mw==",\n        "shipping": {\n          "tracking": []\n        },\n        "items": [\n          {\n            "order_item": {\n              "product_name": "Ryker LumaTech&trade; Tee (Crew-neck)",\n              "product_sku": "MS09-M-Red"\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"RemoveReturnTrackingInput")," object must contain the following attributes:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"return_shipping_tracking_uid")),(0,m.mdx)("td",{parentName:"tr",align:null},"ID!"),(0,m.mdx)("td",{parentName:"tr",align:null},"The encoded ID of the tracking item to delete")))),(0,m.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"RemoveReturnTrackingOutput")," object contains the following attributes."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"return")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"#return-object"},"Return")),(0,m.mdx)("td",{parentName:"tr",align:null},"Contains details about the modified return")))),(0,m.mdx)("h3",{id:"return-object"},"Return object"),(0,m.mdx)(i.default,{mdxType:"Return"}),(0,m.mdx)("h2",{id:"related-topics"},"Related topics"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"request-return.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"requestReturn")," mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"add-return-comment.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"addReturnComment")," mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"add-return-tracking.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"addReturnTracking")," mutation"))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-orders-mutations-remove-return-tracking-md-dad275639c1a6183c653.js.map