import { AwilixContainer } from 'awilix';
type InjectableOptions = {
  inject?: string[];
};

export class InjectDependency {
  private injectablies = {};

  constructor(injectablies: AwilixContainer, dependency, options: InjectableOptions) {
    if (options.inject && options.inject.length > 0) {
      options.inject.forEach((dName: string) => {
        this.injectablies[dName] = injectablies[dName];
      });
    } else {
      this.injectablies = injectablies;
    }
    return new dependency(this.injectablies);
  }
}

// TODO: Need refactor it
