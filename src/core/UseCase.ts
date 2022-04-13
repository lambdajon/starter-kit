export interface UseCase<T, U> {
  act(dataSource: T): Promise<U> | U;
}
