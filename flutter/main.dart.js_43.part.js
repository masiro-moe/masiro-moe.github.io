self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
YZ(d,e,f,g,h,i){return new A.YY(i,g,e,h,d,f,null)},
YY:function YY(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
atI:function atI(d,e,f){this.a=d
this.b=e
this.c=f},
Ba:function Ba(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
a70:function a70(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
Lu:function Lu(d,e,f,g,h,i){var _=this
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
aHy:function aHy(d,e){this.a=d
this.b=e},
aHx:function aHx(d,e){this.a=d
this.b=e},
Nj:function Nj(){},
aa9:function aa9(){},
aaa:function aaa(){}},D,B,C
A=a.updateHolder(c[56],A)
D=c[70]
B=c[0]
C=c[2]
A.YY.prototype={
B(d){var x,w,v,u=this,t=null,s={},r=u.c,q=D.b02(d,r,!1)
s.a=u.x
x=u.f==null&&D.aX7(d,r)
w=x?B.uy(d):u.f
v=B.asM(q,C.F,w,u.y,!1,t,u.w,t,t,t,new A.atI(s,u,q))
return x&&w!=null?D.aX6(v):v}}
A.Ba.prototype={
aM(d){var x=new A.Lu(this.e,this.f,this.r,B.au(),null,B.au())
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
cp(d){return new A.a70(this,C.ab)}}
A.a70.prototype={}
A.Lu.prototype={
sf4(d){if(d===this.G)return
this.G=d
this.a0()},
sbx(d,e){var x=this,w=x.p
if(e===w)return
if(x.b!=null)w.I(0,x.gzE())
x.p=e
if(x.b!=null)e.Y(0,x.gzE())
x.a0()},
agm(){this.aU()
this.bF()},
e3(d){if(!(d.e instanceof B.cL))d.e=new B.cL()},
ak(d){this.a7R(d)
this.p.Y(0,this.gzE())},
af(d){this.p.I(0,this.gzE())
this.a7S(0)},
gfT(){return!0},
gan6(){switch(B.bL(this.G).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gSB(){var x=this,w=x.p$
if(w==null)return 0
switch(B.bL(x.G).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
Rc(d){switch(B.bL(this.G).a){case 0:return new B.av(0,1/0,d.c,d.d)
case 1:return new B.av(d.a,d.b,0,1/0)}},
br(d){var x=this.p$
if(x!=null)return x.a9(C.X,d,x.gbm())
return 0},
bl(d){var x=this.p$
if(x!=null)return x.a9(C.a2,d,x.gbo())
return 0},
bn(d){var x=this.p$
if(x!=null)return x.a9(C.ac,d,x.gbz())
return 0},
bq(d){var x=this.p$
if(x!=null)return x.a9(C.aJ,d,x.gbS())
return 0},
cJ(d){var x=this.p$
if(x==null)return new B.P(B.D(0,d.a,d.b),B.D(0,d.c,d.d))
return d.bu(x.iq(this.Rc(d)))},
bB(){var x=this,w=y.a.a(B.p.prototype.gT.call(x)),v=x.p$
if(v==null)x.k3=new B.P(B.D(0,w.a,w.b),B.D(0,w.c,w.d))
else{v.c0(x.Rc(w),!0)
v=x.p$.k3
v.toString
x.k3=w.bu(v)}x.p.nx(x.gan6())
x.p.mi(0,x.gSB())},
vp(d){var x=this
switch(x.G.a){case 0:return new B.l(0,d-x.p$.k3.b+x.k3.b)
case 2:return new B.l(0,-d)
case 3:return new B.l(d-x.p$.k3.a+x.k3.a,0)
case 1:return new B.l(-d,0)}},
Uc(d){var x,w,v,u,t
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
x=t.vp(x)
w=new A.aHy(t,x)
v=t.az
if(t.Uc(x)){x=t.cx
x===$&&B.b()
u=t.k3
v.saS(0,d.mN(x,e,new B.A(0,0,0+u.a,0+u.b),w,t.u,v.a))}else{v.saS(0,null)
w.$2(d,e)}}},
m(){this.az.saS(0,null)
this.i5()},
dM(d,e){var x=this.p.at
x.toString
x=this.vp(x)
e.bd(0,x.a,x.b)},
mr(d){var x=this,w=x.p.at
w.toString
w=x.vp(w)
if(x.Uc(w)){w=x.k3
return new B.A(0,0,0+w.a,0+w.b)}return null},
cQ(d,e){var x,w=this
if(w.p$!=null){x=w.p.at
x.toString
return d.kw(new A.aHx(w,e),w.vp(x),e)}return!1},
qH(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gk9()
if(!(d instanceof B.x)){x=q.p.at
x.toString
return new B.mv(x,f)}w=B.jw(d.bM(0,q.p$),f)
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
return new B.mv(r,w.cH(q.vp(r)))},
ee(d,e,f,g){var x=this
if(!x.p.r.gmg())return x.uL(d,e,f,g)
x.uL(d,null,f,D.aXl(d,e,f,x.p,g,x))},
oP(){return this.ee(C.aB,null,C.E,null)},
m0(d){return this.ee(C.aB,null,C.E,d)},
n2(d,e,f){return this.ee(d,null,e,f)},
m1(d,e){return this.ee(C.aB,d,C.E,e)},
JM(d){var x,w=this,v=w.gSB(),u=w.p.at
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
$iyQ:1}
A.Nj.prototype={
ak(d){var x
this.dA(d)
x=this.p$
if(x!=null)x.ak(d)},
af(d){var x
this.df(0)
x=this.p$
if(x!=null)x.af(0)}}
A.aa9.prototype={}
A.aaa.prototype={}
var z=a.updateTypes(["I(I)","Ba(r,hd)","~()","~({curve:fs,descendant:p?,duration:aU,rect:A?})"])
A.atI.prototype={
$2(d,e){return new A.Ba(this.c,e,C.F,this.a.a,null)},
$S:z+1}
A.aHy.prototype={
$2(d,e){var x=this.a.p$
x.toString
d.d9(x,e.a2(0,this.b))},
$S:15}
A.aHx.prototype={
$2(d,e){return this.a.p$.cm(d,e)},
$S:11};(function aliases(){var x=A.Nj.prototype
x.a7R=x.ak
x.a7S=x.af})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Lu.prototype,"gzE","agm",2)
w(u,"gbm","br",0)
w(u,"gbo","bl",0)
w(u,"gbz","bn",0)
w(u,"gbS","bq",0)
v(u,"gqQ",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["ee","oP","m0","n2","m1"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.YY,B.a2)
u(B.df,[A.atI,A.aHy,A.aHx])
v(A.Ba,B.aW)
v(A.aa9,B.zj)
v(A.aaa,A.aa9)
v(A.a70,A.aaa)
v(A.Nj,B.x)
v(A.Lu,A.Nj)
x(A.Nj,B.aP)
w(A.aa9,B.FX)
w(A.aaa,D.a_Y)})()
B.bj(b.typeUniverse,JSON.parse('{"Ba":{"aW":[],"ax":[],"c":[]},"YY":{"a2":[],"c":[]},"a70":{"bg":[],"aN":[],"r":[]},"Lu":{"x":[],"aP":["x"],"yQ":[],"p":[],"R":[],"ar":[]}}'))
var y={a:B.y("av")}}
$__dart_deferred_initializers__["7I9BbDT7vc2YxNH0wl711GdVoi4="] = $__dart_deferred_initializers__.current
