import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, delay, switchMap, tap } from 'rxjs/operators';
import { HospitalService, HostpitalDto } from 'src/app/hostpital/domain';
import { HospitalDto } from 'src/app/hostpital/domain/models/hospital.dto';

export interface HospitalsState {
    hospitals: HostpitalDto[];
    isPending: boolean;
}

@Injectable()
export class HospitalsStore extends ComponentStore<HospitalsState> {
    readonly hospitals$: Observable<HostpitalDto[]> = this.select(state => state.hospitals);
    readonly isPending$: Observable<boolean> = this.select(state => state.isPending);

    // Initializing through the constructor makes the state immediately available to the ComponentStore consumers.
    constructor(private readonly hospitalService: HospitalService) {
        super({
            hospitals: [],
            isPending: false
        });
    }

    readonly setHospitals = this.updater(
        (state: HospitalsState, newHospitalsState: HospitalDto[]) => {
            return {
                ...state,
                hospitals: newHospitalsState
            };
        }
    );

    readonly setPending = this.updater(
        (state: HospitalsState, newPendingState: boolean) => {
            return {
                ...state,
                isPending: newPendingState
            };
        }
    );

    readonly getHospitals = this.effect((origin$: Observable<{}>) =>
        origin$.pipe(
            tap(() => this.setPending(true)),
            switchMap(() => this.hospitalService.getHospitals()),
            delay(2000),
            tap({ next: (hospitals) => {
                    this.setHospitals(hospitals);
                    this.setPending(false);
                },
                error: (e) => console.error(e),
            }),
            // 👇 Handle potential error within inner pipe.
            catchError(() => EMPTY),
        )
    );
}
