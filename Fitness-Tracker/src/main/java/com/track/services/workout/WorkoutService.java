package com.track.services.workout;

import com.track.dto.WorkoutDTO;

import java.util.List;

public interface WorkoutService {
    WorkoutDTO postWorkout(WorkoutDTO workoutDTO);
    List<WorkoutDTO> getWorkouts();
}
