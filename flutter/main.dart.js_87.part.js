self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={XF:function XF(d,e){this.a=d
this.b=e},u0:function u0(d,e,f){this.c=d
this.d=e
this.a=f},a3T:function a3T(d){this.a=null
this.b=d
this.c=null},a9V:function a9V(){},
b5Q(d,e,f){var x,w,v,u,t=null,s={}
s.a=null
x=f.gF()
x.toString
if(x instanceof A.x){w=A.cd(x.bN(0,t),C.j)
v=w.a
u=w.b
x=x.k3
s.a=new A.z(v,u,v+x.a,u+x.b)}else throw A.d(A.dI("context.findRenderObject() return result must be RenderBox class"))
return A.aPZ(!0,C.cP,t,t,C.l,!0,!1,t,!0,"_attachedKey",!1,t,!0,d,t,new B.add(s,0,0,!0,t,B.bhZ()))},
add:function add(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adc:function adc(d){this.a=d},
blF(a1,a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="bottom",g="left",f="right",e="PreferDirection.",d="Center",a0={}
a0.a=a4
if(a1.LN(a4))a0.a=a4.hw(a1)
else{x=a1.a
w=a1.b
a0.a=new A.z(x,w,x+0,w+0)}v=new B.aON(a0,a5,a6,a1)
u=new B.aOK(a0,a5,a6,a1)
t=new B.aOL(a0,a5,a2,a1)
s=new B.aOM(a0,a5,a2,a1)
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
apy:function apy(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
aON:function aON(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aOK:function aOK(d,e,f,g){var _=this
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
baM(d){return new B.qi(d,null)},
bhh(){return A.L([B.aWF("ae_noteref"),new E.f9(null,new B.aMm()),B.aWF("ae_notecontent"),new E.f9(null,new B.aMn())],y.D,y.Q)},
qi:function qi(d,e){this.c=d
this.a=e},
L4:function L4(d,e,f){var _=this
_.d=d
_.f=_.e=null
_.iH$=e
_.a=null
_.b=f
_.c=null},
aGj:function aGj(d,e){this.a=d
this.b=e},
aGn:function aGn(d,e){this.a=d
this.b=e},
aGm:function aGm(d){this.a=d},
aGo:function aGo(d,e){this.a=d
this.b=e},
aGr:function aGr(d,e,f){this.a=d
this.b=e
this.c=f},
aGp:function aGp(d){this.a=d},
aGq:function aGq(d){this.a=d},
aGk:function aGk(d){this.a=d},
aGl:function aGl(d){this.a=d},
aMm:function aMm(){},
aMl:function aMl(d,e){this.a=d
this.b=e},
aMk:function aMk(d,e){this.a=d
this.b=e},
aMj:function aMj(d){this.a=d},
aMn:function aMn(){},
aa8:function aa8(){},
aWF(d){return new B.alc(d)},
b8Q(){return new E.f9(null,new B.alf())},
alc:function alc(d){this.a=d},
alf:function alf(){},
ale:function ale(d){this.a=d},
bir(d,e,f){return new Q.xh(f,d,null)}},C,A,G,D,H,I,E,K,F,L,M,N,O,P,Q
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
B.u0.prototype={
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
B.apy.prototype={
mX(d){return new A.aw(0,d.b,0,d.d)},
mY(d,e){var x=this,w=$.dQ(),v=A.aXl(w).f.b
return B.blF(new A.z(0,v,0+d.a,v+(d.b-v)),x.e,x.f,x.c,e,x.d)},
l0(d){return!this.c.k(0,d.c)||this.d!==d.d||this.f!==d.f}}
B.qi.prototype={
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
return A.a0($.aTP().cc(new A.dh(u)).kc(0,A.b1e(),!0,y.g),$async$vh)
case 2:v.ad(new t.aGj(v,e))
return A.Y(null,w)}})
return A.Z($async$vh,w)},
B(d){var x=this,w=null,v=x.f
v=v==null?w:v.b
return A.f_(A.i9(w,w,!0,w,w,w,1,w,w,w,!1,w,w,w,w,w,!0,w,w,w,w,w,w,A.ad(v==null?"":v,w,w,w,w,w,w,w),w,w,w,1,w),A.c6(C.aE,new A.ep(C.b9,w,C.b3,C.F,A.a([A.c6(w,new A.cU(new B.aGn(x,d),w),C.x,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),new A.e4(C.cp,w,w,new A.bS(x.iH$,new B.aGo(x,d),w,w,y.A),w)],y.p),w),C.x,!1,w,w,w,w,w,w,w,w,w,w,w,x.gu5(),w,w,w,w,w,w),w,w)},
uA(d){var x=0,w=A.a_(y.z),v=this,u,t,s,r
var $async$uA=A.W(function(e,f){if(e===1)return A.X(f,w)
while(true)switch(x){case 0:u=v.f
t=u==null
s=t?null:u.as
r=t?null:u.Q
u=v.c
u.toString
x=4
return A.a0(G.aP6(!1,new B.aGr(v,s,r),u,y.y),$async$uA)
case 4:x=f===!0?2:3
break
case 2:$.abB()
u=v.a.c
x=5
return A.a0($.b2A().cc(new A.dh(u)).hA(),$async$uA)
case 5:v.vh()
case 3:return A.Y(null,w)}})
return A.Z($async$uA,w)},
aoN(d){var x,w,v,u=null,t=y.V
A.ar(d,!0,t)
x=y.f
w=A.c6(u,A.ad(A.ap("\u4e0a\u4e00\u7ae0",u,"previousChapter",A.a([],x),u),u,u,u,u,u,u,u),C.x,!1,u,u,u,u,u,u,u,u,u,u,u,new B.aGk(this),u,u,u,u,u,u)
v=A.be(u,u,C.k,u,u,D.K6,u,u,u,u,u,u,u,u)
A.ar(d,!0,t)
return A.be(u,A.cn(A.a([w,v,A.c6(u,A.ad(A.ap("\u4e0b\u4e00\u7ae0",u,"nextChapter",A.a([],x),u),u,u,u,u,u,u,u),C.x,!1,u,u,u,u,u,u,u,u,u,u,u,new B.aGl(this),u,u,u,u,u,u)],y.p),C.v,u,C.cf,C.u,u,u),C.k,u,u,D.K1,u,50,u,u,u,u,u,u)},
Mq(d){var x,w,v
if(d==null){x=this.c
x.toString
A.ar(x,!0,y.V)
A.wu(A.ap("\u6ca1\u6709\u66f4\u591a\u7ae0\u8282",null,"noMoreChapter",A.a([],y.f),null))
return}x=this.c
x.toString
w=this.f
w=w==null?null:w.d
v=y.R
A.aQI(x,"novelContent",A.L(["novelId",A.e(w),"chapterId",A.e(d)],v,v),C.ap)},
gh7(d){return this.f}}
B.aa8.prototype={}
var z=a.updateTypes(["u0(hy,~(),c)","~()","lU(q)","cU(cQ,y<bK>())","wD(~())","f2(cQ,y<bK>())","r(cQ)","po(cQ,y<bK>())","f(bU)","c(hy,~(),c)"])
B.add.prototype={
$3(d,e,f){var x=this,w=x.a.a,v=x.f.$3(d,e,f)
return new B.u0(new B.adc(e),new A.iO(new B.apy(x.d,w,x.b,x.c,D.a8h),v,null),null)},
$S:z+0}
B.adc.prototype={
$1(d){if(d)this.a.$0()},
$S:20}
B.aON.prototype={
$1$extraSpace(d){var x=this
return x.b.b+x.c<x.a.a.b-x.d.b+d},
$0(){return this.$1$extraSpace(0)},
$S:68}
B.aOK.prototype={
$1$extraSpace(d){var x=this
return x.b.b+x.c<x.d.d-x.a.a.d+d},
$0(){return this.$1$extraSpace(0)},
$S:68}
B.aOL.prototype={
$1$extraSpace(d){var x=this
return x.b.a+x.c<x.a.a.a-x.d.a+d},
$0(){return this.$1$extraSpace(0)},
$S:68}
B.aOM.prototype={
$1$extraSpace(d){var x=this
return x.b.a+x.c<x.d.c-x.a.a.c+d},
$0(){return this.$1$extraSpace(0)},
$S:68}
B.aGj.prototype={
$0(){var x=this.a,w=x.f=this.b
if(w.z!==!0){w=w.Q
w=(w==null?0:w)===0}else w=!0
x.e=w},
$S:0}
B.aGn.prototype={
$1(d){var x=this,w=null,v=x.a,u=v.f,t=u==null,s=t?w:u.at
if(s==null)s=0
u=t?w:u.w
if(s<(u==null?0:u)){A.ar(x.b,!0,y.V)
v=v.f
u=v==null
t=u?w:v.at
if(t==null)t=0
v=u?w:v.w
if(v==null)v=0
return A.hi(A.ad(A.ap("\u7b49\u7ea7\u8fc7\u4f4e\n\u4f60\u7684\u5f53\u524d\u7b49\u7ea7\u662f "+t+"\n\u7ae0\u8282\u7b49\u7ea7\u9650\u5236\u4e3a "+v,w,"insufficientLevelPrompt",A.a([t,v],y.f),w),w,w,w,w,H.h7,C.bQ,w),w,w)}u=v.e
if(u==null)return C.X
if(!u){u=x.b
t=A.t0(w,w,w,w,w,w,w,w,w,w,w,w,w,new A.by(C.cQ,y.L),w,w,new A.by(new A.bD(A.V(u).fr,1,C.a4,-1),y.N),w,w,w,w,w)
A.ar(u,!0,y.V)
return A.hi(A.fE(A.ad(A.ap("\u8ba2\u9605",w,"subscribe",A.a([],y.f),w),w,w,w,w,I.jO,w,w),v.ga42(v),t),w,w)}u=A.bO("text-align:.*?;|line-height:.*?;",!0,!1)
u=A.cg('<div style="line-height:1.5;text-align:justify;">\n<p style="text-indent:2em;margin:0;">\u6211\u987a\u7740\u7531\u9999\u7684\u89c6\u7ebf\u770b\u8fc7\u53bb\uff0c\u770b\u6837\u5b50\u5979\u7684\u644a\u4f4d\u5728\u4e24\u5217\u5916\u90a3\u4e00\u5217\u7684\u4e00\u7aef\uff0c\u662f\u6240\u8c13\u7684\u5bff\u661f\u5ea7\u4f4d<span class="ae_noteref" style="vertical-align:super;font-size:x-small;white-space:nowrap;">[\u8bd1\u6ce8]</span>\u3002\u90a3\u91cc\u6709\u4e2a\u770b\u4e0a\u53bb\u5f88\u6e05\u79c0\u7684\u7537\u4eba\uff0c\u4ed6\u6b63\u597d\u5728\u628a\u672c\u5b50\u9012\u7ed9\u987e\u5ba2\u3002<span class="ae_notecontent" style="display:block;text-indent:0;max-width:90vw;width:15em;margin-right:0%;margin-left:auto;">\u8bd1\u6ce8\uff1a\u539f\u6587\u300c\u8a95\u751f\u65e5\u5e2d\u300d\uff0c\u6307\u957f\u65b9\u5f62\u684c\u5b50\u77ed\u8fb9\u7684\u5ea7\u4f4d\uff0c\u5728\u540c\u4eba\u5c55\u4e0a\u6307\u4ee3\u4f4d\u7f6e\u3002</span></p>\n<p style="text-indent:2em;margin:0;">\u2014\u2014\u4ec0\u4e48\u554a\uff0c\u8fd9\u4e0d\u662f\u6709\u7537\u670b\u53cb\u561b\u3002\u300a<ruby>\u7267\u7f8a\u4eba\u8207\u7dcb\u7d05\u8272<rt>\u5e7b\u60f3\u7684\u72a7\u7272</rt></ruby>\u300b</p>\n<p style="text-indent:2em;margin:0;">\u6211\u5e76\u6ca1\u6709\u5728\u671f\u5f85\u4ec0\u4e48\uff0c\u4f46\u7a0d\u5fae\u6709\u90a3\u4e48\u4e00\u70b9\u70b9\u5931\u671b\u3002</p>\n<p style="text-indent:2em;margin:0;">\u679c\u7136\uff0c\u5973\u5b69\u5b50\u65e2\u597d\u61c2\u53c8\u96be\u61c2\u3002\u5982\u679c\u5979\u5e76\u4e0d\u559c\u6b22\u5973\u5b69\u5b50\uff0c\u53c8\u4e3a\u4ec0\u4e48\u8981\u753b\u767e\u5408\u5462\u3002\u8001\u5b9e\u8bf4\uff0c\u5bf9\u6211\u6765\u8bf4\u5360\u987e\u5ba2\u5927\u591a\u6570\u7684\u7537\u5b69\u5b50\u66f4\u5bb9\u6613\u7406\u89e3\u3002\u56e0\u4e3a\uff0c\u4ed6\u4eec\u5bf9\u5973\u5b69\u62b1\u6709\u7684\u611f\u60c5\uff0c\u5c31\u8ddf\u6211\u5bf9\u5973\u5b69\u5b50\u62b1\u6709\u7684\u611f\u60c5\u4e00\u6837\u3002</p>\n<p style="text-indent:2em;margin:0;">\u4f46\u662f\uff0c\u6211\u5e76\u4e0d\u60f3\u6210\u4e3a\u7537\u4eba\u3002</p>\n<p style="text-indent:2em;margin:0;">\u6211\u611f\u89c9\u5230\u9ad8\u6da8\u7684\u5fc3\u60c5\u6025\u5267\u51b7\u5374\u3002</p>\n<p style="text-indent:2em;margin:0;">\u5230\u5934\u6765\uff0c\u6211\u65e2\u4e0d\u660e\u767d\u666e\u901a\u5973\u4eba\u7684\u5fc3\u60c5\uff0c\u4e5f\u4e0d\u660e\u767d\u7537\u4eba\u7684\u5fc3\u60c5\u3002\u8fd9\u4e2a\u5c9b<span class="ae_noteref" style="vertical-align:super;font-size:x-small;white-space:nowrap;">[\u8bd1\u6ce8]</span>\u4e0a\u5230\u5904\u662f\u5973\u5b69\u5b50\u62b1\u5728\u4e00\u8d77\u7684\u753b\u4f5c\uff0c\u6211\u5728\u5176\u4e2d\u5374\u6709\u79cd\u72ec\u81ea\u6eba\u4ea1\u88ab\u51b2\u5230\u65e0\u4eba\u5c9b\u4e0a\u7684\u611f\u89c9\u3002<span class="ae_notecontent" style="display:block;text-indent:0;max-width:90vw;width:15em;margin-right:0%;margin-left:auto;">\u8bd1\u6ce8\uff1a\u539f\u6587\u300c\u5cf6\u300d\u3002\u540c\u4eba\u5c55\u4e2d\u7528\u201c\u5c9b\u201d\u4ee3\u6307\u5c55\u5385\u91cc\u4e0d\u9760\u5899\u7684\u644a\u4f4d\u3002</span></p>\n<p style="text-indent:2em;margin:0;">\u6211\u4e0d\u8bb0\u5f97\u540e\u6765\u804a\u4e86\u4ec0\u4e48\u3002\u4f46\u662f\uff0c\u6211\u611f\u89c9\u5927\u6982\u662f\u7ee7\u7eed\u804a\u4e86\u4e9b\u65e0\u5173\u7d27\u8981\u7684\u8bdd\u9898\u3002\u4ec5\u4ec5\u6d3b\u7740\uff0c\u6211\u5c31\u80fd\u51e0\u4e4e\u6bcf\u5929\u611f\u53d7\u5230\u90a3\u4e9b\u7ec6\u5fae\u7684\u5931\u843d\u3002\u6211\u4e5f\u5dee\u4e0d\u591a\u4e60\u60ef\u85cf\u8d77\u771f\u5fc3\u8bdd\u7136\u540e\u7ef4\u6301\u666e\u901a\u7684\u5bf9\u8bdd\u4e86\u3002</p>\n<p style="text-indent:2em;margin:0;">\u6211\u611f\u89c9\u597d\u50cf\u662f\u8fd9\u65f6\u5019 Hiro \u8fc7\u6765\u6253\u4e86\u62db\u547c\u3002\u5370\u8c61\u91cc\uff0c\u6211\u89c1\u8fc7\u90a3\u4e2a\u6839\u636e\u5730\u5728\u6a2a\u6ee8\u7684\u7403\u961f\u7684\u9752\u8272\u5e3d\u5b50\u3002\u4f46\u662f Hiro \u603b\u4f1a\u6765\u6253\u62db\u547c\uff0c\u4e5f\u603b\u4f1a\u6234\u7740\u90a3\u4e2a\u5e3d\u5b50\uff0c\u6240\u4ee5\u4e5f\u53ef\u80fd\u662f\u5728\u5176\u4ed6\u6d3b\u52a8\u4e0a\u89c1\u5230\u7684\u3002</p>\n<p style="text-indent:2em;margin:0;">\u6211\u4e0d\u8bb0\u5f97\u6211\u8ddf\u7531\u9999\u7684\u5bf9\u8bdd\u662f\u600e\u4e48\u7ed3\u675f\u7684\u3002</p>\n<p style="text-indent:2em;margin:0;">\u56de\u8fc7\u795e\u6765\uff0c\u6211\u7684\u76ee\u5149\u5df2\u7ecf\u5728\u8ffd\u7740\u5979\u56de\u5230\u644a\u4f4d\u7684\u80cc\u5f71\u3002</p>\n<p style="text-indent:2em;margin:0;">\u5979\u548c\u90a3\u4e2a\u7537\u4eba\u83ab\u540d\u5730\u4eb2\u8fd1\uff0c\u4e00\u773c\u4fbf\u80fd\u7aa5\u77e5\u4e24\u4eba\u95f4\u6709\u4eb2\u5bc6\u7684\u5173\u7cfb\u3002\u679c\u7136\u5fc3\u91cc\u8fd8\u662f\u4f1a\u65e0\u6bd4\u70e6\u95f7\u3002\u6709\u79cd\u80e1\u4e71\u6492\u6c14\u7684\u5fc3\u60c5\u6d8c\u4e0a\u6765\uff1a\u4f60\u753b\u7740\u767e\u5408\u600e\u4e48\u8fd8\u8fd9\u6837\u554a\u3002</p>\n<p style="text-indent:2em;margin:0;">\u2014\u2014\u4f46\u662f\u3002</p>\n<p style="text-indent:2em;margin:0;">\u5ffd\u7136\uff0c\u5979\u4e5f\u770b\u5411\u4e86\u6211\u3002</p>\n<p style="text-indent:2em;margin:0;">\u6211\u6765\u4e0d\u53ca\u6487\u5f00\u76ee\u5149\uff0c\u88ab\u5979\u90a3\u699b\u8272\u7684\u773c\u77b3\u6355\u6349\u5230\u4e86\u3002\u5f53\u6211\u4eec\u4e92\u76f8\u51dd\u671b\uff0c\u5373\u5356\u4f1a\u573a\u7684\u4e00\u5207\u4fbf\u5316\u4f5c\u4e86\u80cc\u666f\u3002\u5145\u6ee1\u559c\u60a6\u7684\u5608\u6742\u55a7\u56a3\u4e5f\u597d\uff0c\u5fc3\u6000\u70ed\u60c5\u5feb\u6b65\u884c\u8d70\u7684\u4eba\u4eec\u4e5f\u597d\uff0c\u5c31\u8fde\u81ea\u5df1\u4eca\u5929\u7684\u65b0\u520a\u4e5f\u662f\uff0c\u4e00\u5207\u90fd\u77ac\u95f4\u8fdc\u53bb\uff0c\u6574\u4e2a\u4e16\u754c\u90fd\u586b\u6ee1\u4e86\u5979\u7684\u8eab\u59ff\u3002</p>\n<p style="text-indent:2em;margin:0;">\u7531\u9999\u7684\u8138\u5ffd\u7136\u6cdb\u7ea2\uff0c\u5979\u5728\u80f8\u524d\u5bf9\u6211\u5c0f\u5e45\u6325\u4e86\u6325\u624b\u3002</p>\n<p style="text-indent:2em;margin:0;">\u6211\u6ce8\u610f\u5230\uff0c\u6700\u5f00\u59cb\u89c1\u5230\u7684\u65f6\u5019\uff0c\u5979\u8138\u4e0a\u7684\u7ea2\u6655\u4e0d\u662f\u816e\u7ea2\uff0c\u800c\u662f\u51fa\u4e8e\u5bb3\u7f9e\u3002</p>\n<p style="text-indent:2em;margin:0;">\u80f8\u53e3\u5267\u70c8\u5730\u53d1\u51fa\u58f0\u97f3\u3002</p>\n<p style="text-indent:2em;margin:0;">\u90a3\u542b\u7f9e\u7684\u7b11\u5bb9\uff0c\u5728\u7167\u660e\u4e0b\u95ea\u8000\u7684\u7070\u91d1\u8272\u5934\u53d1\uff0c\u67d4\u7f8e\u7684\u767d\u7699\u6307\u5c16\u3002</p>\n<p style="text-indent:2em;margin:0;">\u6211\u611f\u89c9\u6211\u50cf\u662f\u5f77\u5fa8\u7684\u65c5\u884c\u8005\u6765\u5230\u4e86\u68ee\u6797\u7684\u6cc9\u6c34\u8fb9\uff0c\u9047\u5230\u4e86\u5996\u7cbe\u3002</p>\n<p style="text-indent:2em;margin:0;">\u540e\u6765\u6211\u8bfb\u4e86\u4e00\u4e0b\u5979\u7684\u65b0\u520a\uff0c\u5185\u5bb9\u53ea\u6709\u51ea\u4e00\u4e2a\u52b2\u5bf9\u8bd7\u5b50\u6027\u9a9a\u6270\u3002\u8001\u5b9e\u8bf4\u6211\u90a3\u65f6\u5019\u5c31\u60f3\uff0c\u8fd9\u90fd\u5565\u554a\u3002</p>\n<p style="text-indent:2em;margin:0;"><br/></p>\n<p style="text-indent:2em;margin:0;"><br/></p>\n</div>\n<span style=\'font-family:monospace;font-size:0.5em;color:#efefef;\'>src: 22First half Part02 | mod: 2022-02-11 23:31:04 - git msg \'\u301022\u3011\u5fae\u5c0f\u6539\u52a8\'</span><br>\n<span style=\'font-family:monospace;font-size:0.5em;color:#efefef;\'>masiro-sync.js uploaded at 2022-10-26 09:46 JST</span><br>\n',u,"")
if(u==null)u=""
t=A.D(y.D,y.Q)
t.n(0,G.b1K("ruby"),B.b8Q())
t.O(0,B.bhh())
u=E.tM(t,u,!1)
A.ar(x.b,!0,y.V)
return K.Zf(A.bT(A.a([u,A.c6(w,A.be(C.H,A.ad(A.ap("\u4e0b\u4e00\u7ae0",w,"nextChapter",A.a([],y.f),w),w,w,w,w,w,w,w),C.k,w,w,F.qL,w,50,w,w,w,w,w,1/0),C.x,!1,w,w,w,w,w,w,w,w,w,w,w,new B.aGm(v),w,w,w,w,w,w)],y.p),C.v,w,C.z,C.u),w,C.x,w,w,C.al)},
$S:9}
B.aGm.prototype={
$0(){var x=this.a,w=x.f
return x.Mq(w==null?null:w.y)},
$S:0}
B.aGo.prototype={
$3(d,e,f){return e?this.a.aoN(this.b):C.X},
$S:187}
B.aGr.prototype={
$1(d){var x,w,v,u,t,s=this,r=null,q=s.b,p=q==null,o=p?0:q,n=s.c,m=n==null
if(o<(m?0:n)){o=s.a.c
o.toString
A.ar(o,!0,y.V)
o=A.ad(A.ap("\u4f59\u989d\u4e0d\u8db3",r,"insufficientBalance",A.a([],y.f),r),r,r,r,r,r,r,r)}else o=C.X
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
t=A.fE(A.ad(A.ap("\u53d6\u6d88",r,"cancel",A.a([],u),r),r,r,r,r,r,r,r),new B.aGp(d),r)
if(p)q=0
if(q>(m?0:n)){q=x.c
q.toString
A.ar(q,!0,v)
u=A.fE(A.ad(A.ap("\u786e\u5b9a",r,"confirm",A.a([],u),r),r,r,r,r,r,r,r),new B.aGq(d),r)
q=u}else q=C.X
return L.Oe(A.a([t,q],y.p),r,w,r,o)},
$S:z+2}
B.aGp.prototype={
$0(){A.ff(this.a,!1).i0(!1)},
$S:0}
B.aGq.prototype={
$0(){A.ff(this.a,!1).i0(!0)},
$S:0}
B.aGk.prototype={
$0(){var x=this.a,w=x.f
return x.Mq(w==null?null:w.x)},
$S:0}
B.aGl.prototype={
$0(){var x=this.a,w=x.f
return x.Mq(w==null?null:w.y)},
$S:0}
B.aMm.prototype={
$2(d,e){var x,w=null,v=d.c,u=v.gcY(),t=u==null?w:E.Ny(u)
if(t==null)t=""
v=v.gcY()
if(v==null)x=w
else{v=v.gLo(v)
v=v==null?w:E.Ny(v)
x=v}return new A.cU(new B.aMl(x==null?"":x,t),w)},
$S:z+3}
B.aMl.prototype={
$1(d){var x=null,w=A.ax8(x,x,x,x,x,x,x,x,x,x,x,x,C.P,x,x,x,C.EH,x,x)
return A.fE(A.ad(this.b,x,x,x,x,D.adZ,x,x),new B.aMk(d,this.a),w)},
$S:529}
B.aMk.prototype={
$0(){B.b5Q(new B.aMj(this.b),!0,this.a)},
$S:0}
B.aMj.prototype={
$1(d){var x=null
return M.kQ(new A.bA(N.dp,A.ad(this.a,x,x,x,!0,x,x,x),x),5,O.rU)},
$S:z+4}
B.aMn.prototype={
$2(d,e){return C.X},
$S:z+5}
B.alc.prototype={
$1(d){var x=d.c.gcY()
x=x==null?null:x.gWT(x)
return x===this.a},
$S:z+6}
B.alf.prototype={
$2(d,e){var x,w,v,u=null,t={},s=d.c,r=s.gcY()
if(r==null)x=u
else{r=E.Ny(r)
w=A.bO("\\s",!0,!1)
r=A.cg(r,w,"")
x=r}t.a=x==null?"":x
s=s.gcY()
if(s==null)v=u
else{s=E.b1z(s,"rt")
s=new A.a6(s,new B.ale(t),A.a9(s).i("a6<1,f>")).eX(0)
v=s}return A.bT(A.a([A.ad(v==null?"":v,u,u,u,u,D.acL,u,u),A.ad(t.a,u,u,u,u,u,u,u)],y.p),C.v,u,C.z,C.u)},
$S:z+7}
B.ale.prototype={
$1(d){var x=E.Ny(d),w=this.a
w.a=C.c.jm(w.a,x,"")
return x},
$S:z+8};(function installTearOffs(){var x=a._instance_0i,w=a.installStaticTearOff
x(B.L4.prototype,"ga42","uA",1)
w(B,"bhZ",3,null,["$3"],["bir"],9,0)})();(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(B.XF,A.eg)
v(A.G,[B.u0,B.qi])
v(A.M,[B.a9V,B.aa8])
w(B.a3T,B.a9V)
v(A.bd,[B.add,B.adc,B.aON,B.aOK,B.aOL,B.aOM,B.aGn,B.aGo,B.aGr,B.aMl,B.aMj,B.alc,B.ale])
w(B.apy,A.zm)
w(B.L4,B.aa8)
v(A.cK,[B.aGj,B.aGm,B.aGp,B.aGq,B.aGk,B.aGl,B.aMk])
v(A.d7,[B.aMm,B.aMn,B.alf])
x(B.a9V,A.eJ)
x(B.aa8,P.nj)})()
A.bw(b.typeUniverse,JSON.parse('{"XF":{"U":[]},"u0":{"G":[],"c":[]},"a3T":{"M":["u0"],"eJ":[]},"qi":{"G":[],"c":[]},"L4":{"M":["qi"]}}'))
var y=(function rtii(){var x=A.C
return{Q:x("f9"),f:x("o<u>"),p:x("o<c>"),V:x("dW"),N:x("by<bD?>"),L:x("by<cV?>"),w:x("dn"),g:x("o7"),R:x("f"),A:x("bS<r>"),y:x("r"),D:x("r(cQ)"),z:x("@")}})();(function constants(){D.K1=new A.cC(C.m,null,F.qF,null,null,null,C.a7)
D.JI=new A.cx(C.q,C.q,C.q,F.qD)
D.K6=new A.cC(null,null,D.JI,null,null,null,C.a7)
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
D.a5Y=new A.qb(D.a4G,4294940672)
D.adZ=new A.B(!0,D.a5Y,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["gXyMXO6XJsH9Mhmu77hPbidj0JY="] = $__dart_deferred_initializers__.current
