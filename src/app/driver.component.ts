import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Driver } from './klasa';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent{


@Input()
vozac:Driver = {} as Driver;

@Input()
reden:Number = 0;


@Output()
cuci = new EventEmitter<any>();


klasi(){ 
  var zname;
  if(this.vozac.category=="beginner")
  zname=true;
  else
  zname=false;
  return {'poz':zname,'course-card':true}

}
  styles(){
  if(this.vozac.category=="beginner")
  return {'background-color':'green'}
  else
  return {'background-color':'red'}
}
styles2(){
  if(this.vozac.team=="Mercedes AMG Petronas")
  {
    return {'border':'10px solid black', "font-size":"20px", "display":"flex", "justify-content":"right"}
  }
    else{
      return {'border':'2px solid red', "font-size":"15px", "display":"flex", "justify-content":"center"}
    }
  }
  styles3(){
    if(this.vozac.points > 400) {
      return {"font size":"20px", "font-weight":"bold", "color":"green"};
    }
    else
    return {"font-weight":"lighter"};
  }
  klik(){
    var link=this.vozac.iconUrl;
    window.open(link,"_blank");
    this.cuci.emit(this.vozac);
  }
}
