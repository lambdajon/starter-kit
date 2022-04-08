interface Database {
  connect(): Promise<void>;
}

export { Database };
