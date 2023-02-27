self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={tx:function tx(d,e,f){this.c=d
this.a=e
this.b=f},ST:function ST(){},
b87(d){return B.aYR(d)},
b81(d){return A.zY(d,new B.ajw(),y.k)},
aYR(d){var x,w,v,u,t,s,r,q,p,o=J.aH(d),n=A.ao(o.h(d,"id")),m=A.b2(o.h(d,"name")),l=A.ao(o.h(d,"rank")),k=A.b2(o.h(d,"logo")),j=A.abq(C.Es,o.h(d,"type"),y.e,y.w),i=A.ao(o.h(d,"novelId")),h=A.ao(o.h(d,"creator")),g=A.ao(o.h(d,"createdAt"))
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
return new B.fy(n,m,l,k,j,i,h,g,x,w,v,u,t,s,r,q,p,o==null?null:J.jm(o,new B.ayM(),y.h).dP(0))},
bd9(d){var x,w=C.Es.h(0,d.e),v=d.CW
if(v==null)v=null
else{x=A.a9(v).i("a6<1,a5<f,@>>")
x=A.a8(new A.a6(v,new B.ayP(),x),!0,x.i("bf.E"))
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
ajw:function ajw(){},
ayM:function ayM(){},
ayP:function ayP(){},
aVS(d,e,f){return new B.SU(d,f,e,null)},
SU:function SU(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
ajv:function ajv(){},
aju:function aju(){}},D,A,C,J
B=a.updateHolder(c[20],B)
D=c[54]
A=c[0]
C=c[94]
J=c[1]
B.tx.prototype={
N(){return"ForumType."+this.b}}
B.ST.prototype={
mH(d,e){return $.b1U().ca(e).cJ(0,B.b0g(),y.u)},
vP(d){return $.b1S().ca(d).cJ(0,B.b0g(),y.u)}}
B.fy.prototype={
cB(){return B.bd9(this)}}
B.SU.prototype={
B(d){var x=this.c
x=x==null?"":D.a_7(x)
return D.P_(new B.aju(),this.f,this.e,null,x,new B.ajv(),null)}}
var z=a.updateTypes(["a4<by<fy>>(nH)","fy(a5<f,@>)","by<fy>(a5<f,@>)"])
B.ajw.prototype={
$1(d){return B.aYR(d)},
$S:z+1}
B.ayM.prototype={
$1(d){return A.aRz(y.y.a(d))},
$S:580}
B.ayP.prototype={
$1(d){return A.bd8(d)},
$S:581}
B.ajv.prototype={
$2(d,e){return A.pO("assets/image/novel/cover_default.jpg",null,null,null)},
$S:107}
B.aju.prototype={
$3(d,e,f){return A.pO("assets/image/novel/cover_default.jpg",null,null,null)},
$S:75};(function installTearOffs(){var x=a._instance_1i,w=a._instance_1u,v=a._static_1
var u
x(u=B.ST.prototype,"gdm","mH",0)
w(u,"gvO","vP",0)
v(B,"bj2","b87",1)
v(B,"b0g","b81",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.tx,A.es)
w(A.u,[B.ST,B.fy])
w(A.bc,[B.ajw,B.ayM,B.ayP,B.aju])
x(B.SU,A.a3)
x(B.ajv,A.d9)})()
A.bw(b.typeUniverse,JSON.parse('{"tx":{"U":[]},"SU":{"a3":[],"c":[]},"nH":{"e9":[]}}'))
var y={k:A.E("fy"),h:A.E("e6"),e:A.E("tx"),y:A.E("a5<f,@>"),u:A.E("by<fy>"),w:A.E("f"),b:A.E("@"),d:A.E("y<@>?")};(function constants(){C.tf=new B.tx("1",0,"novel")
C.tg=new B.tx("2",1,"single")
C.Es=new A.bA([C.tf,"1",C.tg,"2"],A.E("bA<tx,f>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bnr","b1U",()=>A.cI("/forum/page"))
x($,"bnn","aTh",()=>A.cI("/forum/collection"))
x($,"bno","b1S",()=>A.cI("/forum/collection/page"))
x($,"bnp","b1T",()=>A.cI("/forum/detail"))
x($,"bnq","NI",()=>new B.ST())})()}
$__dart_deferred_initializers__["JDjbL6xRAtfte/933vyJdZGcnc8="] = $__dart_deferred_initializers__.current
