self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
Z6(d,e,f,g,h,i){return new A.Z5(i,g,e,h,d,f,null)},
Z5:function Z5(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
aug:function aug(d,e,f){this.a=d
this.b=e
this.c=f},
B8:function B8(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
a7d:function a7d(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
Lr:function Lr(d,e,f,g,h,i){var _=this
_.G=d
_.p=e
_.u=f
_.av=g
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
aHG:function aHG(d,e){this.a=d
this.b=e},
aHF:function aHF(d,e){this.a=d
this.b=e},
Ng:function Ng(){},
aaw:function aaw(){},
aax:function aax(){}},D,B,C
A=a.updateHolder(c[51],A)
D=c[70]
B=c[0]
C=c[2]
A.Z5.prototype={
B(d){var x,w,v,u=this,t=null,s={},r=u.c,q=D.b0m(d,r,!1)
s.a=u.x
x=u.f==null&&D.aXu(d,r)
w=x?B.uy(d):u.f
v=B.atk(q,C.F,w,u.y,!1,t,u.w,t,t,t,new A.aug(s,u,q))
return x&&w!=null?D.aXt(v):v}}
A.B8.prototype={
aM(d){var x=new A.Lr(this.e,this.f,this.r,B.au(),null,B.au())
x.aL()
x.sbb(null)
return x},
aP(d,e){var x
e.sf3(this.e)
e.sbx(0,this.f)
x=this.r
if(x!==e.u){e.u=x
e.aT()
e.bG()}},
cr(d){return new A.a7d(this,C.ab)}}
A.a7d.prototype={}
A.Lr.prototype={
sf3(d){if(d===this.G)return
this.G=d
this.Z()},
sbx(d,e){var x=this,w=x.p
if(e===w)return
if(x.b!=null)w.L(0,x.gzq())
x.p=e
if(x.b!=null)e.a_(0,x.gzq())
x.Z()},
ag0(){this.aT()
this.bG()},
e6(d){if(!(d.e instanceof B.cP))d.e=new B.cP()},
ak(d){this.a7G(d)
this.p.a_(0,this.gzq())},
ad(d){this.p.L(0,this.gzq())
this.a7H(0)},
gfS(){return!0},
gamG(){switch(B.bL(this.G).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gSv(){var x=this,w=x.p$
if(w==null)return 0
switch(B.bL(x.G).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
R7(d){switch(B.bL(this.G).a){case 0:return new B.av(0,1/0,d.c,d.d)
case 1:return new B.av(d.a,d.b,0,1/0)}},
br(d){var x=this.p$
if(x!=null)return x.a8(C.Y,d,x.gbm())
return 0},
bl(d){var x=this.p$
if(x!=null)return x.a8(C.a4,d,x.gbo())
return 0},
bn(d){var x=this.p$
if(x!=null)return x.a8(C.ac,d,x.gbz())
return 0},
bq(d){var x=this.p$
if(x!=null)return x.a8(C.aI,d,x.gbT())
return 0},
cL(d){var x=this.p$
if(x==null)return new B.P(B.D(0,d.a,d.b),B.D(0,d.c,d.d))
return d.bu(x.ip(this.R7(d)))},
bB(){var x=this,w=y.a.a(B.p.prototype.gT.call(x)),v=x.p$
if(v==null)x.k3=new B.P(B.D(0,w.a,w.b),B.D(0,w.c,w.d))
else{v.c0(x.R7(w),!0)
v=x.p$.k3
v.toString
x.k3=w.bu(v)}x.p.nv(x.gamG())
x.p.md(0,x.gSv())},
ve(d){var x=this
switch(x.G.a){case 0:return new B.j(0,d-x.p$.k3.b+x.k3.b)
case 2:return new B.j(0,-d)
case 3:return new B.j(d-x.p$.k3.a+x.k3.a,0)
case 1:return new B.j(-d,0)}},
U5(d){var x,w,v,u,t
switch(this.u.a){case 0:return!1
case 1:case 2:case 3:x=d.a
if(!(x<0)){w=d.b
if(!(w<0)){v=this.p$.k3
u=v.a
t=this.k3
x=x+u>t.a||w+v.b>t.b}else x=!0}else x=!0
return x}},
aH(d,e){var x,w,v,u,t=this
if(t.p$!=null){x=t.p.at
x.toString
x=t.ve(x)
w=new A.aHG(t,x)
v=t.av
if(t.U5(x)){x=t.cx
x===$&&B.b()
u=t.k3
v.saR(0,d.mJ(x,e,new B.z(0,0,0+u.a,0+u.b),w,t.u,v.a))}else{v.saR(0,null)
w.$2(d,e)}}},
m(){this.av.saR(0,null)
this.i5()},
dR(d,e){var x=this.p.at
x.toString
x=this.ve(x)
e.bc(0,x.a,x.b)},
mm(d){var x=this,w=x.p.at
w.toString
w=x.ve(w)
if(x.U5(w)){w=x.k3
return new B.z(0,0,0+w.a,0+w.b)}return null},
cS(d,e){var x,w=this
if(w.p$!=null){x=w.p.at
x.toString
return d.ku(new A.aHF(w,e),w.ve(x),e)}return!1},
qw(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gk9()
if(!(d instanceof B.x)){x=q.p.at
x.toString
return new B.mx(x,f)}w=B.jz(d.bM(0,q.p$),f)
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
return new B.mx(r,w.cK(q.ve(r)))},
eh(d,e,f,g){var x=this
if(!x.p.r.gmb())return x.uA(d,e,f,g)
x.uA(d,null,f,D.aXH(d,e,f,x.p,g,x))},
oL(){return this.eh(C.aA,null,C.E,null)},
lY(d){return this.eh(C.aA,null,C.E,d)},
n0(d,e,f){return this.eh(d,null,e,f)},
lZ(d,e){return this.eh(C.aA,d,C.E,e)},
JD(d){var x,w=this,v=w.gSv(),u=w.p.at
u.toString
x=v-u
switch(w.G.a){case 0:v=w.k3
return new B.z(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.z(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.z(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.z(0-x,0,0+v.a+u,0+v.b)}},
$iyM:1}
A.Ng.prototype={
ak(d){var x
this.dH(d)
x=this.p$
if(x!=null)x.ak(d)},
ad(d){var x
this.dj(0)
x=this.p$
if(x!=null)x.ad(0)}}
A.aaw.prototype={}
A.aax.prototype={}
var z=a.updateTypes(["K(K)","B8(q,hb)","~()","~({curve:fs,descendant:p?,duration:aV,rect:z?})"])
A.aug.prototype={
$2(d,e){return new A.B8(this.c,e,C.F,this.a.a,null)},
$S:z+1}
A.aHG.prototype={
$2(d,e){var x=this.a.p$
x.toString
d.de(x,e.a2(0,this.b))},
$S:16}
A.aHF.prototype={
$2(d,e){return this.a.p$.cn(d,e)},
$S:11};(function aliases(){var x=A.Ng.prototype
x.a7G=x.ak
x.a7H=x.ad})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Lr.prototype,"gzq","ag0",2)
w(u,"gbm","br",0)
w(u,"gbo","bl",0)
w(u,"gbz","bn",0)
w(u,"gbT","bq",0)
v(u,"gqF",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["eh","oL","lY","n0","lZ"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Z5,B.a3)
u(B.d9,[A.aug,A.aHG,A.aHF])
v(A.B8,B.aW)
v(A.aaw,B.zg)
v(A.aax,A.aaw)
v(A.a7d,A.aax)
v(A.Ng,B.x)
v(A.Lr,A.Ng)
x(A.Ng,B.aO)
w(A.aaw,B.FW)
w(A.aax,D.a08)})()
B.bw(b.typeUniverse,JSON.parse('{"B8":{"aW":[],"aw":[],"c":[]},"Z5":{"a3":[],"c":[]},"a7d":{"bg":[],"aM":[],"q":[]},"Lr":{"x":[],"aO":["x"],"yM":[],"p":[],"R":[],"aq":[]}}'))
var y={a:B.E("av")}}
$__dart_deferred_initializers__["pbX4OcgTmmSsMM5CHoe2ljIRymQ="] = $__dart_deferred_initializers__.current
