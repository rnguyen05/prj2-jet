USE jet;
CREATE TABLE users(
	uid int AUTO_INCREMENT NOT NULL,
    username varchar(100) NOT NULL,
    password varchar(300) NOT NULL,
    email varchar(100) NULL,
    firstname varchar(100)  NULL,
    lastname varchar(100)  NULL,
    address varchar(300)  NULL,
    phonenumber varchar(50) NULL,
    createddate DATETIME DEFAULT now(),
    verified boolean DEFAULT false, 
    PRIMARY KEY (uid)  );
