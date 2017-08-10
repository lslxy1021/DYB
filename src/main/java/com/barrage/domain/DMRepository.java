package com.barrage.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DMRepository extends JpaRepository<DanMu,Integer> {

    DanMu findTopByOrderByIdDesc();

}
