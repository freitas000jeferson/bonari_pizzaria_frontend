export type fn<S, A> = (state: S, action: A) => S | Promise<S>;
