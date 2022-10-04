-- CREATE TABLE USERS
CREATE TABLE `railway`.`users` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `email` VARCHAR(100) NOT NULL , `password` VARCHAR(225) NOT NULL , `verified` BOOLEAN NOT NULL DEFAULT FALSE , `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated_at` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;