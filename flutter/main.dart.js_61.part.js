self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
Ap(d,e,f,g,h,i){return new A.a0n(i,g,e,h,d,f,null)},
a0n:function a0n(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
ayp:function ayp(d,e,f){this.a=d
this.b=e
this.c=f},
Co:function Co(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
abE:function abE(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
N4:function N4(d,e,f,g,h,i){var _=this
_.u=d
_.H=e
_.N=f
_.Y=g
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
aL2:function aL2(d,e){this.a=d
this.b=e},
aL1:function aL1(d,e){this.a=d
this.b=e},
P6:function P6(){},
aeU:function aeU(){},
aeV:function aeV(){}},D,B,C
A=a.updateHolder(c[57],A)
D=c[78]
B=c[0]
C=c[2]
A.a0n.prototype={
B(d){var x,w,v,u,t=this,s=null,r={},q=t.c,p=D.b53(d,q,!1),o=t.x
r.a=o
x=t.e
if(x!=null)r.a=new B.bO(x,o,s)
w=t.f==null&&D.b10(d,q)
v=w?B.vC(d):t.f
u=B.axr(p,C.G,v,t.y,!1,s,t.w,s,s,s,new A.ayp(r,t,p))
return w&&v!=null?D.b1_(u):u}}
A.Co.prototype={
aN(d){var x=new A.N4(this.e,this.f,this.r,B.ax(y.h),null,B.ax(y.d))
x.aM()
x.sbk(null)
return x},
aU(d,e){var x
e.sfi(this.e)
e.sbE(0,this.f)
x=this.r
if(x!==e.N){e.N=x
e.b0()
e.bH()}},
dE(d){return new A.abE(this,C.ag)}}
A.abE.prototype={}
A.N4.prototype={
sfi(d){if(d===this.u)return
this.u=d
this.a2()},
sbE(d,e){var x=this,w=x.H
if(e===w)return
if(x.b!=null)w.K(0,x.gAU())
x.H=e
if(x.b!=null)e.Z(0,x.gAU())
x.a2()},
ajH(){this.b0()
this.bH()},
ef(d){if(!(d.e instanceof B.d7))d.e=new B.d7()},
al(d){this.abf(d)
this.H.Z(0,this.gAU())},
ai(d){this.H.K(0,this.gAU())
this.abg(0)},
gfn(){return!0},
gaqE(){switch(B.bQ(this.u).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gV1(){var x=this,w=x.A$
if(w==null)return 0
switch(B.bQ(x.u).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
Tp(d){switch(B.bQ(this.u).a){case 0:return new B.az(0,1/0,d.c,d.d)
case 1:return new B.az(d.a,d.b,0,1/0)}},
bG(d){var x=this.A$
if(x!=null)return x.ar(C.a7,d,x.gbw())
return 0},
bv(d){var x=this.A$
if(x!=null)return x.ar(C.ad,d,x.gbD())
return 0},
bA(d){var x=this.A$
if(x!=null)return x.ar(C.aq,d,x.gbM())
return 0},
bF(d){var x=this.A$
if(x!=null)return x.ar(C.b2,d,x.gc7())
return 0},
d3(d){var x=this.A$
if(x==null)return new B.S(B.B(0,d.a,d.b),B.B(0,d.c,d.d))
return d.bs(x.iC(this.Tp(d)))},
bK(){var x=this,w=y.a.a(B.r.prototype.gX.call(x)),v=x.A$
if(v==null)x.k3=new B.S(B.B(0,w.a,w.b),B.B(0,w.c,w.d))
else{v.c4(x.Tp(w),!0)
v=x.A$.k3
v.toString
x.k3=w.bs(v)}x.H.nD(x.gaqE())
x.H.mw(0,x.gV1())},
wq(d){var x=this
switch(x.u.a){case 0:return new B.m(0,d-x.A$.k3.b+x.k3.b)
case 2:return new B.m(0,-d)
case 3:return new B.m(d-x.A$.k3.a+x.k3.a,0)
case 1:return new B.m(-d,0)}},
WH(d){var x,w,v,u,t
switch(this.N.a){case 0:return!1
case 1:case 2:case 3:x=d.a
if(!(x<0)){w=d.b
if(!(w<0)){v=this.A$.k3
u=v.a
t=this.k3
x=x+u>t.a||w+v.b>t.b}else x=!0}else x=!0
return x}},
aI(d,e){var x,w,v,u,t=this
if(t.A$!=null){x=t.H.at
x.toString
x=t.wq(x)
w=new A.aL2(t,x)
v=t.Y
if(t.WH(x)){x=t.cx
x===$&&B.c()
u=t.k3
v.saY(0,d.mX(x,e,new B.J(0,0,0+u.a,0+u.b),w,t.N,v.a))}else{v.saY(0,null)
w.$2(d,e)}}},
n(){this.Y.saY(0,null)
this.ib()},
dS(d,e){var x=this.H.at
x.toString
x=this.wq(x)
e.bS(0,x.a,x.b)},
mH(d){var x=this,w=x.H.at
w.toString
w=x.wq(w)
if(x.WH(w)){w=x.k3
return new B.J(0,0,0+w.a,0+w.b)}return null},
d6(d,e){var x,w=this
if(w.A$!=null){x=w.H.at
x.toString
return d.ky(new A.aL1(w,e),w.wq(x),e)}return!1},
qT(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gk7()
if(!(d instanceof B.z)){x=q.H.at
x.toString
return new B.na(x,f)}w=B.id(d.bT(0,q.A$),f)
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
return new B.na(r,w.dz(q.wq(r)))},
ey(d,e,f,g){var x=this
if(!x.H.r.gmt())return x.vF(d,e,f,g)
x.vF(d,null,f,D.b1i(d,e,f,x.H,g,x))},
oO(){return this.ey(C.aF,null,C.H,null)},
mc(d){return this.ey(C.aF,null,C.H,d)},
ne(d,e,f){return this.ey(d,null,e,f)},
md(d,e){return this.ey(C.aF,d,C.H,e)},
LA(d){var x,w=this,v=w.gV1(),u=w.H.at
u.toString
x=v-u
switch(w.u.a){case 0:v=w.k3
return new B.J(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.J(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.J(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.J(0-x,0,0+v.a+u,0+v.b)}},
$izV:1}
A.P6.prototype={
al(d){var x
this.dP(d)
x=this.A$
if(x!=null)x.al(d)},
ai(d){var x
this.dA(0)
x=this.A$
if(x!=null)x.ai(0)}}
A.aeU.prototype={}
A.aeV.prototype={}
var z=a.updateTypes(["R(R)","Co(u,hw)","~()","~({curve:fM,descendant:r?,duration:b6,rect:J?})"])
A.ayp.prototype={
$2(d,e){return new A.Co(this.c,e,C.G,this.a.a,null)},
$S:z+1}
A.aL2.prototype={
$2(d,e){var x=this.a.A$
x.toString
d.dr(x,e.a_(0,this.b))},
$S:17}
A.aL1.prototype={
$2(d,e){return this.a.A$.cz(d,e)},
$S:11};(function aliases(){var x=A.P6.prototype
x.abf=x.al
x.abg=x.ai})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.N4.prototype,"gAU","ajH",2)
w(u,"gbw","bG",0)
w(u,"gbD","bv",0)
w(u,"gbM","bA",0)
w(u,"gc7","bF",0)
v(u,"goN",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["ey","oO","mc","ne","md"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.a0n,B.a4)
u(B.dI,[A.ayp,A.aL2,A.aL1])
v(A.Co,B.b2)
v(A.aeU,B.Ao)
v(A.aeV,A.aeU)
v(A.abE,A.aeV)
v(A.P6,B.z)
v(A.N4,A.P6)
x(A.P6,B.aU)
w(A.aeU,B.H7)
w(A.aeV,D.a2s)})()
B.bA(b.typeUniverse,JSON.parse('{"Co":{"b2":[],"aD":[],"d":[]},"a0n":{"a4":[],"d":[]},"abE":{"bs":[],"aT":[],"u":[]},"N4":{"z":[],"aU":["z"],"zV":[],"r":[],"Y":[],"as":[]}}'))
var y={a:B.w("az"),h:B.w("kE"),d:B.w("cT")}}
$__dart_deferred_initializers__["xtPh+i9cm1pGzp6o17Z6p+ktCns="] = $__dart_deferred_initializers__.current
