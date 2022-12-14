import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MemberService } from '../_services/member.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryAccessGuard implements CanActivate {

  constructor(private memberService: MemberService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const libraryId = parseInt(state.url.split('library/')[1], 10);
    if (isNaN(libraryId)) return of(false);
    return this.memberService.hasLibraryAccess(libraryId);
  }
}
