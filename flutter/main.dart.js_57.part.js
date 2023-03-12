self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={tv:function tv(d,e,f){this.c=d
this.a=e
this.b=f},Tx:function Tx(){},
b8t(d){return B.aZm(d)},
b8n(d){return A.zZ(d,new B.ajG(),y.k)},
aZm(d){var x,w,v,u,t,s,r,q,p,o=J.aI(d),n=A.an(o.h(d,"id")),m=A.b8(o.h(d,"name")),l=A.an(o.h(d,"rank")),k=A.b8(o.h(d,"logo")),j=A.abv(C.Ds,o.h(d,"type"),y.e,y.w),i=A.an(o.h(d,"novelId")),h=A.an(o.h(d,"creator")),g=A.an(o.h(d,"createdAt"))
if(g==null){g=A.h2(1970,1,1,0,0,0,0,!0)
if(!A.eu(g))A.O(A.e6(g))
g=new A.c7(g,!0)}else g=A.fb(g,!1)
x=A.an(o.h(d,"updatedAt"))
if(x==null){x=A.h2(1970,1,1,0,0,0,0,!0)
if(!A.eu(x))A.O(A.e6(x))
x=new A.c7(x,!0)}else x=A.fb(x,!1)
w=A.b8(o.h(d,"bgMobile"))
v=A.b8(o.h(d,"bgPc"))
u=A.an(o.h(d,"followCount"))
t=A.cy(o.h(d,"followed"))
s=A.an(o.h(d,"styleId"))
r=A.b8(o.h(d,"brief"))
q=A.an(o.h(d,"viewCount"))
p=A.an(o.h(d,"postCount"))
o=y.d.a(o.h(d,"topList"))
return new B.fx(n,m,l,k,j,i,h,g,x,w,v,u,t,s,r,q,p,o==null?null:J.jo(o,new B.ayB(),y.h).dY(0))},
bdt(d){var x,w=C.Ds.h(0,d.e),v=d.CW
if(v==null)v=null
else{x=A.a7(v).i("a4<1,a5<e,@>>")
x=A.a6(new A.a4(v,new B.ayE(),x),!0,x.i("bf.E"))
v=x}return A.K(["id",d.a,"name",d.b,"rank",d.c,"logo",d.d,"type",w,"novelId",d.f,"creator",d.r,"createdAt",d.w.a,"updatedAt",d.x.a,"bgMobile",d.y,"bgPc",d.z,"followCount",d.Q,"followed",d.as,"styleId",d.at,"brief",d.ax,"viewCount",d.ay,"postCount",d.ch,"topList",v],y.w,y.b)},
fx:function fx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u},
ajG:function ajG(){},
ayB:function ayB(){},
ayE:function ayE(){},
aWr(d,e,f){return new B.Ty(d,f,e,null)},
Ty:function Ty(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
ajF:function ajF(){},
ajE:function ajE(){}},D,E,A,C,J
B=a.updateHolder(c[20],B)
D=c[62]
E=c[55]
A=c[0]
C=c[95]
J=c[1]
B.tv.prototype={
N(){return"ForumType."+this.b}}
B.Tx.prototype={
mh(d,e){return $.b25().cb(e).cG(0,B.b0w(),y.u)},
vD(d){return $.b23().cb(d).cG(0,B.b0w(),y.u)}}
B.fx.prototype={
cu(){return B.bdt(this)}}
B.Ty.prototype={
B(d){var x=this.c
x=x==null?"":D.Ia(x)
return E.U3(new B.ajE(),this.f,this.e,null,new B.ajF(),x,null)}}
var z=a.updateTypes(["a2<bC<fx>>(nH)","fx(a5<e,@>)","bC<fx>(a5<e,@>)"])
B.ajG.prototype={
$1(d){return B.aZm(d)},
$S:z+1}
B.ayB.prototype={
$1(d){return A.aRX(y.y.a(d))},
$S:588}
B.ayE.prototype={
$1(d){return A.bds(d)},
$S:589}
B.ajF.prototype={
$2(d,e){return A.pT("assets/image/novel/cover_default.jpg",null,null,null)},
$S:87}
B.ajE.prototype={
$3(d,e,f){return A.pT("assets/image/novel/cover_default.jpg",null,null,null)},
$S:84};(function installTearOffs(){var x=a._instance_1i,w=a._instance_1u,v=a._static_1
var u
x(u=B.Tx.prototype,"gdg","mh",0)
w(u,"gvC","vD",0)
v(B,"bjb","b8t",1)
v(B,"b0w","b8n",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.tv,A.et)
w(A.u,[B.Tx,B.fx])
w(A.bq,[B.ajG,B.ayB,B.ayE,B.ajE])
x(B.Ty,A.a3)
x(B.ajF,A.d6)})()
A.bz(b.typeUniverse,JSON.parse('{"tv":{"U":[]},"Ty":{"a3":[],"c":[]},"nH":{"ec":[]}}'))
var y={k:A.B("fx"),h:A.B("ea"),e:A.B("tv"),y:A.B("a5<e,@>"),u:A.B("bC<fx>"),w:A.B("e"),b:A.B("@"),d:A.B("w<@>?")};(function constants(){C.ri=new B.tv("1",0,"novel")
C.rj=new B.tv("2",1,"single")
C.Ds=new A.bJ([C.ri,"1",C.rj,"2"],A.B("bJ<tv,e>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bnC","b25",()=>A.cN("/forum/page"))
x($,"bny","aTB",()=>A.cN("/forum/collection"))
x($,"bnz","b23",()=>A.cN("/forum/collection/page"))
x($,"bnA","b24",()=>A.cN("/forum/detail"))
x($,"bnB","NI",()=>new B.Tx())})()}
$__dart_deferred_initializers__["QXBHgXGPNcwpHNTCTPYTKqvbq4E="] = $__dart_deferred_initializers__.current
