import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import HelloWorldRoutes from 'src/app/hello-world/routes';
import CoreRoutes from 'src/app/core/routes';
import MaterialRoutes from 'src/app/material/routes';

interface MyRoute {
  path: string;
}

@Component({
  selector: 'app-home-index',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule, MatCardModule],
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
})
export class HomeIndexComponent {
  routesByParentPath: Map<string, Routes> = new Map([
    ['hello-world', HelloWorldRoutes],
    ['core', CoreRoutes],
    ['material', MaterialRoutes],
  ]);

  private _getPaths = (routesByKey: Map<string, Routes>): MyRoute[] => {
    return Array.from(routesByKey.entries()).flatMap(([parentPath, routes]) => {
      return routes.map((route) => {
        const path: MyRoute = {
          path: parentPath + '/' + route.path ?? '',
        };
        return path;
      });
    });
  };
  routes: MyRoute[] = this._getPaths(this.routesByParentPath);
}
