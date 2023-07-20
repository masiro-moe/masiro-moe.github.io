self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
AQ(d,e,f,g,h,i){return new A.a1p(i,g,e,h,d,f,null)},
a1p:function a1p(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
aAv:function aAv(d,e,f){this.a=d
this.b=e
this.c=f},
CO:function CO(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
acQ:function acQ(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
NM:function NM(d,e,f,g,h,i){var _=this
_.u=d
_.H=e
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
aNS:function aNS(d,e){this.a=d
this.b=e},
aNR:function aNR(d,e){this.a=d
this.b=e},
PP:function PP(){},
ag5:function ag5(){},
ag6:function ag6(){}},D,B,C
A=a.updateHolder(c[57],A)
D=c[78]
B=c[0]
C=c[2]
A.a1p.prototype={
B(d){var x,w,v,u,t=this,s=null,r={},q=t.c,p=D.b8s(d,q,!1),o=t.x
r.a=o
x=t.e
if(x!=null)r.a=new B.bR(x,o,s)
w=t.f==null&&D.b4l(d,q)
v=w?B.w2(d):t.f
u=B.azx(p,C.H,v,t.y,!1,s,t.w,s,s,s,new A.aAv(r,t,p))
return w&&v!=null?D.b4k(u):u}}
A.CO.prototype={
aO(d){var x=new A.NM(this.e,this.f,this.r,B.ax(y.h),null,B.ax(y.d))
x.aN()
x.sbl(null)
return x},
aX(d,e){var x
e.sfl(this.e)
e.sbF(0,this.f)
x=this.r
if(x!==e.N){e.N=x
e.b1()
e.bI()}},
dH(d){return new A.acQ(this,C.ag)}}
A.acQ.prototype={}
A.NM.prototype={
sfl(d){if(d===this.u)return
this.u=d
this.a2()},
sbF(d,e){var x=this,w=x.H
if(e===w)return
if(x.b!=null)w.K(0,x.gBt())
x.H=e
if(x.b!=null)e.Y(0,x.gBt())
x.a2()},
ali(){this.b1()
this.bI()},
eh(d){if(!(d.e instanceof B.da))d.e=new B.da()},
al(d){this.acy(d)
this.H.Y(0,this.gBt())},
aj(d){this.H.K(0,this.gBt())
this.acz(0)},
gfq(){return!0},
gasT(){switch(B.bT(this.u).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gVT(){var x=this,w=x.A$
if(w==null)return 0
switch(B.bT(x.u).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
Uf(d){switch(B.bT(this.u).a){case 0:return new B.az(0,1/0,d.c,d.d)
case 1:return new B.az(d.a,d.b,0,1/0)}},
bH(d){var x=this.A$
if(x!=null)return x.au(C.a7,d,x.gby())
return 0},
bx(d){var x=this.A$
if(x!=null)return x.au(C.ad,d,x.gbE())
return 0},
bC(d){var x=this.A$
if(x!=null)return x.au(C.aq,d,x.gbN())
return 0},
bG(d){var x=this.A$
if(x!=null)return x.au(C.b2,d,x.gc8())
return 0},
d6(d){var x=this.A$
if(x==null)return new B.S(B.E(0,d.a,d.b),B.E(0,d.c,d.d))
return d.bt(x.iI(this.Uf(d)))},
bL(){var x=this,w=y.a.a(B.t.prototype.gX.call(x)),v=x.A$
if(v==null)x.k3=new B.S(B.E(0,w.a,w.b),B.E(0,w.c,w.d))
else{v.c5(x.Uf(w),!0)
v=x.A$.k3
v.toString
x.k3=w.bt(v)}x.H.nT(x.gasT())
x.H.mK(0,x.gVT())},
wW(d){var x=this
switch(x.u.a){case 0:return new B.m(0,d-x.A$.k3.b+x.k3.b)
case 2:return new B.m(0,-d)
case 3:return new B.m(d-x.A$.k3.a+x.k3.a,0)
case 1:return new B.m(-d,0)}},
XA(d){var x,w,v,u,t
switch(this.N.a){case 0:return!1
case 1:case 2:case 3:x=d.a
if(!(x<0)){w=d.b
if(!(w<0)){v=this.A$.k3
u=v.a
t=this.k3
x=x+u>t.a||w+v.b>t.b}else x=!0}else x=!0
return x}},
aK(d,e){var x,w,v,u,t=this
if(t.A$!=null){x=t.H.at
x.toString
x=t.wW(x)
w=new A.aNS(t,x)
v=t.Z
if(t.XA(x)){x=t.cx
x===$&&B.c()
u=t.k3
v.saZ(0,d.na(x,e,new B.P(0,0,0+u.a,0+u.b),w,t.N,v.a))}else{v.saZ(0,null)
w.$2(d,e)}}},
n(){this.Z.saZ(0,null)
this.im()},
dU(d,e){var x=this.H.at
x.toString
x=this.wW(x)
e.bU(0,x.a,x.b)},
mW(d){var x=this,w=x.H.at
w.toString
w=x.wW(w)
if(x.XA(w)){w=x.k3
return new B.P(0,0,0+w.a,0+w.b)}return null},
d9(d,e){var x,w=this
if(w.A$!=null){x=w.H.at
x.toString
return d.kL(new A.aNR(w,e),w.wW(x),e)}return!1},
rk(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gkk()
if(!(d instanceof B.z)){x=q.H.at
x.toString
return new B.np(x,f)}w=B.io(d.bV(0,q.A$),f)
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
return new B.np(r,w.dC(q.wW(r)))},
eB(d,e,f,g){var x=this
if(!x.H.r.gmH())return x.wa(d,e,f,g)
x.wa(d,null,f,D.b4D(d,e,f,x.H,g,x))},
pd(){return this.eB(C.aF,null,C.E,null)},
mq(d){return this.eB(C.aF,null,C.E,d)},
nt(d,e,f){return this.eB(d,null,e,f)},
mr(d,e){return this.eB(C.aF,d,C.E,e)},
Mj(d){var x,w=this,v=w.gVT(),u=w.H.at
u.toString
x=v-u
switch(w.u.a){case 0:v=w.k3
return new B.P(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.P(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.P(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.P(0-x,0,0+v.a+u,0+v.b)}},
$iAl:1}
A.PP.prototype={
al(d){var x
this.dR(d)
x=this.A$
if(x!=null)x.al(d)},
aj(d){var x
this.dD(0)
x=this.A$
if(x!=null)x.aj(0)}}
A.ag5.prototype={}
A.ag6.prototype={}
var z=a.updateTypes(["R(R)","CO(r,hD)","~()","~({curve:fO,descendant:t?,duration:b3,rect:P?})"])
A.aAv.prototype={
$2(d,e){return new A.CO(this.c,e,C.H,this.a.a,null)},
$S:z+1}
A.aNS.prototype={
$2(d,e){var x=this.a.A$
x.toString
d.dt(x,e.a0(0,this.b))},
$S:17}
A.aNR.prototype={
$2(d,e){return this.a.A$.cA(d,e)},
$S:12};(function aliases(){var x=A.PP.prototype
x.acy=x.al
x.acz=x.aj})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.NM.prototype,"gBt","ali",2)
w(u,"gby","bH",0)
w(u,"gbE","bx",0)
w(u,"gbN","bC",0)
w(u,"gc8","bG",0)
v(u,"gpc",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["eB","pd","mq","nt","mr"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.a1p,B.a4)
u(B.dC,[A.aAv,A.aNS,A.aNR])
v(A.CO,B.b5)
v(A.ag5,B.AP)
v(A.ag6,A.ag5)
v(A.acQ,A.ag6)
v(A.PP,B.z)
v(A.NM,A.PP)
x(A.PP,B.aV)
w(A.ag5,B.HJ)
w(A.ag6,D.a3x)})()
B.bC(b.typeUniverse,JSON.parse('{"CO":{"b5":[],"aD":[],"d":[]},"a1p":{"a4":[],"d":[]},"acQ":{"bs":[],"aU":[],"r":[]},"NM":{"z":[],"aV":["z"],"Al":[],"t":[],"Y":[],"at":[]}}'))
var y={a:B.w("az"),h:B.w("kN"),d:B.w("cX")}}
$__dart_deferred_initializers__["0pemIgExyS4kusasRHnroGbCtWM="] = $__dart_deferred_initializers__.current
