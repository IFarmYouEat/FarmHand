CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "crops" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"year" INT,
	"crop" VARCHAR (24),
	"yield" INT,
	"source" VARCHAR (24)
);

CREATE TABLE "contracts" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"price" INT,
	"crop" VARCHAR (12),
	"yield" INT
);

CREATE TABLE "contracts" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"crop_id" INT REFERENCES "crops",
	"contract_id" VARCHAR(255),
	"amount" INT,
	"price" DECIMAL(10, 2),
	"location" VARCHAR(255),
	"month" varchar(12),
	"status" VARCHAR (12) DEFAULT 'Open'
);

INSERT INTO "contracts" ("user_id", "contract_id", "amount", "price", "location", "month")
	VALUES 
(1, 'ABS1337', 10000, 5.00, 'Absolute Energy Lyle','December'),
(1, 'VAR420', 9000, 5.50, 'Charles City Valero','March'),
(1, 'CHS8008', 2100, 13.00, 'Fairmont CHS','August')
;

INSERT INTO "crops" ("user_id", "year", "crop", "yield", "source")
	VALUES
	(1, 2020, 'Corn', 15231, 'Actual'),
	(1, 2020, 'Soybeans', 5539, 'Actual'),
	(1, 2021, 'Corn', 7594, 'Actual'),
	(1, 2021, 'Soybeans', 10923, 'Actual'),
	(1, 2022, 'Corn', 17927, 'Actual'),
	(1, 2022, 'Soybeans', 5709, 'Actual'),
	(1, 2023, 'Corn', 6291, 'Monitor'),
	(1, 2023, 'Soybeans', 8842, 'Monitor'),
	(1, 2024, 'Corn', 16500, 'Projected')
;
