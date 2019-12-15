import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {
  title:string = "";
  content:string = "";
  @ViewChild('modalBody', {static: false}) modalBody: any;
  constructor( public activeModal: NgbActiveModal ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.modalBody.nativeElement.insertAdjacentHTML('beforeend', this.content);
    console.log(this.modalBody.nativeElement);
  }

}
