self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
I7(d,e,f,g,h,i){return new A.a_D(i,g,e,h,d,f,null)},
a_D:function a_D(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
axN:function axN(d,e,f){this.a=d
this.b=e
this.c=f},
BJ:function BJ(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aaS:function aaS(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
Mj:function Mj(d,e,f,g,h,i){var _=this
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
aK5:function aK5(d,e){this.a=d
this.b=e},
aK4:function aK4(d,e){this.a=d
this.b=e},
Of:function Of(){},
aef:function aef(){},
aeg:function aeg(){}},D,B,C
A=a.updateHolder(c[57],A)
D=c[76]
B=c[0]
C=c[2]
A.a_D.prototype={
B(d){var x,w,v,u,t=this,s=null,r={},q=t.c,p=D.b3N(d,q,!1),o=t.x
r.a=o
x=t.e
if(x!=null)r.a=new B.bN(x,o,s)
w=t.f==null&&D.b_O(d,q)
v=w?B.vi(d):t.f
u=B.awP(p,C.F,v,t.y,!1,s,t.w,s,s,s,new A.axN(r,t,p))
return w&&v!=null?D.b_N(u):u}}
A.BJ.prototype={
aO(d){var x=new A.Mj(this.e,this.f,this.r,B.as(),null,B.as())
x.aN()
x.sbj(null)
return x},
aT(d,e){var x
e.sfc(this.e)
e.sbz(0,this.f)
x=this.r
if(x!==e.N){e.N=x
e.aZ()
e.bG()}},
dv(d){return new A.aaS(this,C.ad)}}
A.aaS.prototype={}
A.Mj.prototype={
sfc(d){if(d===this.t)return
this.t=d
this.a1()},
sbz(d,e){var x=this,w=x.H
if(e===w)return
if(x.b!=null)w.L(0,x.gAr())
x.H=e
if(x.b!=null)e.Z(0,x.gAr())
x.a1()},
ai9(){this.aZ()
this.bG()},
e5(d){if(!(d.e instanceof B.cX))d.e=new B.cX()},
ai(d){this.a9N(d)
this.H.Z(0,this.gAr())},
af(d){this.H.L(0,this.gAr())
this.a9O(0)},
gfg(){return!0},
gaph(){switch(B.bK(this.t).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gTM(){var x=this,w=x.v$
if(w==null)return 0
switch(B.bK(x.t).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
Sc(d){switch(B.bK(this.t).a){case 0:return new B.ax(0,1/0,d.c,d.d)
case 1:return new B.ax(d.a,d.b,0,1/0)}},
bD(d){var x=this.v$
if(x!=null)return x.am(C.a4,d,x.gbt())
return 0},
bs(d){var x=this.v$
if(x!=null)return x.am(C.ab,d,x.gby())
return 0},
bx(d){var x=this.v$
if(x!=null)return x.am(C.an,d,x.gbL())
return 0},
bC(d){var x=this.v$
if(x!=null)return x.am(C.aX,d,x.gc4())
return 0},
cY(d){var x=this.v$
if(x==null)return new B.N(B.B(0,d.a,d.b),B.B(0,d.c,d.d))
return d.br(x.iy(this.Sc(d)))},
bK(){var x=this,w=y.a.a(B.p.prototype.gX.call(x)),v=x.v$
if(v==null)x.k3=new B.N(B.B(0,w.a,w.b),B.B(0,w.c,w.d))
else{v.c0(x.Sc(w),!0)
v=x.v$.k3
v.toString
x.k3=w.br(v)}x.H.nv(x.gaph())
x.H.mn(0,x.gTM())},
w2(d){var x=this
switch(x.t.a){case 0:return new B.m(0,d-x.v$.k3.b+x.k3.b)
case 2:return new B.m(0,-d)
case 3:return new B.m(d-x.v$.k3.a+x.k3.a,0)
case 1:return new B.m(-d,0)}},
Vr(d){var x,w,v,u,t
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
x=t.w2(x)
w=new A.aK5(t,x)
v=t.Y
if(t.Vr(x)){x=t.cx
x===$&&B.c()
u=t.k3
v.saX(0,d.mP(x,e,new B.G(0,0,0+u.a,0+u.b),w,t.N,v.a))}else{v.saX(0,null)
w.$2(d,e)}}},
m(){this.Y.saX(0,null)
this.ia()},
dL(d,e){var x=this.H.at
x.toString
x=this.w2(x)
e.bO(0,x.a,x.b)},
mw(d){var x=this,w=x.H.at
w.toString
w=x.w2(w)
if(x.Vr(w)){w=x.k3
return new B.G(0,0,0+w.a,0+w.b)}return null},
d0(d,e){var x,w=this
if(w.v$!=null){x=w.H.at
x.toString
return d.kB(new A.aK4(w,e),w.w2(x),e)}return!1},
qK(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gk9()
if(!(d instanceof B.x)){x=q.H.at
x.toString
return new B.mZ(x,f)}w=B.i1(d.bP(0,q.v$),f)
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
return new B.mZ(r,w.dn(q.w2(r)))},
er(d,e,f,g){var x=this
if(!x.H.r.gmk())return x.vk(d,e,f,g)
x.vk(d,null,f,D.b06(d,e,f,x.H,g,x))},
oK(){return this.er(C.az,null,C.E,null)},
m3(d){return this.er(C.az,null,C.E,d)},
n3(d,e,f){return this.er(d,null,e,f)},
m4(d,e){return this.er(C.az,d,C.E,e)},
KE(d){var x,w=this,v=w.gTM(),u=w.H.at
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
$izm:1}
A.Of.prototype={
ai(d){var x
this.dI(d)
x=this.v$
if(x!=null)x.ai(d)},
af(d){var x
this.dq(0)
x=this.v$
if(x!=null)x.af(0)}}
A.aef.prototype={}
A.aeg.prototype={}
var z=a.updateTypes(["J(J)","BJ(q,hm)","~()","~({curve:fz,descendant:p?,duration:b1,rect:G?})"])
A.axN.prototype={
$2(d,e){return new A.BJ(this.c,e,C.F,this.a.a,null)},
$S:z+1}
A.aK5.prototype={
$2(d,e){var x=this.a.v$
x.toString
d.dh(x,e.a3(0,this.b))},
$S:16}
A.aK4.prototype={
$2(d,e){return this.a.v$.cp(d,e)},
$S:11};(function aliases(){var x=A.Of.prototype
x.a9N=x.ai
x.a9O=x.af})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Mj.prototype,"gAr","ai9",2)
w(u,"gbt","bD",0)
w(u,"gby","bs",0)
w(u,"gbL","bx",0)
w(u,"gc4","bC",0)
v(u,"goJ",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["er","oK","m3","n3","m4"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.a_D,B.a1)
u(B.dk,[A.axN,A.aK5,A.aK4])
v(A.BJ,B.b_)
v(A.aef,B.zN)
v(A.aeg,A.aef)
v(A.aaS,A.aeg)
v(A.Of,B.x)
v(A.Mj,A.Of)
x(A.Of,B.aS)
w(A.aef,B.Gv)
w(A.aeg,D.a1J)})()
B.bx(b.typeUniverse,JSON.parse('{"BJ":{"b_":[],"aA":[],"d":[]},"a_D":{"a1":[],"d":[]},"aaS":{"bm":[],"aQ":[],"q":[]},"Mj":{"x":[],"aS":["x"],"zm":[],"p":[],"X":[],"ar":[]}}'))
var y={a:B.z("ax")}}
$__dart_deferred_initializers__["SntVxuS07V0vKCr5WpCUN3kXkqk="] = $__dart_deferred_initializers__.current
