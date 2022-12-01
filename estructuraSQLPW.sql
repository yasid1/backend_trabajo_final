SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

CREATE TABLE public.Usuario (
    id uuid NOT NULL,
    nombre character varying(200),
	apellido character varying(200),
	Correo character varying(200),
	contrasenya character varying(200),
	direccion character varying(200),
	departamento character varying(200),
	ciudad character varying(200),
	codigo_postal character varying(200),
	telefono character varying(200)
);
ALTER TABLE public.usuario OWNER TO evaluaciones;

CREATE TABLE public.Reporte (
    id uuid NOT NULL,
    nombre character varying(30) NOT NULL,
	usuario_id uuid NOT NULL,
	correo character varying(200),
	telefono character varying(200),
	asunto character varying(200),
	descripcion character varying(200)
);
ALTER TABLE public.Reporte OWNER TO evaluaciones;

CREATE TABLE public.reseña (
    id uuid NOT NULL,
	usuario_id uuid not null,
    puntaje character varying(150) NOT NULL,
	comentario character varying(200),
	video character varying(200),
	link character varying(200),
	tipo_reseña character varying(200)
);
ALTER TABLE public.reseña OWNER TO evaluaciones;

CREATE TABLE public.Orden (
	id uuid not null,
	usuario_id uuid not null,
	monto varchar(10),
	direccion character varying(200),
	fecha date);
	
ALTER TABLE public.orden OWNER TO evaluaciones;	

CREATE TABLE public.Orden_producto (
	id uuid not null,
	orden_id uuid not null,
	producto_id uuid not null);
	
ALTER TABLE public.orden_producto OWNER TO evaluaciones;	

CREATE TABLE public.producto (
	id uuid not null,
	nombre character varying(200),
	precio varchar(10),
	descripcion character varying(200),
	categoria character varying(200));
	
ALTER TABLE public.producto OWNER TO evaluaciones;	

CREATE TABLE public.PC_armado_producto (
	id uuid not null,
	pc_armado_id uuid not null,
	producto_id uuid not null);
	
ALTER TABLE public.pc_armado_producto OWNER TO evaluaciones;	

CREATE TABLE public.pc_armado (	
	id uuid not null,
	nombre character varying(200),
	descripcion character varying(200));
	
ALTER TABLE public.pc_armado OWNER TO evaluaciones;

CREATE TABLE public.imagenes (
    id uuid NOT NULL,
    nombre character varying(200),
    link character varying(200));

ALTER TABLE public.imagenes OWNER TO evaluaciones;

ALTER TABLE ONLY public.reporte
    ADD CONSTRAINT reporte_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);
	
ALTER TABLE ONLY public.reseña
    ADD CONSTRAINT reseña_pkey PRIMARY KEY (id);
	
ALTER TABLE ONLY public.orden
    ADD CONSTRAINT orden_pkey PRIMARY KEY (id);
	
ALTER TABLE ONLY public.orden_producto
    ADD CONSTRAINT orden_productos_pkey PRIMARY KEY (id);	

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.pc_armado_producto
    ADD CONSTRAINT pc_armado_producto_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.pc_armado
    ADD CONSTRAINT pc_armado_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.imagenes
    ADD CONSTRAINT imagenes_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.reporte
    ADD CONSTRAINT fk_reporte_usuario FOREIGN KEY (usuario_id) REFERENCES public.usuario(id);

ALTER TABLE ONLY public.orden
    ADD CONSTRAINT fk_orden_usuario FOREIGN KEY (usuario_id) REFERENCES public.usuario(id);
	
ALTER TABLE ONLY public.reseña
    ADD CONSTRAINT fk_reseña_usuario FOREIGN KEY (usuario_id) REFERENCES public.usuario(id);
	
ALTER TABLE ONLY public.orden_producto
    ADD CONSTRAINT fk_orden_producto_orden FOREIGN KEY (orden_id) REFERENCES public.orden(id);

ALTER TABLE ONLY public.orden_producto
    ADD CONSTRAINT fk_orden_producto_producto FOREIGN KEY (producto_id) REFERENCES public.producto(id);
	
ALTER TABLE ONLY public.pc_armado_producto
    ADD CONSTRAINT fk_pc_armado_producto FOREIGN KEY (producto_id) REFERENCES public.producto(id);