package com.track.services.goal;


import com.track.dto.GoalDTO;

import java.util.List;

public interface GoalService {
    GoalDTO postGoal(GoalDTO dto);
    List<GoalDTO> getGoals();
    GoalDTO updateStatus(Long id);
}
