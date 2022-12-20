"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5120],{70976:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return p}});var n=a(87462),r=a(63366),m=(a(15007),a(64983)),d=a(91515),o=a(14552),l=["components"],s={},i={_frontmatter:s},u=d.Z;function p(e){var t=e.components,a=(0,r.Z)(e,l);return(0,m.mdx)(u,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"changecustomerpassword-mutation"},"changeCustomerPassword mutation"),(0,m.mdx)("p",null,"Use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"changeCustomerPassword")," mutation to change the password for the logged-in customer."),(0,m.mdx)("p",null,"To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session"},"session authentication"),"."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"mutation: {changeCustomerPassword(currentPassword: String! newPassword: String!) {Customer}}")),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following call updates the customer's password."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  changeCustomerPassword(\n    currentPassword: "roni_cost3@example.com"\n    newPassword: "roni_cost4@example.com"\n  ) {\n    id\n    email\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "changeCustomerPassword": {\n      "id": 1,\n      "email": "roni_cost@example.com"\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"changeCustomerPassword")," mutation requires the following inputs:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"currentPassword")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's current password")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"newPassword")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's new password")))),(0,m.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"changeCustomerPassword")," mutation returns the ",(0,m.mdx)("inlineCode",{parentName:"p"},"customer")," object."),(0,m.mdx)("p",null,"The following table lists the top-level attributes of the ",(0,m.mdx)("inlineCode",{parentName:"p"},"customer")," object. See the ",(0,m.mdx)("a",{parentName:"p",href:"../../customer/queries/customer.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"customer")," query")," for complete details about this object."),(0,m.mdx)(o.default,{mdxType:"Customer"}),(0,m.mdx)("h2",{id:"errors"},"Errors"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Error"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"The current customer isn't authorized.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's token does not exist in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"oauth_token")," table.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Invalid login or password.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The password specified in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"currentPassword")," argument is not valid.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'Specify the "currentPassword" value.')),(0,m.mdx)("td",{parentName:"tr",align:null},"The password specified in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"currentPassword")," argument is empty.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'Specify the "newPassword" value.')),(0,m.mdx)("td",{parentName:"tr",align:null},"The password specified in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"newPassword")," argument is empty.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"The account is locked.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's password cannot be changed because the account is locked.")))),(0,m.mdx)("h2",{id:"related-topics"},"Related topics"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"../queries/customer.md"},"customer query")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"create.md"},"createCustomer mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"update.md"},"updateCustomer mutation"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-change-password-md-e2668c5449c6e89c5c7d.js.map