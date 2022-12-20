"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4312],{57270:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return s}});var n=a(87462),r=a(63366),m=(a(15007),a(64983)),d=a(91515),l=a(14552),i=["components"],o={},u={_frontmatter:o},p=d.Z;function s(e){var t=e.components,a=(0,r.Z)(e,i);return(0,m.mdx)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"createcustomerv2-mutation"},"createCustomerV2 mutation"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"createCustomerV2")," mutation creates a customer account. Use the ",(0,m.mdx)("a",{parentName:"p",href:"create-address.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"createCustomerAddress")," mutation")," to complete the customer profile and define billing and shipping addresses."),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"createCustomerV2")," mutation supersedes the ",(0,m.mdx)("inlineCode",{parentName:"p"},"createCustomer")," mutation as the means to create a customer account. The input objects differ between these two mutations. The ",(0,m.mdx)("inlineCode",{parentName:"p"},"createCustomer")," mutation required the ",(0,m.mdx)("inlineCode",{parentName:"p"},"CustomerInput")," object, as did the ",(0,m.mdx)("inlineCode",{parentName:"p"},"updateCustomer")," mutation. The attributes required for creating a customer are different than those for updating a customer, but you could not determine this by looking at the schema. The ",(0,m.mdx)("inlineCode",{parentName:"p"},"createCustomerV2")," mutation requires the ",(0,m.mdx)("inlineCode",{parentName:"p"},"CustomerCreateInput")," object, which it does not share with the ",(0,m.mdx)("a",{parentName:"p",href:"create-v2.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"updateCustomerV2")," mutation"),"."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"mutation: {createCustomerV2(input: CustomerCreateInput!) {CustomerOutput}}")),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following call creates a new customer."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createCustomerV2(\n    input: {\n      firstname: "Bob"\n      lastname: "Loblaw"\n      email: "bobloblaw@example.com"\n      password: "b0bl0bl@w"\n      is_subscribed: true\n    }\n  ) {\n    customer {\n      firstname\n      lastname\n      email\n      is_subscribed\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createCustomer": {\n      "customer": {\n        "firstname": "Bob",\n        "lastname": "Loblaw",\n        "email": "bobloblaw@example.com",\n        "is_subscribed": true\n      }\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,m.mdx)("p",null,"The following table lists the attributes you can use as input for the ",(0,m.mdx)("inlineCode",{parentName:"p"},"createCustomerV2")," mutation."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"allow_remote_shopping_assistance")),(0,m.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,m.mdx)("td",{parentName:"tr",align:null},"Indicates whether the customer has enabled remote shopping assistance")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"date_of_birth")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's date of birth. In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers' full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"dob")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Deprecated. Use ",(0,m.mdx)("inlineCode",{parentName:"td"},"date_of_birth")," instead. The customer's date of birth")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"email")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's email address")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"firstname")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's first name")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"gender")),(0,m.mdx)("td",{parentName:"tr",align:null},"Int"),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's gender (Male - 1, Female - 2)")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"is_subscribed")),(0,m.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,m.mdx)("td",{parentName:"tr",align:null},"Indicates whether the customer subscribes to the store's newsletter")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"lastname")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's last name")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"middlename")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's middle name")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"password")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's password")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"prefix")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"An honorific, such as Dr., Mr., or Mrs.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"suffix")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"A value such as Sr., Jr., or III")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"taxvat")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's Tax/VAT number (for corporate customers)")))),(0,m.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"CustomerOutput")," object contains the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Customer")," object."),(0,m.mdx)("p",null,"The following table lists the top-level attributes of the ",(0,m.mdx)("inlineCode",{parentName:"p"},"customer")," object. See the ",(0,m.mdx)("a",{parentName:"p",href:"../../customer/queries/customer.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"customer")," query")," for complete details about this object."),(0,m.mdx)(l.default,{mdxType:"Customer"}),(0,m.mdx)("h2",{id:"errors"},"Errors"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Error"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"A customer with the same email address already exists in an associated website.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The email provided in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"input"),".",(0,m.mdx)("inlineCode",{parentName:"td"},"email")," argument belongs to an existing customer.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'"Email" is not a valid email address.')),(0,m.mdx)("td",{parentName:"tr",align:null},"The value provided in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"input"),".",(0,m.mdx)("inlineCode",{parentName:"td"},"email")," argument has an invalid format.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Field CustomerInput.email of required type String! was not provided")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"input"),".",(0,m.mdx)("inlineCode",{parentName:"td"},"email")," argument was omitted.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'Field "xxx" is not defined by type CustomerInput.')),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"input"),".",(0,m.mdx)("inlineCode",{parentName:"td"},"xxx")," argument is undefined.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Required parameters are missing: First Name")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"input"),".",(0,m.mdx)("inlineCode",{parentName:"td"},"firstname")," argument was omitted or contains an empty value.")))),(0,m.mdx)("h2",{id:"related-topics"},"Related topics"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"../../customer/queries/customer.md"},"customer query")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"update-v2.md"},"updateCustomerV2 mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"create-address.md"},"createCustomerAddress mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"update-address.md"},"updateCustomerAddress mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"delete-address.md"},"deleteCustomerAddress mutation"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-create-v-2-md-665750b04d1cb3d92541.js.map