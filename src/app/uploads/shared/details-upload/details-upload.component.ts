import {Component, Input, OnInit} from '@angular/core';
import {Upload} from '../../../class/upload';
import {UploadService} from '../../../service/upload.service';

@Component({
  selector: 'app-details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: Upload;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  deleteFileUpload(fileUpload) {
    this.uploadService.deleteUpload(fileUpload);
  }

}
