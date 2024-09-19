import { Component , signal , OnInit, inject} from '@angular/core';
import {DatePipe,UpperCasePipe,LowerCasePipe,JsonPipe,TitleCasePipe,AsyncPipe} from "@angular/common"
import {Observable} from "rxjs";
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-pipeex',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,DatePipe,JsonPipe,AsyncPipe,TitleCasePipe],
  templateUrl: './pipeex.component.html',
  styleUrl: './pipeex.component.css'
})
export class PipeexComponent implements OnInit{
  title = signal("Angular 18");
  count = signal(0);
  firstName : string = "Shivakant";
  currentDate : Date = new Date();

  userList$ :Observable<any> = new Observable<any>
  dataService = inject(DataService)
  updateSignal(){
    this.title.set("Angular Signals")
    this.count.set(1)
  }
  ngOnInit(): void {
    this.userList$ =  this.dataService.getAllPost();
  }
  
}
