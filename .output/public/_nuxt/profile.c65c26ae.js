import{u as $}from"./state.1027894b.js";import{A as B,k as V,r as R,a as s,o as m,c as S,w as e,v as b,b as a,d as t,q as D,e as l,g as k,h as G,u as C,F as z,x as w,t as P}from"./entry.770be723.js";import{u as O}from"./fetch.50861b61.js";const U=t("div",{class:"text-overlay"},[t("p",{class:"text","data-aos":"fade-right","data-aos-delay":"500"}," #AboutYourSelf "),t("p",{class:"text-white text-center","data-aos":"fade-up","data-aos-delay":"500"}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. ")],-1),q={class:"d-flex justify-space-around align-center"},H=t("p",{"data-aos":"fade-up","data-aos-delay":"500"},"Lionel Messi",-1),Y=t("h1",{class:"text-center",style:{border:"1px solid rgb(198, 196, 196)"},"data-aos":"fade-right","data-aos-delay":"500"}," Customer Profile ",-1),J=t("div",{class:"d-flex"},[t("p",null,"First Name"),t("p",{class:"ms-10"},"Messi")],-1),K=t("div",{class:"d-flex mt-5"},[t("p",null,"Last Name"),t("p",{class:"ms-10"},"Messi")],-1),Q=t("div",{class:"d-flex mt-5"},[t("p",null,"Address"),t("p",{class:"ms-10"}," 56 Glassford Street 234 Toulkok PhnomPenh Cambodia ")],-1),W=t("div",{class:"d-flex mt-5"},[t("p",null,"Email"),t("p",{class:"ms-10"},"messi@gmail.com")],-1),X=t("div",{class:"d-flex mt-5"},[t("p",null,"Phone number"),t("p",{class:"ms-10"},"078 220 698")],-1),Z=t("p",null,"Profile Image",-1),tt={class:"mt-15",style:{"border-top":"1px solid rgb(198, 196, 196)"}},at=t("p",null,"Customer ID",-1),et=t("p",{class:"mt-3"},"63d7384232cb502f4145fc73",-1),st=t("h1",{class:"mt-15","data-aos":"fade-right","data-aos-delay":"500"}," Purchase History ",-1),ot=t("thead",null,[t("tr",{"data-aos":"fade-right","data-aos-delay":"500"},[t("th",{class:"text-center"},"REMOVE"),t("th",{class:"text-center"},"IMAGE"),t("th",{class:"text-center"},"PRODUCT"),t("th",{class:"text-center"},"PRICE")])],-1),lt={class:"text-center"},rt={__name:"profile",async setup(dt){let c,f;const A=$();B();const E=()=>{w("/favorite")},M=()=>{A.value.isAuthenticated=!1,b.remove("token"),w("/")},{data:p}=([c,f]=V(()=>O("http://18.208.219.245:3002/api/orders",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${b.get("token")}`}},"$62j1b1lrVm")),c=await c,f(),c);console.log(p);const h=R(!1);return(v,g)=>{const i=s("v-img"),r=s("v-card"),I=s("v-avatar"),y=s("v-badge"),_=s("v-list-item"),N=s("v-divider"),x=s("v-icon"),d=s("v-btn"),j=s("v-list"),o=s("v-col"),u=s("v-row"),F=s("v-table"),L=s("v-container"),T=s("v-main");return m(),S(T,null,{default:e(()=>[a(r,null,{default:e(()=>[a(i,{src:"/images/b1.jpg",height:"250",width:"100%",class:"bg-grey-lighten-2",cover:""},{default:e(()=>[U]),_:1})]),_:1}),a(L,null,{default:e(()=>[a(u,null,{default:e(()=>[a(o,{cols:"12",md:"2"},{default:e(()=>[a(r,{class:"pa-5",color:"rgb(198, 196, 196)"},{default:e(()=>[t("div",q,[a(I,{color:"surface-variant",size:"80","data-aos":"fade-right","data-aos-delay":"500"},{default:e(()=>[a(i,{src:"https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819"})]),_:1}),H])]),_:1}),a(r,{class:"mt-3",flat:""},{default:e(()=>[a(j,{border:"",class:"mx-auto"},{default:e(()=>[a(_,{link:"",title:"My Cart",stacked:"",onClick:g[0]||(g[0]=D(n=>h.value=!C(h),["stop"])),"data-aos":"fade-right","data-aos-delay":"500"},{append:e(()=>[a(y,{color:"#e5345b",content:v.$store.getters.cartCount,inline:"","data-aos":"fade-up","data-aos-delay":"500"},null,8,["content"])]),_:1}),a(_,{link:"",title:"My Favorite",onClick:E,"data-aos":"fade-right","data-aos-delay":"500"},{append:e(()=>[a(y,{color:"#e5345b",content:v.$store.getters.favoriteCount,inline:"","data-aos":"fade-up","data-aos-delay":"500"},null,8,["content"])]),_:1}),a(_,{link:"",title:"Notification","data-aos":"fade-right","data-aos-delay":"500"}),a(_,{link:"",title:"Setting","data-aos":"fade-right","data-aos-delay":"500"}),a(N),a(d,{class:"my-5",onClick:M,"data-aos":"fade-up","data-aos-delay":"500"},{default:e(()=>[a(x,null,{default:e(()=>[l("mdi-logout")]),_:1}),l(" Logout ")]),_:1})]),_:1})]),_:1})]),_:1}),a(o,{cols:"12",md:"10"},{default:e(()=>[a(r,{class:"pa-5"},{default:e(()=>[Y,a(u,{class:"mt-5 d-flex align-center","data-aos":"fade-up","data-aos-delay":"500"},{default:e(()=>[a(o,{cols:"12",md:"6"},{default:e(()=>[J,K,Q,W,X,a(d,{class:"mt-5",variant:"outlined"},{default:e(()=>[l("Change Password")]),_:1})]),_:1}),a(o,{cols:"12",md:"6",class:"text-center"},{default:e(()=>[Z,a(i,{src:"https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",height:"130",width:"110",class:"bg-grey-lighten-2 mt-5 mx-auto",cover:""}),a(d,{class:"mt-5",variant:"outlined"},{default:e(()=>[l("Upload New")]),_:1})]),_:1})]),_:1}),t("div",tt,[a(u,{class:"mt-5"},{default:e(()=>[a(o,{cols:"12",md:"6","data-aos":"fade-right","data-aos-delay":"500"},{default:e(()=>[at,et]),_:1}),a(o,{cols:"12",md:"6",class:"text-center"},{default:e(()=>[a(d,{color:"#e5345b",class:"text-white","data-aos":"fade-up","data-aos-delay":"500"},{default:e(()=>[l(" Edit Profile ")]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}),st,a(F,{"fixed-header":"",height:"300px",class:"mt-10"},{default:e(()=>[ot,t("tbody",lt,[(m(!0),k(z,null,G(C(p),n=>(m(),k("tr",{key:n._id,"data-aos":"fade-up","data-aos-delay":"500"},[t("td",null,[a(d,{icon:""},{default:e(()=>[a(x,null,{default:e(()=>[l("mdi-delete")]),_:1})]),_:1})]),t("td",null,[a(i,{src:n.orderItems[0].image[0],height:"70px",width:"70px",class:"bg-grey-lighten-2 mx-auto",cover:""},null,8,["src"])]),t("td",null,P(n.orderItems[0].name),1),t("td",null,"$"+P(n.orderItems[0].price)+".00",1)]))),128))])]),_:1})]),_:1})]),_:1})}}};export{rt as default};
