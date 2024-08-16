import type { Params } from "./pipe_utils";

export interface Pipe {
	<A>(...args:Params<[A],0>):A;

	<A,B>(...args:Params<[A,B],1>):B;

	<A,B,C>(...args:Params<[A,B,C],2>):C;

	<A,B,C,D>(...args:Params<[A,B,C,D],3>):D;

	<A,B,C,D,E>(...args:Params<[A,B,C,D,E],4>):E;

	<A,B,C,D,E,F>(...args:Params<[A,B,C,D,E,F],5>):F;

	<A,B,C,D,E,F,G>(...args:Params<[A,B,C,D,E,F,G],6>):G;

	<A,B,C,D,E,F,G,H>(...args:Params<[A,B,C,D,E,F,G,H],7>):H;

	<A,B,C,D,E,F,G,H,I>(...args:Params<[A,B,C,D,E,F,G,H,I],8>):I;

	<A,B,C,D,E,F,G,H,I,J>(...args:Params<[A,B,C,D,E,F,G,H,I,J],9>):J;

	<A,B,C,D,E,F,G,H,I,J,K>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K],10>):K;

	<A,B,C,D,E,F,G,H,I,J,K,L>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L],11>):L;

	<A,B,C,D,E,F,G,H,I,J,K,L,M>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M],12>):M;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N],13>):N;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O],14>):O;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P],15>):P;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q],16>):Q;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R],17>):R;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S],18>):S;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T],19>):T;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U],20>):U;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V],21>):V;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W],22>):W;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X],23>):X;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y],24>):Y;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z],25>):Z;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA],26>):AA;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB],27>):AB;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC],28>):AC;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD],29>):AD;
}