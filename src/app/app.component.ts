import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UrlService } from './services/url.service';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // userName = 0;
  userName:any = ["Thiru"];
  sendData = "";
  previousUrl: string = null;
  currentUrl: string = null;
  constructor(private cdr : ChangeDetectorRef,private router: Router,private urlService: UrlService){

  }

  ngOnInit() {
    let a:any = "0"
    if(a == "0"){
      console.log("working")
    }
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
    console.log("data-->",event)

      this.previousUrl = this.currentUrl;
      this.currentUrl = event.url;
      this.urlService.setPreviousUrl(this.previousUrl);
    });
  }

  sendDataToChild(){
    let data = [];
    data = data.filter((item,index) => data.indexOf(item) === index);
    this.userName = [];
    this.userName = this.userName.concat(data);
    console.log("data-->child",data)
  }

}
