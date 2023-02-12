self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
Z7(d,e,f,g,h,i){return new A.Z6(i,g,e,h,d,f,null)},
Z6:function Z6(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
atV:function atV(d,e,f){this.a=d
this.b=e
this.c=f},
B7:function B7(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
a79:function a79(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
Lv:function Lv(d,e,f,g,h,i){var _=this
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
aHF:function aHF(d,e){this.a=d
this.b=e},
aHE:function aHE(d,e){this.a=d
this.b=e},
Nk:function Nk(){},
aar:function aar(){},
aas:function aas(){}},D,B,C
A=a.updateHolder(c[52],A)
D=c[69]
B=c[0]
C=c[2]
A.Z6.prototype={
B(d){var x,w,v,u=this,t=null,s={},r=u.c,q=D.b0b(d,r,!1)
s.a=u.x
x=u.f==null&&D.aXi(d,r)
w=x?B.uA(d):u.f
v=B.asZ(q,C.F,w,u.y,!1,t,u.w,t,t,t,new A.atV(s,u,q))
return x&&w!=null?D.aXh(v):v}}
A.B7.prototype={
aM(d){var x=new A.Lv(this.e,this.f,this.r,B.au(),null,B.au())
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
cp(d){return new A.a79(this,C.ab)}}
A.a79.prototype={}
A.Lv.prototype={
sf4(d){if(d===this.G)return
this.G=d
this.a0()},
sbx(d,e){var x=this,w=x.p
if(e===w)return
if(x.b!=null)w.I(0,x.gzB())
x.p=e
if(x.b!=null)e.Y(0,x.gzB())
x.a0()},
agt(){this.aU()
this.bF()},
e3(d){if(!(d.e instanceof B.cN))d.e=new B.cN()},
ak(d){this.a7Y(d)
this.p.Y(0,this.gzB())},
af(d){this.p.I(0,this.gzB())
this.a7Z(0)},
gfS(){return!0},
gand(){switch(B.bL(this.G).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gSF(){var x=this,w=x.p$
if(w==null)return 0
switch(B.bL(x.G).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
Rg(d){switch(B.bL(this.G).a){case 0:return new B.aw(0,1/0,d.c,d.d)
case 1:return new B.aw(d.a,d.b,0,1/0)}},
br(d){var x=this.p$
if(x!=null)return x.a8(C.Y,d,x.gbm())
return 0},
bl(d){var x=this.p$
if(x!=null)return x.a8(C.a2,d,x.gbo())
return 0},
bn(d){var x=this.p$
if(x!=null)return x.a8(C.ac,d,x.gbz())
return 0},
bq(d){var x=this.p$
if(x!=null)return x.a8(C.aJ,d,x.gbS())
return 0},
cK(d){var x=this.p$
if(x==null)return new B.P(B.D(0,d.a,d.b),B.D(0,d.c,d.d))
return d.bu(x.ir(this.Rg(d)))},
bB(){var x=this,w=y.a.a(B.p.prototype.gT.call(x)),v=x.p$
if(v==null)x.k3=new B.P(B.D(0,w.a,w.b),B.D(0,w.c,w.d))
else{v.c_(x.Rg(w),!0)
v=x.p$.k3
v.toString
x.k3=w.bu(v)}x.p.ny(x.gand())
x.p.mi(0,x.gSF())},
vn(d){var x=this
switch(x.G.a){case 0:return new B.l(0,d-x.p$.k3.b+x.k3.b)
case 2:return new B.l(0,-d)
case 3:return new B.l(d-x.p$.k3.a+x.k3.a,0)
case 1:return new B.l(-d,0)}},
Ug(d){var x,w,v,u,t
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
w=new A.aHF(t,x)
v=t.az
if(t.Ug(x)){x=t.cx
x===$&&B.b()
u=t.k3
v.saS(0,d.mO(x,e,new B.y(0,0,0+u.a,0+u.b),w,t.u,v.a))}else{v.saS(0,null)
w.$2(d,e)}}},
m(){this.az.saS(0,null)
this.i6()},
dN(d,e){var x=this.p.at
x.toString
x=this.vn(x)
e.bd(0,x.a,x.b)},
mr(d){var x=this,w=x.p.at
w.toString
w=x.vn(w)
if(x.Ug(w)){w=x.k3
return new B.y(0,0,0+w.a,0+w.b)}return null},
cR(d,e){var x,w=this
if(w.p$!=null){x=w.p.at
x.toString
return d.kx(new A.aHE(w,e),w.vn(x),e)}return!1},
qH(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gkb()
if(!(d instanceof B.x)){x=q.p.at
x.toString
return new B.mz(x,f)}w=B.jy(d.bM(0,q.p$),f)
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
return new B.mz(r,w.cI(q.vn(r)))},
ee(d,e,f,g){var x=this
if(!x.p.r.gmg())return x.uJ(d,e,f,g)
x.uJ(d,null,f,D.aXw(d,e,f,x.p,g,x))},
oS(){return this.ee(C.aB,null,C.E,null)},
m1(d){return this.ee(C.aB,null,C.E,d)},
n3(d,e,f){return this.ee(d,null,e,f)},
m2(d,e){return this.ee(C.aB,d,C.E,e)},
JP(d){var x,w=this,v=w.gSF(),u=w.p.at
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
$iyM:1}
A.Nk.prototype={
ak(d){var x
this.dB(d)
x=this.p$
if(x!=null)x.ak(d)},
af(d){var x
this.df(0)
x=this.p$
if(x!=null)x.af(0)}}
A.aar.prototype={}
A.aas.prototype={}
var z=a.updateTypes(["L(L)","B7(q,hb)","~()","~({curve:fq,descendant:p?,duration:aV,rect:y?})"])
A.atV.prototype={
$2(d,e){return new A.B7(this.c,e,C.F,this.a.a,null)},
$S:z+1}
A.aHF.prototype={
$2(d,e){var x=this.a.p$
x.toString
d.d9(x,e.a2(0,this.b))},
$S:16}
A.aHE.prototype={
$2(d,e){return this.a.p$.cm(d,e)},
$S:11};(function aliases(){var x=A.Nk.prototype
x.a7Y=x.ak
x.a7Z=x.af})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Lv.prototype,"gzB","agt",2)
w(u,"gbm","br",0)
w(u,"gbo","bl",0)
w(u,"gbz","bn",0)
w(u,"gbS","bq",0)
v(u,"gqQ",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["ee","oS","m1","n3","m2"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Z6,B.a3)
u(B.d5,[A.atV,A.aHF,A.aHE])
v(A.B7,B.aW)
v(A.aar,B.zf)
v(A.aas,A.aar)
v(A.a79,A.aas)
v(A.Nk,B.x)
v(A.Lv,A.Nk)
x(A.Nk,B.aP)
w(A.aar,B.FX)
w(A.aas,D.a07)})()
B.by(b.typeUniverse,JSON.parse('{"B7":{"aW":[],"ax":[],"c":[]},"Z6":{"a3":[],"c":[]},"a79":{"bg":[],"aM":[],"q":[]},"Lv":{"x":[],"aP":["x"],"yM":[],"p":[],"R":[],"aq":[]}}'))
var y={a:B.C("aw")}}
$__dart_deferred_initializers__["pUXo+KtS5ADJoFFJw0bWazAGGM4="] = $__dart_deferred_initializers__.current
