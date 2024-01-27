import { Injectable, computed, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  #loadingSignal = signal<boolean>(false);

  public readonly loading = computed(() => this.#loadingSignal());

  setLoading(isLoading: boolean) {
    this.#loadingSignal.set(isLoading);
  }
}
