import { Component, Input, OnChanges, OnInit, Output, SimpleChanges,EventEmitter, ChangeDetectorRef, DoCheck,ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges, DoCheck {


  name;
  @Input() set username(nameList){
    this.name = nameList;
    console.log("Input",this.name)
    this.name.forEach((element,index) => {
      if(element === 'Raja'){
        this.name.splice(index,1)
      }
    });
    console.log("Input--2222",this.name);

  }

  @Output() getUserName : EventEmitter<any> = new EventEmitter();
  constructor(private cdr : ChangeDetectorRef, private router: Router) {
   }
  ngDoCheck() {
    console.log("ngDoCheck",this.name)

  }
  ngOnChanges(changes: SimpleChanges) {
    // this.cdr.detectChanges();
    console.log("changes",changes)
  }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigateByUrl('/login')

  }

}
