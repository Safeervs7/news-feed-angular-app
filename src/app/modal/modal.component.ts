import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {
  title:string = "";
  content:string = "";
  @ViewChild('modalBody', {static: false}) modalBody: ElementRef;
  constructor( public activeModal: NgbActiveModal ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.modalBody.nativeElement.insertAdjacentHTML('beforeend', this.content);
  }

  updateNewsFeed(value){
    console.log(value);
  }

}
