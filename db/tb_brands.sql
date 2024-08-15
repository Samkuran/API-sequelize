CREATE TABLE tb_brands (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(30) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO tb_brands
    (nome)
VALUES
    ('Addidas');

INSERT INTO tb_brands
    (nome)
VALUES
    ('Calenciaga');

INSERT INTO tb_brands
    (nome)
VALUES
    ('K-Swiss');

INSERT INTO tb_brands
    (nome)
VALUES
    ('Nike');

INSERT INTO tb_brands
    (nome)
VALUES
    ('Puma');


SELECT * FROM tb_brands; 