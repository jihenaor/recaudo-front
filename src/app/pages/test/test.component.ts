import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.test();
  }


  test() {
    this.service.getTest().subscribe(resp => {
       console.log(resp)
    });
  }

}
