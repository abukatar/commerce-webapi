"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9418],{82337:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return u},default:function(){return s}});var a=n(87462),m=n(63366),o=(n(15007),n(64983)),r=n(91515),i=n(750),l=["components"],u={},d={_frontmatter:u},p=r.Z;function s(e){var t=e.components,n=(0,m.Z)(e,l);return(0,o.mdx)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"sendnegotiablequoteforreview-mutation"},"sendNegotiableQuoteForReview mutation"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"sendNegotiableQuoteForReview")," mutation sends the negotiable quote to the seller for review. If the mutation is successful, the buyer cannot modify the quote until the merchant accepts the request."),(0,o.mdx)("p",null,"This mutation requires a valid ",(0,o.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,o.mdx)("h2",{id:"syntax"},"Syntax"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"sendNegotiableQuoteForReview(\n    input: SendNegotiableQuoteForReviewInput!\n) : SendNegotiableQuoteForReviewOutput\n")),(0,o.mdx)("h2",{id:"example-usage"},"Example usage"),(0,o.mdx)("p",null,"The following example adds a comment to the specified negotiable quote."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation{\n  sendNegotiableQuoteForReview(input: {\n    quote_uid: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"\n    comment: { comment: "Thanks!"}\n  }){\n    quote {\n      uid\n      buyer {\n        firstname\n        lastname\n      }\n      name\n      updated_at\n      status\n      comments {\n        uid\n        created_at\n        creator_type\n        author {\n          firstname\n          lastname\n        }\n        text\n      }\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "sendNegotiableQuoteForReview": {\n      "quote": {\n        "uid": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",\n        "buyer": {\n          "firstname": "Taina",\n          "lastname": "Garofalo"\n        },\n        "name": "April 22 request",\n        "updated_at": "2021-04-23 18:21:44",\n        "status": "SUBMITTED",\n        "comments": [\n          {\n            "uid": "OA==",\n            "created_at": "2021-04-22 17:04:47",\n            "creator_type": "BUYER",\n            "author": {\n              "firstname": "Taina",\n              "lastname": "Garofalo"\n            },\n            "text": "Requesting a 10% discount and a reduction in shipping costs."\n          },\n          {\n            "uid": "OQ==",\n            "created_at": "2021-04-28 02:47:41",\n            "creator_type": "BUYER",\n            "author": {\n              "firstname": "Taina",\n              "lastname": "Garofalo"\n            },\n            "text": "Thanks!"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"SendNegotiableQuoteForReviewInput")," object contains the following attribute."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,o.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"comment")),(0,o.mdx)("td",{parentName:"tr",align:null},"NegotiableQuoteCommentInput"),(0,o.mdx)("td",{parentName:"tr",align:null},"A comment for the seller to review")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"quote_uid")),(0,o.mdx)("td",{parentName:"tr",align:null},"ID!"),(0,o.mdx)("td",{parentName:"tr",align:null},"The unique ID of a ",(0,o.mdx)("inlineCode",{parentName:"td"},"NegotiableQuote")," object")))),(0,o.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"SendNegotiableQuoteForReviewOutput")," output object contains the following attribute."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,o.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"quote")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"#negotiablequote-attributes"},"NegotiableQuote")),(0,o.mdx)("td",{parentName:"tr",align:null},"The negotiable quote after sending for seller review")))),(0,o.mdx)("h3",{id:"negotiablequote-attributes"},"NegotiableQuote attributes"),(0,o.mdx)(i.default,{mdxType:"NegotiableQuote"}))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-negotiable-quote-mutations-send-for-review-md-490edd15bc235e71c805.js.map