self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={yz:function yz(d,e,f){this.c=d
this.a=e
this.b=f},Vf:function Vf(){},
bey(d){return B.b2S(d)},
bes(d){return A.wx(d,new B.anA(),y.k)},
b2S(d){var x,w,v,u,t,s,r,q,p,o=J.aq(d),n=A.am(o.h(d,"id")),m=A.b1(o.h(d,"name")),l=A.am(o.h(d,"rank")),k=A.b1(o.h(d,"logo")),j=A.afM(C.Ep,o.h(d,"type"),y.e,y.w),i=A.am(o.h(d,"novelId")),h=A.am(o.h(d,"creator")),g=A.am(o.h(d,"createdAt"))
if(g==null){g=A.fE(1970,1,1,0,0,0,0,!0)
if(!A.dg(g))A.E(A.dY(g))
g=new A.bM(g,!0)}else g=A.fk(g,!1)
x=A.am(o.h(d,"updatedAt"))
if(x==null){x=A.fE(1970,1,1,0,0,0,0,!0)
if(!A.dg(x))A.E(A.dY(x))
x=new A.bM(x,!0)}else x=A.fk(x,!1)
w=A.b1(o.h(d,"bgMobile"))
v=A.b1(o.h(d,"bgPc"))
u=A.am(o.h(d,"followCount"))
t=A.co(o.h(d,"followed"))
s=A.am(o.h(d,"styleId"))
r=A.b1(o.h(d,"brief"))
q=A.am(o.h(d,"viewCount"))
p=A.am(o.h(d,"postCount"))
o=y.d.a(o.h(d,"topList"))
return new B.fV(n,m,l,k,j,i,h,g,x,w,v,u,t,s,r,q,p,o==null?null:J.h4(o,new B.aBU(),y.h).cR(0))},
bkc(d){var x,w=C.Ep.h(0,d.e),v=d.CW
if(v==null)v=null
else{x=A.Z(v).i("a_<1,a5<f,@>>")
x=A.ag(new A.a_(v,new B.aBX(),x),!0,x.i("as.E"))
v=x}return A.C(["id",d.a,"name",d.b,"rank",d.c,"logo",d.d,"type",w,"novelId",d.f,"creator",d.r,"createdAt",d.w.a,"updatedAt",d.x.a,"bgMobile",d.y,"bgPc",d.z,"followCount",d.Q,"followed",d.as,"styleId",d.at,"brief",d.ax,"viewCount",d.ay,"postCount",d.ch,"topList",v],y.w,y.b)},
fV:function fV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
anA:function anA(){},
aBU:function aBU(){},
aBX:function aBX(){},
b_z(d,e,f){return new B.Vg(d,f,e,null)},
Vg:function Vg(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g}},D,A,C,J
B=a.updateHolder(c[22],B)
D=c[61]
A=c[0]
C=c[100]
J=c[1]
B.yz.prototype={
L(){return"ForumType."+this.b}}
B.Vf.prototype={
kU(d,e){return $.b6M().c5(e).cB(0,B.b5d(),y.u)},
xi(d){return $.b6K().c5(d).cB(0,B.b5d(),y.u)}}
B.fV.prototype={
cE(){return B.bkc(this)}}
B.Vg.prototype={
B(d){var x=null
return D.FG(this.c,A.yK("assets/image/novel/cover_default.jpg",x,x,x,x,x,x),this.f,this.e,x,x)}}
var z=a.updateTypes(["a4<bC<fV>>(ox)","fV(a5<f,@>)","bC<fV>(a5<f,@>)"])
B.anA.prototype={
$1(d){return B.b2S(d)},
$S:z+1}
B.aBU.prototype={
$1(d){return A.aVB(y.y.a(d))},
$S:655}
B.aBX.prototype={
$1(d){return A.bkb(d)},
$S:656};(function installTearOffs(){var x=a._instance_1i,w=a._instance_1u,v=a._static_1
var u
x(u=B.Vf.prototype,"gdX","kU",0)
w(u,"gxh","xi",0)
v(B,"bql","bey",1)
v(B,"b5d","bes",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yz,A.fy)
w(A.o,[B.Vf,B.fV])
w(A.ce,[B.anA,B.aBU,B.aBX])
x(B.Vg,A.a7)})()
A.bK(b.typeUniverse,JSON.parse('{"Vg":{"a7":[],"d":[]},"ox":{"eg":[]}}'))
var y={k:A.x("fV"),h:A.x("ez"),e:A.x("yz"),y:A.x("a5<f,@>"),u:A.x("bC<fV>"),w:A.x("f"),b:A.x("@"),d:A.x("y<@>?")};(function constants(){C.qC=new B.yz("1",0,"novel")
C.qD=new B.yz("2",1,"single")
C.Ep=new A.v([C.qC,"1",C.qD,"2"],A.x("v<yz,f>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"buN","b6M",()=>A.cK("/forum/page",null))
x($,"buJ","aXu",()=>A.cK("/forum/collection",null))
x($,"buK","b6K",()=>A.cK("/forum/collection/page",null))
x($,"buL","b6L",()=>A.cK("/forum/detail",null))
x($,"buM","PE",()=>new B.Vf())})()}
$__dart_deferred_initializers__["K+aSn7Wy5IJaqS1zgH0JuONWTc4="] = $__dart_deferred_initializers__.current
