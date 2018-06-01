DROP DATABASE Brandi_Ficha_Tecnica;

CREATE DATABASE IF NOT EXISTS Brandi_Ficha_Tecnica;

USE Brandi_Ficha_Tecnica;

/* Opportunities Management Tables (Team A) */

CREATE TABLE Clientes (
    ID_Cliente INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Nome NVARCHAR(100) NOT NULL,
    NIF NVARCHAR(9) NULL,
    Morada NVARCHAR(50) NULL,
    Email NVARCHAR(50) NULL,
    Telemovel NVARCHAR(9) NULL
);

CREATE TABLE Pedidos_Clientes (
    ID_Pedido INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Titulo NVARCHAR(100) NOT NULL,
    Fotografia NVARCHAR(50) NULL,
    Data_Realizacao_Pedido DATE NULL,
    Descricao NVARCHAR(255) NULL,
    ID_Cliente INT UNSIGNED NOT NULL,
    CONSTRAINT FK_ID_Cliente FOREIGN KEY (ID_Cliente) REFERENCES Clientes(ID_Cliente) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Propostas (
    ID_Proposta INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Aceitação_Proposta TINYINT(1) NOT NULL,
    Justificacao_Recusa NVARCHAR(255) NULL,
    Descricao NVARCHAR(255) NULL,
    Data_Elaboracao_Proposta DATE NULL,
    Data_Envio_Proposta DATE NULL,
    ID_Pedido INT UNSIGNED NOT NULL,
    ID_Coordenador INT UNSIGNED NOT NULL,
    CONSTRAINT FK_ID_Pedido FOREIGN KEY (ID_Pedido) REFERENCES Pedidos_Clientes(ID_Pedido) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT FK_ID_Coordenador FOREIGN KEY (ID_Coordenador) REFERENCES Coordenador(ID_Coordenador) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Eventos (
    ID_Evento INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Descricao NVARCHAR(255) NULL,
    Data_Evento DATE NULL,
    Tipo NVARCHAR(50) NULL,
    ID_Pedido INT UNSIGNED NOT NULL,
    CONSTRAINT FK_ID_Pedido FOREIGN KEY (ID_Coordenador) REFERENCES Coordenador(ID_Coordenador) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Analises_Preliminares (
    ID_Analise INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Descricao NVARCHAR(255) NULL,
    Data_Realizacao DATE NULL,
    Local_Realizacao NVARCHAR(50) NULL,
    Inicio_Analise TIME NULL,
    Fim_Analise TIME NULL,
    Distancia_Deslocacao INT NULL,
    Outras_Despesas NVARCHAR(255) NULL,
    ID_Objecto INT UNSIGNED NOT NULL,
    CONSTRAINT FK_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Coordenador (
    ID_Coordenador INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT
);

/* ######################################## */

CREATE TABLE Pessoa (
	ID_Pessoa INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Nome NVARCHAR(100) NOT NULL,
    Endereco_Postal NVARCHAR(50) NULL,
    Email NVARCHAR(50) NULL
);

CREATE TABLE Contacto (
	ID_Contacto INT UNSIGNED NOT NULL,
	ID_Pessoa INT UNSIGNED NOT NULL,
    Contacto_Telefone NVARCHAR(15) NOT NULL,
    PRIMARY KEY(ID_Contacto, ID_Pessoa),
    CONSTRAINT FK_Pessoa FOREIGN KEY (ID_Pessoa) REFERENCES Pessoa(ID_Pessoa) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Categorias (
	ID_Categoria INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Super_Categoria NVARCHAR(50) NOT NULL DEFAULT "Bens Culturais" UNIQUE,
    Nome NVARCHAR(50) NOT NULL
);

CREATE TABLE Sub_Categorias (
	ID_Categoria INT UNSIGNED NOT NULL,
	ID_Sub_Categoria INT UNSIGNED NOT NULL,
    Nome NVARCHAR(50) NOT NULL,
    PRIMARY KEY(ID_Sub_Categoria, ID_Categoria),
    CONSTRAINT FK_ID_Categoria FOREIGN KEY (ID_Categoria) REFERENCES Categorias(ID_Categoria) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Designacao_Objecto (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Designacao NVARCHAR(100) NOT NULL,
    ProcessoLCRM VARCHAR(100) NULL,
    ProcessoCEARC VARCHAR(100) NULL,
    Coordenacao VARCHAR(100) NULL,
    Data_Abertura_Processo DATE NULL,
    Data_Entrada_LCRM DATE NULL,
    Data_Entrada_CEARC DATE NULL,
    ID_Sub_Categoria INT UNSIGNED NOT NULL,
    Tipologia NVARCHAR(50) NULL,
    Localizacao NVARCHAR(50) NULL,
    Dimensao NVARCHAR(50) NULL,
    ID_Dono_Obra INT UNSIGNED NOT NULL,
    ID_Proprietario INT UNSIGNED NOT NULL,
    ID_Mecenas INT UNSIGNED NOT NULL,
    /* Connection between Team C DB and Team A DB */
    ID_Pedido INT UNSIGNED NOT NULL,
    /* ########################################## */
    CONSTRAINT FK_ID_Dono_Obra FOREIGN KEY (ID_Dono_Obra) REFERENCES Pessoa(ID_Pessoa) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT FK_ID_Proprietario FOREIGN KEY (ID_Proprietario) REFERENCES Pessoa(ID_Pessoa) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT FK_ID_Mecenas FOREIGN KEY (ID_Mecenas) REFERENCES Pessoa(ID_Pessoa) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT FK_ID_Sub_Categoria FOREIGN KEY (ID_Sub_Categoria) REFERENCES Sub_Categorias(ID_Sub_Categoria) ON UPDATE CASCADE ON DELETE CASCADE,
    /* Connection between Team C DB and Team A DB */
    CONSTRAINT FK_ID_Pedido FOREIGN KEY (ID_Pedido) REFERENCES Pedidos_Clientes(ID_Pedido) ON UPDATE CASCADE ON DELETE CASCADE
    /* ########################################## */
);

CREATE TABLE Fotos (
	ID_Foto INT UNSIGNED NOT NULL,
    ID_Objecto INT UNSIGNED NOT NULL,
    Foto_URL NVARCHAR(255) NOT NULL,
    Referencia NVARCHAR(100) NULL,
    PRIMARY KEY(ID_Foto, ID_Objecto),
    CONSTRAINT FK_Fotos_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Documentacao (
	ID_Documentacao INT UNSIGNED NOT NULL,
    ID_Objecto INT UNSIGNED NOT NULL,
    Tipo_Documentacao TINYINT(1) NOT NULL,
    Nome NVARCHAR(50) NOT NULL,
    PRIMARY KEY(ID_Documentacao, ID_Objecto),
    CONSTRAINT FK_Documentacao_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Conjuntos (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Tipo_Conjunto TEXT NULL,
    Elementos_Conjunto TEXT NULL,
    Elementos_Acessorios TEXT NULL,
    Assinatura_Autoria TEXT NULL,
    Inscricoes_Montagem_Elementos TEXT NULL,
    Inscricoes_Construcao TEXT NULL,
    CONSTRAINT FK_Conjuntos_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Descricao_Patrimonial (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Classificacao ENUM('Mundial', 'Internacional', 'Nacional', 'Regional', 'Local') NULL,
    Epoca ENUM('Coevo', 'Tardio', 'Réplica', 'Reprodução', 'Falsificação') NULL,
    Qualidade ENUM('Excelente', 'Muito Boa', 'Boa', 'Regular', 'Fraca') NULL,
    Breve_Descricao TEXT NULL,
    Analogias TEXT NULL,
    Conclusoes TEXT NULL,
    Oficina NVARCHAR(100) NULL,
    Datacao NVARCHAR(100) NULL,
    Local_Origem NVARCHAR(100) NULL,
    CONSTRAINT FK_Descricao_Patrimonial_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Descricao_Material (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Estrutura NVARCHAR(150) NULL,
    Superficie NVARCHAR(150) NULL,
    Elementos_Acessorios NVARCHAR(150) NULL,
    CONSTRAINT FK_Descricao_Material_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Descricao_Tecnica (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Estrutura NVARCHAR(150) NULL,
    Superficie NVARCHAR(150) NULL,
    Elementos_Acessorios NVARCHAR(150) NULL,
    CONSTRAINT FK_Descricao_Tecnica_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Condicoes_Ambientais (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Descricao TEXT NULL,
    Temperatura_Humido CHAR(10) NULL,
    Temperatura_Seco CHAR(10) NULL,
	Periodo_Humido TINYINT NULL,
    Periodo_Seco TINYINT NULL,
    Observacoes TEXT NULL,
    CONSTRAINT FK_Condicoes_Ambientais_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Condicoes_Iluminacao (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Iluminancia_Natural FLOAT NULL,
    Iluminancia_Artificial FLOAT NULL,
    Iluminancia_Natural_Medida FLOAT NULL,
    Iluminancia_Artificial_Medida FLOAT NULL,
    Iluminancia_Natural_Real FLOAT NULL,
    Iluminancia_Artificial_Real FLOAT NULL,
    CONSTRAINT FK_Condicoes_Iluminacao_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Condicoes_Poluicao (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Agentes_Poluidores TEXT NULL,
    Fontes_Poluicao TEXT NULL,
    Resultados TEXT NULL,
    CONSTRAINT FK_Condicoes_Poluicao_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Objectivos_Gerais (
	ID_Objectivo INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Nome NVARCHAR(100) NOT NULL
);

INSERT INTO Objectivos_Gerais (Nome) VALUES
	('Identificação de materiais, técnicas e tecnologias de produção'),
    ('Identificação de intervenções efectuadas no objecto'),
    ('Caraterização do estado de conservação'),
    ('Identificação de patologias e agentes de biodeterioração'),
    ('Datação do objecto e das eventuais intervenções que tenha sido alvo'),
    ('Ensaio de produtos e materiais a empregar na intervenção');

CREATE TABLE Objectivos_Gerais_Usados (
	ID_Objectivo INT UNSIGNED NOT NULL,
	ID_Objecto INT UNSIGNED NOT NULL,
    PRIMARY KEY(ID_Objectivo, ID_Objecto),
    CONSTRAINT FK_Objectivos_Gerais_Usados_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT FK_Objectivos_Gerais_Usados_ID_Objectivo FOREIGN KEY (ID_Objectivo) REFERENCES Objectivos_Gerais(ID_Objectivo) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Tabela_Exames_Analises (
	ID_Objecto INT UNSIGNED NOT NULL,
    ID_Entrada_Tabela INT UNSIGNED NOT NULL,
    Referencia NVARCHAR(100) NULL,
    Localizacao NVARCHAR(50) NULL,
    Objectivos NVARCHAR(100) NULL,
    Resultados NVARCHAR(50) NULL,
    Entidade NVARCHAR(50) NULL,
    Data DATE NULL,
    PRIMARY KEY(ID_Objecto, ID_Entrada_Tabela),
    CONSTRAINT FK_Exames_Analises_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Detalhes_Exames (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Interpretacao TEXT NULL,
    Conclusoes TEXT NULL,
    CONSTRAINT FK_Detalhes_Exames_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Descricao_Fisica (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Estrutura_Suporte TEXT NULL,
    Superficies TEXT NULL,
    Elementos_Acessorios TEXT NULL,
    CONSTRAINT FK_Descricao_Fisica_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Descricao_Biologica (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Estrutura_Suporte TEXT NULL,
    Superficies TEXT NULL,
    Elementos_Acessorios TEXT NULL,
    CONSTRAINT FK_Descricao_Biologica_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Detalhes_Estado_Conservacao (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Estado_Conservacao NVARCHAR(100) NULL,
    Conclusoes TEXT NULL,
    CONSTRAINT FK_Detalhes_Estado_Conservacao_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Intervencoes_Anteriores (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Estrutura TEXT NULL,
    Superficie TEXT NULL,
    Elementos_Acessorios TEXT NULL,
    Observacoes TEXT NULL,
    CONSTRAINT FK_Intervencoes_Anteriores_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Vontade_Intervencao_Proprietario (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Preservacao TINYINT(1),
    Conservacao TINYINT(1),
    Restauro TINYINT(1),
    Aspectos_Especificos TEXT NULL,
    CONSTRAINT FK_Vontade_Intervencao_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Intervencao_Proposta (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Preservacao TINYINT(1),
    Conservacao TINYINT(1),
    Restauro TINYINT(1),
    CONSTRAINT FK_Intervencao_Proposta_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Proposta_Metodologia_Intervencao (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Estrutura TEXT NULL,
    Estrutura_Recurso TEXT NULL,
    Superficie TEXT NULL,
    Superficie_Recurso TEXT NULL,
    Elementos TEXT NULL,
    Elementos_Recurso TEXT NULL,
    Observacoes TEXT NULL,
    Data_Informacao_Proposta DATE NULL,
    Data_Aceitacao_Proposta DATE NULL,
    CONSTRAINT FK_Proposta_Metodologia_Intervencao_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Intervencao_Realizada (
	ID_Objecto INT UNSIGNED NOT NULL PRIMARY KEY,
    Estrutura TEXT NULL,
    Estrutura_Recurso TEXT NULL,
    Superficie TEXT NULL,
    Superficie_Recurso TEXT NULL,
    Elementos TEXT NULL,
    Elementos_Recurso TEXT NULL,
    Observacoes TEXT NULL,
    CONSTRAINT FK_Intervencao_Realizada_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Membro_Equipa (
	ID_Membro INT UNSIGNED NOT NULL PRIMARY KEY,
    Funcao NVARCHAR(50) NOT NULL,
    Habilitacoes_Nivel_Profissional NVARCHAR(50) NOT NULL
);

CREATE TABLE Objecto_Equipa (
	ID_Objecto INT UNSIGNED NOT NULL,
    ID_Membro INT UNSIGNED NOT NULL,
    PRIMARY KEY(ID_Objecto, ID_Membro),
    CONSTRAINT FK_Objecto_Equipa_ID_Objecto FOREIGN KEY (ID_Objecto) REFERENCES Designacao_Objecto(ID_Objecto) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT FK_Objecto_Equipa_ID_Membro FOREIGN KEY (ID_Membro) REFERENCES Membro_Equipa(ID_Membro) ON UPDATE CASCADE ON DELETE CASCADE
);