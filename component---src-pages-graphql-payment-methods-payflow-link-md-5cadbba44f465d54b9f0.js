"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4878],{12268:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return p},default:function(){return u}});var t=n(87462),o=n(63366),l=(n(15007),n(64983)),r=n(91515),m=n(37232),i=n(32023),d=["components"],p={},s={_frontmatter:p},c=r.Z;function u(e){var a=e.components,n=(0,o.Z)(e,d);return(0,l.mdx)(c,(0,t.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"paypal-payflow-link-payment-method"},"PayPal Payflow Link payment method"),(0,l.mdx)("p",null,"PayPal ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.paypal.com/docs/classic/payflow/integration-guide/"},"PayFlow Link")," is available for merchants in the United States and Canada only. Customers are not required to have a personal PayPal account. Instead, customers enter their credit card information in a form that is hosted by PayPal."),(0,l.mdx)("p",null,"The Payflow gateway uses a secure token to send non-credit card transaction data to the Payflow server for storage in a way that cannot be intercepted and manipulated maliciously. This token secures the data for a one-time transaction and is valid for 30 minutes. When the PWA client runs the ",(0,l.mdx)("inlineCode",{parentName:"p"},"placeOrder")," mutation, the application requests a secure token. The Payflow server returns the token as a string of up to 32 alphanumeric characters."),(0,l.mdx)("h2",{id:"payflow-link-workflow"},"Payflow Link workflow"),(0,l.mdx)("p",null,"The following diagram shows the workflow for placing an order when Payflow Link is the selected payment method."),(0,l.mdx)("p",null,(0,l.mdx)("img",{parentName:"p",src:"/commerce-webapi/assets/6bf24373e8589ebc7cf53bba29d988c9/paypal-payflow-link.svg",alt:"PayPal Payflow Link sequence diagram"})),(0,l.mdx)(m.default,{mdxType:"PayflowLinkWorkflow"}),(0,l.mdx)("h2",{id:"additional-payment-information"},"Additional Payment information"),(0,l.mdx)("p",null,"When you set the payment method to Payflow Link in the ",(0,l.mdx)("a",{parentName:"p",href:"../schema/cart/mutations/set-payment-method.md"},(0,l.mdx)("inlineCode",{parentName:"a"},"setPaymentMethodOnCart"))," mutation, the ",(0,l.mdx)("inlineCode",{parentName:"p"},"payment_method")," object must contain a ",(0,l.mdx)("inlineCode",{parentName:"p"},"payflow_link")," object, which defines the following objects:"),(0,l.mdx)(i.default,{mdxType:"PayflowLinkAttributes"}),(0,l.mdx)("h3",{id:"example-usage"},"Example usage"),(0,l.mdx)("p",null,"The following example shows the ",(0,l.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodOnCart")," mutation constructed for the Payflow Link payment method."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n    setPaymentMethodOnCart(input: {\n        payment_method: {\n            code: "payflow_link"\n            payflow_link: {\n                return_url: "paypal/action/return.html"\n                error_url: "paypal/action/error.html"\n                cancel_url: "paypal/action/cancel.html"\n            }\n        }\n        cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"\n    }) {\n        cart {\n            selected_payment_method {\n                code\n                title\n            }\n        }\n    }\n}\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setPaymentMethodOnCart": {\n      "cart": {\n        "selected_payment_method": {\n          "code": "payflow_link",\n          "title": "PayPal Payflow Link"\n        }\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-payment-methods-payflow-link-md-5cadbba44f465d54b9f0.js.map