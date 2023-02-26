self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
Zf(d,e,f,g,h,i){return new A.Ze(i,g,e,h,d,f,null)},
Ze:function Ze(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
auo:function auo(d,e,f){this.a=d
this.b=e
this.c=f},
Bf:function Bf(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
a7m:function a7m(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
LA:function LA(d,e,f,g,h,i){var _=this
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
aI6:function aI6(d,e){this.a=d
this.b=e},
aI5:function aI5(d,e){this.a=d
this.b=e},
Np:function Np(){},
aaF:function aaF(){},
aaG:function aaG(){}},D,B,C
A=a.updateHolder(c[53],A)
D=c[70]
B=c[0]
C=c[2]
A.Ze.prototype={
B(d){var x,w,v,u=this,t=null,s={},r=u.c,q=D.b0N(d,r,!1)
s.a=u.x
x=u.f==null&&D.aXU(d,r)
w=x?B.uF(d):u.f
v=B.ats(q,C.F,w,u.y,!1,t,u.w,t,t,t,new A.auo(s,u,q))
return x&&w!=null?D.aXT(v):v}}
A.Bf.prototype={
aM(d){var x=new A.LA(this.e,this.f,this.r,B.au(),null,B.au())
x.aL()
x.sbc(null)
return x},
aQ(d,e){var x
e.sf6(this.e)
e.sbx(0,this.f)
x=this.r
if(x!==e.u){e.u=x
e.aU()
e.bH()}},
cr(d){return new A.a7m(this,C.ac)}}
A.a7m.prototype={}
A.LA.prototype={
sf6(d){if(d===this.G)return
this.G=d
this.a0()},
sbx(d,e){var x=this,w=x.p
if(e===w)return
if(x.b!=null)w.J(0,x.gzA())
x.p=e
if(x.b!=null)e.Y(0,x.gzA())
x.a0()},
agG(){this.aU()
this.bH()},
e8(d){if(!(d.e instanceof B.cP))d.e=new B.cP()},
al(d){this.a88(d)
this.p.Y(0,this.gzA())},
af(d){this.p.J(0,this.gzA())
this.a89(0)},
gfU(){return!0},
ganr(){switch(B.bM(this.G).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gSM(){var x=this,w=x.p$
if(w==null)return 0
switch(B.bM(x.G).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
Rm(d){switch(B.bM(this.G).a){case 0:return new B.aw(0,1/0,d.c,d.d)
case 1:return new B.aw(d.a,d.b,0,1/0)}},
br(d){var x=this.p$
if(x!=null)return x.a8(C.Z,d,x.gbm())
return 0},
bl(d){var x=this.p$
if(x!=null)return x.a8(C.a3,d,x.gbo())
return 0},
bn(d){var x=this.p$
if(x!=null)return x.a8(C.ad,d,x.gbz())
return 0},
bq(d){var x=this.p$
if(x!=null)return x.a8(C.aJ,d,x.gbU())
return 0},
cM(d){var x=this.p$
if(x==null)return new B.P(B.E(0,d.a,d.b),B.E(0,d.c,d.d))
return d.bu(x.iq(this.Rm(d)))},
bB(){var x=this,w=y.a.a(B.p.prototype.gT.call(x)),v=x.p$
if(v==null)x.k3=new B.P(B.E(0,w.a,w.b),B.E(0,w.c,w.d))
else{v.c1(x.Rm(w),!0)
v=x.p$.k3
v.toString
x.k3=w.bu(v)}x.p.nz(x.ganr())
x.p.mh(0,x.gSM())},
vk(d){var x=this
switch(x.G.a){case 0:return new B.j(0,d-x.p$.k3.b+x.k3.b)
case 2:return new B.j(0,-d)
case 3:return new B.j(d-x.p$.k3.a+x.k3.a,0)
case 1:return new B.j(-d,0)}},
Un(d){var x,w,v,u,t
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
x=t.vk(x)
w=new A.aI6(t,x)
v=t.az
if(t.Un(x)){x=t.cx
x===$&&B.b()
u=t.k3
v.saS(0,d.mN(x,e,new B.z(0,0,0+u.a,0+u.b),w,t.u,v.a))}else{v.saS(0,null)
w.$2(d,e)}}},
m(){this.az.saS(0,null)
this.i6()},
dS(d,e){var x=this.p.at
x.toString
x=this.vk(x)
e.bd(0,x.a,x.b)},
mq(d){var x=this,w=x.p.at
w.toString
w=x.vk(w)
if(x.Un(w)){w=x.k3
return new B.z(0,0,0+w.a,0+w.b)}return null},
cT(d,e){var x,w=this
if(w.p$!=null){x=w.p.at
x.toString
return d.ky(new A.aI5(w,e),w.vk(x),e)}return!1},
qC(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gke()
if(!(d instanceof B.x)){x=q.p.at
x.toString
return new B.mC(x,f)}w=B.jA(d.bN(0,q.p$),f)
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
return new B.mC(r,w.cK(q.vk(r)))},
ej(d,e,f,g){var x=this
if(!x.p.r.gmf())return x.uG(d,e,f,g)
x.uG(d,null,f,D.aY7(d,e,f,x.p,g,x))},
oO(){return this.ej(C.aB,null,C.E,null)},
m0(d){return this.ej(C.aB,null,C.E,d)},
n4(d,e,f){return this.ej(d,null,e,f)},
m1(d,e){return this.ej(C.aB,d,C.E,e)},
JO(d){var x,w=this,v=w.gSM(),u=w.p.at
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
$iyT:1}
A.Np.prototype={
al(d){var x
this.dH(d)
x=this.p$
if(x!=null)x.al(d)},
af(d){var x
this.dj(0)
x=this.p$
if(x!=null)x.af(0)}}
A.aaF.prototype={}
A.aaG.prototype={}
var z=a.updateTypes(["K(K)","Bf(q,hc)","~()","~({curve:fs,descendant:p?,duration:aV,rect:z?})"])
A.auo.prototype={
$2(d,e){return new A.Bf(this.c,e,C.F,this.a.a,null)},
$S:z+1}
A.aI6.prototype={
$2(d,e){var x=this.a.p$
x.toString
d.de(x,e.a2(0,this.b))},
$S:16}
A.aI5.prototype={
$2(d,e){return this.a.p$.cn(d,e)},
$S:11};(function aliases(){var x=A.Np.prototype
x.a88=x.al
x.a89=x.af})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.LA.prototype,"gzA","agG",2)
w(u,"gbm","br",0)
w(u,"gbo","bl",0)
w(u,"gbz","bn",0)
w(u,"gbU","bq",0)
v(u,"gqL",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["ej","oO","m0","n4","m1"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Ze,B.a3)
u(B.d7,[A.auo,A.aI6,A.aI5])
v(A.Bf,B.aW)
v(A.aaF,B.zn)
v(A.aaG,A.aaF)
v(A.a7m,A.aaG)
v(A.Np,B.x)
v(A.LA,A.Np)
x(A.Np,B.aP)
w(A.aaF,B.G2)
w(A.aaG,D.a0h)})()
B.bw(b.typeUniverse,JSON.parse('{"Bf":{"aW":[],"ax":[],"c":[]},"Ze":{"a3":[],"c":[]},"a7m":{"bg":[],"aM":[],"q":[]},"LA":{"x":[],"aP":["x"],"yT":[],"p":[],"R":[],"aq":[]}}'))
var y={a:B.C("aw")}}
$__dart_deferred_initializers__["DTw2CkFTCf923HuLRCzl6rSfFC4="] = $__dart_deferred_initializers__.current
