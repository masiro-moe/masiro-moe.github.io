self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={yq:function yq(d,e,f){this.c=d
this.a=e
this.b=f},Vg:function Vg(){},
beq(d){return B.b2V(d)},
bek(d){return A.B7(d,new B.anF(),y.k)},
b2V(d){var x,w,v,u,t,s,r,q,p,o=J.ar(d),n=A.ao(o.h(d,"id")),m=A.b3(o.h(d,"name")),l=A.ao(o.h(d,"rank")),k=A.b3(o.h(d,"logo")),j=A.afZ(C.Em,o.h(d,"type"),y.e,y.w),i=A.ao(o.h(d,"novelId")),h=A.ao(o.h(d,"creator")),g=A.ao(o.h(d,"createdAt"))
if(g==null){g=A.fX(1970,1,1,0,0,0,0,!0)
if(!A.dl(g))A.G(A.e4(g))
g=new A.bP(g,!0)}else g=A.fx(g,!1)
x=A.ao(o.h(d,"updatedAt"))
if(x==null){x=A.fX(1970,1,1,0,0,0,0,!0)
if(!A.dl(x))A.G(A.e4(x))
x=new A.bP(x,!0)}else x=A.fx(x,!1)
w=A.b3(o.h(d,"bgMobile"))
v=A.b3(o.h(d,"bgPc"))
u=A.ao(o.h(d,"followCount"))
t=A.cm(o.h(d,"followed"))
s=A.ao(o.h(d,"styleId"))
r=A.b3(o.h(d,"brief"))
q=A.ao(o.h(d,"viewCount"))
p=A.ao(o.h(d,"postCount"))
o=y.d.a(o.h(d,"topList"))
return new B.fR(n,m,l,k,j,i,h,g,x,w,v,u,t,s,r,q,p,o==null?null:J.hf(o,new B.aC9(),y.h).cW(0))},
bk4(d){var x,w=C.Em.h(0,d.e),v=d.CW
if(v==null)v=null
else{x=A.Z(v).i("a0<1,a7<f,@>>")
x=A.ag(new A.a0(v,new B.aCc(),x),!0,x.i("at.E"))
v=x}return A.J(["id",d.a,"name",d.b,"rank",d.c,"logo",d.d,"type",w,"novelId",d.f,"creator",d.r,"createdAt",d.w.a,"updatedAt",d.x.a,"bgMobile",d.y,"bgPc",d.z,"followCount",d.Q,"followed",d.as,"styleId",d.at,"brief",d.ax,"viewCount",d.ay,"postCount",d.ch,"topList",v],y.w,y.b)},
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
anF:function anF(){},
aC9:function aC9(){},
aCc:function aCc(){},
b_B(d,e,f){return new B.Vh(d,f,e,null)},
Vh:function Vh(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g}},D,A,C,J
B=a.updateHolder(c[21],B)
D=c[63]
A=c[0]
C=c[96]
J=c[1]
B.yq.prototype={
M(){return"ForumType."+this.b}}
B.Vg.prototype={
mX(d,e){return $.b6L().cd(e).cC(0,B.b5e(),y.u)},
xi(d){return $.b6J().cd(d).cC(0,B.b5e(),y.u)}}
B.fR.prototype={
cK(){return B.bk4(this)}}
B.Vh.prototype={
B(d){var x,w=null,v="assets/image/novel/cover_default.jpg",u=$.PG(),t=this.c
t=t==null?"":D.Jj(t)
x=A.qG(v,w,w,w,w,w,w)
return u.a20(A.qG(v,w,w,w,w,w,w),this.f,this.e,x,t,w)}}
var z=a.updateTypes(["a2<bQ<fR>>(oq)","fR(a7<f,@>)","bQ<fR>(a7<f,@>)"])
B.anF.prototype={
$1(d){return B.b2V(d)},
$S:z+1}
B.aC9.prototype={
$1(d){return A.aVH(y.y.a(d))},
$S:654}
B.aCc.prototype={
$1(d){return A.bk3(d)},
$S:655};(function installTearOffs(){var x=a._instance_1i,w=a._instance_1u,v=a._static_1
var u
x(u=B.Vg.prototype,"gdM","mX",0)
w(u,"gxh","xi",0)
v(B,"bqd","beq",1)
v(B,"b5e","bek",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yq,A.fs)
w(A.o,[B.Vg,B.fR])
w(A.cr,[B.anF,B.aC9,B.aCc])
x(B.Vh,A.a6)})()
A.bS(b.typeUniverse,JSON.parse('{"Vh":{"a6":[],"d":[]},"oq":{"eB":[]}}'))
var y={k:A.z("fR"),h:A.z("ex"),e:A.z("yq"),y:A.z("a7<f,@>"),u:A.z("bQ<fR>"),w:A.z("f"),b:A.z("@"),d:A.z("x<@>?")};(function constants(){C.qA=new B.yq("1",0,"novel")
C.qB=new B.yq("2",1,"single")
C.Em=new A.v([C.qA,"1",C.qB,"2"],A.z("v<yq,f>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"buC","b6L",()=>A.cW("/forum/page",null))
x($,"buy","aXA",()=>A.cW("/forum/collection",null))
x($,"buz","b6J",()=>A.cW("/forum/collection/page",null))
x($,"buA","b6K",()=>A.cW("/forum/detail",null))
x($,"buB","PE",()=>new B.Vg())})()}
$__dart_deferred_initializers__["tW0nvZ4Q7Gd3o9lcjFbLxOSTafE="] = $__dart_deferred_initializers__.current
