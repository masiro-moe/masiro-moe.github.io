self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
Zn(d,e,f,g,h,i){return new A.Zm(i,g,e,h,d,f,null)},
Zm:function Zm(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
au9:function au9(d,e,f){this.a=d
this.b=e
this.c=f},
B5:function B5(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
a7g:function a7g(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
Lq:function Lq(d,e,f,g,h,i){var _=this
_.F=d
_.p=e
_.u=f
_.aw=g
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
aHp:function aHp(d,e){this.a=d
this.b=e},
aHo:function aHo(d,e){this.a=d
this.b=e},
Ne:function Ne(){},
aaz:function aaz(){},
aaA:function aaA(){}},D,B,C
A=a.updateHolder(c[51],A)
D=c[69]
B=c[0]
C=c[2]
A.Zm.prototype={
C(d){var x,w,v,u=this,t=null,s={},r=u.c,q=D.b0k(d,r,!1)
s.a=u.x
x=u.f==null&&D.aXM(d,r)
w=x?B.ut(d):u.f
v=B.ate(q,C.D,w,u.y,!1,t,u.w,t,t,t,new A.au9(s,u,q))
return x&&w!=null?D.aXL(v):v}}
A.B5.prototype={
aO(d){var x=new A.Lq(this.e,this.f,this.r,B.au(),null,B.au())
x.aN()
x.sbg(null)
return x},
aQ(d,e){var x
e.seS(this.e)
e.sbx(0,this.f)
x=this.r
if(x!==e.u){e.u=x
e.aU()
e.bI()}},
dk(d){return new A.a7g(this,C.a7)}}
A.a7g.prototype={}
A.Lq.prototype={
seS(d){if(d===this.F)return
this.F=d
this.Z()},
sbx(d,e){var x=this,w=x.p
if(e===w)return
if(x.b!=null)w.L(0,x.gyZ())
x.p=e
if(x.b!=null)e.a_(0,x.gyZ())
x.Z()},
ae3(){this.aU()
this.bI()},
e_(d){if(!(d.e instanceof B.cS))d.e=new B.cS()},
al(d){this.a5M(d)
this.p.a_(0,this.gyZ())},
ad(d){this.p.L(0,this.gyZ())
this.a5N(0)},
gfG(){return!0},
gakE(){switch(B.bN(this.F).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gQN(){var x=this,w=x.p$
if(w==null)return 0
switch(B.bN(x.F).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
Pr(d){switch(B.bN(this.F).a){case 0:return new B.av(0,1/0,d.c,d.d)
case 1:return new B.av(d.a,d.b,0,1/0)}},
bt(d){var x=this.p$
if(x!=null)return x.a9(C.W,d,x.gbo())
return 0},
bn(d){var x=this.p$
if(x!=null)return x.a9(C.a1,d,x.gbq())
return 0},
bp(d){var x=this.p$
if(x!=null)return x.a9(C.a8,d,x.gbB())
return 0},
bs(d){var x=this.p$
if(x!=null)return x.a9(C.aF,d,x.gbX())
return 0},
cI(d){var x=this.p$
if(x==null)return new B.P(B.D(0,d.a,d.b),B.D(0,d.c,d.d))
return d.bv(x.i7(this.Pr(d)))},
bG(){var x=this,w=y.a.a(B.p.prototype.gT.call(x)),v=x.p$
if(v==null)x.k3=new B.P(B.D(0,w.a,w.b),B.D(0,w.c,w.d))
else{v.c3(x.Pr(w),!0)
v=x.p$.k3
v.toString
x.k3=w.bv(v)}x.p.n5(x.gakE())
x.p.lR(0,x.gQN())},
v_(d){var x=this
switch(x.F.a){case 0:return new B.l(0,d-x.p$.k3.b+x.k3.b)
case 2:return new B.l(0,-d)
case 3:return new B.l(d-x.p$.k3.a+x.k3.a,0)
case 1:return new B.l(-d,0)}},
Sm(d){var x,w,v,u,t
switch(this.u.a){case 0:return!1
case 1:case 2:case 3:x=d.a
if(!(x<0)){w=d.b
if(!(w<0)){v=this.p$.k3
u=v.a
t=this.k3
x=x+u>t.a||w+v.b>t.b}else x=!0}else x=!0
return x}},
aM(d,e){var x,w,v,u,t=this
if(t.p$!=null){x=t.p.at
x.toString
x=t.v_(x)
w=new A.aHp(t,x)
v=t.aw
if(t.Sm(x)){x=t.cx
x===$&&B.b()
u=t.k3
v.saS(0,d.mk(x,e,new B.F(0,0,0+u.a,0+u.b),w,t.u,v.a))}else{v.saS(0,null)
w.$2(d,e)}}},
m(){this.aw.saS(0,null)
this.hS()},
dI(d,e){var x=this.p.at
x.toString
x=this.v_(x)
e.bM(0,x.a,x.b)},
m_(d){var x=this,w=x.p.at
w.toString
w=x.v_(w)
if(x.Sm(w)){w=x.k3
return new B.F(0,0,0+w.a,0+w.b)}return null},
cP(d,e){var x,w=this
if(w.p$!=null){x=w.p.at
x.toString
return d.k8(new A.aHo(w,e),w.v_(x),e)}return!1},
q5(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gjJ()
if(!(d instanceof B.y)){x=q.p.at
x.toString
return new B.mw(x,f)}w=B.jA(d.bN(0,q.p$),f)
x=q.p$.k3
x.toString
switch(q.F.a){case 0:v=q.k3.b
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
return new B.mw(r,w.cL(q.v_(r)))},
eb(d,e,f,g){var x=this
if(!x.p.r.glP())return x.uj(d,e,f,g)
x.uj(d,null,f,D.aY_(d,e,f,x.p,g,x))},
ol(){return this.eb(C.aw,null,C.E,null)},
lB(d){return this.eb(C.aw,null,C.E,d)},
mB(d,e,f){return this.eb(d,null,e,f)},
lC(d,e){return this.eb(C.aw,d,C.E,e)},
Ii(d){var x,w=this,v=w.gQN(),u=w.p.at
u.toString
x=v-u
switch(w.F.a){case 0:v=w.k3
return new B.F(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.F(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.F(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.F(0-x,0,0+v.a+u,0+v.b)}},
$iyN:1}
A.Ne.prototype={
al(d){var x
this.dv(d)
x=this.p$
if(x!=null)x.al(d)},
ad(d){var x
this.dd(0)
x=this.p$
if(x!=null)x.ad(0)}}
A.aaz.prototype={}
A.aaA.prototype={}
var z=a.updateTypes(["J(J)","B5(q,h6)","~()","~({curve:fp,descendant:p?,duration:aX,rect:F?})"])
A.au9.prototype={
$2(d,e){return new A.B5(this.c,e,C.D,this.a.a,null)},
$S:z+1}
A.aHp.prototype={
$2(d,e){var x=this.a.p$
x.toString
d.d6(x,e.a2(0,this.b))},
$S:15}
A.aHo.prototype={
$2(d,e){return this.a.p$.cn(d,e)},
$S:11};(function aliases(){var x=A.Ne.prototype
x.a5M=x.al
x.a5N=x.ad})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Lq.prototype,"gyZ","ae3",2)
w(u,"gbo","bt",0)
w(u,"gbq","bn",0)
w(u,"gbB","bp",0)
w(u,"gbX","bs",0)
v(u,"gqc",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["eb","ol","lB","mB","lC"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Zm,B.a3)
u(B.da,[A.au9,A.aHp,A.aHo])
v(A.B5,B.b0)
v(A.aaz,B.zh)
v(A.aaA,A.aaz)
v(A.a7g,A.aaA)
v(A.Ne,B.y)
v(A.Lq,A.Ne)
x(A.Ne,B.aR)
w(A.aaz,B.FX)
w(A.aaA,D.a0k)})()
B.bz(b.typeUniverse,JSON.parse('{"B5":{"b0":[],"aw":[],"c":[]},"Zm":{"a3":[],"c":[]},"a7g":{"bl":[],"aO":[],"q":[]},"Lq":{"y":[],"aR":["y"],"yN":[],"p":[],"Q":[],"ap":[]}}'))
var y={a:B.B("av")}}
$__dart_deferred_initializers__["U1Ky1UbzSdalVy4UQgRkYqgCUAE="] = $__dart_deferred_initializers__.current
