CREATE DATABASE IF NOT EXISTS landed_records_db;
USE landed_records_db;

CREATE TABLE IF NOT EXISTS landed_records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  plot_number VARCHAR(50) DEFAULT "",
  owner_name VARCHAR(100) DEFAULT "",
  area VARCHAR(50) DEFAULT "",
  location VARCHAR(255) DEFAULT "",
  registration_date DATE DEFAULT '1001-01-01'
);

INSERT INTO landed_records (plot_number, owner_name, area, location, registration_date)
VALUES
('PLOT-1001', 'Rajesh Kumar', '900 sqft', 'Sector 09, Delhi', '2021-02-15'),
('PLoT-1002', 'Pooja Devi', '500 sqft', 'Vasant Kunj, Delhi', '2018-09-09'),
('PL0T-1003', 'Mohit Verma', '450 sqft', 'Connaught Place, Delhi', '2022-10-25'),
('plot-1004', 'Anita Sharma', '600 sqft', 'Dwarka, Delhi', '2020-05-30'),
('plot-1005', 'Suresh Singh', '750 sqft', 'Rohini Sector 19, Delhi', '2019-11-11'),
('plot-1006', 'Neha Gupta', '800 sqft', 'Safdarjung Development Area, Delhi', '2023-01-01'),
('plot-1007', 'Ravi Mehta', '1200 sqft', 'Batla house, Delhi', '2022-07-20'),
('plot-1008', 'Sunita Rani', '300 sqft', 'Harsh Vihar, Delhi', '2021-03-15'),
('plot-1009', 'Karan Kapoor', '400 sqft', 'Meerut, Uttar Pradesh', '2020-08-05'),
('plot-1010', 'Priya Choudhary', '550 sqft', 'Rohtak, Haryana', '2019-12-25');


