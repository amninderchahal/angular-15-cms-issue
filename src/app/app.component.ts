import { Component } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  htmlString = documentToHtmlString({
    nodeType: 'document',
    content: [
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'Hello world!',
            marks: [],
          },
        ],
      },
    ],
  } as any)
}
