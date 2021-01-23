import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DownloadComponent } from './download/download.component';
import { FaqPgComponent } from './faq-pg/faq-pg.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { PricingPgComponent } from './pricing-pg/pricing-pg.component';
import { SellYourDataComponent } from './sell-your-data/sell-your-data.component';
import { SessionPgComponent } from './session-pg/session-pg.component';
import { TrackPgComponent } from './track-pg/track-pg.component';
import { UpacksComponent } from './upacks/upacks.component';
import { WorldRecordComponent } from './world-record/world-record.component';

const routes: Routes = [
  {
    path: "pricing",
    component: PricingPgComponent
  },
  {
    path: "faq",
    component: FaqPgComponent
  },
  {
    path: "sell-your-data",
    component: SellYourDataComponent
  },
  {
    path: "worldrecord",
    component: WorldRecordComponent
  },
  {
    path: "leaderboard",
    component: LeaderBoardComponent
  },
  {
    path: "download",
    component: DownloadComponent
  },
  {
    path: "car/track",
    component: TrackPgComponent
  },
  {
    path: "session",
    component: SessionPgComponent
  },
  {
    path: "upacks",
    component: UpacksComponent
  },
  {
    path: "contact",
    component: ContactUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
