import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        query(':enter , :leave', [
          style({
            // display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'

          })
        ], { optional: true })

        ,
        group([
          query(':leave', [
            animate(300, style({
              opacity: 0,
              transform: 'translateX(80px)'
            }))
          ], { optional: true }),


          query(':enter', [
            style({
              transform: 'translateX(-80px)',
              opacity: 0
            }),
            animate(300, style({
              opacity: 1,
              transform: 'translateX(0)'

            }))

          ], { optional: true })

        ])

      ])

    ])
  ]
})
export class AppComponent {

  bg: string = 'https://images.unsplash.com/photo-1694376015496-140430f9bf88?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjUzNjgxNQ&ixlib=rb-4.0.3&q=80&w=1920';

  constructor(private contexts: ChildrenOutletContexts) { }



  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  async changeBg() {
    const result = await fetch('https://source.unsplash.com/random/1920x1080', {
      method: 'HEAD'

    })
    this.bg = result.url;
  }

}
