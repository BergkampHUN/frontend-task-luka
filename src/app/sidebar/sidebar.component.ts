import {Component, OnInit} from '@angular/core';

export interface Node {
  name: string;
  child: Node[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  TAB_DEPTH = 30;
  nodes: Node[] = [];
  ngOnInit() {
    const responseData = [
      { id: '1', name: 'Ravvivo / Finance Team / Michael P. Lucifer'},
      { id: '2', name: 'Ravvivo / Technical Team / Marlyn B. Brown'},
      { id: '3', name: 'Ravvivo / Technical Team / David P. Perez'},
      { id: '4', name: 'CashLab / Anna J. Kelley'},
      { id: '5', name: 'CashLab / Brenda J. Soto'},
      { id: '6', name: 'Dovish / Management / Timothy A. Merrow'},
    ];

    let parentNode: Node[] = [];

    responseData.forEach(element => {
      const elementParts = element.name.split(' / ');
      let parent = parentNode;

      elementParts.forEach(part => {
        let partNode = parent.find(node => node.name === part);
        if (!partNode) {
          partNode = { name: part, child: [] } as Node;
          parent.push(partNode);
        }
        parent = partNode.child;
      })
    })

    this.nodes = parentNode;
  }
}
