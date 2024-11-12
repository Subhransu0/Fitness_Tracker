package com.track.services.goal;

import com.track.dto.GoalDTO;
import com.track.entity.Goal;
import com.track.repository.GoalRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GoalServiceImple implements GoalService{

    private final GoalRepository goalRepository;

    public GoalDTO postGoal(GoalDTO dto){
        Goal goal = new Goal();
        goal.setDescription(dto.getDescription());
        goal.setStartDate(dto.getStartDate());
        goal.setEndDate(dto.getEndDate());
        goal.setAchieved(false);

        return goalRepository.save(goal).getGoalDto();
    }

    public List<GoalDTO> getGoals(){
        List<Goal> goal = goalRepository.findAll();

        return goal.stream().map(Goal::getGoalDto).collect(Collectors.toList());
    }

    public GoalDTO updateStatus(Long id){
        Optional<Goal> optionalGoal = goalRepository.findById(id);
        if(optionalGoal.isPresent()){
            Goal existingGoal = optionalGoal.get();
            existingGoal.setAchieved(true);
            return goalRepository.save(existingGoal).getGoalDto();
        }
        throw new EntityNotFoundException("Goal Not Found");
    }

}
