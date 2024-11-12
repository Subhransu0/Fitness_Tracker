package com.track.services.stats;

import com.track.dto.GraphDTO;
import com.track.dto.StatsDTO;

public interface StatsService {

    StatsDTO getStats();

    GraphDTO getGraphStats();
}
