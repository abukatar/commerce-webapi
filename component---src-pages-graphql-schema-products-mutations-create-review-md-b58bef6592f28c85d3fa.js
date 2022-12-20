"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[685],{13883:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return u},default:function(){return x}});var a=n(87462),r=n(63366),d=(n(15007),n(64983)),i=n(91515),m=n(92125),l=["components"],u={},p={_frontmatter:u},o=i.Z;function x(e){var t=e.components,n=(0,r.Z)(e,l);return(0,d.mdx)(o,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"createproductreview-mutation"},"createProductReview mutation"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"createProductReview")," mutation adds a review for the specified product. Use the ",(0,d.mdx)("a",{parentName:"p",href:"../queries/product-review-ratings-metadata.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"productReviewRatingsMetadata")," query")," to return a list of rating categories and possible values."),(0,d.mdx)("h2",{id:"syntax"},"Syntax"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"createProductReview(input: CreateProductReviewInput!): CreateProductReviewOutput!")),(0,d.mdx)("h2",{id:"example-usage"},"Example usage"),(0,d.mdx)("p",null,"In the following example, Roni gives product ",(0,d.mdx)("inlineCode",{parentName:"p"},"WH08")," four stars overall, three stars for value, and four stars for quality."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Request:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createProductReview(\n    input: {\n      sku: "WH08",\n      nickname: "Roni",\n      summary: "Great looking sweatshirt",\n      text: "This sweatshirt looks and feels great. The zipper sometimes sticks a bit.",\n      ratings: [\n        {\n          id: "NA==",\n          value_id: "MTk="\n        }, {\n          id: "MQ==",\n          value_id: "NA=="\n        }, {\n          id: "Mg==",\n          value_id: "OA=="\n        }\n      ]\n    }\n) {\n    review {\n      nickname\n      summary\n      text\n      average_rating\n      ratings_breakdown {\n        name\n        value\n      }\n    }\n  }\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createProductReview": {\n      "review": {\n        "nickname": "Roni",\n        "summary": "Great looking sweatshirt",\n        "text": "This sweatshirt looks and feels great. The zipper sometimes sticks a bit.",\n        "average_rating": 73.33,\n        "ratings_breakdown": [\n          {\n            "name": "Quality",\n            "value": "4"\n          },\n          {\n            "name": "Value",\n            "value": "3"\n          },\n          {\n            "name": "Overall",\n            "value": "4"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,d.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"CreateProductReviewInput")," input object defines the product review."),(0,d.mdx)("h3",{id:"createproductreviewinput-attributes"},"CreateProductReviewInput attributes"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"CreateProductReviewInput")," object contains the following attributes:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"nickname")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The customer's nickname. Defaults to the customer name, if logged in")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"ratings")),(0,d.mdx)("td",{parentName:"tr",align:null},"[ProductReviewRatingInput!]","!"),(0,d.mdx)("td",{parentName:"tr",align:null},"Ratings details by category. e.g price: 5, quality: 4 etc")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"sku")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The SKU of the reviewed product")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"summary")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The summary (title) of the review")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"text")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The review text.")))),(0,d.mdx)("h3",{id:"productreviewratinginput-attributes"},"ProductReviewRatingInput attributes"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"ProductReviewRatingInput")," object contains the following attributes:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"An encoded rating ID")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"value_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"An encoded rating value ID")))),(0,d.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"CreateProductReviewOutput")," output object contains the following attribute:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"review")),(0,d.mdx)("td",{parentName:"tr",align:null},"ProductReview!"),(0,d.mdx)("td",{parentName:"tr",align:null},"Contains the completed product review")))),(0,d.mdx)("h3",{id:"productreview-attributes"},"ProductReview attributes"),(0,d.mdx)(m.default,{mdxType:"ProductReview"}),(0,d.mdx)("h2",{id:"errors"},"Errors"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Error"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Field nickname of required type String! was not provided.")),(0,d.mdx)("td",{parentName:"tr",align:null},"The required attribute ",(0,d.mdx)("inlineCode",{parentName:"td"},"nickname")," is missing.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Field sku of required type String! was not provided.")),(0,d.mdx)("td",{parentName:"tr",align:null},"The required attribute ",(0,d.mdx)("inlineCode",{parentName:"td"},"sku")," is missing.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Field summary of required type String! was not provided.")),(0,d.mdx)("td",{parentName:"tr",align:null},"The required attribute ",(0,d.mdx)("inlineCode",{parentName:"td"},"summary")," is missing.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Field text of required type String! was not provided.")),(0,d.mdx)("td",{parentName:"tr",align:null},"The required attribute ",(0,d.mdx)("inlineCode",{parentName:"td"},"text")," is missing.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Field ratings of required type ProductReviewRatingInput! was not provided.")),(0,d.mdx)("td",{parentName:"tr",align:null},"The required attribute ",(0,d.mdx)("inlineCode",{parentName:"td"},"ratings")," is missing.")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-products-mutations-create-review-md-b58bef6592f28c85d3fa.js.map