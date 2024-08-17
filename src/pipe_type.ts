import type { Params } from "./pipe_utils";

export interface Pipe {
	<A>(...args:Params<[A]>):A;
	<A,B>(...args:Params<[A,B]>):B;
	<A,B,C>(...args:Params<[A,B,C]>):C;
	<A,B,C,D>(...args:Params<[A,B,C,D]>):D;
	<A,B,C,D,E>(...args:Params<[A,B,C,D,E]>):E;
	<A,B,C,D,E,F>(...args:Params<[A,B,C,D,E,F]>):F;
	<A,B,C,D,E,F,G>(...args:Params<[A,B,C,D,E,F,G]>):G;
	<A,B,C,D,E,F,G,H>(...args:Params<[A,B,C,D,E,F,G,H]>):H;
	<A,B,C,D,E,F,G,H,I>(...args:Params<[A,B,C,D,E,F,G,H,I]>):I;
	<A,B,C,D,E,F,G,H,I,J>(...args:Params<[A,B,C,D,E,F,G,H,I,J]>):J;
	<A,B,C,D,E,F,G,H,I,J,K>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K]>):K;
	<A,B,C,D,E,F,G,H,I,J,K,L>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L]>):L;
	<A,B,C,D,E,F,G,H,I,J,K,L,M>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M]>):M;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N]>):N;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O]>):O;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P]>):P;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q]>):Q;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R]>):R;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S]>):S;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T]>):T;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U]>):U;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V]>):V;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W]>):W;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X]>):X;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y]>):Y;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]>):Z;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA]>):AA;
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB>(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB]>):AB;
	
	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC>
	(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC]>):AC;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD>
	(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD]>):AD;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE>
	(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE]>):AE;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF>
	(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF]>):AF;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG>
	(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG]>):AG;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH>
	(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH]>):AH;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI>
	(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI]>):AI;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ>
	(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ]>):AJ;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK>
	(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK]>):AK;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL>
	(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL]>):AL;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM>
	(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM]>):AM;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN>
	(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN]>):AN;

	<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO>
	(...args:Params<[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO]>):AO;
}