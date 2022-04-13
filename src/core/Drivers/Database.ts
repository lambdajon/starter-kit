interface Database {
  connect(): Promise<void> | void;
  connection?();
}

export { Database };
