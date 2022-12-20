"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2037],{72475:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return c}});var a,r=n(87462),l=n(63366),i=(n(15007),n(64983)),d=n(91515),m=n(83634),p=["components"],o={},u=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),s={_frontmatter:o},x=d.Z;function c(e){var t=e.components,n=(0,l.Z)(e,p);return(0,i.mdx)(x,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"categories-query"},"categories query"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"categories")," query returns a list of categories that match the specified filter. This query differs from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"categoryList")," query in that it supports pagination."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"categories")," query supports the following types of filters. You can specify multiple filters in a query."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Category ID"),(0,i.mdx)("li",{parentName:"ul"},"Category name"),(0,i.mdx)("li",{parentName:"ul"},"Parent category ID"),(0,i.mdx)("li",{parentName:"ul"},"URL key"),(0,i.mdx)("li",{parentName:"ul"},"URL path")),(0,i.mdx)("p",null,"The query returns a ",(0,i.mdx)("inlineCode",{parentName:"p"},"CategoryResult")," object, which contains pagination information and an array of ",(0,i.mdx)("inlineCode",{parentName:"p"},"CategoryTree")," items. The top level of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"CategoryTree")," object provides details about the queried category. This object includes the ",(0,i.mdx)("inlineCode",{parentName:"p"},"children")," attribute, which contains an array of its immediate subcategories."),(0,i.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"You cannot return the entire category tree if the total number of nodes in the request exceeds the value specified in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"queryDepth")," attribute defined in the GraphQL ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file. By default, this value is 20. ",(0,i.mdx)("a",{parentName:"p",href:"../../../usage/security-configuration.md"},"Query security")," further describes query depths."),(0,i.mdx)("p",null,"Use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"breadcrumbs")," attribute to return information about the parent categories of the queried category."),(0,i.mdx)("h2",{id:"syntax"},"Syntax"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"categories(filters: CategoryFilterInput pageSize: Int currentPage: Int): CategoryResult\n")),(0,i.mdx)("h2",{id:"example-usage"},"Example usage"),(0,i.mdx)("p",null,"The following query returns the top-level categories (as well as two levels of children) displayed on the Luma storefront. Because the ",(0,i.mdx)("inlineCode",{parentName:"p"},"currentPage")," attribute is set to ",(0,i.mdx)("inlineCode",{parentName:"p"},"2"),", the second page of results are returned."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  categories(\n    filters: {\n      ids: {in: ["3", "9", "12", "21", "38", "39"]}\n      parent_id: {in: ["2"]}\n    }\n    pageSize:3\n    currentPage: 2\n  ) {\n    total_count\n    items {\n      uid\n      level\n      name\n      path\n      children_count\n      children {\n        uid\n        level\n        name\n        path\n        children_count\n        children {\n          uid\n          level\n          name\n          path\n        }\n      }\n    }\n    page_info {\n      current_page\n      page_size\n      total_pages\n    }\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "categories": {\n      "total_count": 6,\n      "items": [\n        {\n          "uid": "Mw==",\n          "level": 2,\n          "name": "Gear",\n          "path": "1/2/3",\n          "children_count": "3",\n          "children": [\n            {\n              "uid": "NA==",\n              "level": 3,\n              "name": "Bags",\n              "path": "1/2/3/4",\n              "children_count": "0",\n              "children": []\n            },\n            {\n              "uid": "NQ==",\n              "level": 3,\n              "name": "Fitness Equipment",\n              "path": "1/2/3/5",\n              "children_count": "0",\n              "children": []\n            },\n            {\n              "uid": "Ng==",\n              "level": 3,\n              "name": "Watches",\n              "path": "1/2/3/6",\n              "children_count": "0",\n              "children": []\n            }\n          ]\n        },\n        {\n          "uid": "OQ==",\n          "level": 2,\n          "name": "Training",\n          "path": "1/2/9",\n          "children_count": "1",\n          "children": [\n            {\n              "uid": "MTA=",\n              "level": 3,\n              "name": "Video Download",\n              "path": "1/2/9/10",\n              "children_count": "0",\n              "children": []\n            }\n          ]\n        },\n        {\n          "uid": "Mzg=",\n          "level": 2,\n          "name": "Sale",\n          "path": "1/2/38",\n          "children_count": "0",\n          "children": []\n        }\n      ],\n      "page_info": {\n        "current_page": 2,\n        "page_size": 3,\n        "total_pages": 2\n      }\n    }\n  }\n}\n')),(0,i.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,i.mdx)("p",null,"If you omit the ",(0,i.mdx)("inlineCode",{parentName:"p"},"filters")," attribute, the query returns the store's default root category."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"filters")),(0,i.mdx)("td",{parentName:"tr",align:null},"CategoryFilterInput"),(0,i.mdx)("td",{parentName:"tr",align:null},"Contains filter definitions")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"pageSize")),(0,i.mdx)("td",{parentName:"tr",align:null},"Int"),(0,i.mdx)("td",{parentName:"tr",align:null},"Specifies the maximum number of results to return at once. The default value is 20")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"currentPage")),(0,i.mdx)("td",{parentName:"tr",align:null},"Int"),(0,i.mdx)("td",{parentName:"tr",align:null},"Specifies which page of results to return. The default value is 1")))),(0,i.mdx)("h3",{id:"categoryfilterinput-object"},"CategoryFilterInput object"),(0,i.mdx)(m.default,{mdxType:"CategoryFilterInput"}),(0,i.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"categories")," query returns a ",(0,i.mdx)("inlineCode",{parentName:"p"},"CategoryResult")," object, which contains the following attributes:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"items")),(0,i.mdx)("td",{parentName:"tr",align:null},"[CategoryTree]"),(0,i.mdx)("td",{parentName:"tr",align:null},"A list of categories that match filter criteria")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"page_info")),(0,i.mdx)("td",{parentName:"tr",align:null},"SearchResultPageInfo"),(0,i.mdx)("td",{parentName:"tr",align:null},"An object that includes the ",(0,i.mdx)("inlineCode",{parentName:"td"},"page_info")," and ",(0,i.mdx)("inlineCode",{parentName:"td"},"currentPage")," values specified in the query.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"total_count")),(0,i.mdx)("td",{parentName:"tr",align:null},"Int"),(0,i.mdx)("td",{parentName:"tr",align:null},"The total number of categories that match the criteria")))),(0,i.mdx)("h3",{id:"categorytree-attributes"},"CategoryTree attributes"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"items")," attribute contains a ",(0,i.mdx)("inlineCode",{parentName:"p"},"CategoryTree")," object, which implements ",(0,i.mdx)("a",{parentName:"p",href:"category.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"CategoryInterface")),". The ",(0,i.mdx)("inlineCode",{parentName:"p"},"CategoryTree")," object can contain the following attribute and all attributes defined in ",(0,i.mdx)("inlineCode",{parentName:"p"},"CategoryInterface"),":"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"children")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"CategoryTree")),(0,i.mdx)("td",{parentName:"tr",align:null},"An array containing the next level of subcategories. By default, you can specify up to 10 levels of child categories")))),(0,i.mdx)("h3",{id:"searchresultpageinfo"},"SearchResultPageInfo"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"current_page"),(0,i.mdx)("td",{parentName:"tr",align:null},"Int"),(0,i.mdx)("td",{parentName:"tr",align:null},"Specifies which page of results to return")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"page_size"),(0,i.mdx)("td",{parentName:"tr",align:null},"Int"),(0,i.mdx)("td",{parentName:"tr",align:null},"Specifies the maximum number of items to return")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"total_pages"),(0,i.mdx)("td",{parentName:"tr",align:null},"Int"),(0,i.mdx)("td",{parentName:"tr",align:null},"Total pages")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-products-queries-categories-md-9bd29dd3350d38f788b0.js.map