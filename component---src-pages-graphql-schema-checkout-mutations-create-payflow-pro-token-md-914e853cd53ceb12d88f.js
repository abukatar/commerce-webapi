"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4691],{50241:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return x}});var n,r=a(87462),l=a(63366),d=(a(15007),a(64983)),m=a(91515),o=["components"],i={},p=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),u={_frontmatter:i},s=m.Z;function x(e){var t=e.components,a=(0,l.Z)(e,o);return(0,d.mdx)(s,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"createpayflowprotoken-mutation"},"createPayflowProToken mutation"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"createPayflowProToken")," mutation initiates a Payflow Pro transaction and receives a token. The payload must contain the redirect URLs to use when the transaction is successful, when the customer cancels the transaction, or when an error occurs."),(0,d.mdx)("p",null,"See ",(0,d.mdx)("a",{parentName:"p",href:"../../../payment-methods/payflow-pro.md"},"Paypal Payflow Pro payment method")," for detailed information about the workflow of PayPal Payflow Pro transactions."),(0,d.mdx)("h2",{id:"syntax"},"Syntax"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  createPayflowProToken(\n    input: PayflowProTokenInput\n  ) {\n    CreatePayflowProTokenOutput\n  }\n}\n")),(0,d.mdx)("h2",{id:"example-usage"},"Example usage"),(0,d.mdx)("p",null,"The following example requests a token in a Payflow Pro transaction."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Request:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createPayflowProToken(\n    input: {\n      cart_id: "Po1WkfK7d3vZE0qga610NwJIbxgqllpt"\n      urls: {\n        return_url: "paypal/action/return.html"\n        cancel_url: "paypal/action/cancel.html"\n        error_url: "paypal/action/error.html"\n      }\n    }\n  ) {\n    response_message\n    result\n    result_code\n    secure_token\n    secure_token_id\n  }\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createPayflowProToken": {\n      "response_message": "Approved",\n      "result": 0,\n      "result_code": 0,\n      "secure_token": "5JRGtIDsaJUuEPq0lR5m9ugqG",\n      "secure_token_id": "H3roFRhGjKzxCKr5TlA8mooClBpQxgBY"\n    }\n  }\n}\n')),(0,d.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"createPayflowProToken")," mutation requires the ",(0,d.mdx)("inlineCode",{parentName:"p"},"cart_id")," and a set of response URLs."),(0,d.mdx)("h3",{id:"payflowprotokeninput-object"},"PayflowProTokenInput object"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"PayflowProTokenInput")," object must contain the following attributes:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"cart_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The unique ID that identifies the customer's cart")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"urls")),(0,d.mdx)("td",{parentName:"tr",align:null},"PayflowProUrlInput!"),(0,d.mdx)("td",{parentName:"tr",align:null},"A set of URLs that PayPal uses for callback")))),(0,d.mdx)("h3",{id:"payflowprourlinput-object"},"PayflowProUrlInput object"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"PayflowProUrlInput")," object contains a set of relative URLs that PayPal will use in response to various actions during the authorization process. The application prepends the base URL to this value to create a full URL. For example, if the full URL is ",(0,d.mdx)("inlineCode",{parentName:"p"},"https://www.example.com/path/to/page.html"),", the relative URL is ",(0,d.mdx)("inlineCode",{parentName:"p"},"path/to/page.html"),"."),(0,d.mdx)("p",null,"Use this input for Payflow Pro and Payment Pro payment methods."),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"PayflowProUrlInput")," object must contain the following attributes:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"cancel_url")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is ",(0,d.mdx)("inlineCode",{parentName:"td"},"https://www.example.com/paypal/action/cancel.html"),", the relative URL is ",(0,d.mdx)("inlineCode",{parentName:"td"},"paypal/action/cancel.html"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"error_url")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The relative URL of the transaction error page that PayPal will redirect to upon payment error. If the full URL to this page is ",(0,d.mdx)("inlineCode",{parentName:"td"},"https://www.example.com/paypal/action/error.html"),", the relative URL is ",(0,d.mdx)("inlineCode",{parentName:"td"},"paypal/action/error.html"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"return_url")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is ",(0,d.mdx)("inlineCode",{parentName:"td"},"https://www.example.com/paypal/action/return.html"),", the relative URL is ",(0,d.mdx)("inlineCode",{parentName:"td"},"paypal/action/return.html"))))),(0,d.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"createPayflowProToken")," mutation previously returned a ",(0,d.mdx)("inlineCode",{parentName:"p"},"PayflowProToken")," object, which has been deprecated. The mutation now returns a ",(0,d.mdx)("inlineCode",{parentName:"p"},"CreatePayflowProTokenOutput")," object. The contents of these objects are identical."),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"CreatePayflowProTokenOutput")," object contains the following attributes:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"response_message")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("strong",{parentName:"td"},"RESPMSG")," returned by PayPal. If the ",(0,d.mdx)("inlineCode",{parentName:"td"},"result")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"0"),", the ",(0,d.mdx)("inlineCode",{parentName:"td"},"response_message")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"Approved"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"result")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int!"),(0,d.mdx)("td",{parentName:"tr",align:null},"Contains a non-zero value if any errors occurred")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"result_code")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("strong",{parentName:"td"},"RESULT")," returned by PayPal. A value of ",(0,d.mdx)("inlineCode",{parentName:"td"},"0")," indicates the transaction was approved")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"secure_token")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"Secure token generated by PayPal")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"secure_token_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"Secure token ID generated by PayPal")))),(0,d.mdx)("h2",{id:"errors"},"Errors"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Error"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'Could not find a cart with ID "XXX"')),(0,d.mdx)("td",{parentName:"tr",align:null},"The specified ",(0,d.mdx)("inlineCode",{parentName:"td"},"cart_id")," value does not exist in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"quote_id_mask")," table.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Field PayflowProTokenInput.cart_id of required type String! was not provided.")),(0,d.mdx)("td",{parentName:"tr",align:null},"You must specify the ",(0,d.mdx)("inlineCode",{parentName:"td"},"cart_id")," attribute.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Field PayflowProTokenInput.urls of required type PayflowProUrlInput! was not provided.")),(0,d.mdx)("td",{parentName:"tr",align:null},"You must specify the ",(0,d.mdx)("inlineCode",{parentName:"td"},"urls")," attribute.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Field PayflowProUrlInput.return_url of required type String! was not provided.")),(0,d.mdx)("td",{parentName:"tr",align:null},"You must specify the ",(0,d.mdx)("inlineCode",{parentName:"td"},"return_url")," attribute.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Field PayflowProUrlInput.error_url of required type String! was not provided.")),(0,d.mdx)("td",{parentName:"tr",align:null},"You must specify the ",(0,d.mdx)("inlineCode",{parentName:"td"},"error_url")," attribute.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Field PayflowProUrlInput.cancel_url of required type String! was not provided.")),(0,d.mdx)("td",{parentName:"tr",align:null},"You must specify the ",(0,d.mdx)("inlineCode",{parentName:"td"},"cancel_url")," attribute.")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-checkout-mutations-create-payflow-pro-token-md-914e853cd53ceb12d88f.js.map