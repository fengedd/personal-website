import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from '../../GlobalConfig';
import { IconService } from '../../service/icon/icon.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  githubId: String;
  linkedinId: String;
  name: String;
  constructor(private globalconfig: GlobalConfig, private icService: IconService) {
  }

  ngOnInit() {
    this.name = this.globalconfig.name;
    this.githubId = this.globalconfig.id;
    this.linkedinId = this.globalconfig.id;
  }

}
