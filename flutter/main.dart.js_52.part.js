self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
HE(d,e,f,g,h,i){return new A.Zo(i,g,e,h,d,f,null)},
Zo:function Zo(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
auc:function auc(d,e,f){this.a=d
this.b=e
this.c=f},
B4:function B4(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
a7i:function a7i(d,e){var _=this
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
aHv:function aHv(d,e){this.a=d
this.b=e},
aHu:function aHu(d,e){this.a=d
this.b=e},
Ng:function Ng(){},
aaB:function aaB(){},
aaC:function aaC(){}},D,B,C
A=a.updateHolder(c[52],A)
D=c[71]
B=c[0]
C=c[2]
A.Zo.prototype={
B(d){var x,w,v,u,t=this,s=null,r={},q=t.c,p=D.b0E(d,q,!1),o=t.x
r.a=o
x=t.e
if(x!=null)r.a=new B.bB(x,o,s)
w=t.f==null&&D.aY3(d,q)
v=w?B.ut(d):t.f
u=B.ath(p,C.D,v,t.y,!1,s,t.w,s,s,s,new A.auc(r,t,p))
return w&&v!=null?D.aY2(u):u}}
A.B4.prototype={
aO(d){var x=new A.Lr(this.e,this.f,this.r,B.au(),null,B.au())
x.aN()
x.sbg(null)
return x},
aQ(d,e){var x
e.seS(this.e)
e.sbx(0,this.f)
x=this.r
if(x!==e.u){e.u=x
e.aW()
e.bI()}},
dk(d){return new A.a7i(this,C.a7)}}
A.a7i.prototype={}
A.Lr.prototype={
seS(d){if(d===this.F)return
this.F=d
this.a_()},
sbx(d,e){var x=this,w=x.p
if(e===w)return
if(x.b!=null)w.L(0,x.gz_())
x.p=e
if(x.b!=null)e.a0(0,x.gz_())
x.a_()},
ae1(){this.aW()
this.bI()},
e_(d){if(!(d.e instanceof B.cT))d.e=new B.cT()},
ak(d){this.a5K(d)
this.p.a0(0,this.gz_())},
ad(d){this.p.L(0,this.gz_())
this.a5L(0)},
gfG(){return!0},
gakC(){switch(B.bN(this.F).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gQM(){var x=this,w=x.p$
if(w==null)return 0
switch(B.bN(x.F).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
Pq(d){switch(B.bN(this.F).a){case 0:return new B.av(0,1/0,d.c,d.d)
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
if(x!=null)return x.a9(C.aG,d,x.gbX())
return 0},
cI(d){var x=this.p$
if(x==null)return new B.P(B.D(0,d.a,d.b),B.D(0,d.c,d.d))
return d.bv(x.i8(this.Pq(d)))},
bG(){var x=this,w=y.a.a(B.p.prototype.gT.call(x)),v=x.p$
if(v==null)x.k3=new B.P(B.D(0,w.a,w.b),B.D(0,w.c,w.d))
else{v.c3(x.Pq(w),!0)
v=x.p$.k3
v.toString
x.k3=w.bv(v)}x.p.n4(x.gakC())
x.p.lQ(0,x.gQM())},
v1(d){var x=this
switch(x.F.a){case 0:return new B.l(0,d-x.p$.k3.b+x.k3.b)
case 2:return new B.l(0,-d)
case 3:return new B.l(d-x.p$.k3.a+x.k3.a,0)
case 1:return new B.l(-d,0)}},
Sl(d){var x,w,v,u,t
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
x=t.v1(x)
w=new A.aHv(t,x)
v=t.aw
if(t.Sl(x)){x=t.cx
x===$&&B.b()
u=t.k3
v.saT(0,d.mj(x,e,new B.G(0,0,0+u.a,0+u.b),w,t.u,v.a))}else{v.saT(0,null)
w.$2(d,e)}}},
m(){this.aw.saT(0,null)
this.hS()},
dI(d,e){var x=this.p.at
x.toString
x=this.v1(x)
e.bM(0,x.a,x.b)},
lZ(d){var x=this,w=x.p.at
w.toString
w=x.v1(w)
if(x.Sl(w)){w=x.k3
return new B.G(0,0,0+w.a,0+w.b)}return null},
cP(d,e){var x,w=this
if(w.p$!=null){x=w.p.at
x.toString
return d.k9(new A.aHu(w,e),w.v1(x),e)}return!1},
q6(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gjK()
if(!(d instanceof B.y)){x=q.p.at
x.toString
return new B.mv(x,f)}w=B.jA(d.bN(0,q.p$),f)
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
return new B.mv(r,w.cL(q.v1(r)))},
eb(d,e,f,g){var x=this
if(!x.p.r.glO())return x.ul(d,e,f,g)
x.ul(d,null,f,D.aYh(d,e,f,x.p,g,x))},
om(){return this.eb(C.ax,null,C.E,null)},
lA(d){return this.eb(C.ax,null,C.E,d)},
mA(d,e,f){return this.eb(d,null,e,f)},
lB(d,e){return this.eb(C.ax,d,C.E,e)},
Ii(d){var x,w=this,v=w.gQM(),u=w.p.at
u.toString
x=v-u
switch(w.F.a){case 0:v=w.k3
return new B.G(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.G(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.G(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.G(0-x,0,0+v.a+u,0+v.b)}},
$iyM:1}
A.Ng.prototype={
ak(d){var x
this.dv(d)
x=this.p$
if(x!=null)x.ak(d)},
ad(d){var x
this.dd(0)
x=this.p$
if(x!=null)x.ad(0)}}
A.aaB.prototype={}
A.aaC.prototype={}
var z=a.updateTypes(["K(K)","B4(q,h9)","~()","~({curve:fu,descendant:p?,duration:aX,rect:G?})"])
A.auc.prototype={
$2(d,e){return new A.B4(this.c,e,C.D,this.a.a,null)},
$S:z+1}
A.aHv.prototype={
$2(d,e){var x=this.a.p$
x.toString
d.d6(x,e.a2(0,this.b))},
$S:17}
A.aHu.prototype={
$2(d,e){return this.a.p$.cn(d,e)},
$S:11};(function aliases(){var x=A.Ng.prototype
x.a5K=x.ak
x.a5L=x.ad})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Lr.prototype,"gz_","ae1",2)
w(u,"gbo","bt",0)
w(u,"gbq","bn",0)
w(u,"gbB","bp",0)
w(u,"gbX","bs",0)
v(u,"gqd",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["eb","om","lA","mA","lB"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Zo,B.a3)
u(B.d6,[A.auc,A.aHv,A.aHu])
v(A.B4,B.b0)
v(A.aaB,B.zg)
v(A.aaC,A.aaB)
v(A.a7i,A.aaC)
v(A.Ng,B.y)
v(A.Lr,A.Ng)
x(A.Ng,B.aR)
w(A.aaB,B.FX)
w(A.aaC,D.a0l)})()
B.bz(b.typeUniverse,JSON.parse('{"B4":{"b0":[],"ay":[],"c":[]},"Zo":{"a3":[],"c":[]},"a7i":{"bl":[],"aO":[],"q":[]},"Lr":{"y":[],"aR":["y"],"yM":[],"p":[],"Q":[],"aq":[]}}'))
var y={a:B.B("av")}}
$__dart_deferred_initializers__["LpmSij8wavo/3RKVlrIwtSfRYd0="] = $__dart_deferred_initializers__.current
