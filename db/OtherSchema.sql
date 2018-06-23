USE Jet;
CREATE TABLE Keywords(
	KeywordID int NOT NULL,
	Keyword varchar(200) NULL,
	UserID int NULL,
	KeywordCategoryID int NULL,
 CONSTRAINT PK_Keywords PRIMARY KEY CLUSTERED 
(
	KeywordID ASC
));

CREATE TABLE ListingTypes(
	ListingTypeID int NOT NULL,
	ListingTypeName varchar(50) NULL,
 CONSTRAINT PK_ListingTypes PRIMARY KEY CLUSTERED 
(
	ListingTypeID ASC
));

CREATE TABLE PropertyTypes(
	PropertyTypeID int NOT NULL,
	PropertyTypeName varchar(50) NULL,
 CONSTRAINT PK_PropertyTypes PRIMARY KEY CLUSTERED 
(
	PropertyTypeID ASC
));

CREATE TABLE Zipcodes(
	ID int NOT NULL,
	ZIP varchar(10) NULL,
	Latitude varchar(255) NULL,
	Longitude varchar(255) NULL,
	City varchar(100) NULL,
	State varchar(10) NULL,
	County varchar(255) NULL,
	Type varchar(20) NULL,
 CONSTRAINT PK__zipcodes__3214EC27AF26DF2C PRIMARY KEY CLUSTERED 
(
	ID ASC
));