import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/app/shared/services/order.service";

@Component({
  selector: "app-my-orders-detail",
  templateUrl: "./my-orders-detail.component.html",
  styleUrls: ["./my-orders-detail.component.css"],
})
export class MyOrdersDetailComponent implements OnInit {
  id;
  product$;

  constructor(route: ActivatedRoute, private orderService: OrderService) {
    this.id = route.snapshot.paramMap.get("id");
    if (this.id) orderService.getSingleOrder(this.id).take(1).subscribe();
  }

  async ngOnInit() {
    this.product$ = await this.orderService.getSingleOrder(this.id).take(1);
  }
}
