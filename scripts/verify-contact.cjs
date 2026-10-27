const assert=require('node:assert/strict');
const {POST}=require('../.next/server/app/api/contact/route.js').routeModule.userland;
// Run only against the local built handler; never sends mail.
delete process.env.RESEND_API_KEY;
delete process.env.CONTACT_TO_EMAIL;
async function test(body,status,ip='192.0.2.1',type='application/json'){
 const result=await POST(new Request('http://localhost/api/contact',{method:'POST',headers:{'content-type':type,'x-forwarded-for':ip},body:typeof body==='string'?body:JSON.stringify(body)}));
 assert.equal(result.status,status);const data=await result.json();assert.equal(typeof data.ok,'boolean');return data;
}
(async()=>{
 const valid={name:'QA',email:'qa@example.com',message:'Local test'};
 await test('null',400,'192.0.2.1');await test([],400,'192.0.2.2');
 await test({name:42,email:{},message:false},400,'192.0.2.3');
 await test({...valid,email:'broken-address'},400,'192.0.2.4');
 await test('{',400,'192.0.2.5');
 await test({...valid,company:123},400,'192.0.2.6');
 await test({...valid,message:'a'.repeat(25000)},413,'192.0.2.7');
 await test(valid,415,'192.0.2.8','text/plain');
 await test({...valid,website:'spam'},200,'192.0.2.9');
 await test(valid,502,'192.0.2.10');
 for(let i=0;i<5;i++)await test('{}',400,'192.0.2.11');
 await test('{}',429,'192.0.2.11');
 console.log('PASS: 11 contact scenarios (16 requests), including invalid JSON/types/email, size, honeypot, missing provider and rate limiting.');
})().catch(error=>{console.error(error);process.exit(1)});
