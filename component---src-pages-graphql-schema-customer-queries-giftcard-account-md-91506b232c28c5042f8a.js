"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6829],{11362:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return u}});var a=n(87462),d=n(63366),r=(n(15007),n(64983)),m=n(91515),l=["components"],i={},p={_frontmatter:i},o=m.Z;function u(e){var t=e.components,n=(0,d.Z)(e,l);return(0,r.mdx)(o,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"giftcardaccount-query"},"giftCardAccount query"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"giftCardAccount")," query returns information for a specific gift card."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("p",null," ",(0,r.mdx)("inlineCode",{parentName:"p"},"giftCardAccount(code: String!): GiftCardAccount")),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following example returns information about the ",(0,r.mdx)("inlineCode",{parentName:"p"},"01PNC9L76H4H")," gift card code."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'query {\n  giftCardAccount(input: {gift_card_code: "01PNC9L76H4H"}){\n    code\n    balance {\n      currency\n      value\n    }\n    expiration_date\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "giftCardAccount": {\n      "code": "01PNC9L76H4H",\n      "balance": {\n        "currency": "USD",\n        "value": 25\n      },\n      "expiration_date": null\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"giftCardAccount")," query requires the ",(0,r.mdx)("inlineCode",{parentName:"p"},"gift_card_code"),"."),(0,r.mdx)("h3",{id:"giftcardaccount-object"},"GiftCardAccount object"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"GiftCardAccount")," object must contain the following attribute:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"gift_card_code")),(0,r.mdx)("td",{parentName:"tr",align:null},"String!"),(0,r.mdx)("td",{parentName:"tr",align:null},"The gift card code")))),(0,r.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"GiftCardAccount")," object returns the following attributes:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"balance")),(0,r.mdx)("td",{parentName:"tr",align:null},"Money"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns the currency and remaining balance of the gift card")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"code")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns the gift card code")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"expiration_date")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns the date when the gift card expires, if any")))),(0,r.mdx)("h2",{id:"errors"},"Errors"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Error"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Gift card not found")),(0,r.mdx)("td",{parentName:"tr",align:null},"The specified ",(0,r.mdx)("inlineCode",{parentName:"td"},"gift_card_code")," value does not exist in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"giftcardaccount")," table, or the full amount has already been redeemed.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Field GiftCardAccountInput.gift_card_code of required type String! was not provided")),(0,r.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"GiftCardAccountInput.gift_card_code")," argument is empty.")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-queries-giftcard-account-md-91506b232c28c5042f8a.js.map