self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
YN(d,e,f,g,h,i){return new A.YM(i,g,e,h,d,f,null)},
YM:function YM(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
atp:function atp(d,e,f){this.a=d
this.b=e
this.c=f},
B8:function B8(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
a6T:function a6T(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
Lj:function Lj(d,e,f,g,h,i){var _=this
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
aGY:function aGY(d,e){this.a=d
this.b=e},
aGX:function aGX(d,e){this.a=d
this.b=e},
N7:function N7(){},
aa1:function aa1(){},
aa2:function aa2(){}},D,B,C
A=a.updateHolder(c[62],A)
D=c[79]
B=c[0]
C=c[2]
A.YM.prototype={
B(d){var x,w,v,u=this,t=null,s={},r=u.c,q=D.b_g(d,r,!1)
s.a=u.x
x=u.f==null&&D.aWp(d,r)
w=x?B.ut(d):u.f
v=B.ast(q,C.F,w,u.y,!1,t,u.w,t,t,t,new A.atp(s,u,q))
return x&&w!=null?D.aWo(v):v}}
A.B8.prototype={
aN(d){var x=new A.Lj(this.e,this.f,this.r,B.as(),null,B.as())
x.aM()
x.sbc(null)
return x},
aR(d,e){var x
e.sf3(this.e)
e.sbv(0,this.f)
x=this.r
if(x!==e.u){e.u=x
e.aU()
e.bC()}},
cm(d){return new A.a6T(this,C.aa)}}
A.a6T.prototype={}
A.Lj.prototype={
sf3(d){if(d===this.G)return
this.G=d
this.a0()},
sbv(d,e){var x=this,w=x.p
if(e===w)return
if(x.b!=null)w.K(0,x.gzz())
x.p=e
if(x.b!=null)e.Z(0,x.gzz())
x.a0()},
afV(){this.aU()
this.bC()},
eq(d){if(!(d.e instanceof B.cI))d.e=new B.cI()},
ao(d){this.a7z(d)
this.p.Z(0,this.gzz())},
aj(d){this.p.K(0,this.gzz())
this.a7A(0)},
gh6(){return!0},
gamG(){switch(B.bJ(this.G).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gSu(){var x=this,w=x.p$
if(w==null)return 0
switch(B.bJ(x.G).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
R4(d){switch(B.bJ(this.G).a){case 0:return new B.av(0,1/0,d.c,d.d)
case 1:return new B.av(d.a,d.b,0,1/0)}},
by(d){var x=this.p$
if(x!=null)return x.af(C.a_,d,x.gbm())
return 0},
bl(d){var x=this.p$
if(x!=null)return x.af(C.a3,d,x.gbs())
return 0},
bo(d){var x=this.p$
if(x!=null)return x.af(C.al,d,x.gbE())
return 0},
bx(d){var x=this.p$
if(x!=null)return x.af(C.aX,d,x.gc0())
return 0},
cI(d){var x=this.p$
if(x==null)return new B.P(B.F(0,d.a,d.b),B.F(0,d.c,d.d))
return d.bt(x.im(this.R4(d)))},
bD(){var x=this,w=y.a.a(B.p.prototype.gW.call(x)),v=x.p$
if(v==null)x.k3=new B.P(B.F(0,w.a,w.b),B.F(0,w.c,w.d))
else{v.c7(x.R4(w),!0)
v=x.p$.k3
v.toString
x.k3=w.bt(v)}x.p.nw(x.gamG())
x.p.mg(0,x.gSu())},
vh(d){var x=this
switch(x.G.a){case 0:return new B.k(0,d-x.p$.k3.b+x.k3.b)
case 2:return new B.k(0,-d)
case 3:return new B.k(d-x.p$.k3.a+x.k3.a,0)
case 1:return new B.k(-d,0)}},
U5(d){var x,w,v,u,t
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
x=t.vh(x)
w=new A.aGY(t,x)
v=t.az
if(t.U5(x)){x=t.cx
x===$&&B.b()
u=t.k3
v.saQ(0,d.mL(x,e,new B.A(0,0,0+u.a,0+u.b),w,t.u,v.a))}else{v.saQ(0,null)
w.$2(d,e)}}},
m(){this.az.saQ(0,null)
this.i2()},
dL(d,e){var x=this.p.at
x.toString
x=this.vh(x)
e.bd(0,x.a,x.b)},
mp(d){var x=this,w=x.p.at
w.toString
w=x.vh(w)
if(x.U5(w)){w=x.k3
return new B.A(0,0,0+w.a,0+w.b)}return null},
cX(d,e){var x,w=this
if(w.p$!=null){x=w.p.at
x.toString
return d.kv(new A.aGX(w,e),w.vh(x),e)}return!1},
qA(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gk8()
if(!(d instanceof B.z)){x=q.p.at
x.toString
return new B.mu(x,f)}w=B.jr(d.bO(0,q.p$),f)
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
return new B.mu(r,w.cH(q.vh(r)))},
ec(d,e,f,g){var x=this
if(!x.p.r.gme())return x.uE(d,e,f,g)
x.uE(d,null,f,D.aWD(d,e,f,x.p,g,x))},
oM(){return this.ec(C.aA,null,C.E,null)},
lZ(d){return this.ec(C.aA,null,C.E,d)},
n1(d,e,f){return this.ec(d,null,e,f)},
m_(d,e){return this.ec(C.aA,d,C.E,e)},
JD(d){var x,w=this,v=w.gSu(),u=w.p.at
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
$iyO:1}
A.N7.prototype={
ao(d){var x
this.dJ(d)
x=this.p$
if(x!=null)x.ao(d)},
aj(d){var x
this.dk(0)
x=this.p$
if(x!=null)x.aj(0)}}
A.aa1.prototype={}
A.aa2.prototype={}
var z=a.updateTypes(["K(K)","B8(t,h9)","~()","~({curve:fo,descendant:p?,duration:aU,rect:A?})"])
A.atp.prototype={
$2(d,e){return new A.B8(this.c,e,C.F,this.a.a,null)},
$S:z+1}
A.aGY.prototype={
$2(d,e){var x=this.a.p$
x.toString
d.d9(x,e.a2(0,this.b))},
$S:15}
A.aGX.prototype={
$2(d,e){return this.a.p$.cj(d,e)},
$S:11};(function aliases(){var x=A.N7.prototype
x.a7z=x.ao
x.a7A=x.aj})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Lj.prototype,"gzz","afV",2)
w(u,"gbm","by",0)
w(u,"gbs","bl",0)
w(u,"gbE","bo",0)
w(u,"gc0","bx",0)
v(u,"gqJ",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["ec","oM","lZ","n1","m_"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.YM,B.a2)
u(B.d2,[A.atp,A.aGY,A.aGX])
v(A.B8,B.aW)
v(A.aa1,B.zh)
v(A.aa2,A.aa1)
v(A.a6T,A.aa2)
v(A.N7,B.z)
v(A.Lj,A.N7)
x(A.N7,B.aP)
w(A.aa1,B.FT)
w(A.aa2,D.a_Q)})()
B.bg(b.typeUniverse,JSON.parse('{"B8":{"aW":[],"aw":[],"c":[]},"YM":{"a2":[],"c":[]},"a6T":{"be":[],"aN":[],"t":[]},"Lj":{"z":[],"aP":["z"],"yO":[],"p":[],"R":[],"ap":[]}}'))
var y={a:B.r("av")}}
$__dart_deferred_initializers__["JSe0xgUkKBYGikD0HUdOtAHjM6E="] = $__dart_deferred_initializers__.current
