export interface UseCase<T, U, M> {
  act(dataSource: T, matchers?: M | undefined): Promise<U> | U;
}
