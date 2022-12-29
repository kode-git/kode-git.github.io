import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: boolean = false;

  constructor() { }

  /**
   * Setting the state of the loading component
   * @param loading is the state of the loading component
   */
  setLoading(loading: boolean) {
    this.loading = loading;
  }

  /**
   * Return the current state of the loading component
   * @returns the current state of the loading component
   */
  getLoading(): boolean {
    return this.loading;
  }
}
