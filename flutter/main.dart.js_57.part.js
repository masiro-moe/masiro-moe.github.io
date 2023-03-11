self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={tu:function tu(d,e,f){this.c=d
this.a=e
this.b=f},Tv:function Tv(){},
b8d(d){return B.aZ6(d)},
b87(d){return A.zZ(d,new B.ajz(),y.k)},
aZ6(d){var x,w,v,u,t,s,r,q,p,o=J.aI(d),n=A.an(o.h(d,"id")),m=A.b8(o.h(d,"name")),l=A.an(o.h(d,"rank")),k=A.b8(o.h(d,"logo")),j=A.abs(C.Do,o.h(d,"type"),y.e,y.w),i=A.an(o.h(d,"novelId")),h=A.an(o.h(d,"creator")),g=A.an(o.h(d,"createdAt"))
if(g==null){g=A.h2(1970,1,1,0,0,0,0,!0)
if(!A.et(g))A.O(A.e4(g))
g=new A.c7(g,!0)}else g=A.fb(g,!1)
x=A.an(o.h(d,"updatedAt"))
if(x==null){x=A.h2(1970,1,1,0,0,0,0,!0)
if(!A.et(x))A.O(A.e4(x))
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
return new B.fw(n,m,l,k,j,i,h,g,x,w,v,u,t,s,r,q,p,o==null?null:J.jo(o,new B.ayz(),y.h).dY(0))},
bde(d){var x,w=C.Do.h(0,d.e),v=d.CW
if(v==null)v=null
else{x=A.a7(v).i("a4<1,a5<e,@>>")
x=A.a6(new A.a4(v,new B.ayC(),x),!0,x.i("bf.E"))
v=x}return A.K(["id",d.a,"name",d.b,"rank",d.c,"logo",d.d,"type",w,"novelId",d.f,"creator",d.r,"createdAt",d.w.a,"updatedAt",d.x.a,"bgMobile",d.y,"bgPc",d.z,"followCount",d.Q,"followed",d.as,"styleId",d.at,"brief",d.ax,"viewCount",d.ay,"postCount",d.ch,"topList",v],y.w,y.b)},
fw:function fw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ajz:function ajz(){},
ayz:function ayz(){},
ayC:function ayC(){},
aWb(d,e,f){return new B.Tw(d,f,e,null)},
Tw:function Tw(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
ajy:function ajy(){},
ajx:function ajx(){}},D,E,A,C,J
B=a.updateHolder(c[20],B)
D=c[61]
E=c[54]
A=c[0]
C=c[95]
J=c[1]
B.tu.prototype={
N(){return"ForumType."+this.b}}
B.Tv.prototype={
mh(d,e){return $.b1P().cb(e).cG(0,B.b0e(),y.u)},
vB(d){return $.b1N().cb(d).cG(0,B.b0e(),y.u)}}
B.fw.prototype={
cu(){return B.bde(this)}}
B.Tw.prototype={
C(d){var x=this.c
x=x==null?"":D.I7(x)
return E.OY(new B.ajx(),this.f,this.e,null,x,new B.ajy(),null)}}
var z=a.updateTypes(["a2<bB<fw>>(nF)","fw(a5<e,@>)","bB<fw>(a5<e,@>)"])
B.ajz.prototype={
$1(d){return B.aZ6(d)},
$S:z+1}
B.ayz.prototype={
$1(d){return A.aRK(y.y.a(d))},
$S:587}
B.ayC.prototype={
$1(d){return A.bdd(d)},
$S:588}
B.ajy.prototype={
$2(d,e){return A.pR("assets/image/novel/cover_default.jpg",null,null,null)},
$S:110}
B.ajx.prototype={
$3(d,e,f){return A.pR("assets/image/novel/cover_default.jpg",null,null,null)},
$S:86};(function installTearOffs(){var x=a._instance_1i,w=a._instance_1u,v=a._static_1
var u
x(u=B.Tv.prototype,"gdg","mh",0)
w(u,"gvA","vB",0)
v(B,"biY","b8d",1)
v(B,"b0e","b87",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.tu,A.es)
w(A.u,[B.Tv,B.fw])
w(A.bt,[B.ajz,B.ayz,B.ayC,B.ajx])
x(B.Tw,A.a3)
x(B.ajy,A.da)})()
A.bz(b.typeUniverse,JSON.parse('{"tu":{"U":[]},"Tw":{"a3":[],"c":[]},"nF":{"ea":[]}}'))
var y={k:A.B("fw"),h:A.B("e8"),e:A.B("tu"),y:A.B("a5<e,@>"),u:A.B("bB<fw>"),w:A.B("e"),b:A.B("@"),d:A.B("w<@>?")};(function constants(){C.re=new B.tu("1",0,"novel")
C.rf=new B.tu("2",1,"single")
C.Do=new A.bJ([C.re,"1",C.rf,"2"],A.B("bJ<tu,e>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bnn","b1P",()=>A.cM("/forum/page"))
x($,"bnj","aTn",()=>A.cM("/forum/collection"))
x($,"bnk","b1N",()=>A.cM("/forum/collection/page"))
x($,"bnl","b1O",()=>A.cM("/forum/detail"))
x($,"bnm","NF",()=>new B.Tv())})()}
$__dart_deferred_initializers__["aY6fzX6XDqEowxfoYpKZTunW/F4="] = $__dart_deferred_initializers__.current
