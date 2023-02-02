self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={nE:function nE(d,e){this.a=d
this.b=e},SH:function SH(){},
b6Z(d){return B.aQA(d)},
b6Y(d){return A.zY(d,new B.aiQ(),y.h)},
aQA(d){var x,w=J.aH(d),v=A.am(w.h(d,"id")),u=A.am(w.h(d,"forumId")),t=A.am(w.h(d,"userId")),s=w.h(d,"user")==null?null:A.vu(y.y.a(w.h(d,"user"))),r=A.aaU(C.me,w.h(d,"type"),y.x,y.w),q=A.b2(w.h(d,"typeName")),p=A.b2(w.h(d,"title")),o=A.am(w.h(d,"createdAt"))
if(o==null){o=A.h5(1970,1,1,0,0,0,0,!0)
if(!A.er(o))A.Q(A.e0(o))
o=new A.ch(o,!0)}else o=A.f2(o,!1)
x=A.am(w.h(d,"updatedAt"))
if(x==null){x=A.h5(1970,1,1,0,0,0,0,!0)
if(!A.er(x))A.Q(A.e0(x))
x=new A.ch(x,!0)}else x=A.f2(x,!1)
return new B.eu(v,u,t,s,r,q,p,o,x,A.am(w.h(d,"viewCount")),A.cq(w.h(d,"refinement")),A.am(w.h(d,"topPost")),A.am(w.h(d,"limitLv")),A.am(w.h(d,"cost")),A.cq(w.h(d,"needPay")),A.cq(w.h(d,"thumbUp")),A.am(w.h(d,"thumbUpCount")),A.cq(w.h(d,"hotCommentPoint")),A.am(w.h(d,"hb")),A.am(w.h(d,"splitNumber")),A.am(w.h(d,"rate")),A.am(w.h(d,"lastNumber")),A.am(w.h(d,"perCoin")),A.cq(w.h(d,"closeNotice")),A.b2(w.h(d,"content")),A.am(w.h(d,"commentCount")),A.cq(w.h(d,"collected")),A.am(w.h(d,"collectCount")))},
bc0(d){var x,w=d.d
w=w==null?null:A.r0(w)
x=C.me.h(0,d.e)
return A.L(["id",d.a,"forumId",d.b,"userId",d.c,"user",w,"type",x,"typeName",d.f,"title",d.r,"createdAt",d.w.a,"updatedAt",d.x.a,"viewCount",d.y,"refinement",d.z,"topPost",d.Q,"limitLv",d.as,"cost",d.at,"needPay",d.ax,"thumbUp",d.ay,"thumbUpCount",d.ch,"hotCommentPoint",d.CW,"hb",d.cx,"splitNumber",d.cy,"rate",d.db,"lastNumber",d.dx,"perCoin",d.dy,"closeNotice",d.fr,"content",d.fx,"commentCount",d.fy,"collected",d.go,"collectCount",d.id],y.w,y.b)},
eu:function eu(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6){var _=this
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
_.CW=u
_.cx=v
_.cy=w
_.db=x
_.dx=a0
_.dy=a1
_.fr=a2
_.fx=a3
_.fy=a4
_.go=a5
_.id=a6},
aiQ:function aiQ(){}},A,C,J
B=a.updateHolder(c[42],B)
A=c[0]
C=c[130]
J=c[1]
B.nE.prototype={
N(){return"ForumPostType."+this.b}}
B.SH.prototype={
xv(d,e){return $.b0M().cw(e).d8(0,B.b_c(),y.c)},
vS(d){return $.b0K().cw(d).d8(0,B.b_c(),y.c)}}
B.eu.prototype={
cG(){var x,w=this,v=w.d
v=v==null?null:A.r0(v)
x=C.me.h(0,w.e)
return A.L(["id",w.a,"forumId",w.b,"userId",w.c,"user",v,"type",x,"typeName",w.f,"title",w.r,"createdAt",w.w.a,"updatedAt",w.x.a,"viewCount",w.y,"refinement",w.z,"topPost",w.Q,"limitLv",w.as,"cost",w.at,"needPay",w.ax,"thumbUp",w.ay,"thumbUpCount",w.ch,"hotCommentPoint",w.CW,"hb",w.cx,"splitNumber",w.cy,"rate",w.db,"lastNumber",w.dx,"perCoin",w.dy,"closeNotice",w.fr,"content",w.fx,"commentCount",w.fy,"collected",w.go,"collectCount",w.id],y.w,y.b)}}
var z=a.updateTypes(["ae<bU<eu>>(nD)","eu(a3<f,@>)","bU<eu>(a3<f,@>)"])
B.aiQ.prototype={
$1(d){return B.aQA(d)},
$S:z+1};(function installTearOffs(){var x=a._instance_1i,w=a._instance_1u,v=a._static_1
var u
x(u=B.SH.prototype,"gep","xv",0)
w(u,"gvR","vS",0)
v(B,"bhS","b6Z",1)
v(B,"b_c","b6Y",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nE,A.dM)
w(A.v,[B.SH,B.eu])
x(B.aiQ,A.b8)})()
A.bg(b.typeUniverse,JSON.parse('{"nE":{"S":[]}}'))
var y={h:A.r("eu"),x:A.r("nE"),y:A.r("a3<f,@>"),c:A.r("bU<eu>"),w:A.r("f"),b:A.r("@")};(function constants(){C.Of=new B.nE(0,"talk")
C.Og=new B.nE(1,"random")
C.Oh=new B.nE(2,"translate")
C.Oi=new B.nE(3,"gold")
C.me=new A.bA([C.Of,"1",C.Og,"2",C.Oh,"3",C.Oi,"4"],A.r("bA<nE,f>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bmg","b0M",()=>A.cO("/forum/post/page"))
x($,"bmc","aSh",()=>A.cO("/forum/post/collection"))
x($,"bmd","b0K",()=>A.cO("/forum/post/collection/page"))
x($,"bme","b0L",()=>A.cO("/forum/post/detail"))
x($,"bmi","aSi",()=>A.cO("/forum/post/thumbUp"))
x($,"bmh","b0N",()=>A.cO("/forum/post/pay"))
x($,"bmf","oV",()=>new B.SH())})()}
$__dart_deferred_initializers__["R72lFjrIln2loon/99BVeEsRVLk="] = $__dart_deferred_initializers__.current
