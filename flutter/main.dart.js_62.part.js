self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
Aa(d,e,f,g,h,i){return new A.a0i(i,g,e,h,d,f,null)},
a0i:function a0i(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
ayT:function ayT(d,e,f){this.a=d
this.b=e
this.c=f},
C7:function C7(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aby:function aby(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
MR:function MR(d,e,f,g,h,i){var _=this
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
aLR:function aLR(d,e){this.a=d
this.b=e},
aLQ:function aLQ(d,e){this.a=d
this.b=e},
OT:function OT(){},
aeQ:function aeQ(){},
aeR:function aeR(){}},D,B,C
A=a.updateHolder(c[57],A)
D=c[78]
B=c[0]
C=c[2]
A.a0i.prototype={
B(d){var x,w,v,u,t=this,s=null,r={},q=t.c,p=D.b62(d,q,!1),o=t.x
r.a=o
x=t.e
if(x!=null)r.a=new B.bJ(x,o,s)
w=t.f==null&&D.b22(d,q)
v=w?B.vu(d):t.f
u=B.axV(p,C.H,v,t.y,!1,s,t.w,s,s,s,new A.ayT(r,t,p))
return w&&v!=null?D.b21(u):u}}
A.C7.prototype={
aO(d){var x=new A.MR(this.e,this.f,this.r,B.au(),null,B.au())
x.aN()
x.sbl(null)
return x},
aV(d,e){var x
e.sfd(this.e)
e.sbB(0,this.f)
x=this.r
if(x!==e.N){e.N=x
e.b0()
e.bH()}},
dB(d){return new A.aby(this,C.ag)}}
A.aby.prototype={}
A.MR.prototype={
sfd(d){if(d===this.u)return
this.u=d
this.a1()},
sbB(d,e){var x=this,w=x.H
if(e===w)return
if(x.b!=null)w.K(0,x.gAI())
x.H=e
if(x.b!=null)e.Y(0,x.gAI())
x.a1()},
ajL(){this.b0()
this.bH()},
ea(d){if(!(d.e instanceof B.d0))d.e=new B.d0()},
aj(d){this.ab8(d)
this.H.Y(0,this.gAI())},
af(d){this.H.K(0,this.gAI())
this.ab9(0)},
gfh(){return!0},
gar6(){switch(B.bL(this.u).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gUS(){var x=this,w=x.A$
if(w==null)return 0
switch(B.bL(x.u).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
Tf(d){switch(B.bL(this.u).a){case 0:return new B.aw(0,1/0,d.c,d.d)
case 1:return new B.aw(d.a,d.b,0,1/0)}},
bF(d){var x=this.A$
if(x!=null)return x.ap(C.a5,d,x.gbv())
return 0},
bu(d){var x=this.A$
if(x!=null)return x.ap(C.ad,d,x.gbA())
return 0},
bz(d){var x=this.A$
if(x!=null)return x.ap(C.ap,d,x.gbM())
return 0},
bE(d){var x=this.A$
if(x!=null)return x.ap(C.b_,d,x.gc6())
return 0},
cX(d){var x=this.A$
if(x==null)return new B.M(B.B(0,d.a,d.b),B.B(0,d.c,d.d))
return d.bs(x.iC(this.Tf(d)))},
bK(){var x=this,w=y.a.a(B.r.prototype.gX.call(x)),v=x.A$
if(v==null)x.k3=new B.M(B.B(0,w.a,w.b),B.B(0,w.c,w.d))
else{v.c3(x.Tf(w),!0)
v=x.A$.k3
v.toString
x.k3=w.bs(v)}x.H.nC(x.gar6())
x.H.mu(0,x.gUS())},
wm(d){var x=this
switch(x.u.a){case 0:return new B.m(0,d-x.A$.k3.b+x.k3.b)
case 2:return new B.m(0,-d)
case 3:return new B.m(d-x.A$.k3.a+x.k3.a,0)
case 1:return new B.m(-d,0)}},
Wx(d){var x,w,v,u,t
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
x=t.wm(x)
w=new A.aLR(t,x)
v=t.Z
if(t.Wx(x)){x=t.cx
x===$&&B.c()
u=t.k3
v.saZ(0,d.mV(x,e,new B.H(0,0,0+u.a,0+u.b),w,t.N,v.a))}else{v.saZ(0,null)
w.$2(d,e)}}},
m(){this.Z.saZ(0,null)
this.ig()},
dO(d,e){var x=this.H.at
x.toString
x=this.wm(x)
e.bR(0,x.a,x.b)},
mF(d){var x=this,w=x.H.at
w.toString
w=x.wm(w)
if(x.Wx(w)){w=x.k3
return new B.H(0,0,0+w.a,0+w.b)}return null},
d_(d,e){var x,w=this
if(w.A$!=null){x=w.H.at
x.toString
return d.kE(new A.aLQ(w,e),w.wm(x),e)}return!1},
qX(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gke()
if(!(d instanceof B.x)){x=q.H.at
x.toString
return new B.n6(x,f)}w=B.i6(d.bS(0,q.A$),f)
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
return new B.n6(r,w.du(q.wm(r)))},
ev(d,e,f,g){var x=this
if(!x.H.r.gmr())return x.vB(d,e,f,g)
x.vB(d,null,f,D.b2l(d,e,f,x.H,g,x))},
oR(){return this.ev(C.aE,null,C.F,null)},
mc(d){return this.ev(C.aE,null,C.F,d)},
nb(d,e,f){return this.ev(d,null,e,f)},
md(d,e){return this.ev(C.aE,d,C.F,e)},
Lo(d){var x,w=this,v=w.gUS(),u=w.H.at
u.toString
x=v-u
switch(w.u.a){case 0:v=w.k3
return new B.H(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.H(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.H(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.H(0-x,0,0+v.a+u,0+v.b)}},
$izI:1}
A.OT.prototype={
aj(d){var x
this.dL(d)
x=this.A$
if(x!=null)x.aj(d)},
af(d){var x
this.dv(0)
x=this.A$
if(x!=null)x.af(0)}}
A.aeQ.prototype={}
A.aeR.prototype={}
var z=a.updateTypes(["K(K)","C7(q,hr)","~()","~({curve:fC,descendant:r?,duration:b2,rect:H?})"])
A.ayT.prototype={
$2(d,e){return new A.C7(this.c,e,C.H,this.a.a,null)},
$S:z+1}
A.aLR.prototype={
$2(d,e){var x=this.a.A$
x.toString
d.dm(x,e.a3(0,this.b))},
$S:18}
A.aLQ.prototype={
$2(d,e){return this.a.A$.ct(d,e)},
$S:12};(function aliases(){var x=A.OT.prototype
x.ab8=x.aj
x.ab9=x.af})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.MR.prototype,"gAI","ajL",2)
w(u,"gbv","bF",0)
w(u,"gbA","bu",0)
w(u,"gbM","bz",0)
w(u,"gc6","bE",0)
v(u,"goQ",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["ev","oR","mc","nb","md"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.a0i,B.a2)
u(B.dq,[A.ayT,A.aLR,A.aLQ])
v(A.C7,B.b0)
v(A.aeQ,B.A9)
v(A.aeR,A.aeQ)
v(A.aby,A.aeR)
v(A.OT,B.x)
v(A.MR,A.OT)
x(A.OT,B.aS)
w(A.aeQ,B.GY)
w(A.aeR,D.a2o)})()
B.bv(b.typeUniverse,JSON.parse('{"C7":{"b0":[],"az":[],"d":[]},"a0i":{"a2":[],"d":[]},"aby":{"bm":[],"aQ":[],"q":[]},"MR":{"x":[],"aS":["x"],"zI":[],"r":[],"Y":[],"as":[]}}'))
var y={a:B.z("aw")}}
$__dart_deferred_initializers__["MLKJHbDU4dOpTkY1bJ6ov64ypaU="] = $__dart_deferred_initializers__.current
