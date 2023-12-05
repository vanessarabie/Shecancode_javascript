let testObj = {
 nr: 600,
 str: "text"
 };
 console.log(testObj.nr);
 console.log(testObj.str);



 let use1 = {
    name : "vanessa",
    age : 12,
    sex : "female",
 };

 console.log(use1.name);



 let week = ["mon","tue","wed","thur","fri"];
 console.log(week[0]);


 let user1 = [
    {
        names : "nessa",
        country : "rwanda",
    },

   {
        names : "rabie",
        country : "kenya",
    }
 ]
 console.log(user1[0],user1[1]);


 import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS('sk_example_123456789');

const challenge = await workos.mfa.challengeFactor({
  authenticationFactorId: 'auth_factor_01FVYZ5QM8N98T9ME5BCB2BBMJ',
});

 