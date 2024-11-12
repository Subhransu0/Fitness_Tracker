package com.track.services.activity;
import com.track.dto.ActivityDTO;
import com.track.entity.Activity;
import com.track.repository.ActivityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ActivityServiceImplement implements ActivityService{

    private final ActivityRepository activityRepository;

    public ActivityDTO postActivity(ActivityDTO dto){
        Activity activity = new Activity();
        activity.setDate(dto.getDate());
        activity.setSteps(dto.getSteps());
        activity.setDistance(dto.getDistance());
        activity.setCaloriesBurned(dto.getCaloriesBurned());
        return activityRepository.save(activity).getActtivityDTO();
    }

    public List<ActivityDTO> getActivites(){
        List<Activity> activities = activityRepository.findAll();
        return activities.stream().map(Activity::getActtivityDTO).collect(Collectors.toList());
    }




}
