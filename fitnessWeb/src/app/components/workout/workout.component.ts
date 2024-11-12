import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { error } from 'console';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss'
})
export class WorkoutComponent {

  gridStyle = {
    width: '100%',
    textAlign: 'center'
  };

  workoutForm!: FormGroup;

  listOfType: any[] = [
    "Cardio",
    "Strength",
    "Flexibility",
    "HIIT",
    "Pilates",
    "Dance",
    "Swimming",
    "Cycling",
    "Runnning",
    "Walking",
    "Boxing",
    "CrossFit",
    "Rowing",
    "Stretching",
    "Boxing",
    "Zumba",
    "Yoga"
  ];
workouts: any;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private message: NzMessageService,
  ) {

  }

  ngOnInit() {
    this.workoutForm = this.fb.group({
      type: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      date: [null, [Validators.required]],
      caloriesBurned: [null, [Validators.required]],
    });
    this.getWorkouts();
  }

  getWorkouts(){
    this.userService.getWorkouts().subscribe(res=>{
this.workouts = res;69999
    })
  }

  submitForm() {
    this.userService.postWorkout(this.workoutForm.value).subscribe(res => {
      this.message.success("Workout Posted Successfully", { nzDuration: 5000 })
      this.workoutForm.reset();
      this.getWorkouts();
    }, error => {
      this.message.error("Error while posting workout", { nzDuration: 5000 })
    })
  }




}
