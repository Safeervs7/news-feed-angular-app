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
  @Input() index:number;
  category:string ="";
  constructor( 
    private modalService: NgbModal 
  ) { }

  ngOnInit() {
  }

  edit(value:string, id:number){
    console.log(id);
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Edit';
    modalRef.componentInstance.content = '<textarea [attr.data-id]="'+ id +'" autofocus class="form-control" type="text">'+value+'</textarea>';
  }

}
