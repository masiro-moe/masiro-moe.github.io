self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={tz:function tz(d,e,f){this.c=d
this.a=e
this.b=f},SV:function SV(){},
b7R(d){return B.aYB(d)},
b7L(d){return A.zW(d,new B.ajh(),y.k)},
aYB(d){var x,w,v,u,t,s,r,q,p,o=J.aJ(d),n=A.an(o.h(d,"id")),m=A.b2(o.h(d,"name")),l=A.an(o.h(d,"rank")),k=A.b2(o.h(d,"logo")),j=A.abj(C.Eu,o.h(d,"type"),y.e,y.w),i=A.an(o.h(d,"novelId")),h=A.an(o.h(d,"creator")),g=A.an(o.h(d,"createdAt"))
if(g==null){g=A.h7(1970,1,1,0,0,0,0,!0)
if(!A.et(g))A.Q(A.e0(g))
g=new A.cj(g,!0)}else g=A.f3(g,!1)
x=A.an(o.h(d,"updatedAt"))
if(x==null){x=A.h7(1970,1,1,0,0,0,0,!0)
if(!A.et(x))A.Q(A.e0(x))
x=new A.cj(x,!0)}else x=A.f3(x,!1)
w=A.b2(o.h(d,"bgMobile"))
v=A.b2(o.h(d,"bgPc"))
u=A.an(o.h(d,"followCount"))
t=A.cu(o.h(d,"followed"))
s=A.an(o.h(d,"styleId"))
r=A.b2(o.h(d,"brief"))
q=A.an(o.h(d,"viewCount"))
p=A.an(o.h(d,"postCount"))
o=y.d.a(o.h(d,"topList"))
return new B.fv(n,m,l,k,j,i,h,g,x,w,v,u,t,s,r,q,p,o==null?null:J.jk(o,new B.ayu(),y.h).dL(0))},
bcS(d){var x,w=C.Eu.h(0,d.e),v=d.CW
if(v==null)v=null
else{x=A.ab(v).i("a8<1,a5<f,@>>")
x=A.a7(new A.a8(v,new B.ayx(),x),!0,x.i("be.E"))
v=x}return A.L(["id",d.a,"name",d.b,"rank",d.c,"logo",d.d,"type",w,"novelId",d.f,"creator",d.r,"createdAt",d.w.a,"updatedAt",d.x.a,"bgMobile",d.y,"bgPc",d.z,"followCount",d.Q,"followed",d.as,"styleId",d.at,"brief",d.ax,"viewCount",d.ay,"postCount",d.ch,"topList",v],y.w,y.b)},
fv:function fv(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ajh:function ajh(){},
ayu:function ayu(){},
ayx:function ayx(){},
aVC(d,e,f){return new B.SW(d,f,e,null)},
SW:function SW(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
ajg:function ajg(){},
ajf:function ajf(){}},D,A,C,J
B=a.updateHolder(c[20],B)
D=c[55]
A=c[0]
C=c[95]
J=c[1]
B.tz.prototype={
N(){return"ForumType."+this.b}}
B.SV.prototype={
mM(d,e){return $.b1E().ca(e).cH(0,B.b01(),y.u)},
vX(d){return $.b1C().ca(d).cH(0,B.b01(),y.u)}}
B.fv.prototype={
cz(){return B.bcS(this)}}
B.SW.prototype={
B(d){var x=this.c
x=x==null?"":D.a_5(x)
return D.P0(new B.ajf(),this.f,this.e,null,x,new B.ajg(),null)}}
var z=a.updateTypes(["a4<bx<fv>>(nJ)","fv(a5<f,@>)","bx<fv>(a5<f,@>)"])
B.ajh.prototype={
$1(d){return B.aYB(d)},
$S:z+1}
B.ayu.prototype={
$1(d){return A.aRj(y.y.a(d))},
$S:576}
B.ayx.prototype={
$1(d){return A.bcR(d)},
$S:577}
B.ajg.prototype={
$2(d,e){return A.pL("assets/image/novel/cover_default.jpg",null,null,null)},
$S:106}
B.ajf.prototype={
$3(d,e,f){return A.pL("assets/image/novel/cover_default.jpg",null,null,null)},
$S:69};(function installTearOffs(){var x=a._instance_1i,w=a._instance_1u,v=a._static_1
var u
x(u=B.SV.prototype,"gdk","mM",0)
w(u,"gvW","vX",0)
v(B,"biE","b7R",1)
v(B,"b01","b7L",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.tz,A.es)
w(A.u,[B.SV,B.fv])
w(A.bd,[B.ajh,B.ayu,B.ayx,B.ajf])
x(B.SW,A.a3)
x(B.ajg,A.da)})()
A.by(b.typeUniverse,JSON.parse('{"tz":{"S":[]},"SW":{"a3":[],"c":[]},"nJ":{"e9":[]}}'))
var y={k:A.C("fv"),h:A.C("e6"),e:A.C("tz"),y:A.C("a5<f,@>"),u:A.C("bx<fv>"),w:A.C("f"),b:A.C("@"),d:A.C("A<@>?")};(function constants(){C.th=new B.tz("1",0,"novel")
C.ti=new B.tz("2",1,"single")
C.Eu=new A.bC([C.th,"1",C.ti,"2"],A.C("bC<tz,f>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bn5","b1E",()=>A.cH("/forum/page"))
x($,"bn1","aT0",()=>A.cH("/forum/collection"))
x($,"bn2","b1C",()=>A.cH("/forum/collection/page"))
x($,"bn3","b1D",()=>A.cH("/forum/detail"))
x($,"bn4","NL",()=>new B.SV())})()}
$__dart_deferred_initializers__["7qNxlm0HETryITCHwKDRbk9C32g="] = $__dart_deferred_initializers__.current
