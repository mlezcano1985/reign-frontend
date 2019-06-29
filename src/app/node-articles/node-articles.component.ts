import { Component, OnInit, ViewChild } from '@angular/core';
import { NodeArticlesService } from './node-articles.service';
import { NodeArticlesModel } from './model/node-articles.model';
import { finalize, takeUntil } from 'rxjs/operators';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'app-node-articles',
  templateUrl: './node-articles.component.html',
  styleUrls: ['./node-articles.component.scss']
})
export class NodeArticlesComponent implements OnInit {

  displayedColumns = ['title', 'date', 'actions'];
  dataSource = new MatTableDataSource<NodeArticlesModel>([]);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  loading: boolean;
  constructor(
    private readonly nodeArtService: NodeArticlesService,
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getAll();
  }

  delete(el: NodeArticlesModel): void {
    alert('delete');
  }

  rowClick(el: NodeArticlesModel): void {
    const url = el.story_url || el.url;
    window.open(url, '_blank');
  }

  private getAll(): void {
    this.loading = true;
    this.nodeArtService.getAll()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      ).subscribe(response => {
        this.dataSource.data = response.items;
      });
  }

}
