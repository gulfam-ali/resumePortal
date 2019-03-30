CREATE TABLE `resume`.`re_users` ( 
    `user_id` INT(11) NOT NULL AUTO_INCREMENT , 
    `full_name` VARCHAR(36) NOT NULL , 
    `email` VARCHAR(160) NOT NULL , 
    `password` VARCHAR(30) NOT NULL , 
    `created_date` DATETIME NOT NULL,
    `updated_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`user_id`)
) ENGINE = InnoDB;

ALTER TABLE `re_users` ADD UNIQUE(`email`);


CREATE TABLE `resume`.`re_user_sessions` ( 
    `session_id` INT(11) NOT NULL AUTO_INCREMENT , 
    `user_id` INT(11) NOT NULL , 
    `session_token` VARCHAR(64) NOT NULL , 
    `login_date` DATETIME NOT NULL , 
    `logout` TINYINT(1) NOT NULL DEFAULT '0' , 
    `logout_date` DATETIME NOT NULL , 
    PRIMARY KEY (`session_id`)
) ENGINE = InnoDB;

