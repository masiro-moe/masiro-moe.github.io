self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={XF:function XF(d,e){this.a=d
this.b=e},u_:function u_(d,e,f){this.c=d
this.d=e
this.a=f},a3T:function a3T(d){this.a=null
this.b=d
this.c=null},a9V:function a9V(){},
b5R(d,e,f){var x,w,v,u,t=null,s={}
s.a=null
x=f.gF()
x.toString
if(x instanceof A.x){w=A.cd(x.bN(0,t),C.j)
v=w.a
u=w.b
x=x.k3
s.a=new A.z(v,u,v+x.a,u+x.b)}else throw A.d(A.dI("context.findRenderObject() return result must be RenderBox class"))
return A.aQ_(!0,C.cP,t,t,C.l,!0,!1,t,!0,"_attachedKey",!1,t,!0,d,t,new B.add(s,0,0,!0,t,B.bi_()))},
add:function add(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adc:function adc(d){this.a=d},
blG(a1,a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="bottom",g="left",f="right",e="PreferDirection.",d="Center",a0={}
a0.a=a4
if(a1.LN(a4))a0.a=a4.hw(a1)
else{x=a1.a
w=a1.b
a0.a=new A.z(x,w,x+0,w+0)}v=new B.aOO(a0,a5,a6,a1)
u=new B.aOL(a0,a5,a6,a1)
t=new B.aOM(a0,a5,a2,a1)
s=new B.aON(a0,a5,a2,a1)
x=a3.a
if(x<=2)r=v.$0()?"top":h
else if(x<=5)r=u.$0()?h:"top"
else if(x<=8)r=t.$0()?g:f
else r=s.$0()?f:g
if(x<=5){x=C.c.jm(a3.N(),e,"")
x=A.cg(x,"top","")
switch(A.cg(x,h,"")){case"Left":x=a0.a
if(s.$1$extraSpace(x.c-x.a))x="Left"
else{x=a0.a
x=t.$1$extraSpace(x.c-x.a)?"Right":d}r+=x
break
case"Center":r+="Center"
break
case"Right":x=a0.a
if(t.$1$extraSpace(x.c-x.a))x="Right"
else{x=a0.a
x=s.$1$extraSpace(x.c-x.a)?"Left":d}r+=x
break}}else{x=C.c.jm(a3.N(),e,"")
x=A.cg(x,g,"")
switch(A.cg(x,f,"")){case"Top":x=a0.a
if(u.$1$extraSpace(x.d-x.b))x="Top"
else{x=a0.a
x=v.$1$extraSpace(x.d-x.b)?"Bottom":d}r+=x
break
case"Center":r+="Center"
break
case"Bottom":x=a0.a
if(v.$1$extraSpace(x.d-x.b))x="Bottom"
else{x=a0.a
x=u.$1$extraSpace(x.d-x.b)?"Top":d}r+=x
break}}switch(r){case"topLeft":x=a0.a
q=new A.j(x.a,x.b).ah(0,new A.j(0,a5.b)).a2(0,new A.j(a2,-a6))
break
case"topCenter":x=a5.a
w=x/2
p=a1.c
o=w>p-a0.a.gu2().a
n=a1.a
m=w>a0.a.gu2().a-n
if(o&&!m)q=new A.j(p-x,a0.a.b-a5.b)
else{x=m&&!o
p=a0.a
l=a5.b
q=x?new A.j(n,p.b-l):p.gu2().ah(0,new A.j(w,l))}q=q.a2(0,new A.j(0,-a6))
break
case"topRight":x=a0.a
q=new A.j(x.c,x.b).ah(0,new A.j(a5.a,a5.b)).a2(0,new A.j(-a2,-a6))
break
case"bottomLeft":x=a0.a
q=new A.j(x.a,x.d).a2(0,new A.j(a2,a6))
break
case"bottomCenter":x=a5.a
w=x/2
p=a1.c
o=w>p-a0.a.gu2().a
n=a1.a
m=w>a0.a.gu2().a-n
if(o&&!m)q=new A.j(p-x,a0.a.d)
else{x=m&&!o
p=a0.a
q=x?new A.j(n,p.d):p.gWB().ah(0,new A.j(w,0))}q=q.a2(0,new A.j(0,a6))
break
case"bottomRight":x=a0.a
q=new A.j(x.c,x.d).ah(0,new A.j(a5.a,0)).a2(0,new A.j(-a2,a6))
break
case"leftTop":x=a0.a
q=new A.j(x.a,x.b).ah(0,new A.j(a5.a,0)).a2(0,new A.j(-a2,a6))
break
case"leftCenter":x=a5.b
w=x/2
p=a1.b
k=w>a0.a.grP().b-p
n=a1.d
j=w>n-a0.a.grP().b
if(k&&!j)q=new A.j(a0.a.a-a5.a,p)
else{p=j&&!k
l=a0.a
i=a5.a
q=p?new A.j(l.a-i,n-x):l.grP().ah(0,new A.j(i,w))}q=q.a2(0,new A.j(-a2,0))
break
case"leftBottom":x=a0.a
q=new A.j(x.a,x.d).ah(0,new A.j(a5.a,a5.b)).a2(0,new A.j(-a2,-a6))
break
case"rightTop":x=a0.a
q=new A.j(x.c,x.b).a2(0,new A.j(a2,a6))
break
case"rightCenter":x=a5.b
w=x/2
p=a1.b
k=w>a0.a.grP().b-p
n=a1.d
j=w>n-a0.a.grP().b
if(k&&!j)q=new A.j(a0.a.c,p)
else{p=j&&!k
l=a0.a
q=p?new A.j(l.c,n-x):l.gapb().ah(0,new A.j(0,w))}q=q.a2(0,new A.j(a2,0))
break
case"rightBottom":x=a0.a
q=new A.j(x.c,x.d).ah(0,new A.j(0,a5.b)).a2(0,new A.j(a2,-a6))
break
default:q=C.j}return q},
apz:function apz(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
aOO:function aOO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aOL:function aOL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aOM:function aOM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aON:function aON(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
baN(d){return new B.qh(d,null)},
bhi(){return A.L([B.aWH("ae_noteref"),new E.f9(null,new B.aMn()),B.aWH("ae_notecontent"),new E.f9(null,new B.aMo())],y.D,y.Q)},
qh:function qh(d,e){this.c=d
this.a=e},
L4:function L4(d,e,f){var _=this
_.d=d
_.f=_.e=null
_.iH$=e
_.a=null
_.b=f
_.c=null},
aGk:function aGk(d,e){this.a=d
this.b=e},
aGo:function aGo(d,e){this.a=d
this.b=e},
aGn:function aGn(d){this.a=d},
aGp:function aGp(d,e){this.a=d
this.b=e},
aGs:function aGs(d,e,f){this.a=d
this.b=e
this.c=f},
aGq:function aGq(d){this.a=d},
aGr:function aGr(d){this.a=d},
aGl:function aGl(d){this.a=d},
aGm:function aGm(d){this.a=d},
aMn:function aMn(){},
aMm:function aMm(d,e){this.a=d
this.b=e},
aMl:function aMl(d,e){this.a=d
this.b=e},
aMk:function aMk(d){this.a=d},
aMo:function aMo(){},
aa8:function aa8(){},
aWH(d){return new B.alc(d)},
b8R(){return new E.f9(null,new B.alg())},
alc:function alc(d){this.a=d},
alg:function alg(){},
ale:function ale(){},
alf:function alf(d){this.a=d},
bis(d,e,f){return new Q.xh(f,d,null)}},C,A,G,D,H,I,E,K,F,L,M,N,O,P,Q
B=a.updateHolder(c[12],B)
C=c[2]
A=c[0]
G=c[34]
D=c[99]
H=c[94]
I=c[93]
E=c[57]
K=c[53]
F=c[100]
L=c[40]
M=c[52]
N=c[78]
O=c[101]
P=c[47]
Q=c[25]
B.XF.prototype={
N(){return"PreferDirection."+this.b}}
B.u_.prototype={
a_(){return new B.a3T(C.i)},
a_t(d){return this.c.$1(d)}}
B.a3T.prototype={
a9(){$.A.a7$.push(this)
this.aC()},
we(){var x,w
this.a6v()
x=this.c.R(y.w).f
w=this.a
if(x.e.d===0)w.a_t(!1)
else w.a_t(!0)},
m(){C.b.C($.A.a7$,this)
this.aP()},
B(d){return this.a.d}}
B.a9V.prototype={}
B.apz.prototype={
mX(d){return new A.ax(0,d.b,0,d.d)},
mY(d,e){var x=this,w=$.dQ(),v=A.aXn(w).f.b
return B.blG(new A.z(0,v,0+d.a,v+(d.b-v)),x.e,x.f,x.c,e,x.d)},
l0(d){return!this.c.k(0,d.c)||this.d!==d.d||this.f!==d.f}}
B.qh.prototype={
a_(){return new B.L4(A.lp(null,0),A.bG(!1,y.y),C.i)}}
B.L4.prototype={
a9(){this.aC()
this.vh()},
vh(){var x=0,w=A.a_(y.z),v=this,u,t
var $async$vh=A.W(function(d,e){if(d===1)return A.X(e,w)
while(true)switch(x){case 0:$.abB()
u=v.a.c
t=B
x=2
return A.a0($.aTR().cc(new A.dg(u)).kc(0,A.b1g(),!0,y.g),$async$vh)
case 2:v.ad(new t.aGk(v,e))
return A.Y(null,w)}})
return A.Z($async$vh,w)},
B(d){var x=this,w=null,v=x.f
v=v==null?w:v.b
return A.f_(A.i9(w,w,!0,w,w,w,1,w,w,w,!1,w,w,w,w,w,!0,w,w,w,w,w,w,A.ad(v==null?"":v,w,w,w,w,w,w,w),w,w,w,1,w),A.c6(C.aE,new A.ep(C.b9,w,C.b3,C.F,A.a([A.c6(w,new A.cU(new B.aGo(x,d),w),C.x,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),new A.e4(C.cp,w,w,new A.bT(x.iH$,new B.aGp(x,d),w,w,y.A),w)],y.p),w),C.x,!1,w,w,w,w,w,w,w,w,w,w,w,x.gu5(),w,w,w,w,w,w),w,w)},
uA(d){var x=0,w=A.a_(y.z),v=this,u,t,s,r
var $async$uA=A.W(function(e,f){if(e===1)return A.X(f,w)
while(true)switch(x){case 0:u=v.f
t=u==null
s=t?null:u.as
r=t?null:u.Q
u=v.c
u.toString
x=4
return A.a0(G.aP7(!1,new B.aGs(v,s,r),u,y.y),$async$uA)
case 4:x=f===!0?2:3
break
case 2:$.abB()
u=v.a.c
x=5
return A.a0($.b2B().cc(new A.dg(u)).hA(),$async$uA)
case 5:v.vh()
case 3:return A.Y(null,w)}})
return A.Z($async$uA,w)},
aoN(d){var x,w,v,u=null,t=y.V
A.ar(d,!0,t)
x=y.f
w=A.c6(u,A.ad(A.ap("\u4e0a\u4e00\u7ae0",u,"previousChapter",A.a([],x),u),u,u,u,u,u,u,u),C.x,!1,u,u,u,u,u,u,u,u,u,u,u,new B.aGl(this),u,u,u,u,u,u)
v=A.be(u,u,C.k,u,u,D.K6,u,u,u,u,u,u,u,u)
A.ar(d,!0,t)
return A.be(u,A.cn(A.a([w,v,A.c6(u,A.ad(A.ap("\u4e0b\u4e00\u7ae0",u,"nextChapter",A.a([],x),u),u,u,u,u,u,u,u),C.x,!1,u,u,u,u,u,u,u,u,u,u,u,new B.aGm(this),u,u,u,u,u,u)],y.p),C.v,u,C.cf,C.u,u,u),C.k,u,u,D.K1,u,50,u,u,u,u,u,u)},
Mq(d){var x,w,v
if(d==null){x=this.c
x.toString
A.ar(x,!0,y.V)
A.wt(A.ap("\u6ca1\u6709\u66f4\u591a\u7ae0\u8282",null,"noMoreChapter",A.a([],y.f),null))
return}x=this.c
x.toString
w=this.f
w=w==null?null:w.d
v=y.R
A.aQJ(x,"novelContent",A.L(["novelId",A.e(w),"chapterId",A.e(d)],v,v),C.ap)},
gh7(d){return this.f}}
B.aa8.prototype={}
var z=a.updateTypes(["u_(hy,~(),c)","~()","lU(q)","cU(cQ,y<bK>())","wC(~())","f2(cQ,y<bK>())","r(cQ)","av(cQ,y<bK>())","~(bN)","f(bN)","c(hy,~(),c)"])
B.add.prototype={
$3(d,e,f){var x=this,w=x.a.a,v=x.f.$3(d,e,f)
return new B.u_(new B.adc(e),new A.iO(new B.apz(x.d,w,x.b,x.c,D.a8h),v,null),null)},
$S:z+0}
B.adc.prototype={
$1(d){if(d)this.a.$0()},
$S:20}
B.aOO.prototype={
$1$extraSpace(d){var x=this
return x.b.b+x.c<x.a.a.b-x.d.b+d},
$0(){return this.$1$extraSpace(0)},
$S:68}
B.aOL.prototype={
$1$extraSpace(d){var x=this
return x.b.b+x.c<x.d.d-x.a.a.d+d},
$0(){return this.$1$extraSpace(0)},
$S:68}
B.aOM.prototype={
$1$extraSpace(d){var x=this
return x.b.a+x.c<x.a.a.a-x.d.a+d},
$0(){return this.$1$extraSpace(0)},
$S:68}
B.aON.prototype={
$1$extraSpace(d){var x=this
return x.b.a+x.c<x.d.c-x.a.a.c+d},
$0(){return this.$1$extraSpace(0)},
$S:68}
B.aGk.prototype={
$0(){var x=this.a,w=x.f=this.b
if(w.z!==!0){w=w.Q
w=(w==null?0:w)===0}else w=!0
x.e=w},
$S:0}
B.aGo.prototype={
$1(d){var x,w=this,v=null,u=w.a,t=u.f,s=t==null,r=s?v:t.at
if(r==null)r=0
x=s?v:t.w
if(r<(x==null?0:x)){A.ar(w.b,!0,y.V)
u=u.f
t=u==null
s=t?v:u.at
if(s==null)s=0
u=t?v:u.w
if(u==null)u=0
return A.hi(A.ad(A.ap("\u7b49\u7ea7\u8fc7\u4f4e\n\u4f60\u7684\u5f53\u524d\u7b49\u7ea7\u662f "+s+"\n\u7ae0\u8282\u7b49\u7ea7\u9650\u5236\u4e3a "+u,v,"insufficientLevelPrompt",A.a([s,u],y.f),v),v,v,v,v,H.h7,C.bQ,v),v,v)}r=u.e
if(r==null)return C.V
if(!r){t=w.b
s=A.t_(v,v,v,v,v,v,v,v,v,v,v,v,v,new A.by(C.cQ,y.L),v,v,new A.by(new A.bD(A.V(t).fr,1,C.a4,-1),y.N),v,v,v,v,v)
A.ar(t,!0,y.V)
return A.hi(A.fE(A.ad(A.ap("\u8ba2\u9605",v,"subscribe",A.a([],y.f),v),v,v,v,v,I.jO,v,v),u.ga42(u),s),v,v)}t=s?v:t.r
if(t==null)t=v
else{s=A.bP("text-align:.*?;|line-height:.*?;",!0,!1)
t=A.cg(t,s,"")}if(t==null)t=""
s=A.D(y.D,y.Q)
s.n(0,G.b1L("ruby"),B.b8R())
s.O(0,B.bhi())
t=E.tL(s,t,!1)
A.ar(w.b,!0,y.V)
return K.Zf(A.bU(A.a([t,A.c6(v,A.be(C.H,A.ad(A.ap("\u4e0b\u4e00\u7ae0",v,"nextChapter",A.a([],y.f),v),v,v,v,v,v,v,v),C.k,v,v,F.qL,v,50,v,v,v,v,v,1/0),C.x,!1,v,v,v,v,v,v,v,v,v,v,v,new B.aGn(u),v,v,v,v,v,v)],y.p),C.v,v,C.z,C.u),v,C.x,v,v,C.al)},
$S:9}
B.aGn.prototype={
$0(){var x=this.a,w=x.f
return x.Mq(w==null?null:w.y)},
$S:0}
B.aGp.prototype={
$3(d,e,f){return e?this.a.aoN(this.b):C.V},
$S:187}
B.aGs.prototype={
$1(d){var x,w,v,u,t,s=this,r=null,q=s.b,p=q==null,o=p?0:q,n=s.c,m=n==null
if(o<(m?0:n)){o=s.a.c
o.toString
A.ar(o,!0,y.V)
o=A.ad(A.ap("\u4f59\u989d\u4e0d\u8db3",r,"insufficientBalance",A.a([],y.f),r),r,r,r,r,r,r,r)}else o=C.V
x=s.a
w=x.c
w.toString
v=y.V
A.ar(w,!0,v)
w=m?0:n
u=y.f
w=A.ad(A.ap("\u8ba2\u9605\u8d39\u7528\uff1a"+w+" G",r,"subscribeCostFormat",A.a([w],u),r),r,r,r,r,r,r,r)
t=x.c
t.toString
A.ar(t,!0,v)
t=A.fE(A.ad(A.ap("\u53d6\u6d88",r,"cancel",A.a([],u),r),r,r,r,r,r,r,r),new B.aGq(d),r)
if(p)q=0
if(q>(m?0:n)){q=x.c
q.toString
A.ar(q,!0,v)
u=A.fE(A.ad(A.ap("\u786e\u5b9a",r,"confirm",A.a([],u),r),r,r,r,r,r,r,r),new B.aGr(d),r)
q=u}else q=C.V
return L.Oe(A.a([t,q],y.p),r,w,r,o)},
$S:z+2}
B.aGq.prototype={
$0(){A.ff(this.a,!1).i0(!1)},
$S:0}
B.aGr.prototype={
$0(){A.ff(this.a,!1).i0(!0)},
$S:0}
B.aGl.prototype={
$0(){var x=this.a,w=x.f
return x.Mq(w==null?null:w.x)},
$S:0}
B.aGm.prototype={
$0(){var x=this.a,w=x.f
return x.Mq(w==null?null:w.y)},
$S:0}
B.aMn.prototype={
$2(d,e){var x,w=null,v=d.c,u=v.gd3(),t=u==null?w:E.Ny(u)
if(t==null)t=""
v=v.gd3()
if(v==null)x=w
else{v=v.gLo(v)
v=v==null?w:E.Ny(v)
x=v}return new A.cU(new B.aMm(x==null?"":x,t),w)},
$S:z+3}
B.aMm.prototype={
$1(d){var x=null,w=A.ax9(x,x,x,x,x,x,x,x,x,x,x,x,C.P,x,x,x,C.EH,x,x)
return A.fE(A.ad(this.b,x,x,x,x,D.adZ,x,x),new B.aMl(d,this.a),w)},
$S:529}
B.aMl.prototype={
$0(){B.b5R(new B.aMk(this.b),!0,this.a)},
$S:0}
B.aMk.prototype={
$1(d){var x=null
return M.kQ(new A.bA(N.dp,A.ad(this.a,x,x,x,!0,x,x,x),x),5,O.rU)},
$S:z+4}
B.aMo.prototype={
$2(d,e){return C.V},
$S:z+5}
B.alc.prototype={
$1(d){var x=d.c.gd3()
x=x==null?null:x.gWT(x)
return x===this.a},
$S:z+6}
B.alg.prototype={
$2(d,e){var x,w,v,u,t=null,s={},r=d.c.gd3()
if(r==null)return C.V
C.b.ag(E.aTj(r,"rp"),new B.ale())
x=E.Ny(r)
w=A.bP("\\s",!0,!1)
v=A.cg(x,w,"")
s.a=v
x=E.aTj(r,"rt")
u=new A.a6(x,new B.alf(s),A.a9(x).i("a6<1,f>")).eY(0)
return A.bU(A.a([A.ad(u,t,t,t,t,D.acL,t,t),A.ad(s.a,t,t,t,t,t,t,t)],y.p),C.v,t,C.z,C.u)},
$S:z+7}
B.ale.prototype={
$1(d){return d.eO(0)},
$S:z+8}
B.alf.prototype={
$1(d){var x=E.Ny(d),w=this.a
w.a=C.c.jm(w.a,x,"")
return x},
$S:z+9};(function installTearOffs(){var x=a._instance_0i,w=a.installStaticTearOff
x(B.L4.prototype,"ga42","uA",1)
w(B,"bi_",3,null,["$3"],["bis"],10,0)})();(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(B.XF,A.eg)
v(A.G,[B.u_,B.qh])
v(A.M,[B.a9V,B.aa8])
w(B.a3T,B.a9V)
v(A.bd,[B.add,B.adc,B.aOO,B.aOL,B.aOM,B.aON,B.aGo,B.aGp,B.aGs,B.aMm,B.aMk,B.alc,B.ale,B.alf])
w(B.apz,A.zm)
w(B.L4,B.aa8)
v(A.cK,[B.aGk,B.aGn,B.aGq,B.aGr,B.aGl,B.aGm,B.aMl])
v(A.d7,[B.aMn,B.aMo,B.alg])
x(B.a9V,A.eJ)
x(B.aa8,P.nj)})()
A.bw(b.typeUniverse,JSON.parse('{"XF":{"U":[]},"u_":{"G":[],"c":[]},"a3T":{"M":["u_"],"eJ":[]},"qh":{"G":[],"c":[]},"L4":{"M":["qh"]}}'))
var y=(function rtii(){var x=A.C
return{Q:x("f9"),f:x("o<u>"),p:x("o<c>"),V:x("dW"),N:x("by<bD?>"),L:x("by<cV?>"),w:x("dn"),g:x("o7"),R:x("f"),A:x("bT<r>"),y:x("r"),D:x("r(cQ)"),z:x("@")}})();(function constants(){D.K1=new A.cC(C.m,null,F.qF,null,null,null,C.a8)
D.JI=new A.cx(C.q,C.q,C.q,F.qD)
D.K6=new A.cC(null,null,D.JI,null,null,null,C.a8)
D.a8h=new B.XF(1,"topCenter")
D.acL=new A.B(!0,null,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.MD=new A.S(4294964192)
D.My=new A.S(4294959282)
D.Mw=new A.S(4294954112)
D.Mv=new A.S(4294948685)
D.Mu=new A.S(4294944550)
D.Mp=new A.S(4294675456)
D.Mm=new A.S(4294278144)
D.Mj=new A.S(4293880832)
D.Mg=new A.S(4293284096)
D.a4G=new A.bx([50,D.MD,100,D.My,200,D.Mw,300,D.Mv,400,D.Mu,500,C.Mt,600,D.Mp,700,D.Mm,800,D.Mj,900,D.Mg],A.C("bx<l,S>"))
D.a5Y=new A.qa(D.a4G,4294940672)
D.adZ=new A.B(!0,D.a5Y,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["j0w7H1PGMqCMPzK2SIzfUxVg3Y8="] = $__dart_deferred_initializers__.current
