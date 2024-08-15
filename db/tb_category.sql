CREATE TABLE tb_category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(30) NOT NULL,
  status INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tb_category (nome, status) VALUES ('t-shirts', 0);
INSERT INTO tb_category (nome, status) VALUES ('caps', 0);
INSERT INTO tb_category (nome, status) VALUES ('shoes', 0);
INSERT INTO tb_category (nome, status) VALUES ('pants', 0);
INSERT INTO tb_category (nome, status) VALUES ('headphones', 0);