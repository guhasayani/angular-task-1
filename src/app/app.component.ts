import { Component, ElementRef, ViewChild } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  list:any[]=[];
  
  @ViewChild('inputbox') inputname: any;
  AddTask(task:any){
    this.list.push({
      done:false,
      NAME:task
    });
    console.log(this.list);
    console.log(this.inputname);
    this.inputname.nativeElement.value="";
  };
  toggle(e: any,index: any){
    console.log(e.srcElement.checked);
    this.list[index].done=e.srcElement.checked;
    console.log(this.list);
  };
  delete(){
    let cmplist:any[]=[];
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      if(element.done==false){
        cmplist.push(element)
      }
    }
    this.list = cmplist;
  }
}
