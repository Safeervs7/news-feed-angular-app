import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../modal/modal.component';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() details:string;
  constructor( 
    private modalService: NgbModal 
  ) { }

  ngOnInit() {
  }

  edit(value){
    console.log(value);
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Edit';
    modalRef.componentInstance.content = '<textarea autofocus class="form-control" type="text">'+value+'</textarea>';
  }

}
