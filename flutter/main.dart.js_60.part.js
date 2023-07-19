self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
zR(d,e,f,g,h,i){return new A.a_J(i,g,e,h,d,f,null)},
a_J:function a_J(d,e,f,g,h,i,j){var _=this
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
BM:function BM(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aaY:function aaY(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
Mq:function Mq(d,e,f,g,h,i){var _=this
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
aKo:function aKo(d,e){this.a=d
this.b=e},
aKn:function aKn(d,e){this.a=d
this.b=e},
Om:function Om(){},
aei:function aei(){},
aej:function aej(){}},D,B,C
A=a.updateHolder(c[57],A)
D=c[76]
B=c[0]
C=c[2]
A.a_J.prototype={
B(d){var x,w,v,u,t=this,s=null,r={},q=t.c,p=D.b4f(d,q,!1),o=t.x
r.a=o
x=t.e
if(x!=null)r.a=new B.bJ(x,o,s)
w=t.f==null&&D.b0f(d,q)
v=w?B.vi(d):t.f
u=B.awP(p,C.G,v,t.y,!1,s,t.w,s,s,s,new A.axN(r,t,p))
return w&&v!=null?D.b0e(u):u}}
A.BM.prototype={
aO(d){var x=new A.Mq(this.e,this.f,this.r,B.as(),null,B.as())
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
dv(d){return new A.aaY(this,C.ad)}}
A.aaY.prototype={}
A.Mq.prototype={
sfc(d){if(d===this.t)return
this.t=d
this.a1()},
sbz(d,e){var x=this,w=x.H
if(e===w)return
if(x.b!=null)w.L(0,x.gAq())
x.H=e
if(x.b!=null)e.Z(0,x.gAq())
x.a1()},
aik(){this.aZ()
this.bG()},
e5(d){if(!(d.e instanceof B.cZ))d.e=new B.cZ()},
ai(d){this.a9Y(d)
this.H.Z(0,this.gAq())},
af(d){this.H.L(0,this.gAq())
this.a9Z(0)},
gfg(){return!0},
gapt(){switch(B.bL(this.t).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gTV(){var x=this,w=x.v$
if(w==null)return 0
switch(B.bL(x.t).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
Sl(d){switch(B.bL(this.t).a){case 0:return new B.ax(0,1/0,d.c,d.d)
case 1:return new B.ax(d.a,d.b,0,1/0)}},
bD(d){var x=this.v$
if(x!=null)return x.am(C.a4,d,x.gbt())
return 0},
bs(d){var x=this.v$
if(x!=null)return x.am(C.ab,d,x.gby())
return 0},
bx(d){var x=this.v$
if(x!=null)return x.am(C.ao,d,x.gbL())
return 0},
bC(d){var x=this.v$
if(x!=null)return x.am(C.aX,d,x.gc4())
return 0},
cY(d){var x=this.v$
if(x==null)return new B.N(B.B(0,d.a,d.b),B.B(0,d.c,d.d))
return d.br(x.iy(this.Sl(d)))},
bK(){var x=this,w=y.a.a(B.p.prototype.gX.call(x)),v=x.v$
if(v==null)x.k3=new B.N(B.B(0,w.a,w.b),B.B(0,w.c,w.d))
else{v.c0(x.Sl(w),!0)
v=x.v$.k3
v.toString
x.k3=w.br(v)}x.H.nw(x.gapt())
x.H.mo(0,x.gTV())},
w2(d){var x=this
switch(x.t.a){case 0:return new B.m(0,d-x.v$.k3.b+x.k3.b)
case 2:return new B.m(0,-d)
case 3:return new B.m(d-x.v$.k3.a+x.k3.a,0)
case 1:return new B.m(-d,0)}},
VA(d){var x,w,v,u,t
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
w=new A.aKo(t,x)
v=t.Y
if(t.VA(x)){x=t.cx
x===$&&B.c()
u=t.k3
v.saX(0,d.mP(x,e,new B.H(0,0,0+u.a,0+u.b),w,t.N,v.a))}else{v.saX(0,null)
w.$2(d,e)}}},
m(){this.Y.saX(0,null)
this.ia()},
dL(d,e){var x=this.H.at
x.toString
x=this.w2(x)
e.bO(0,x.a,x.b)},
mx(d){var x=this,w=x.H.at
w.toString
w=x.w2(w)
if(x.VA(w)){w=x.k3
return new B.H(0,0,0+w.a,0+w.b)}return null},
d0(d,e){var x,w=this
if(w.v$!=null){x=w.H.at
x.toString
return d.kB(new A.aKn(w,e),w.w2(x),e)}return!1},
qJ(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gk9()
if(!(d instanceof B.x)){x=q.H.at
x.toString
return new B.mX(x,f)}w=B.i1(d.bP(0,q.v$),f)
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
return new B.mX(r,w.dn(q.w2(r)))},
er(d,e,f,g){var x=this
if(!x.H.r.gml())return x.vk(d,e,f,g)
x.vk(d,null,f,D.b0y(d,e,f,x.H,g,x))},
oJ(){return this.er(C.aC,null,C.E,null)},
m5(d){return this.er(C.aC,null,C.E,d)},
n4(d,e,f){return this.er(d,null,e,f)},
m6(d,e){return this.er(C.aC,d,C.E,e)},
KN(d){var x,w=this,v=w.gTV(),u=w.H.at
u.toString
x=v-u
switch(w.t.a){case 0:v=w.k3
return new B.H(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.H(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.H(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.H(0-x,0,0+v.a+u,0+v.b)}},
$izp:1}
A.Om.prototype={
ai(d){var x
this.dI(d)
x=this.v$
if(x!=null)x.ai(d)},
af(d){var x
this.dq(0)
x=this.v$
if(x!=null)x.af(0)}}
A.aei.prototype={}
A.aej.prototype={}
var z=a.updateTypes(["J(J)","BM(q,ho)","~()","~({curve:fz,descendant:p?,duration:b1,rect:H?})"])
A.axN.prototype={
$2(d,e){return new A.BM(this.c,e,C.G,this.a.a,null)},
$S:z+1}
A.aKo.prototype={
$2(d,e){var x=this.a.v$
x.toString
d.dh(x,e.a3(0,this.b))},
$S:16}
A.aKn.prototype={
$2(d,e){return this.a.v$.cp(d,e)},
$S:12};(function aliases(){var x=A.Om.prototype
x.a9Y=x.ai
x.a9Z=x.af})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Mq.prototype,"gAq","aik",2)
w(u,"gbt","bD",0)
w(u,"gby","bs",0)
w(u,"gbL","bx",0)
w(u,"gc4","bC",0)
v(u,"goI",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["er","oJ","m5","n4","m6"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.a_J,B.a1)
u(B.dn,[A.axN,A.aKo,A.aKn])
v(A.BM,B.b_)
v(A.aei,B.zQ)
v(A.aej,A.aei)
v(A.aaY,A.aej)
v(A.Om,B.x)
v(A.Mq,A.Om)
x(A.Om,B.aS)
w(A.aei,B.GD)
w(A.aej,D.a1Q)})()
B.bx(b.typeUniverse,JSON.parse('{"BM":{"b_":[],"aA":[],"d":[]},"a_J":{"a1":[],"d":[]},"aaY":{"bm":[],"aQ":[],"q":[]},"Mq":{"x":[],"aS":["x"],"zp":[],"p":[],"X":[],"ar":[]}}'))
var y={a:B.z("ax")}}
$__dart_deferred_initializers__["gYR42zxPGsrR7DpYUVyjo9PWrdM="] = $__dart_deferred_initializers__.current
