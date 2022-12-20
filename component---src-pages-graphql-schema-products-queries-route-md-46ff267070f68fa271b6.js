"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9697],{29314:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return s}});var a=t(87462),r=t(63366),u=(t(15007),t(64983)),l=t(91515),d=t(10604),m=["components"],o={},p={_frontmatter:o},i=l.Z;function s(e){var n=e.components,t=(0,r.Z)(e,m);return(0,u.mdx)(i,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,u.mdx)("h1",{id:"routes-query"},"routes query"),(0,u.mdx)("p",null,"A merchant can reconfigure (rewrite) the URL to any product, category, or CMS page. When the rewrite goes into effect, any links that point to the previous URL are redirected to the new address."),(0,u.mdx)("p",null,"The ",(0,u.mdx)("inlineCode",{parentName:"p"},"routes")," query returns the canonical URL for a specified product, category, or CMS page. An external app can render a page by a URL without any prior knowledge about the landing page."),(0,u.mdx)("h2",{id:"syntax"},"Syntax"),(0,u.mdx)("p",null,(0,u.mdx)("inlineCode",{parentName:"p"},"{routes(url: String!): RoutableInterface}")),(0,u.mdx)("h2",{id:"example-usage"},"Example usage"),(0,u.mdx)("p",null,"The following query returns information about the product with the URL key of ",(0,u.mdx)("inlineCode",{parentName:"p"},"joust-duffle-bag.html"),". The response indicates the URL key has been permanently redirected to ",(0,u.mdx)("inlineCode",{parentName:"p"},"new-joust-duffle-bag.html"),"."),(0,u.mdx)("p",null,(0,u.mdx)("strong",{parentName:"p"},"Request:")),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  route(url: "joust-duffle-bag.html") {\n    __typename\n    relative_url\n    redirect_code\n    type\n    ... on SimpleProduct {\n      sku\n      url_key\n      uid\n      url_rewrites {\n        url\n        parameters {\n          name\n          value\n        }\n      }\n      relative_url\n      redirect_code\n      type\n    }\n  }\n}\n')),(0,u.mdx)("p",null,(0,u.mdx)("strong",{parentName:"p"},"Response:")),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "route": {\n      "__typename": "SimpleProduct",\n      "relative_url": "new-joust-duffle-bag.html",\n      "redirect_code": 301,\n      "type": "PRODUCT",\n      "sku": "24-MB01",\n      "url_key": "new-joust-duffle-bag",\n      "uid": "MQ==",\n      "url_rewrites": [\n        {\n          "url": "new-joust-duffle-bag.html",\n          "parameters": [\n            {\n              "name": "id",\n              "value": "1"\n            }\n          ]\n        },\n        {\n          "url": "gear/new-joust-duffle-bag.html",\n          "parameters": [\n            {\n              "name": "id",\n              "value": "1"\n            },\n            {\n              "name": "category",\n              "value": "3"\n            }\n          ]\n        },\n        {\n          "url": "gear/bags/new-joust-duffle-bag.html",\n          "parameters": [\n            {\n              "name": "id",\n              "value": "1"\n            },\n            {\n              "name": "category",\n              "value": "4"\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,u.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,u.mdx)("p",null,"The ",(0,u.mdx)("inlineCode",{parentName:"p"},"routes")," query requires the following attribute."),(0,u.mdx)("table",null,(0,u.mdx)("thead",{parentName:"table"},(0,u.mdx)("tr",{parentName:"thead"},(0,u.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,u.mdx)("th",{parentName:"tr",align:null},"Type"),(0,u.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,u.mdx)("tbody",{parentName:"table"},(0,u.mdx)("tr",{parentName:"tbody"},(0,u.mdx)("td",{parentName:"tr",align:null},(0,u.mdx)("inlineCode",{parentName:"td"},"url")),(0,u.mdx)("td",{parentName:"tr",align:null},"String!"),(0,u.mdx)("td",{parentName:"tr",align:null},"The requested URL. To query for product and category pages, the ",(0,u.mdx)("inlineCode",{parentName:"td"},"url")," value must contain the URL key and suffix. For CMS page queries, the ",(0,u.mdx)("inlineCode",{parentName:"td"},"url")," value must contain the URL key only.")))),(0,u.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,u.mdx)(d.default,{mdxType:"RoutableInterface"}),(0,u.mdx)("h2",{id:"related-topics"},"Related topics"),(0,u.mdx)("p",null,(0,u.mdx)("a",{parentName:"p",href:"../interfaces/routable.md"},"RoutableInterface")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-products-queries-route-md-46ff267070f68fa271b6.js.map