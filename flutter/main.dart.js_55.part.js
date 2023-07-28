self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={yz:function yz(d,e,f){this.c=d
this.a=e
this.b=f},Vk:function Vk(){},
beN(d){return B.b35(d)},
beH(d){return A.wy(d,new B.anI(),y.k)},
b35(d){var x,w,v,u,t,s,r,q,p,o=J.aq(d),n=A.am(o.h(d,"id")),m=A.b1(o.h(d,"name")),l=A.am(o.h(d,"rank")),k=A.b1(o.h(d,"logo")),j=A.afR(C.Eq,o.h(d,"type"),y.e,y.w),i=A.am(o.h(d,"novelId")),h=A.am(o.h(d,"creator")),g=A.am(o.h(d,"createdAt"))
if(g==null){g=A.fD(1970,1,1,0,0,0,0,!0)
if(!A.dh(g))A.C(A.dZ(g))
g=new A.bL(g,!0)}else g=A.fl(g,!1)
x=A.am(o.h(d,"updatedAt"))
if(x==null){x=A.fD(1970,1,1,0,0,0,0,!0)
if(!A.dh(x))A.C(A.dZ(x))
x=new A.bL(x,!0)}else x=A.fl(x,!1)
w=A.b1(o.h(d,"bgMobile"))
v=A.b1(o.h(d,"bgPc"))
u=A.am(o.h(d,"followCount"))
t=A.cp(o.h(d,"followed"))
s=A.am(o.h(d,"styleId"))
r=A.b1(o.h(d,"brief"))
q=A.am(o.h(d,"viewCount"))
p=A.am(o.h(d,"postCount"))
o=y.d.a(o.h(d,"topList"))
return new B.fU(n,m,l,k,j,i,h,g,x,w,v,u,t,s,r,q,p,o==null?null:J.h3(o,new B.aC5(),y.h).cR(0))},
bkq(d){var x,w=C.Eq.h(0,d.e),v=d.CW
if(v==null)v=null
else{x=A.Z(v).i("a_<1,a6<f,@>>")
x=A.ag(new A.a_(v,new B.aC8(),x),!0,x.i("as.E"))
v=x}return A.D(["id",d.a,"name",d.b,"rank",d.c,"logo",d.d,"type",w,"novelId",d.f,"creator",d.r,"createdAt",d.w.a,"updatedAt",d.x.a,"bgMobile",d.y,"bgPc",d.z,"followCount",d.Q,"followed",d.as,"styleId",d.at,"brief",d.ax,"viewCount",d.ay,"postCount",d.ch,"topList",v],y.w,y.b)},
fU:function fU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
anI:function anI(){},
aC5:function aC5(){},
aC8:function aC8(){},
b_M(d,e,f){return new B.Vl(d,f,e,null)},
Vl:function Vl(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g}},D,A,C,J
B=a.updateHolder(c[21],B)
D=c[60]
A=c[0]
C=c[94]
J=c[1]
B.yz.prototype={
L(){return"ForumType."+this.b}}
B.Vk.prototype={
kV(d,e){return $.b7_().c3(e).cB(0,B.b5r(),y.u)},
xk(d){return $.b6Y().c3(d).cB(0,B.b5r(),y.u)}}
B.fU.prototype={
cE(){return B.bkq(this)}}
B.Vl.prototype={
B(d){var x=null
return D.FJ(this.c,A.yK("assets/image/novel/cover_default.jpg",x,x,x,x,x,x),this.f,this.e,x,x)}}
var z=a.updateTypes(["a5<bC<fU>>(oy)","fU(a6<f,@>)","bC<fU>(a6<f,@>)"])
B.anI.prototype={
$1(d){return B.b35(d)},
$S:z+1}
B.aC5.prototype={
$1(d){return A.aVP(y.y.a(d))},
$S:659}
B.aC8.prototype={
$1(d){return A.bkp(d)},
$S:660};(function installTearOffs(){var x=a._instance_1i,w=a._instance_1u,v=a._static_1
var u
x(u=B.Vk.prototype,"gdX","kV",0)
w(u,"gxj","xk",0)
v(B,"bqz","beN",1)
v(B,"b5r","beH",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yz,A.fH)
w(A.o,[B.Vk,B.fU])
w(A.ci,[B.anI,B.aC5,B.aC8])
x(B.Vl,A.a3)})()
A.bX(b.typeUniverse,JSON.parse('{"Vl":{"a3":[],"d":[]},"oy":{"e7":[]}}'))
var y={k:A.z("fU"),h:A.z("ez"),e:A.z("yz"),y:A.z("a6<f,@>"),u:A.z("bC<fU>"),w:A.z("f"),b:A.z("@"),d:A.z("w<@>?")};(function constants(){C.qD=new B.yz("1",0,"novel")
C.qE=new B.yz("2",1,"single")
C.Eq=new A.v([C.qD,"1",C.qE,"2"],A.z("v<yz,f>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bv_","b7_",()=>A.cF("/forum/page",null))
x($,"buW","aXH",()=>A.cF("/forum/collection",null))
x($,"buX","b6Y",()=>A.cF("/forum/collection/page",null))
x($,"buY","b6Z",()=>A.cF("/forum/detail",null))
x($,"buZ","PK",()=>new B.Vk())})()}
$__dart_deferred_initializers__["+uAoCW62JqnwOPex6DIh6+weNTo="] = $__dart_deferred_initializers__.current
