self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={tD:function tD(d,e,f){this.c=d
this.a=e
this.b=f},T1:function T1(){},
b8A(d){return B.aZj(d)},
b8u(d){return A.A3(d,new B.ajF(),y.k)},
aZj(d){var x,w,v,u,t,s,r,q,p,o=J.aH(d),n=A.ao(o.h(d,"id")),m=A.b2(o.h(d,"name")),l=A.ao(o.h(d,"rank")),k=A.b2(o.h(d,"logo")),j=A.abz(C.Ew,o.h(d,"type"),y.e,y.w),i=A.ao(o.h(d,"novelId")),h=A.ao(o.h(d,"creator")),g=A.ao(o.h(d,"createdAt"))
if(g==null){g=A.h8(1970,1,1,0,0,0,0,!0)
if(!A.eu(g))A.Q(A.e1(g))
g=new A.ch(g,!0)}else g=A.fa(g,!1)
x=A.ao(o.h(d,"updatedAt"))
if(x==null){x=A.h8(1970,1,1,0,0,0,0,!0)
if(!A.eu(x))A.Q(A.e1(x))
x=new A.ch(x,!0)}else x=A.fa(x,!1)
w=A.b2(o.h(d,"bgMobile"))
v=A.b2(o.h(d,"bgPc"))
u=A.ao(o.h(d,"followCount"))
t=A.cw(o.h(d,"followed"))
s=A.ao(o.h(d,"styleId"))
r=A.b2(o.h(d,"brief"))
q=A.ao(o.h(d,"viewCount"))
p=A.ao(o.h(d,"postCount"))
o=y.d.a(o.h(d,"topList"))
return new B.fx(n,m,l,k,j,i,h,g,x,w,v,u,t,s,r,q,p,o==null?null:J.jn(o,new B.az_(),y.h).dQ(0))},
bdD(d){var x,w=C.Ew.h(0,d.e),v=d.CW
if(v==null)v=null
else{x=A.a9(v).i("a6<1,a5<f,@>>")
x=A.a8(new A.a6(v,new B.az2(),x),!0,x.i("bf.E"))
v=x}return A.L(["id",d.a,"name",d.b,"rank",d.c,"logo",d.d,"type",w,"novelId",d.f,"creator",d.r,"createdAt",d.w.a,"updatedAt",d.x.a,"bgMobile",d.y,"bgPc",d.z,"followCount",d.Q,"followed",d.as,"styleId",d.at,"brief",d.ax,"viewCount",d.ay,"postCount",d.ch,"topList",v],y.w,y.b)},
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
ajF:function ajF(){},
az_:function az_(){},
az2:function az2(){},
aWj(d,e,f){return new B.T2(d,f,e,null)},
T2:function T2(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
ajE:function ajE(){},
ajD:function ajD(){}},D,A,C,J
B=a.updateHolder(c[20],B)
D=c[56]
A=c[0]
C=c[95]
J=c[1]
B.tD.prototype={
N(){return"ForumType."+this.b}}
B.T1.prototype={
mL(d,e){return $.b2m().cc(e).cJ(0,B.b0J(),y.u)},
vV(d){return $.b2k().cc(d).cJ(0,B.b0J(),y.u)}}
B.fx.prototype={
cB(){return B.bdD(this)}}
B.T2.prototype={
B(d){var x=this.c
x=x==null?"":D.a_g(x)
return D.P8(new B.ajD(),this.f,this.e,null,x,new B.ajE(),null)}}
var z=a.updateTypes(["a4<bz<fx>>(nN)","fx(a5<f,@>)","bz<fx>(a5<f,@>)"])
B.ajF.prototype={
$1(d){return B.aZj(d)},
$S:z+1}
B.az_.prototype={
$1(d){return A.aS0(y.y.a(d))},
$S:580}
B.az2.prototype={
$1(d){return A.bdC(d)},
$S:581}
B.ajE.prototype={
$2(d,e){return A.pS("assets/image/novel/cover_default.jpg",null,null,null)},
$S:92}
B.ajD.prototype={
$3(d,e,f){return A.pS("assets/image/novel/cover_default.jpg",null,null,null)},
$S:77};(function installTearOffs(){var x=a._instance_1i,w=a._instance_1u,v=a._static_1
var u
x(u=B.T1.prototype,"gdn","mL",0)
w(u,"gvU","vV",0)
v(B,"bju","b8A",1)
v(B,"b0J","b8u",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.tD,A.eg)
w(A.u,[B.T1,B.fx])
w(A.bd,[B.ajF,B.az_,B.az2,B.ajD])
x(B.T2,A.a3)
x(B.ajE,A.d7)})()
A.bw(b.typeUniverse,JSON.parse('{"tD":{"U":[]},"T2":{"a3":[],"c":[]},"nN":{"ea":[]}}'))
var y={k:A.C("fx"),h:A.C("e6"),e:A.C("tD"),y:A.C("a5<f,@>"),u:A.C("bz<fx>"),w:A.C("f"),b:A.C("@"),d:A.C("y<@>?")};(function constants(){C.tj=new B.tD("1",0,"novel")
C.tk=new B.tD("2",1,"single")
C.Ew=new A.bx([C.tj,"1",C.tk,"2"],A.C("bx<tD,f>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bnV","b2m",()=>A.cJ("/forum/page"))
x($,"bnR","aTJ",()=>A.cJ("/forum/collection"))
x($,"bnS","b2k",()=>A.cJ("/forum/collection/page"))
x($,"bnT","b2l",()=>A.cJ("/forum/detail"))
x($,"bnU","NR",()=>new B.T1())})()}
$__dart_deferred_initializers__["jZP9vZxkgePvrCbogxhBP6oFpB4="] = $__dart_deferred_initializers__.current
