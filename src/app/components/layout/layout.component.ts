import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public numbers : number[] = [];
  public twoNums : number[] = [];
  constructor() {
    for(let i = 0; i < 15; i ++){
      this.numbers.push(i);
      // this.twoNums.push(i);
    }
   }

  ngOnInit(): void {
  }

  drop(event : CdkDragDrop<number[]>){
    if(event.previousContainer !== event.container){
      transferArrayItem(event.previousContainer.data,event.container.data,  event.currentIndex, event.previousIndex)
      console.log(event.container)
    }else{
      moveItemInArray(this.numbers, event.previousIndex , event.currentIndex);
    }
    console.log(event)
  }
}
