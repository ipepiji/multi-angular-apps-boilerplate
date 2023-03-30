import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  private get ourStorage(): Storage {
    return localStorage;
  }

  setItem(key: string, value: any): void {
    //  If json, stringify it
    this.ourStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    //  This will detect and parse json later
    return this.ourStorage.getItem(key);
  }

  removeItem(key: string): void {
    this.ourStorage.removeItem(key);
  }

  clear(): void {
    this.ourStorage.clear();
  }
}
