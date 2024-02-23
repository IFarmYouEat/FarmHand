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
	"crop_id" INT REFERENCES "crops",
	"contract_id" VARCHAR(255),
	"amount" INT,
	"price" DECIMAL(10, 2),
	"location" VARCHAR(255),
	"month" varchar(12),
	"status" VARCHAR (12) DEFAULT 'Open'
);