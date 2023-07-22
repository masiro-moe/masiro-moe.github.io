self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={yr:function yr(d,e,f){this.c=d
this.a=e
this.b=f},Ve:function Ve(){},
bev(d){return B.b2W(d)},
bep(d){return A.B7(d,new B.anB(),y.k)},
b2W(d){var x,w,v,u,t,s,r,q,p,o=J.aq(d),n=A.ap(o.h(d,"id")),m=A.b3(o.h(d,"name")),l=A.ap(o.h(d,"rank")),k=A.b3(o.h(d,"logo")),j=A.afZ(C.El,o.h(d,"type"),y.e,y.w),i=A.ap(o.h(d,"novelId")),h=A.ap(o.h(d,"creator")),g=A.ap(o.h(d,"createdAt"))
if(g==null){g=A.fX(1970,1,1,0,0,0,0,!0)
if(!A.dl(g))A.E(A.e4(g))
g=new A.bM(g,!0)}else g=A.fy(g,!1)
x=A.ap(o.h(d,"updatedAt"))
if(x==null){x=A.fX(1970,1,1,0,0,0,0,!0)
if(!A.dl(x))A.E(A.e4(x))
x=new A.bM(x,!0)}else x=A.fy(x,!1)
w=A.b3(o.h(d,"bgMobile"))
v=A.b3(o.h(d,"bgPc"))
u=A.ap(o.h(d,"followCount"))
t=A.cu(o.h(d,"followed"))
s=A.ap(o.h(d,"styleId"))
r=A.b3(o.h(d,"brief"))
q=A.ap(o.h(d,"viewCount"))
p=A.ap(o.h(d,"postCount"))
o=y.d.a(o.h(d,"topList"))
return new B.fR(n,m,l,k,j,i,h,g,x,w,v,u,t,s,r,q,p,o==null?null:J.hg(o,new B.aC_(),y.h).cW(0))},
bk9(d){var x,w=C.El.h(0,d.e),v=d.CW
if(v==null)v=null
else{x=A.Z(v).i("a0<1,a8<f,@>>")
x=A.ah(new A.a0(v,new B.aC2(),x),!0,x.i("at.E"))
v=x}return A.D(["id",d.a,"name",d.b,"rank",d.c,"logo",d.d,"type",w,"novelId",d.f,"creator",d.r,"createdAt",d.w.a,"updatedAt",d.x.a,"bgMobile",d.y,"bgPc",d.z,"followCount",d.Q,"followed",d.as,"styleId",d.at,"brief",d.ax,"viewCount",d.ay,"postCount",d.ch,"topList",v],y.w,y.b)},
fR:function fR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
anB:function anB(){},
aC_:function aC_(){},
aC2:function aC2(){},
b_B(d,e,f){return new B.Vf(d,f,e,null)},
Vf:function Vf(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g}},D,A,C,J
B=a.updateHolder(c[21],B)
D=c[63]
A=c[0]
C=c[96]
J=c[1]
B.yr.prototype={
L(){return"ForumType."+this.b}}
B.Ve.prototype={
n0(d,e){return $.b6N().cb(e).cC(0,B.b5g(),y.u)},
xj(d){return $.b6L().cb(d).cC(0,B.b5g(),y.u)}}
B.fR.prototype={
cK(){return B.bk9(this)}}
B.Vf.prototype={
B(d){var x,w=null,v="assets/image/novel/cover_default.jpg",u=$.PD(),t=this.c
t=t==null?"":D.Jh(t)
x=A.qH(v,w,w,w,w,w,w)
return u.a1Z(A.qH(v,w,w,w,w,w,w),this.f,this.e,x,t,w)}}
var z=a.updateTypes(["a2<bQ<fR>>(os)","fR(a8<f,@>)","bQ<fR>(a8<f,@>)"])
B.anB.prototype={
$1(d){return B.b2W(d)},
$S:z+1}
B.aC_.prototype={
$1(d){return A.aVC(y.y.a(d))},
$S:655}
B.aC2.prototype={
$1(d){return A.bk8(d)},
$S:656};(function installTearOffs(){var x=a._instance_1i,w=a._instance_1u,v=a._static_1
var u
x(u=B.Ve.prototype,"gdN","n0",0)
w(u,"gxi","xj",0)
v(B,"bqi","bev",1)
v(B,"b5g","bep",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yr,A.fu)
w(A.o,[B.Ve,B.fR])
w(A.cq,[B.anB,B.aC_,B.aC2])
x(B.Vf,A.a6)})()
A.bS(b.typeUniverse,JSON.parse('{"Vf":{"a6":[],"d":[]},"os":{"eA":[]}}'))
var y={k:A.z("fR"),h:A.z("ew"),e:A.z("yr"),y:A.z("a8<f,@>"),u:A.z("bQ<fR>"),w:A.z("f"),b:A.z("@"),d:A.z("x<@>?")};(function constants(){C.qy=new B.yr("1",0,"novel")
C.qz=new B.yr("2",1,"single")
C.El=new A.v([C.qy,"1",C.qz,"2"],A.z("v<yr,f>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"buH","b6N",()=>A.cW("/forum/page",null))
x($,"buD","aXx",()=>A.cW("/forum/collection",null))
x($,"buE","b6L",()=>A.cW("/forum/collection/page",null))
x($,"buF","b6M",()=>A.cW("/forum/detail",null))
x($,"buG","PB",()=>new B.Ve())})()}
$__dart_deferred_initializers__["tJP9d+bssPjy35bVjY1P2pIkKGs="] = $__dart_deferred_initializers__.current
