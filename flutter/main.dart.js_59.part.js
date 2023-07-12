self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
HO(d,e,f,g,h,i){return new A.a_b(i,g,e,h,d,f,null)},
a_b:function a_b(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
ax2:function ax2(d,e,f){this.a=d
this.b=e
this.c=f},
Br:function Br(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aan:function aan(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
LY:function LY(d,e,f,g,h,i){var _=this
_.A=d
_.a2=e
_.a3=f
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
aJb:function aJb(d,e){this.a=d
this.b=e},
aJa:function aJa(d,e){this.a=d
this.b=e},
NV:function NV(){},
adK:function adK(){},
adL:function adL(){}},D,B,C
A=a.updateHolder(c[55],A)
D=c[74]
B=c[0]
C=c[2]
A.a_b.prototype={
B(d){var x,w,v,u,t=this,s=null,r={},q=t.c,p=D.b2e(d,q,!1),o=t.x
r.a=o
x=t.e
if(x!=null)r.a=new B.bI(x,o,s)
w=t.f==null&&D.aZq(d,q)
v=w?B.v0(d):t.f
u=B.aw7(p,C.E,v,t.y,!1,s,t.w,s,s,s,new A.ax2(r,t,p))
return w&&v!=null?D.aZp(u):u}}
A.Br.prototype={
aP(d){var x=new A.LY(this.e,this.f,this.r,B.as(),null,B.as())
x.aO()
x.sbn(null)
return x},
aV(d,e){var x
e.sf8(this.e)
e.sbC(0,this.f)
x=this.r
if(x!==e.a3){e.a3=x
e.b3()
e.bJ()}},
du(d){return new A.aan(this,C.a9)}}
A.aan.prototype={}
A.LY.prototype={
sf8(d){if(d===this.A)return
this.A=d
this.Z()},
sbC(d,e){var x=this,w=x.a2
if(e===w)return
if(x.b!=null)w.K(0,x.gA5())
x.a2=e
if(x.b!=null)e.W(0,x.gA5())
x.Z()},
ahv(){this.b3()
this.bJ()},
e3(d){if(!(d.e instanceof B.cX))d.e=new B.cX()},
ah(d){this.a9c(d)
this.a2.W(0,this.gA5())},
ae(d){this.a2.K(0,this.gA5())
this.a9d(0)},
gfc(){return!0},
gaoA(){switch(B.bK(this.A).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gTn(){var x=this,w=x.u$
if(w==null)return 0
switch(B.bK(x.A).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
RP(d){switch(B.bK(this.A).a){case 0:return new B.av(0,1/0,d.c,d.d)
case 1:return new B.av(d.a,d.b,0,1/0)}},
bG(d){var x=this.u$
if(x!=null)return x.am(C.a0,d,x.gbv())
return 0},
bu(d){var x=this.u$
if(x!=null)return x.am(C.a8,d,x.gbA())
return 0},
by(d){var x=this.u$
if(x!=null)return x.am(C.aj,d,x.gbQ())
return 0},
bF(d){var x=this.u$
if(x!=null)return x.am(C.aU,d,x.gca())
return 0},
cX(d){var x=this.u$
if(x==null)return new B.K(B.A(0,d.a,d.b),B.A(0,d.c,d.d))
return d.bt(x.iu(this.RP(d)))},
bO(){var x=this,w=y.a.a(B.p.prototype.gU.call(x)),v=x.u$
if(v==null)x.k3=new B.K(B.A(0,w.a,w.b),B.A(0,w.c,w.d))
else{v.c6(x.RP(w),!0)
v=x.u$.k3
v.toString
x.k3=w.bt(v)}x.a2.nu(x.gaoA())
x.a2.mm(0,x.gTn())},
vR(d){var x=this
switch(x.A.a){case 0:return new B.l(0,d-x.u$.k3.b+x.k3.b)
case 2:return new B.l(0,-d)
case 3:return new B.l(d-x.u$.k3.a+x.k3.a,0)
case 1:return new B.l(-d,0)}},
V2(d){var x,w,v,u,t
switch(this.a3.a){case 0:return!1
case 1:case 2:case 3:x=d.a
if(!(x<0)){w=d.b
if(!(w<0)){v=this.u$.k3
u=v.a
t=this.k3
x=x+u>t.a||w+v.b>t.b}else x=!0}else x=!0
return x}},
aL(d,e){var x,w,v,u,t=this
if(t.u$!=null){x=t.a2.at
x.toString
x=t.vR(x)
w=new A.aJb(t,x)
v=t.av
if(t.V2(x)){x=t.cx
x===$&&B.b()
u=t.k3
v.sb1(0,d.mO(x,e,new B.F(0,0,0+u.a,0+u.b),w,t.a3,v.a))}else{v.sb1(0,null)
w.$2(d,e)}}},
m(){this.av.sb1(0,null)
this.i7()},
dL(d,e){var x=this.a2.at
x.toString
x=this.vR(x)
e.bT(0,x.a,x.b)},
mv(d){var x=this,w=x.a2.at
w.toString
w=x.vR(w)
if(x.V2(w)){w=x.k3
return new B.F(0,0,0+w.a,0+w.b)}return null},
cZ(d,e){var x,w=this
if(w.u$!=null){x=w.a2.at
x.toString
return d.kz(new A.aJa(w,e),w.vR(x),e)}return!1},
qE(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gk8()
if(!(d instanceof B.w)){x=q.a2.at
x.toString
return new B.mM(x,f)}w=B.hV(d.bU(0,q.u$),f)
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
return new B.mM(r,w.dl(q.vR(r)))},
eo(d,e,f,g){var x=this
if(!x.a2.r.gmj())return x.v9(d,e,f,g)
x.v9(d,null,f,D.aZJ(d,e,f,x.a2,g,x))},
oI(){return this.eo(C.av,null,C.D,null)},
m2(d){return this.eo(C.av,null,C.D,d)},
n2(d,e,f){return this.eo(d,null,e,f)},
m3(d,e){return this.eo(C.av,d,C.D,e)},
Kf(d){var x,w=this,v=w.gTn(),u=w.a2.at
u.toString
x=v-u
switch(w.A.a){case 0:v=w.k3
return new B.F(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.F(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.F(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.F(0-x,0,0+v.a+u,0+v.b)}},
$iz3:1}
A.NV.prototype={
ah(d){var x
this.dI(d)
x=this.u$
if(x!=null)x.ah(d)},
ae(d){var x
this.dm(0)
x=this.u$
if(x!=null)x.ae(0)}}
A.adK.prototype={}
A.adL.prototype={}
var z=a.updateTypes(["H(H)","Br(u,he)","~()","~({curve:fw,descendant:p?,duration:b_,rect:F?})"])
A.ax2.prototype={
$2(d,e){return new A.Br(this.c,e,C.E,this.a.a,null)},
$S:z+1}
A.aJb.prototype={
$2(d,e){var x=this.a.u$
x.toString
d.df(x,e.a0(0,this.b))},
$S:15}
A.aJa.prototype={
$2(d,e){return this.a.u$.cr(d,e)},
$S:11};(function aliases(){var x=A.NV.prototype
x.a9c=x.ah
x.a9d=x.ae})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.LY.prototype,"gA5","ahv",2)
w(u,"gbv","bG",0)
w(u,"gbA","bu",0)
w(u,"gbQ","by",0)
w(u,"gca","bF",0)
v(u,"goH",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["eo","oI","m2","n2","m3"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.a_b,B.Z)
u(B.dh,[A.ax2,A.aJb,A.aJa])
v(A.Br,B.aZ)
v(A.adK,B.zv)
v(A.adL,A.adK)
v(A.aan,A.adL)
v(A.NV,B.w)
v(A.LY,A.NV)
x(A.NV,B.aN)
w(A.adK,B.Ga)
w(A.adL,D.a1i)})()
B.by(b.typeUniverse,JSON.parse('{"Br":{"aZ":[],"ay":[],"c":[]},"a_b":{"Z":[],"c":[]},"aan":{"bl":[],"aM":[],"u":[]},"LY":{"w":[],"aN":["w"],"z3":[],"p":[],"W":[],"ap":[]}}'))
var y={a:B.z("av")}}
$__dart_deferred_initializers__["gm1fz8Z9MOXMddPhWqmxYzGhnmM="] = $__dart_deferred_initializers__.current
