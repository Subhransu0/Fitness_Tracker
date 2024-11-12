package com.track.services.workout;

import com.track.dto.WorkoutDTO;
import com.track.entity.Workout;
import com.track.repository.WorkoutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class WorkoutServiceImple implements WorkoutService {
    private final WorkoutRepository workoutRepository;

    public WorkoutDTO postWorkout(WorkoutDTO workoutDTO){
        Workout workout = new Workout();
        workout.setDate(workoutDTO.getDate());
        workout.setType(workoutDTO.getType());
        workout.setDuration(workoutDTO.getDuration());
        workout.setCaloriesBurned(workoutDTO.getCaloriesBurned());

        return workoutRepository.save(workout).getWorkOutDTO();
    }
    public List<WorkoutDTO> getWorkouts(){
        List<Workout> workouts = workoutRepository.findAll();
        return workouts.stream().map(Workout::getWorkOutDTO).collect(Collectors.toList());
    }
}
