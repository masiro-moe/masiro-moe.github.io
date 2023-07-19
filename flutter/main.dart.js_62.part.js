self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
zX(d,e,f,g,h,i){return new A.a_S(i,g,e,h,d,f,null)},
a_S:function a_S(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
axV:function axV(d,e,f){this.a=d
this.b=e
this.c=f},
BT:function BT(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
ab6:function ab6(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
My:function My(d,e,f,g,h,i){var _=this
_.u=d
_.G=e
_.N=f
_.Z=g
_.A$=h
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
aKL:function aKL(d,e){this.a=d
this.b=e},
aKK:function aKK(d,e){this.a=d
this.b=e},
Ox:function Ox(){},
aep:function aep(){},
aeq:function aeq(){}},D,B,C
A=a.updateHolder(c[57],A)
D=c[78]
B=c[0]
C=c[2]
A.a_S.prototype={
B(d){var x,w,v,u,t=this,s=null,r={},q=t.c,p=D.b4K(d,q,!1),o=t.x
r.a=o
x=t.e
if(x!=null)r.a=new B.bJ(x,o,s)
w=t.f==null&&D.b0L(d,q)
v=w?B.vm(d):t.f
u=B.awX(p,C.G,v,t.y,!1,s,t.w,s,s,s,new A.axV(r,t,p))
return w&&v!=null?D.b0K(u):u}}
A.BT.prototype={
aO(d){var x=new A.My(this.e,this.f,this.r,B.at(),null,B.at())
x.aN()
x.sbl(null)
return x},
aV(d,e){var x
e.sfe(this.e)
e.sbA(0,this.f)
x=this.r
if(x!==e.N){e.N=x
e.b_()
e.bG()}},
dz(d){return new A.ab6(this,C.ae)}}
A.ab6.prototype={}
A.My.prototype={
sfe(d){if(d===this.u)return
this.u=d
this.a1()},
sbA(d,e){var x=this,w=x.G
if(e===w)return
if(x.b!=null)w.K(0,x.gAB())
x.G=e
if(x.b!=null)e.Y(0,x.gAB())
x.a1()},
ajo(){this.b_()
this.bG()},
e9(d){if(!(d.e instanceof B.d_))d.e=new B.d_()},
aj(d){this.aaH(d)
this.G.Y(0,this.gAB())},
ag(d){this.G.K(0,this.gAB())
this.aaI(0)},
gfh(){return!0},
gaqJ(){switch(B.bL(this.u).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gUw(){var x=this,w=x.A$
if(w==null)return 0
switch(B.bL(x.u).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
SU(d){switch(B.bL(this.u).a){case 0:return new B.ax(0,1/0,d.c,d.d)
case 1:return new B.ax(d.a,d.b,0,1/0)}},
bE(d){var x=this.A$
if(x!=null)return x.ap(C.a5,d,x.gbu())
return 0},
bt(d){var x=this.A$
if(x!=null)return x.ap(C.ab,d,x.gbz())
return 0},
by(d){var x=this.A$
if(x!=null)return x.ap(C.ao,d,x.gbL())
return 0},
bD(d){var x=this.A$
if(x!=null)return x.ap(C.aZ,d,x.gc6())
return 0},
cZ(d){var x=this.A$
if(x==null)return new B.L(B.B(0,d.a,d.b),B.B(0,d.c,d.d))
return d.br(x.iA(this.SU(d)))},
bK(){var x=this,w=y.a.a(B.q.prototype.gX.call(x)),v=x.A$
if(v==null)x.k3=new B.L(B.B(0,w.a,w.b),B.B(0,w.c,w.d))
else{v.c2(x.SU(w),!0)
v=x.A$.k3
v.toString
x.k3=w.br(v)}x.G.nA(x.gaqJ())
x.G.mq(0,x.gUw())},
wf(d){var x=this
switch(x.u.a){case 0:return new B.m(0,d-x.A$.k3.b+x.k3.b)
case 2:return new B.m(0,-d)
case 3:return new B.m(d-x.A$.k3.a+x.k3.a,0)
case 1:return new B.m(-d,0)}},
Wb(d){var x,w,v,u,t
switch(this.N.a){case 0:return!1
case 1:case 2:case 3:x=d.a
if(!(x<0)){w=d.b
if(!(w<0)){v=this.A$.k3
u=v.a
t=this.k3
x=x+u>t.a||w+v.b>t.b}else x=!0}else x=!0
return x}},
aK(d,e){var x,w,v,u,t=this
if(t.A$!=null){x=t.G.at
x.toString
x=t.wf(x)
w=new A.aKL(t,x)
v=t.Z
if(t.Wb(x)){x=t.cx
x===$&&B.c()
u=t.k3
v.saY(0,d.mS(x,e,new B.G(0,0,0+u.a,0+u.b),w,t.N,v.a))}else{v.saY(0,null)
w.$2(d,e)}}},
m(){this.Z.saY(0,null)
this.ib()},
dN(d,e){var x=this.G.at
x.toString
x=this.wf(x)
e.bR(0,x.a,x.b)},
mA(d){var x=this,w=x.G.at
w.toString
w=x.wf(w)
if(x.Wb(w)){w=x.k3
return new B.G(0,0,0+w.a,0+w.b)}return null},
d1(d,e){var x,w=this
if(w.A$!=null){x=w.G.at
x.toString
return d.kB(new A.aKK(w,e),w.wf(x),e)}return!1},
qV(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gka()
if(!(d instanceof B.x)){x=q.G.at
x.toString
return new B.n2(x,f)}w=B.i5(d.bS(0,q.A$),f)
x=q.A$.k3
x.toString
switch(q.u.a){case 0:v=q.k3.b
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
return new B.n2(r,w.dr(q.wf(r)))},
eu(d,e,f,g){var x=this
if(!x.G.r.gmn())return x.vx(d,e,f,g)
x.vx(d,null,f,D.b13(d,e,f,x.G,g,x))},
oO(){return this.eu(C.aD,null,C.E,null)},
m8(d){return this.eu(C.aD,null,C.E,d)},
n8(d,e,f){return this.eu(d,null,e,f)},
m9(d,e){return this.eu(C.aD,d,C.E,e)},
La(d){var x,w=this,v=w.gUw(),u=w.G.at
u.toString
x=v-u
switch(w.u.a){case 0:v=w.k3
return new B.G(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.G(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.G(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.G(0-x,0,0+v.a+u,0+v.b)}},
$izv:1}
A.Ox.prototype={
aj(d){var x
this.dK(d)
x=this.A$
if(x!=null)x.aj(d)},
ag(d){var x
this.ds(0)
x=this.A$
if(x!=null)x.ag(0)}}
A.aep.prototype={}
A.aeq.prototype={}
var z=a.updateTypes(["K(K)","BT(p,hr)","~()","~({curve:fB,descendant:q?,duration:b1,rect:G?})"])
A.axV.prototype={
$2(d,e){return new A.BT(this.c,e,C.G,this.a.a,null)},
$S:z+1}
A.aKL.prototype={
$2(d,e){var x=this.a.A$
x.toString
d.dj(x,e.a3(0,this.b))},
$S:18}
A.aKK.prototype={
$2(d,e){return this.a.A$.ct(d,e)},
$S:12};(function aliases(){var x=A.Ox.prototype
x.aaH=x.aj
x.aaI=x.ag})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.My.prototype,"gAB","ajo",2)
w(u,"gbu","bE",0)
w(u,"gbz","bt",0)
w(u,"gbL","by",0)
w(u,"gc6","bD",0)
v(u,"goN",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["eu","oO","m8","n8","m9"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.a_S,B.a1)
u(B.dr,[A.axV,A.aKL,A.aKK])
v(A.BT,B.b_)
v(A.aep,B.zW)
v(A.aeq,A.aep)
v(A.ab6,A.aeq)
v(A.Ox,B.x)
v(A.My,A.Ox)
x(A.Ox,B.aS)
w(A.aep,B.GJ)
w(A.aeq,D.a1Z)})()
B.bv(b.typeUniverse,JSON.parse('{"BT":{"b_":[],"aA":[],"d":[]},"a_S":{"a1":[],"d":[]},"ab6":{"bm":[],"aQ":[],"p":[]},"My":{"x":[],"aS":["x"],"zv":[],"q":[],"X":[],"ar":[]}}'))
var y={a:B.z("ax")}}
$__dart_deferred_initializers__["twInjksTsjvRm7Oj81qQr6Tc+Z0="] = $__dart_deferred_initializers__.current
