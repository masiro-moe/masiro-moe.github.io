self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
HT(d,e,f,g,h,i){return new A.a_i(i,g,e,h,d,f,null)},
a_i:function a_i(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
axh:function axh(d,e,f){this.a=d
this.b=e
this.c=f},
Bv:function Bv(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aaw:function aaw(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
M4:function M4(d,e,f,g,h,i){var _=this
_.A=d
_.a3=e
_.a4=f
_.av=g
_.u$=h
_.k1=_.id=null
_.k2=!1
_.k4=_.k3=null
_.ok=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=i
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
aJy:function aJy(d,e){this.a=d
this.b=e},
aJx:function aJx(d,e){this.a=d
this.b=e},
O1:function O1(){},
adT:function adT(){},
adU:function adU(){}},D,B,C
A=a.updateHolder(c[55],A)
D=c[74]
B=c[0]
C=c[2]
A.a_i.prototype={
B(d){var x,w,v,u,t=this,s=null,r={},q=t.c,p=D.b2D(d,q,!1),o=t.x
r.a=o
x=t.e
if(x!=null)r.a=new B.bM(x,o,s)
w=t.f==null&&D.aZN(d,q)
v=w?B.v7(d):t.f
u=B.awm(p,C.G,v,t.y,!1,s,t.w,s,s,s,new A.axh(r,t,p))
return w&&v!=null?D.aZM(u):u}}
A.Bv.prototype={
aQ(d){var x=new A.M4(this.e,this.f,this.r,B.at(),null,B.at())
x.aP()
x.sbn(null)
return x},
aV(d,e){var x
e.sf8(this.e)
e.sbD(0,this.f)
x=this.r
if(x!==e.a4){e.a4=x
e.b3()
e.bK()}},
du(d){return new A.aaw(this,C.ad)}}
A.aaw.prototype={}
A.M4.prototype={
sf8(d){if(d===this.A)return
this.A=d
this.Z()},
sbD(d,e){var x=this,w=x.a3
if(e===w)return
if(x.b!=null)w.K(0,x.gA9())
x.a3=e
if(x.b!=null)e.W(0,x.gA9())
x.Z()},
ahJ(){this.b3()
this.bK()},
e4(d){if(!(d.e instanceof B.cX))d.e=new B.cX()},
ah(d){this.a9o(d)
this.a3.W(0,this.gA9())},
ae(d){this.a3.K(0,this.gA9())
this.a9p(0)},
gfc(){return!0},
gaoO(){switch(B.bK(this.A).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gTy(){var x=this,w=x.u$
if(w==null)return 0
switch(B.bK(x.A).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
S_(d){switch(B.bK(this.A).a){case 0:return new B.aw(0,1/0,d.c,d.d)
case 1:return new B.aw(d.a,d.b,0,1/0)}},
bH(d){var x=this.u$
if(x!=null)return x.am(C.a3,d,x.gbv())
return 0},
bu(d){var x=this.u$
if(x!=null)return x.am(C.ab,d,x.gbB())
return 0},
bz(d){var x=this.u$
if(x!=null)return x.am(C.an,d,x.gbQ())
return 0},
bG(d){var x=this.u$
if(x!=null)return x.am(C.aY,d,x.gca())
return 0},
cX(d){var x=this.u$
if(x==null)return new B.L(B.B(0,d.a,d.b),B.B(0,d.c,d.d))
return d.bt(x.ix(this.S_(d)))},
bP(){var x=this,w=y.a.a(B.p.prototype.gV.call(x)),v=x.u$
if(v==null)x.k3=new B.L(B.B(0,w.a,w.b),B.B(0,w.c,w.d))
else{v.c6(x.S_(w),!0)
v=x.u$.k3
v.toString
x.k3=w.bt(v)}x.a3.nu(x.gaoO())
x.a3.mn(0,x.gTy())},
vU(d){var x=this
switch(x.A.a){case 0:return new B.m(0,d-x.u$.k3.b+x.k3.b)
case 2:return new B.m(0,-d)
case 3:return new B.m(d-x.u$.k3.a+x.k3.a,0)
case 1:return new B.m(-d,0)}},
Vd(d){var x,w,v,u,t
switch(this.a4.a){case 0:return!1
case 1:case 2:case 3:x=d.a
if(!(x<0)){w=d.b
if(!(w<0)){v=this.u$.k3
u=v.a
t=this.k3
x=x+u>t.a||w+v.b>t.b}else x=!0}else x=!0
return x}},
aL(d,e){var x,w,v,u,t=this
if(t.u$!=null){x=t.a3.at
x.toString
x=t.vU(x)
w=new A.aJy(t,x)
v=t.av
if(t.Vd(x)){x=t.cx
x===$&&B.c()
u=t.k3
v.sb1(0,d.mO(x,e,new B.G(0,0,0+u.a,0+u.b),w,t.a4,v.a))}else{v.sb1(0,null)
w.$2(d,e)}}},
m(){this.av.sb1(0,null)
this.i9()},
dL(d,e){var x=this.a3.at
x.toString
x=this.vU(x)
e.bT(0,x.a,x.b)},
mw(d){var x=this,w=x.a3.at
w.toString
w=x.vU(w)
if(x.Vd(w)){w=x.k3
return new B.G(0,0,0+w.a,0+w.b)}return null},
cZ(d,e){var x,w=this
if(w.u$!=null){x=w.a3.at
x.toString
return d.kA(new A.aJx(w,e),w.vU(x),e)}return!1},
qF(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gk9()
if(!(d instanceof B.x)){x=q.a3.at
x.toString
return new B.mR(x,f)}w=B.hZ(d.bU(0,q.u$),f)
x=q.u$.k3
x.toString
switch(q.A.a){case 0:v=q.k3.b
u=w.d
t=x.b-u
s=u-w.b
break
case 1:v=q.k3.a
t=w.a
s=w.c-t
break
case 2:v=q.k3.b
t=w.b
s=w.d-t
break
case 3:v=q.k3.a
u=w.c
t=x.a-u
s=u-w.a
break
default:t=null
s=null
v=null}r=t-(v-s)*e
return new B.mR(r,w.dl(q.vU(r)))},
eo(d,e,f,g){var x=this
if(!x.a3.r.gmk())return x.vb(d,e,f,g)
x.vb(d,null,f,D.b_5(d,e,f,x.a3,g,x))},
oI(){return this.eo(C.az,null,C.E,null)},
m3(d){return this.eo(C.az,null,C.E,d)},
n2(d,e,f){return this.eo(d,null,e,f)},
m4(d,e){return this.eo(C.az,d,C.E,e)},
Km(d){var x,w=this,v=w.gTy(),u=w.a3.at
u.toString
x=v-u
switch(w.A.a){case 0:v=w.k3
return new B.G(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.G(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.G(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.G(0-x,0,0+v.a+u,0+v.b)}},
$iz8:1}
A.O1.prototype={
ah(d){var x
this.dI(d)
x=this.u$
if(x!=null)x.ah(d)},
ae(d){var x
this.dm(0)
x=this.u$
if(x!=null)x.ae(0)}}
A.adT.prototype={}
A.adU.prototype={}
var z=a.updateTypes(["I(I)","Bv(t,hi)","~()","~({curve:fw,descendant:p?,duration:b1,rect:G?})"])
A.axh.prototype={
$2(d,e){return new A.Bv(this.c,e,C.G,this.a.a,null)},
$S:z+1}
A.aJy.prototype={
$2(d,e){var x=this.a.u$
x.toString
d.df(x,e.a1(0,this.b))},
$S:17}
A.aJx.prototype={
$2(d,e){return this.a.u$.cr(d,e)},
$S:11};(function aliases(){var x=A.O1.prototype
x.a9o=x.ah
x.a9p=x.ae})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.M4.prototype,"gA9","ahJ",2)
w(u,"gbv","bH",0)
w(u,"gbB","bu",0)
w(u,"gbQ","bz",0)
w(u,"gca","bG",0)
v(u,"goH",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["eo","oI","m3","n2","m4"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.a_i,B.a1)
u(B.dj,[A.axh,A.aJy,A.aJx])
v(A.Bv,B.b0)
v(A.adT,B.zz)
v(A.adU,A.adT)
v(A.aaw,A.adU)
v(A.O1,B.x)
v(A.M4,A.O1)
x(A.O1,B.aP)
w(A.adT,B.Gg)
w(A.adU,D.a1p)})()
B.bA(b.typeUniverse,JSON.parse('{"Bv":{"b0":[],"aA":[],"d":[]},"a_i":{"a1":[],"d":[]},"aaw":{"bn":[],"aO":[],"t":[]},"M4":{"x":[],"aP":["x"],"z8":[],"p":[],"X":[],"ar":[]}}'))
var y={a:B.A("aw")}}
$__dart_deferred_initializers__["gJkNheYV54CySn+58/ZDJ/zipl0="] = $__dart_deferred_initializers__.current
