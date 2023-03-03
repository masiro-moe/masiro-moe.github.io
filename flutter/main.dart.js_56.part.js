self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={ty:function ty(d,e,f){this.c=d
this.a=e
this.b=f},SW:function SW(){},
b8a(d){return B.aYU(d)},
b84(d){return A.zZ(d,new B.ajy(),y.k)},
aYU(d){var x,w,v,u,t,s,r,q,p,o=J.aH(d),n=A.ao(o.h(d,"id")),m=A.b2(o.h(d,"name")),l=A.ao(o.h(d,"rank")),k=A.b2(o.h(d,"logo")),j=A.abs(C.Es,o.h(d,"type"),y.e,y.w),i=A.ao(o.h(d,"novelId")),h=A.ao(o.h(d,"creator")),g=A.ao(o.h(d,"createdAt"))
if(g==null){g=A.h7(1970,1,1,0,0,0,0,!0)
if(!A.et(g))A.Q(A.e1(g))
g=new A.cg(g,!0)}else g=A.fb(g,!1)
x=A.ao(o.h(d,"updatedAt"))
if(x==null){x=A.h7(1970,1,1,0,0,0,0,!0)
if(!A.et(x))A.Q(A.e1(x))
x=new A.cg(x,!0)}else x=A.fb(x,!1)
w=A.b2(o.h(d,"bgMobile"))
v=A.b2(o.h(d,"bgPc"))
u=A.ao(o.h(d,"followCount"))
t=A.cu(o.h(d,"followed"))
s=A.ao(o.h(d,"styleId"))
r=A.b2(o.h(d,"brief"))
q=A.ao(o.h(d,"viewCount"))
p=A.ao(o.h(d,"postCount"))
o=y.d.a(o.h(d,"topList"))
return new B.fy(n,m,l,k,j,i,h,g,x,w,v,u,t,s,r,q,p,o==null?null:J.jl(o,new B.ayP(),y.h).dP(0))},
bdc(d){var x,w=C.Es.h(0,d.e),v=d.CW
if(v==null)v=null
else{x=A.a9(v).i("a6<1,a5<f,@>>")
x=A.a8(new A.a6(v,new B.ayS(),x),!0,x.i("bf.E"))
v=x}return A.L(["id",d.a,"name",d.b,"rank",d.c,"logo",d.d,"type",w,"novelId",d.f,"creator",d.r,"createdAt",d.w.a,"updatedAt",d.x.a,"bgMobile",d.y,"bgPc",d.z,"followCount",d.Q,"followed",d.as,"styleId",d.at,"brief",d.ax,"viewCount",d.ay,"postCount",d.ch,"topList",v],y.w,y.b)},
fy:function fy(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ajy:function ajy(){},
ayP:function ayP(){},
ayS:function ayS(){},
aVV(d,e,f){return new B.SX(d,f,e,null)},
SX:function SX(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
ajx:function ajx(){},
ajw:function ajw(){}},D,A,C,J
B=a.updateHolder(c[20],B)
D=c[54]
A=c[0]
C=c[94]
J=c[1]
B.ty.prototype={
N(){return"ForumType."+this.b}}
B.SW.prototype={
mH(d,e){return $.b1X().ca(e).cJ(0,B.b0j(),y.u)},
vP(d){return $.b1V().ca(d).cJ(0,B.b0j(),y.u)}}
B.fy.prototype={
cB(){return B.bdc(this)}}
B.SX.prototype={
B(d){var x=this.c
x=x==null?"":D.a_a(x)
return D.P2(new B.ajw(),this.f,this.e,null,x,new B.ajx(),null)}}
var z=a.updateTypes(["a4<by<fy>>(nH)","fy(a5<f,@>)","by<fy>(a5<f,@>)"])
B.ajy.prototype={
$1(d){return B.aYU(d)},
$S:z+1}
B.ayP.prototype={
$1(d){return A.aRC(y.y.a(d))},
$S:582}
B.ayS.prototype={
$1(d){return A.bdb(d)},
$S:583}
B.ajx.prototype={
$2(d,e){return A.pO("assets/image/novel/cover_default.jpg",null,null,null)},
$S:107}
B.ajw.prototype={
$3(d,e,f){return A.pO("assets/image/novel/cover_default.jpg",null,null,null)},
$S:71};(function installTearOffs(){var x=a._instance_1i,w=a._instance_1u,v=a._static_1
var u
x(u=B.SW.prototype,"gdm","mH",0)
w(u,"gvO","vP",0)
v(B,"bj5","b8a",1)
v(B,"b0j","b84",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ty,A.es)
w(A.u,[B.SW,B.fy])
w(A.bc,[B.ajy,B.ayP,B.ayS,B.ajw])
x(B.SX,A.a3)
x(B.ajx,A.d9)})()
A.bw(b.typeUniverse,JSON.parse('{"ty":{"U":[]},"SX":{"a3":[],"c":[]},"nH":{"e9":[]}}'))
var y={k:A.C("fy"),h:A.C("e6"),e:A.C("ty"),y:A.C("a5<f,@>"),u:A.C("by<fy>"),w:A.C("f"),b:A.C("@"),d:A.C("y<@>?")};(function constants(){C.te=new B.ty("1",0,"novel")
C.tf=new B.ty("2",1,"single")
C.Es=new A.bA([C.te,"1",C.tf,"2"],A.C("bA<ty,f>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bnu","b1X",()=>A.cI("/forum/page"))
x($,"bnq","aTk",()=>A.cI("/forum/collection"))
x($,"bnr","b1V",()=>A.cI("/forum/collection/page"))
x($,"bns","b1W",()=>A.cI("/forum/detail"))
x($,"bnt","NL",()=>new B.SW())})()}
$__dart_deferred_initializers__["PcHtPNSzHkvE50itgYVY2cdVZU8="] = $__dart_deferred_initializers__.current
