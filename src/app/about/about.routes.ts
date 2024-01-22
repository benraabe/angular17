import { Routes } from "@angular/router";
import { AboutComponent } from "./about.component";
import { CompanyComponent } from "./company/company.component";
import { EmployeesComponent } from "./employees/employees.component";

export const routes: Routes = [
  {'path': '', 'title': 'About', component: AboutComponent},
  {'path': '', children: [
    {'path': 'company', 'title': 'About | Company', component: CompanyComponent},
    {'path': 'employees', 'title': 'About | Employees', component: EmployeesComponent},
  ]},
];