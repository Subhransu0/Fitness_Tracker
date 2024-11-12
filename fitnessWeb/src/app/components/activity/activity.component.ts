import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from '../../service/user.service';
import { error } from 'console';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  gridStyle = {
    width: '100%',
    textAlign: 'center'
  };
  activityForm !: FormGroup;
  activites: any;
  constructor(private fb: FormBuilder,
    private message: NzMessageService,
    private userService: UserService
  ) { }
  ngOnInit() {
    this.activityForm = this.fb.group({
      caloriesBurned: [null, [Validators.required]],
      steps: [null, [Validators.required]],
      distance: [null, [Validators.required]],
      date: [null, [Validators.required]],


    });
    this.getAllActivites();
  }

  submitForm() {
    this.userService.postActivity(this.activityForm.value).subscribe(res => {
      this.message.success("Activity Posted SuccessFully", { nzDuration: 5000 });
      this.activityForm.reset();
      this.getAllActivites();
    }, error => {
      this.message.error("Error whle posting Activity", { nzDuration: 5000 });
    }

    )
  }

  getAllActivites() {
    this.userService.getActivities().subscribe(res => {
      this.activites = res;
      console.log(this.activites);
    }

    )
  }

}
