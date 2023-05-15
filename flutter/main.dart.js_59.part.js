self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
HB(d,e,f,g,h,i){return new A.a__(i,g,e,h,d,f,null)},
a__:function a__(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
awx:function awx(d,e,f){this.a=d
this.b=e
this.c=f},
Bh:function Bh(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aa4:function aa4(d,e){var _=this
_.d=_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
LL:function LL(d,e,f,g,h,i){var _=this
_.D=d
_.Y=e
_.a4=f
_.aB=g
_.u$=h
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
aIK:function aIK(d,e){this.a=d
this.b=e},
aIJ:function aIJ(d,e){this.a=d
this.b=e},
NI:function NI(){},
adt:function adt(){},
adu:function adu(){}},D,B,C
A=a.updateHolder(c[55],A)
D=c[74]
B=c[0]
C=c[2]
A.a__.prototype={
A(d){var x,w,v,u,t=this,s=null,r={},q=t.c,p=D.b1G(d,q,!1),o=t.x
r.a=o
x=t.e
if(x!=null)r.a=new B.bJ(x,o,s)
w=t.f==null&&D.aYO(d,q)
v=w?B.uS(d):t.f
u=B.avD(p,C.D,v,t.y,!1,s,t.w,s,s,s,new A.awx(r,t,p))
return w&&v!=null?D.aYN(u):u}}
A.Bh.prototype={
aT(d){var x=new A.LL(this.e,this.f,this.r,B.aw(),null,B.aw())
x.aS()
x.sbn(null)
return x},
aZ(d,e){var x
e.sf5(this.e)
e.sbC(0,this.f)
x=this.r
if(x!==e.a4){e.a4=x
e.b2()
e.bI()}},
du(d){return new A.aa4(this,C.a8)}}
A.aa4.prototype={}
A.LL.prototype={
sf5(d){if(d===this.D)return
this.D=d
this.a_()},
sbC(d,e){var x=this,w=x.Y
if(e===w)return
if(x.b!=null)w.I(0,x.gA_())
x.Y=e
if(x.b!=null)e.X(0,x.gA_())
x.a_()},
ah4(){this.b2()
this.bI()},
e2(d){if(!(d.e instanceof B.cX))d.e=new B.cX()},
ai(d){this.a8L(d)
this.Y.X(0,this.gA_())},
ag(d){this.Y.I(0,this.gA_())
this.a8M(0)},
gft(){return!0},
gaoc(){switch(B.bL(this.D).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gT_(){var x=this,w=x.u$
if(w==null)return 0
switch(B.bL(x.D).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
Rt(d){switch(B.bL(this.D).a){case 0:return new B.av(0,1/0,d.c,d.d)
case 1:return new B.av(d.a,d.b,0,1/0)}},
bF(d){var x=this.u$
if(x!=null)return x.ao(C.a_,d,x.gbu())
return 0},
bt(d){var x=this.u$
if(x!=null)return x.ao(C.a7,d,x.gbz())
return 0},
bx(d){var x=this.u$
if(x!=null)return x.ao(C.ag,d,x.gbN())
return 0},
bE(d){var x=this.u$
if(x!=null)return x.ao(C.aT,d,x.gc6())
return 0},
cW(d){var x=this.u$
if(x==null)return new B.K(B.A(0,d.a,d.b),B.A(0,d.c,d.d))
return d.bs(x.it(this.Rt(d)))},
bM(){var x=this,w=y.a.a(B.p.prototype.gU.call(x)),v=x.u$
if(v==null)x.k3=new B.K(B.A(0,w.a,w.b),B.A(0,w.c,w.d))
else{v.c2(x.Rt(w),!0)
v=x.u$.k3
v.toString
x.k3=w.bs(v)}x.Y.no(x.gaoc())
x.Y.mf(0,x.gT_())},
vL(d){var x=this
switch(x.D.a){case 0:return new B.l(0,d-x.u$.k3.b+x.k3.b)
case 2:return new B.l(0,-d)
case 3:return new B.l(d-x.u$.k3.a+x.k3.a,0)
case 1:return new B.l(-d,0)}},
UD(d){var x,w,v,u,t
switch(this.a4.a){case 0:return!1
case 1:case 2:case 3:x=d.a
if(!(x<0)){w=d.b
if(!(w<0)){v=this.u$.k3
u=v.a
t=this.k3
x=x+u>t.a||w+v.b>t.b}else x=!0}else x=!0
return x}},
aN(d,e){var x,w,v,u,t=this
if(t.u$!=null){x=t.Y.at
x.toString
x=t.vL(x)
w=new A.aIK(t,x)
v=t.aB
if(t.UD(x)){x=t.cx
x===$&&B.b()
u=t.k3
v.sb0(0,d.mH(x,e,new B.F(0,0,0+u.a,0+u.b),w,t.a4,v.a))}else{v.sb0(0,null)
w.$2(d,e)}}},
m(){this.aB.sb0(0,null)
this.i6()},
dK(d,e){var x=this.Y.at
x.toString
x=this.vL(x)
e.bR(0,x.a,x.b)},
mn(d){var x=this,w=x.Y.at
w.toString
w=x.vL(w)
if(x.UD(w)){w=x.k3
return new B.F(0,0,0+w.a,0+w.b)}return null},
cY(d,e){var x,w=this
if(w.u$!=null){x=w.Y.at
x.toString
return d.kt(new A.aIJ(w,e),w.vL(x),e)}return!1},
qy(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gk0()
if(!(d instanceof B.w)){x=q.Y.at
x.toString
return new B.mM(x,f)}w=B.hR(d.bS(0,q.u$),f)
x=q.u$.k3
x.toString
switch(q.D.a){case 0:v=q.k3.b
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
return new B.mM(r,w.dm(q.vL(r)))},
en(d,e,f,g){var x=this
if(!x.Y.r.gmc())return x.v2(d,e,f,g)
x.v2(d,null,f,D.aZ6(d,e,f,x.Y,g,x))},
oD(){return this.en(C.at,null,C.C,null)},
lW(d){return this.en(C.at,null,C.C,d)},
mW(d,e,f){return this.en(d,null,e,f)},
lX(d,e){return this.en(C.at,d,C.C,e)},
JW(d){var x,w=this,v=w.gT_(),u=w.Y.at
u.toString
x=v-u
switch(w.D.a){case 0:v=w.k3
return new B.F(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new B.F(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new B.F(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new B.F(0-x,0,0+v.a+u,0+v.b)}},
$iyU:1}
A.NI.prototype={
ai(d){var x
this.dH(d)
x=this.u$
if(x!=null)x.ai(d)},
ag(d){var x
this.dn(0)
x=this.u$
if(x!=null)x.ag(0)}}
A.adt.prototype={}
A.adu.prototype={}
var z=a.updateTypes(["G(G)","Bh(t,h7)","~()","~({curve:fs,descendant:p?,duration:aZ,rect:F?})"])
A.awx.prototype={
$2(d,e){return new A.Bh(this.c,e,C.D,this.a.a,null)},
$S:z+1}
A.aIK.prototype={
$2(d,e){var x=this.a.u$
x.toString
d.df(x,e.a3(0,this.b))},
$S:17}
A.aIJ.prototype={
$2(d,e){return this.a.u$.cp(d,e)},
$S:11};(function aliases(){var x=A.NI.prototype
x.a8L=x.ai
x.a8M=x.ag})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.LL.prototype,"gA_","ah4",2)
w(u,"gbu","bF",0)
w(u,"gbz","bt",0)
w(u,"gbN","bx",0)
w(u,"gc6","bE",0)
v(u,"goC",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["en","oD","lW","mW","lX"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.a__,B.Y)
u(B.dh,[A.awx,A.aIK,A.aIJ])
v(A.Bh,B.b_)
v(A.adt,B.zk)
v(A.adu,A.adt)
v(A.aa4,A.adu)
v(A.NI,B.w)
v(A.LL,A.NI)
x(A.NI,B.aO)
w(A.adt,B.FY)
w(A.adu,D.a16)})()
B.by(b.typeUniverse,JSON.parse('{"Bh":{"b_":[],"ay":[],"c":[]},"a__":{"Y":[],"c":[]},"aa4":{"bl":[],"aN":[],"t":[]},"LL":{"w":[],"aO":["w"],"yU":[],"p":[],"V":[],"aq":[]}}'))
var y={a:B.y("av")}}
$__dart_deferred_initializers__["tU7mqJrQNJvjL4SGFRPAtSnqicM="] = $__dart_deferred_initializers__.current
