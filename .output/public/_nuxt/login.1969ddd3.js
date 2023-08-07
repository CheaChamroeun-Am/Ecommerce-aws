import{_ as P,v as q,x as R,a as d,o as g,c as N,w as o,b as a,q as S,d as n,g as V,e as l}from"./entry.234402ed.js";import{u as E}from"./fetch.26527ecb.js";import{u as j}from"./state.2521541d.js";const x={data:()=>({hasError:null,step:1,valid:!1,email:"hyein@gmail.com",password:"hyein123",passwordShow:!1,signupName:"",signupEmail:"",signupPassword:"",isLoading:!1,loginSnackbar:!1,signupSnackbar:!1,loginErrorSnackbar:!1,emailRules:[e=>e?!0:"E-mail is requred.",e=>/.+@.+\..+/.test(e)?!0:"E-mail must be valid.",e=>(e==null?void 0:e.length)<=50?!0:"Email must be less than 50 characters."],passwordRules:[e=>e?!0:"Password is requred.",e=>e.length>=8?!0:"Password must be at least 8 characters.",e=>(e==null?void 0:e.length)<=50?!0:"Password must be less than 50 characters."],nameRules:[e=>e?!0:"Username is requred.",e=>(e==null?void 0:e.length)<=50?!0:"Username must be less than 50 characters."]}),methods:{async handleLogin(){if(this.isLoading)return;this.isLoading=!0;const{data:e,error:t}=await E("http://3.90.217.148:3002/api/users/login",{method:"post",body:{email:this.email,password:this.password}},"$MnW08vEsNn");if(t.value){this.loginErrorSnackbar=!0,this.isLoading=!1;return}const f=j();f.value.isAuthenticated=!0,q.set("token",e.value.token),this.isLoading=!1,this.loginSnackbar=!0,R("/")},async handleSignup(){const{data:e}=await E("http://3.90.217.148:3002/api/users",{method:"post",body:{name:this.signupName,email:this.signupEmail,password:this.signupPassword}},"$buj25HlDg1");console.log(e.value),this.signupSnackbar=!0,this.step--}}},B=n("div",{class:"text-overlay"},[n("p",{class:"text","data-aos":"fade-up","data-aos-delay":"500"},"#Login"),n("p",{class:"text-white text-center","data-aos":"fade-right","data-aos-delay":"500"}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. ")],-1),G=n("p",{class:"text-h4 font-weight-bold"}," Hi, Welcome Back! 👋 ",-1),z=n("p",{class:"grey--text"}," Hello again, you've been missed ! ",-1),A={class:"d-flex justify-space-between align-center"},H=n("p",{class:"text-grey",style:{"text-decoration":"none",cursor:"pointer","font-size":"13px"}}," Forgot Password? ",-1),T={key:0},D={key:1},F=n("h5",{class:"text-center mt-9 text-grey"}," Or Log in using ",-1),I={class:"d-flex align-center justify-space-between mt-9"},M={style:{"text-align":"center",padding:"180px 0"}},O=n("h3",{class:"text-h5","data-aos":"fade-right","data-aos-delay":"500"}," Don't have an account ",-1),W=n("p",{class:"mt-3 text-grey",style:{"font-size":"15px"},"data-aos":"fade-up","data-aos-delay":"500"},[l(" Enter your personal "),n("br"),l(" information and join us! ")],-1),K={style:{"text-align":"center",padding:"180px 0"}},J=n("h3",{class:"text-h5","data-aos":"fade-up","data-aos-delay":"500"}," Already have an account ? ",-1),Q=n("p",{class:"mt-3 text-grey",style:{"font-size":"15px"},"data-aos":"fade-up","data-aos-delay":"500"},[l(" Keep connect with us and "),n("br"),l(" login with your personal info ")],-1),X=n("p",{class:"text-h4 font-weight-bold"}," Become one of us 🤘 ",-1),Y=n("p",{class:"text-grey"}," Start control your financial today! ",-1),Z=n("h5",{class:"text-center mt-9 text-grey"}," Or Log in using ",-1),ee={class:"d-flex align-center justify-space-between mt-9"};function ae(e,t,f,oe,te,h){const L=d("v-img"),w=d("v-card"),b=d("v-card-text"),u=d("v-text-field"),U=d("v-switch"),i=d("v-btn"),r=d("v-icon"),v=d("v-form"),m=d("v-col"),y=d("v-sheet"),p=d("v-row"),_=d("v-window-item"),C=d("v-window"),k=d("v-container"),c=d("v-snackbar"),$=d("v-main");return g(),N($,null,{default:o(()=>[a(w,null,{default:o(()=>[a(L,{src:"/images/b1.jpg",height:"250",width:"100%",class:"bg-grey-lighten-2",cover:""},{default:o(()=>[B]),_:1})]),_:1}),a(k,null,{default:o(()=>[a(k,null,{default:o(()=>[a(p,{class:"d-flex align-center justify-center"},{default:o(()=>[a(m,{cols:"12",md:"8",sm:"8"},{default:o(()=>[a(w,{flat:""},{default:o(()=>[a(C,{modelValue:e.step,"onUpdate:modelValue":t[11]||(t[11]=s=>e.step=s)},{default:o(()=>[a(_,{value:1},{default:o(()=>[a(p,null,{default:o(()=>[a(m,{cols:"12",md:"6"},{default:o(()=>[a(b,{"data-aos":"fade-right","data-aos-delay":"500"},{default:o(()=>[G,z]),_:1}),a(v,{modelValue:e.valid,"onUpdate:modelValue":t[3]||(t[3]=s=>e.valid=s),class:"mt-5",onSubmit:S(h.handleLogin,["prevent"]),"data-aos":"fade-up","data-aos-delay":"500"},{default:o(()=>[a(u,{modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=s=>e.email=s),rules:e.emailRules,counter:50,label:"Email",variant:"outlined","prepend-inner-icon":"mdi-email",required:""},null,8,["modelValue","rules"]),a(u,{modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=s=>e.password=s),rules:e.passwordRules,counter:50,label:"Password",variant:"outlined","prepend-inner-icon":"mdi-lock","onClick:appendInner":t[2]||(t[2]=s=>e.passwordShow=!e.passwordShow),"append-inner-icon":e.passwordShow?"mdi-eye":"mdi-eye-off",type:e.passwordShow?"text":"password",required:""},null,8,["modelValue","rules","append-inner-icon","type"]),n("div",A,[a(U,{label:"Remember me",color:"#e5345b",class:"mt-4"}),H]),a(i,{class:"mt-2 text-white",color:"#e5345b",block:"",large:"",depressed:"",type:"submit",disabled:!e.valid},{default:o(()=>[e.isLoading?(g(),V("span",D," Loading... ")):(g(),V("span",T," Login "))]),_:1},8,["disabled"]),F,n("div",I,[a(i,{class:"ma-2",variant:"outlined",color:"grey"},{default:o(()=>[a(r,{start:"",icon:"mdi-google",color:"red"}),l(" Google ")]),_:1}),a(i,{class:"ma-2",variant:"outlined",color:"grey"},{default:o(()=>[a(r,{start:"",icon:"mdi-facebook",color:"blue"}),l(" Google ")]),_:1}),a(i,{class:"ma-2",variant:"outlined",color:"grey"},{default:o(()=>[a(r,{start:"",icon:"mdi-twitter",color:"blue-lighten-3"}),l(" Google ")]),_:1})])]),_:1},8,["modelValue","onSubmit"])]),_:1}),a(m,{cols:"12",md:"6"},{default:o(()=>[a(y,{color:"#EEEEEE",height:"100%",width:"100%",style:{"border-radius":"0 40px 0px 0px"}},{default:o(()=>[n("div",M,[O,W,a(i,{rounded:"",width:"250px",class:"mt-6",onClick:t[4]||(t[4]=s=>e.step++),"data-aos":"fade-up","data-aos-delay":"500"},{default:o(()=>[l("Signup")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),a(_,{value:2},{default:o(()=>[a(p,null,{default:o(()=>[a(m,{cols:"12",md:"6"},{default:o(()=>[a(y,{color:"#EEEEEE",height:"100%",width:"100%",style:{"border-radius":"40px 0 0 0"}},{default:o(()=>[n("div",K,[J,Q,a(i,{rounded:"",width:"250px",class:"mt-6",onClick:t[5]||(t[5]=s=>e.step--),"data-aos":"fade-up","data-aos-delay":"500"},{default:o(()=>[l("Login")]),_:1})])]),_:1})]),_:1}),a(m,{cols:"12",md:"6"},{default:o(()=>[a(b,{"data-aos":"fade-right","data-aos-delay":"500"},{default:o(()=>[X,Y]),_:1}),a(v,{modelValue:e.valid,"onUpdate:modelValue":t[10]||(t[10]=s=>e.valid=s),class:"mt-5",onSubmit:S(h.handleSignup,["prevent"]),"data-aos":"fade-up","data-aos-delay":"500"},{default:o(()=>[a(u,{modelValue:e.signupName,"onUpdate:modelValue":t[6]||(t[6]=s=>e.signupName=s),rules:e.nameRules,counter:50,label:"Username",variant:"outlined","prepend-inner-icon":"mdi-account",required:""},null,8,["modelValue","rules"]),a(u,{modelValue:e.signupEmail,"onUpdate:modelValue":t[7]||(t[7]=s=>e.signupEmail=s),rules:e.emailRules,counter:50,label:"Email",variant:"outlined","prepend-inner-icon":"mdi-email",required:""},null,8,["modelValue","rules"]),a(u,{modelValue:e.signupPassword,"onUpdate:modelValue":t[8]||(t[8]=s=>e.signupPassword=s),rules:e.passwordRules,counter:50,label:"Password",variant:"outlined","prepend-inner-icon":"mdi-lock","onClick:appendInner":t[9]||(t[9]=s=>e.passwordShow=!e.passwordShow),"append-inner-icon":e.passwordShow?"mdi-eye":"mdi-eye-off",type:e.passwordShow?"text":"password",required:""},null,8,["modelValue","rules","append-inner-icon","type"]),a(i,{class:"mt-2 text-white",color:"#e5345b",block:"",large:"",depressed:"",type:"submit",disabled:!e.valid},{default:o(()=>[l("Signup")]),_:1},8,["disabled"]),Z,n("div",ee,[a(i,{class:"ma-2",variant:"outlined",color:"grey"},{default:o(()=>[a(r,{start:"",icon:"mdi-google",color:"red"}),l(" Google ")]),_:1}),a(i,{class:"ma-2",variant:"outlined",color:"grey"},{default:o(()=>[a(r,{start:"",icon:"mdi-facebook",color:"blue"}),l(" Google ")]),_:1}),a(i,{class:"ma-2",variant:"outlined",color:"grey"},{default:o(()=>[a(r,{start:"",icon:"mdi-twitter",color:"blue-lighten-3"}),l(" Google ")]),_:1})])]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(c,{modelValue:e.loginSnackbar,"onUpdate:modelValue":t[13]||(t[13]=s=>e.loginSnackbar=s),color:"green",bottom:"",right:""},{actions:o(()=>[a(i,{color:"white",onClick:t[12]||(t[12]=s=>e.loginSnackbar=!1)},{default:o(()=>[l(" Close ")]),_:1})]),default:o(()=>[l(" Login Successfully!🎉 ")]),_:1},8,["modelValue"]),a(c,{modelValue:e.loginErrorSnackbar,"onUpdate:modelValue":t[15]||(t[15]=s=>e.loginErrorSnackbar=s),color:"red",bottom:"",right:""},{actions:o(()=>[a(i,{color:"white",onClick:t[14]||(t[14]=s=>e.loginSnackbar=!1)},{default:o(()=>[l(" Close ")]),_:1})]),default:o(()=>[l(" This user is not found!🙅‍♂️ ")]),_:1},8,["modelValue"]),a(c,{modelValue:e.signupSnackbar,"onUpdate:modelValue":t[17]||(t[17]=s=>e.signupSnackbar=s),color:"green",bottom:"",right:""},{actions:o(()=>[a(i,{color:"white",onClick:t[16]||(t[16]=s=>e.signupSnackbar=!1)},{default:o(()=>[l(" Close ")]),_:1})]),default:o(()=>[l(" Signup Successfully!🎉 ")]),_:1},8,["modelValue"])]),_:1})}const de=P(x,[["render",ae]]);export{de as default};
