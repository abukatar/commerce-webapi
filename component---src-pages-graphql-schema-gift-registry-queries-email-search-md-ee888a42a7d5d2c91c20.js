"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6253],{32067:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return g}});var n=a(87462),r=a(63366),i=(a(15007),a(64983)),m=a(91515),l=a(65551),d=["components"],s={},p={_frontmatter:s},u=m.Z;function g(e){var t=e.components,a=(0,r.Z)(e,d);return(0,i.mdx)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"giftregistryemailsearch-query"},"giftRegistryEmailSearch query"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"giftRegistryEmailSearch")," query returns a list of gift registries that match the specified registrant email address. The query does not return registries based on owner email address."),(0,i.mdx)("h2",{id:"syntax"},"Syntax"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"giftRegistryEmailSearch(email: String!): [GiftRegistrySearchResult]\n")),(0,i.mdx)("h2",{id:"example-usage"},"Example usage"),(0,i.mdx)("p",null,"The following example returns details about gift registries in which ",(0,i.mdx)("inlineCode",{parentName:"p"},"staceyg@example.com")," is a registrant."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'query{\n  giftRegistryEmailSearch(email: "staceyg@example.com"){\n    event_date\n    event_title\n    gift_registry_uid\n    name\n    type\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "giftRegistryEmailSearch": [\n      {\n        "event_date": "2021-01-28",\n        "event_title": "Theo\'s 45th Birthday",\n        "gift_registry_uid": "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",\n        "name": "Stacey Gaines",\n        "type": "Birthday"\n      }\n    ]\n  }\n}\n')),(0,i.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"giftRegistryEmailSearch")," query requires the ",(0,i.mdx)("inlineCode",{parentName:"p"},"email")," attribute as input."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"email")),(0,i.mdx)("td",{parentName:"tr",align:null},"String"),(0,i.mdx)("td",{parentName:"tr",align:null},"The registrant's email address")))),(0,i.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,i.mdx)(l.default,{mdxType:"GiftRegistrySearchResult"}))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-gift-registry-queries-email-search-md-ee888a42a7d5d2c91c20.js.map