SELECT player_name, building_name FROM Base INNER JOIN (SELECT building_name, base_id FROM BaseBuilding INNER JOIN Building ON BaseBuilding.building_id = Building.building_id) as T ON Base.base_id = T.base_id;

SELECT player_name, building_name FROM (Base INNER JOIN (SELECT building_name, base_id FROM BaseBuilding INNER JOIN Building ON BaseBuilding.building_id = Building.building_id) as T ON Base.base_id = T.base_id) as U INNER JOIN Player ON Player.player_id = U.player_id;
