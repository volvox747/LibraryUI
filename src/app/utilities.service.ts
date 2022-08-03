import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }
  showOnDelete:boolean=false
  showOnAdd:boolean=false
  showOnEdit=new Subject<boolean>();
}
