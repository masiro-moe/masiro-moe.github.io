self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
I5(d,e,f,g,h,i){return new A.a_x(i,g,e,h,d,f,null)},
a_x:function a_x(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
axF:function axF(d,e,f){this.a=d
this.b=e
this.c=f},
BH:function BH(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aaM:function aaM(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
Mi:function Mi(d,e,f,g,h,i){var _=this
_.t=d
_.H=e
_.N=f
_.Y=g
_.v$=h
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
aJY:function aJY(d,e){this.a=d
this.b=e},
aJX:function aJX(d,e){this.a=d
this.b=e},
Of:function Of(){},
ae9:function ae9(){},
aea:function aea(){}},D,B,C
A=a.updateHolder(c[55],A)
D=c[74]
B=c[0]
C=c[2]
A.a_x.prototype={
B(d){var x,w,v,u,t=this,s=null,r={},q=t.c,p=D.b3w(d,q,!1),o=t.x
r.a=o
x=t.e
if(x!=null)r.a=new B.bN(x,o,s)
w=t.f==null&&D.b_A(d,q)
v=w?B.vg(d):t.f
u=B.awK(p,C.G,v,t.y,!1,s,t.w,s,s,s,new A.axF(r,t,p))
return w&&v!=null?D.b_z(u):u}}
A.BH.prototype={
aO(d){var x=new A.Mi(this.e,this.f,this.r,B.as(),null,B.as())
x.aN()
x.sbj(null)
return x},
aT(d,e){var x
e.sfc(this.e)
e.sbz(0,this.f)
x=this.r
if(x!==e.N){e.N=x
e.aZ()
e.bF()}},
dv(d){return new A.aaM(this,C.ad)}}
A.aaM.prototype={}
A.Mi.prototype={
sfc(d){if(d===this.t)return
this.t=d
this.a1()},
sbz(d,e){var x=this,w=x.H
if(e===w)return
if(x.b!=null)w.L(0,x.gAm())
x.H=e
if(x.b!=null)e.Z(0,x.gAm())
x.a1()},
ai2(){this.aZ()
this.bF()},
e5(d){if(!(d.e instanceof B.cX))d.e=new B.cX()},
ai(d){this.a9G(d)
this.H.Z(0,this.gAm())},
af(d){this.H.L(0,this.gAm())
this.a9H(0)},
gfg(){return!0},
gap9(){switch(B.bK(this.t).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gTI(){var x=this,w=x.v$
if(w==null)return 0
switch(B.bK(x.t).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
S8(d){switch(B.bK(this.t).a){case 0:return new B.aw(0,1/0,d.c,d.d)
case 1:return new B.aw(d.a,d.b,0,1/0)}},
bD(d){var x=this.v$
if(x!=null)return x.am(C.a3,d,x.gbt())
return 0},
bs(d){var x=this.v$
if(x!=null)return x.am(C.ab,d,x.gby())
return 0},
bx(d){var x=this.v$
if(x!=null)return x.am(C.an,d,x.gbL())
return 0},
bC(d){var x=this.v$
if(x!=null)return x.am(C.aY,d,x.gc4())
return 0},
cY(d){var x=this.v$
if(x==null)return new B.R(B.B(0,d.a,d.b),B.B(0,d.c,d.d))
return d.br(x.iA(this.S8(d)))},
bK(){var x=this,w=y.a.a(B.p.prototype.gX.call(x)),v=x.v$
if(v==null)x.k3=new B.R(B.B(0,w.a,w.b),B.B(0,w.c,w.d))
else{v.c0(x.S8(w),!0)
v=x.v$.k3
v.toString
x.k3=w.br(v)}x.H.nw(x.gap9())
x.H.mo(0,x.gTI())},
w_(d){var x=this
switch(x.t.a){case 0:return new B.m(0,d-x.v$.k3.b+x.k3.b)
case 2:return new B.m(0,-d)
case 3:return new B.m(d-x.v$.k3.a+x.k3.a,0)
case 1:return new B.m(-d,0)}},
Vn(d){var x,w,v,u,t
switch(this.N.a){case 0:return!1
case 1:case 2:case 3:x=d.a
if(!(x<0)){w=d.b
if(!(w<0)){v=this.v$.k3
u=v.a
t=this.k3
x=x+u>t.a||w+v.b>t.b}else x=!0}else x=!0
return x}},
aK(d,e){var x,w,v,u,t=this
if(t.v$!=null){x=t.H.at
x.toString
x=t.w_(x)
w=new A.aJY(t,x)
v=t.Y
if(t.Vn(x)){x=t.cx
x===$&&B.c()
u=t.k3
v.saX(0,d.mQ(x,e,new B.G(0,0,0+u.a,0+u.b),w,t.N,v.a))}else{v.saX(0,null)
w.$2(d,e)}}},
m(){this.Y.saX(0,null)
this.ic()},
dL(d,e){var x=this.H.at
x.toString
x=this.w_(x)
e.bO(0,x.a,x.b)},
mx(d){var x=this,w=x.H.at
w.toString
w=x.w_(w)
if(x.Vn(w)){w=x.k3
return new B.G(0,0,0+w.a,0+w.b)}return null},
d0(d,e){var x,w=this
if(w.v$!=null){x=w.H.at
x.toString
return d.kB(new A.aJX(w,e),w.w_(x),e)}return!1},
qK(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gka()
if(!(d instanceof B.x)){x=q.H.at
x.toString
return new B.mX(x,f)}w=B.i0(d.bP(0,q.v$),f)
x=q.v$.k3
x.toString
switch(q.t.a){case 0:v=q.k3.b
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
return new B.mX(r,w.dn(q.w_(r)))},
er(d,e,f,g){var x=this
if(!x.H.r.gml())return x.vh(d,e,f,g)
x.vh(d,null,f,D.b_T(d,e,f,x.H,g,x))},
oK(){return this.er(C.az,null,C.E,null)},
m4(d){return this.er(C.az,null,C.E,d)},
n4(d,e,f){return this.er(d,null,e,f)},
m5(d,e){return this.er(C.az,d,C.E,e)},
Kz(d){var x,w=this,v=w.gTI(),u=w.H.at
u.toString
x=v-u
switch(w.t.a){case 0:v=w.k3
return new B.G(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.G(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.G(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.G(0-x,0,0+v.a+u,0+v.b)}},
$izk:1}
A.Of.prototype={
ai(d){var x
this.dI(d)
x=this.v$
if(x!=null)x.ai(d)},
af(d){var x
this.dq(0)
x=this.v$
if(x!=null)x.af(0)}}
A.ae9.prototype={}
A.aea.prototype={}
var z=a.updateTypes(["I(I)","BH(r,hk)","~()","~({curve:fz,descendant:p?,duration:b1,rect:G?})"])
A.axF.prototype={
$2(d,e){return new A.BH(this.c,e,C.G,this.a.a,null)},
$S:z+1}
A.aJY.prototype={
$2(d,e){var x=this.a.v$
x.toString
d.dh(x,e.a3(0,this.b))},
$S:15}
A.aJX.prototype={
$2(d,e){return this.a.v$.cp(d,e)},
$S:11};(function aliases(){var x=A.Of.prototype
x.a9G=x.ai
x.a9H=x.af})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Mi.prototype,"gAm","ai2",2)
w(u,"gbt","bD",0)
w(u,"gby","bs",0)
w(u,"gbL","bx",0)
w(u,"gc4","bC",0)
v(u,"goJ",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["er","oK","m4","n4","m5"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.a_x,B.a1)
u(B.dk,[A.axF,A.aJY,A.aJX])
v(A.BH,B.b0)
v(A.ae9,B.zL)
v(A.aea,A.ae9)
v(A.aaM,A.aea)
v(A.Of,B.x)
v(A.Mi,A.Of)
x(A.Of,B.aR)
w(A.ae9,B.Gt)
w(A.aea,D.a1D)})()
B.bz(b.typeUniverse,JSON.parse('{"BH":{"b0":[],"aA":[],"d":[]},"a_x":{"a1":[],"d":[]},"aaM":{"bn":[],"aP":[],"r":[]},"Mi":{"x":[],"aR":["x"],"zk":[],"p":[],"X":[],"ar":[]}}'))
var y={a:B.z("aw")}}
$__dart_deferred_initializers__["QTq2E0/b7Zr+ytXcMpilzddHFKc="] = $__dart_deferred_initializers__.current
