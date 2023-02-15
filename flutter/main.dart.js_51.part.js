self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
Z9(d,e,f,g,h,i){return new A.Z8(i,g,e,h,d,f,null)},
Z8:function Z8(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
au5:function au5(d,e,f){this.a=d
this.b=e
this.c=f},
Ba:function Ba(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
a7f:function a7f(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
Lx:function Lx(d,e,f,g,h,i){var _=this
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
aHN:function aHN(d,e){this.a=d
this.b=e},
aHM:function aHM(d,e){this.a=d
this.b=e},
Nm:function Nm(){},
aax:function aax(){},
aay:function aay(){}},D,B,C
A=a.updateHolder(c[52],A)
D=c[69]
B=c[0]
C=c[2]
A.Z8.prototype={
B(d){var x,w,v,u=this,t=null,s={},r=u.c,q=D.b0k(d,r,!1)
s.a=u.x
x=u.f==null&&D.aXq(d,r)
w=x?B.uC(d):u.f
v=B.at9(q,C.F,w,u.y,!1,t,u.w,t,t,t,new A.au5(s,u,q))
return x&&w!=null?D.aXp(v):v}}
A.Ba.prototype={
aM(d){var x=new A.Lx(this.e,this.f,this.r,B.au(),null,B.au())
x.aL()
x.sbc(null)
return x},
aP(d,e){var x
e.sf4(this.e)
e.sbx(0,this.f)
x=this.r
if(x!==e.u){e.u=x
e.aU()
e.bF()}},
cq(d){return new A.a7f(this,C.ac)}}
A.a7f.prototype={}
A.Lx.prototype={
sf4(d){if(d===this.G)return
this.G=d
this.a0()},
sbx(d,e){var x=this,w=x.p
if(e===w)return
if(x.b!=null)w.J(0,x.gzC())
x.p=e
if(x.b!=null)e.Y(0,x.gzC())
x.a0()},
agB(){this.aU()
this.bF()},
e5(d){if(!(d.e instanceof B.cO))d.e=new B.cO()},
ak(d){this.a84(d)
this.p.Y(0,this.gzC())},
af(d){this.p.J(0,this.gzC())
this.a85(0)},
gfS(){return!0},
ganm(){switch(B.bL(this.G).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gSJ(){var x=this,w=x.p$
if(w==null)return 0
switch(B.bL(x.G).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
Rj(d){switch(B.bL(this.G).a){case 0:return new B.aw(0,1/0,d.c,d.d)
case 1:return new B.aw(d.a,d.b,0,1/0)}},
br(d){var x=this.p$
if(x!=null)return x.a8(C.Y,d,x.gbm())
return 0},
bl(d){var x=this.p$
if(x!=null)return x.a8(C.a3,d,x.gbo())
return 0},
bn(d){var x=this.p$
if(x!=null)return x.a8(C.ad,d,x.gbz())
return 0},
bq(d){var x=this.p$
if(x!=null)return x.a8(C.aJ,d,x.gbT())
return 0},
cK(d){var x=this.p$
if(x==null)return new B.P(B.D(0,d.a,d.b),B.D(0,d.c,d.d))
return d.bu(x.ir(this.Rj(d)))},
bB(){var x=this,w=y.a.a(B.p.prototype.gT.call(x)),v=x.p$
if(v==null)x.k3=new B.P(B.D(0,w.a,w.b),B.D(0,w.c,w.d))
else{v.c0(x.Rj(w),!0)
v=x.p$.k3
v.toString
x.k3=w.bu(v)}x.p.nz(x.ganm())
x.p.mj(0,x.gSJ())},
vn(d){var x=this
switch(x.G.a){case 0:return new B.l(0,d-x.p$.k3.b+x.k3.b)
case 2:return new B.l(0,-d)
case 3:return new B.l(d-x.p$.k3.a+x.k3.a,0)
case 1:return new B.l(-d,0)}},
Uk(d){var x,w,v,u,t
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
x=t.vn(x)
w=new A.aHN(t,x)
v=t.az
if(t.Uk(x)){x=t.cx
x===$&&B.b()
u=t.k3
v.saS(0,d.mP(x,e,new B.y(0,0,0+u.a,0+u.b),w,t.u,v.a))}else{v.saS(0,null)
w.$2(d,e)}}},
m(){this.az.saS(0,null)
this.i6()},
dP(d,e){var x=this.p.at
x.toString
x=this.vn(x)
e.bd(0,x.a,x.b)},
ms(d){var x=this,w=x.p.at
w.toString
w=x.vn(w)
if(x.Uk(w)){w=x.k3
return new B.y(0,0,0+w.a,0+w.b)}return null},
cR(d,e){var x,w=this
if(w.p$!=null){x=w.p.at
x.toString
return d.kx(new A.aHM(w,e),w.vn(x),e)}return!1},
qH(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gkd()
if(!(d instanceof B.x)){x=q.p.at
x.toString
return new B.mB(x,f)}w=B.jz(d.bM(0,q.p$),f)
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
return new B.mB(r,w.cI(q.vn(r)))},
eg(d,e,f,g){var x=this
if(!x.p.r.gmh())return x.uJ(d,e,f,g)
x.uJ(d,null,f,D.aXE(d,e,f,x.p,g,x))},
oS(){return this.eg(C.aB,null,C.E,null)},
m2(d){return this.eg(C.aB,null,C.E,d)},
n4(d,e,f){return this.eg(d,null,e,f)},
m3(d,e){return this.eg(C.aB,d,C.E,e)},
JQ(d){var x,w=this,v=w.gSJ(),u=w.p.at
u.toString
x=v-u
switch(w.G.a){case 0:v=w.k3
return new B.y(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.y(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.y(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.y(0-x,0,0+v.a+u,0+v.b)}},
$iyP:1}
A.Nm.prototype={
ak(d){var x
this.dD(d)
x=this.p$
if(x!=null)x.ak(d)},
af(d){var x
this.df(0)
x=this.p$
if(x!=null)x.af(0)}}
A.aax.prototype={}
A.aay.prototype={}
var z=a.updateTypes(["K(K)","Ba(q,hb)","~()","~({curve:fq,descendant:p?,duration:aV,rect:y?})"])
A.au5.prototype={
$2(d,e){return new A.Ba(this.c,e,C.F,this.a.a,null)},
$S:z+1}
A.aHN.prototype={
$2(d,e){var x=this.a.p$
x.toString
d.d9(x,e.a2(0,this.b))},
$S:16}
A.aHM.prototype={
$2(d,e){return this.a.p$.cm(d,e)},
$S:11};(function aliases(){var x=A.Nm.prototype
x.a84=x.ak
x.a85=x.af})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Lx.prototype,"gzC","agB",2)
w(u,"gbm","br",0)
w(u,"gbo","bl",0)
w(u,"gbz","bn",0)
w(u,"gbT","bq",0)
v(u,"gqQ",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["eg","oS","m2","n4","m3"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Z8,B.a3)
u(B.da,[A.au5,A.aHN,A.aHM])
v(A.Ba,B.aW)
v(A.aax,B.zi)
v(A.aay,A.aax)
v(A.a7f,A.aay)
v(A.Nm,B.x)
v(A.Lx,A.Nm)
x(A.Nm,B.aP)
w(A.aax,B.FZ)
w(A.aay,D.a0b)})()
B.by(b.typeUniverse,JSON.parse('{"Ba":{"aW":[],"ax":[],"c":[]},"Z8":{"a3":[],"c":[]},"a7f":{"bg":[],"aM":[],"q":[]},"Lx":{"x":[],"aP":["x"],"yP":[],"p":[],"R":[],"aq":[]}}'))
var y={a:B.C("aw")}}
$__dart_deferred_initializers__["piBxf+deTOTLC8uaodqRDRp6/2Y="] = $__dart_deferred_initializers__.current
