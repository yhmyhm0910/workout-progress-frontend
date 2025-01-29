import { Component, OnInit } from '@angular/core';
import {
  AccordionButtonDirective,
  AccordionComponent,
  AccordionItemComponent,
  TemplateIdDirective
} from '@coreui/angular';


@Component({
  templateUrl: 'faqs.component.html',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionItemComponent,
    TemplateIdDirective,
    AccordionButtonDirective
  ]
})

export class FAQsComponent implements OnInit {

  // items = [1, 2, 3, 4];

  constructor(
  ) {
  }

  ngOnInit(): void {
  };

};
