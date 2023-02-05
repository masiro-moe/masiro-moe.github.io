self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
YX(d,e,f,g,h,i){return new A.YW(i,g,e,h,d,f,null)},
YW:function YW(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
atE:function atE(d,e,f){this.a=d
this.b=e
this.c=f},
Bb:function Bb(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
a7_:function a7_(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
Lt:function Lt(d,e,f,g,h,i){var _=this
_.G=d
_.p=e
_.u=f
_.az=g
_.p$=h
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
aHn:function aHn(d,e){this.a=d
this.b=e},
aHm:function aHm(d,e){this.a=d
this.b=e},
Nh:function Nh(){},
aa7:function aa7(){},
aa8:function aa8(){}},D,B,C
A=a.updateHolder(c[51],A)
D=c[68]
B=c[0]
C=c[2]
A.YW.prototype={
B(d){var x,w,v,u=this,t=null,s={},r=u.c,q=D.b_R(d,r,!1)
s.a=u.x
x=u.f==null&&D.aWX(d,r)
w=x?B.ux(d):u.f
v=B.asI(q,C.F,w,u.y,!1,t,u.w,t,t,t,new A.atE(s,u,q))
return x&&w!=null?D.aWW(v):v}}
A.Bb.prototype={
aN(d){var x=new A.Lt(this.e,this.f,this.r,B.au(),null,B.au())
x.aM()
x.sbc(null)
return x},
aR(d,e){var x
e.sf4(this.e)
e.sbv(0,this.f)
x=this.r
if(x!==e.u){e.u=x
e.aU()
e.bC()}},
co(d){return new A.a7_(this,C.ab)}}
A.a7_.prototype={}
A.Lt.prototype={
sf4(d){if(d===this.G)return
this.G=d
this.a0()},
sbv(d,e){var x=this,w=x.p
if(e===w)return
if(x.b!=null)w.K(0,x.gzC())
x.p=e
if(x.b!=null)e.Z(0,x.gzC())
x.a0()},
agg(){this.aU()
this.bC()},
eq(d){if(!(d.e instanceof B.cL))d.e=new B.cL()},
ao(d){this.a7L(d)
this.p.Z(0,this.gzC())},
aj(d){this.p.K(0,this.gzC())
this.a7M(0)},
gha(){return!0},
gan0(){switch(B.bL(this.G).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gSA(){var x=this,w=x.p$
if(w==null)return 0
switch(B.bL(x.G).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
Rb(d){switch(B.bL(this.G).a){case 0:return new B.aw(0,1/0,d.c,d.d)
case 1:return new B.aw(d.a,d.b,0,1/0)}},
by(d){var x=this.p$
if(x!=null)return x.af(C.a_,d,x.gbm())
return 0},
bl(d){var x=this.p$
if(x!=null)return x.af(C.a4,d,x.gbr())
return 0},
bo(d){var x=this.p$
if(x!=null)return x.af(C.ak,d,x.gbE())
return 0},
bx(d){var x=this.p$
if(x!=null)return x.af(C.aY,d,x.gc0())
return 0},
cI(d){var x=this.p$
if(x==null)return new B.P(B.F(0,d.a,d.b),B.F(0,d.c,d.d))
return d.bs(x.iq(this.Rb(d)))},
bD(){var x=this,w=y.a.a(B.p.prototype.gW.call(x)),v=x.p$
if(v==null)x.k3=new B.P(B.F(0,w.a,w.b),B.F(0,w.c,w.d))
else{v.c7(x.Rb(w),!0)
v=x.p$.k3
v.toString
x.k3=w.bs(v)}x.p.nx(x.gan0())
x.p.mi(0,x.gSA())},
vl(d){var x=this
switch(x.G.a){case 0:return new B.k(0,d-x.p$.k3.b+x.k3.b)
case 2:return new B.k(0,-d)
case 3:return new B.k(d-x.p$.k3.a+x.k3.a,0)
case 1:return new B.k(-d,0)}},
Ub(d){var x,w,v,u,t
switch(this.u.a){case 0:return!1
case 1:case 2:case 3:x=d.a
if(!(x<0)){w=d.b
if(!(w<0)){v=this.p$.k3
u=v.a
t=this.k3
x=x+u>t.a||w+v.b>t.b}else x=!0}else x=!0
return x}},
aI(d,e){var x,w,v,u,t=this
if(t.p$!=null){x=t.p.at
x.toString
x=t.vl(x)
w=new A.aHn(t,x)
v=t.az
if(t.Ub(x)){x=t.cx
x===$&&B.b()
u=t.k3
v.saQ(0,d.mN(x,e,new B.A(0,0,0+u.a,0+u.b),w,t.u,v.a))}else{v.saQ(0,null)
w.$2(d,e)}}},
m(){this.az.saQ(0,null)
this.i4()},
dM(d,e){var x=this.p.at
x.toString
x=this.vl(x)
e.bd(0,x.a,x.b)},
mr(d){var x=this,w=x.p.at
w.toString
w=x.vl(w)
if(x.Ub(w)){w=x.k3
return new B.A(0,0,0+w.a,0+w.b)}return null},
cX(d,e){var x,w=this
if(w.p$!=null){x=w.p.at
x.toString
return d.kw(new A.aHm(w,e),w.vl(x),e)}return!1},
qE(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gk9()
if(!(d instanceof B.z)){x=q.p.at
x.toString
return new B.mu(x,f)}w=B.ju(d.bO(0,q.p$),f)
x=q.p$.k3
x.toString
switch(q.G.a){case 0:v=q.k3.b
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
return new B.mu(r,w.cH(q.vl(r)))},
ec(d,e,f,g){var x=this
if(!x.p.r.gmg())return x.uI(d,e,f,g)
x.uI(d,null,f,D.aXa(d,e,f,x.p,g,x))},
oN(){return this.ec(C.aB,null,C.E,null)},
m0(d){return this.ec(C.aB,null,C.E,d)},
n2(d,e,f){return this.ec(d,null,e,f)},
m1(d,e){return this.ec(C.aB,d,C.E,e)},
JL(d){var x,w=this,v=w.gSA(),u=w.p.at
u.toString
x=v-u
switch(w.G.a){case 0:v=w.k3
return new B.A(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.A(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.A(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.A(0-x,0,0+v.a+u,0+v.b)}},
$iyP:1}
A.Nh.prototype={
ao(d){var x
this.dK(d)
x=this.p$
if(x!=null)x.ao(d)},
aj(d){var x
this.dk(0)
x=this.p$
if(x!=null)x.aj(0)}}
A.aa7.prototype={}
A.aa8.prototype={}
var z=a.updateTypes(["K(K)","Bb(r,hb)","~()","~({curve:fq,descendant:p?,duration:aU,rect:A?})"])
A.atE.prototype={
$2(d,e){return new A.Bb(this.c,e,C.F,this.a.a,null)},
$S:z+1}
A.aHn.prototype={
$2(d,e){var x=this.a.p$
x.toString
d.d9(x,e.a2(0,this.b))},
$S:15}
A.aHm.prototype={
$2(d,e){return this.a.p$.cl(d,e)},
$S:11};(function aliases(){var x=A.Nh.prototype
x.a7L=x.ao
x.a7M=x.aj})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Lt.prototype,"gzC","agg",2)
w(u,"gbm","by",0)
w(u,"gbr","bl",0)
w(u,"gbE","bo",0)
w(u,"gc0","bx",0)
v(u,"gqN",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["ec","oN","m0","n2","m1"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.YW,B.a2)
u(B.da,[A.atE,A.aHn,A.aHm])
v(A.Bb,B.aW)
v(A.aa7,B.zi)
v(A.aa8,A.aa7)
v(A.a7_,A.aa8)
v(A.Nh,B.z)
v(A.Lt,A.Nh)
x(A.Nh,B.aP)
w(A.aa7,B.FY)
w(A.aa8,D.a_Y)})()
B.bm(b.typeUniverse,JSON.parse('{"Bb":{"aW":[],"ay":[],"c":[]},"YW":{"a2":[],"c":[]},"a7_":{"bf":[],"aN":[],"r":[]},"Lt":{"z":[],"aP":["z"],"yP":[],"p":[],"R":[],"aq":[]}}'))
var y={a:B.w("aw")}}
$__dart_deferred_initializers__["CG4iYbsG1F9IU6YIrH995AdIPPs="] = $__dart_deferred_initializers__.current
