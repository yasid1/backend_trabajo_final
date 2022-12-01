--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-12-01 11:36:42

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

--
-- TOC entry 3360 (class 0 OID 16526)
-- Dependencies: 210
-- Data for Name: imagenes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.imagenes VALUES ('d8b99967-b667-475d-a37f-8491bf9af0f1', NULL, 'https://i0.wp.com/www.madboxpc.com/wp-content/uploads/2013/06/Nvidia-GeForce-Logo.jpg?resize=450%2C321&ssl=1');


--
-- TOC entry 3368 (class 0 OID 16556)
-- Dependencies: 218
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuario VALUES ('222571e6-05a8-4bec-9caa-a6dd5bfeecfc', 'test2', 'test2', 'test2', '12345', 'test2', 'test2', 'test2', 'test2', 'test2');
INSERT INTO public.usuario VALUES ('087c193d-d3b6-4c65-829e-db5c9bfb0872', 'Carl', 'Jhonson', 'carljohn@gmail.com', '55555', NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.usuario VALUES ('8ef4952c-a28d-47e0-a79e-11974fd936c7', 'Jhon', 'Doe', 'johnjohn@gmail.com', '6521', NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.usuario VALUES ('b64caaff-4e8b-4b18-a0a5-9ce8513574d7', 'Juan', 'Lopez', 'jlopez@gmail.com', '8888', NULL, NULL, NULL, NULL, NULL);


--
-- TOC entry 3361 (class 0 OID 16529)
-- Dependencies: 211
-- Data for Name: orden; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3365 (class 0 OID 16541)
-- Dependencies: 215
-- Data for Name: producto; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.producto VALUES ('107b1c9e-b2d1-459b-b01d-8bbc1e789f13', '16GB DDR4 DUAL CHANNEL', '$69', 'CHIPSET MANUFACTURER:NVIDIA
GPU:Geforce GTX 1650
CORE CLOCK:1530 MHz
BOOST CLOCK:OC Mode: 1800 MHz
CUDA CORES:1280', 'RAM');
INSERT INTO public.producto VALUES ('ca40beff-9fb0-4811-aef9-5cbf97add796', 'INTEL CORE I7-12700F 12-CORE', '$359', 'CHIPSET MANUFACTURER:NVIDIA
GPU:Geforce GTX 1650
CORE CLOCK:1530 MHz
BOOST CLOCK:OC Mode: 1800 MHz
CUDA CORES:1280', 'CPU');
INSERT INTO public.producto VALUES ('506a2a5b-626b-4f74-a68d-9742939797d3', 'NVIDIA GEFORCE GTX 1650 4GB', '$299', NULL, 'TARJETA GRAFICA');
INSERT INTO public.producto VALUES ('b423522f-886a-4163-8ff4-a09c044cf0fa', 'NVIDIA GEFORCE GTX 1650 4GB', '$299', 'CHIPSET MANUFACTURER:NVIDIA
GPU:Geforce GTX 1650
CORE CLOCK:1530 MHz
BOOST CLOCK:OC Mode: 1800 MHz
CUDA CORES:1280
', 'GPU');
INSERT INTO public.producto VALUES ('9eded963-a9e3-4bd3-a18a-63ae49f44369', 'BUILD + SETUP + TESTING + WARRANTY', '99', NULL, 'BUILD');
INSERT INTO public.producto VALUES ('d867277c-ae7f-4873-9a0a-6d186d414df2', 'WINDOWS 11 HOME + USB RECOVERY', '120', NULL, 'OP. SYSTEM');
INSERT INTO public.producto VALUES ('b0d9f976-e76a-4a98-919b-925a6b75a624', 'ASUS PRIME B660M-A | INTEL', '149', NULL, 'MOTHERBOARD');
INSERT INTO public.producto VALUES ('c997af03-788e-4351-8cac-892b397739c4', '700W ATX 80 PLUS GOLD', '79', NULL, 'POWER SUPLY');
INSERT INTO public.producto VALUES ('570d4741-01e8-421a-be2f-86a584acc0b0', '1TB NVME M.2', '99', NULL, 'SDD');
INSERT INTO public.producto VALUES ('71bd2564-930a-4ae1-818f-3137bddfd312', 'NVIDIA GEFORCE RTX 3070 8GB (VR READY)', '679', NULL, 'GPU');
INSERT INTO public.producto VALUES ('8bc7245c-79dd-4305-bbab-e2284a411b71', 'CM MASTERLIQUID ML24OL', '89', NULL, 'REFRIGERATION');
INSERT INTO public.producto VALUES ('052de55a-234f-41b8-be13-88cfb015cd37', 'WIRELLESS 802.11AC', '29', 'Producto inalambrico novedoso', 'WIFI');
INSERT INTO public.producto VALUES ('0766a03d-f069-40e7-a230-93edcf5f981b', 'COOLER MASTER TD500 RGB', '99', 'NUEVA GENERACION DE COOLER', 'CASE');
INSERT INTO public.producto VALUES ('268de982-1580-49ee-a14a-0b0eb98daf4e', 'QTY 4X CM MASTERFANS RGB', '29', 'VENTILADOR ULTIMA TEC', 'FAN');
INSERT INTO public.producto VALUES ('4e6fe392-0ac0-4942-9d10-37bd7a5f1f7f', 'INTEL CORE I7-12700F 12-CORE', '$299', 'NUEVO CORE I7 DE INTEL', 'PROCESADOR');


--
-- TOC entry 3362 (class 0 OID 16532)
-- Dependencies: 212
-- Data for Name: orden_producto; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3363 (class 0 OID 16535)
-- Dependencies: 213
-- Data for Name: pc_armado; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.pc_armado VALUES ('a91f1f24-52df-4540-a027-1d38761fed8e', 'Game Master', 'Lo ultimo en Gamining');
INSERT INTO public.pc_armado VALUES ('47ad6c4a-a5e5-45a8-a3be-55f84947e8a8', 'Optimus', 'Lo mejor de lo mejor');


--
-- TOC entry 3364 (class 0 OID 16538)
-- Dependencies: 214
-- Data for Name: pc_armado_producto; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.pc_armado_producto VALUES ('bea7a0f2-8b68-4c56-96ee-154c90af1ece', 'a91f1f24-52df-4540-a027-1d38761fed8e', '9eded963-a9e3-4bd3-a18a-63ae49f44369');
INSERT INTO public.pc_armado_producto VALUES ('e0197f05-32f3-4c86-a665-cd405beacbd8', 'a91f1f24-52df-4540-a027-1d38761fed8e', 'd867277c-ae7f-4873-9a0a-6d186d414df2');
INSERT INTO public.pc_armado_producto VALUES ('b36b219c-45be-4a45-9a1a-7aef40e8130c', 'a91f1f24-52df-4540-a027-1d38761fed8e', '052de55a-234f-41b8-be13-88cfb015cd37');
INSERT INTO public.pc_armado_producto VALUES ('dc935f4c-4242-4ce1-bbcc-53829183275b', 'a91f1f24-52df-4540-a027-1d38761fed8e', 'b0d9f976-e76a-4a98-919b-925a6b75a624');
INSERT INTO public.pc_armado_producto VALUES ('e0d1c30e-73bd-4d07-a69c-3e28347a8536', 'a91f1f24-52df-4540-a027-1d38761fed8e', 'c997af03-788e-4351-8cac-892b397739c4');
INSERT INTO public.pc_armado_producto VALUES ('666e8211-6d6c-4cf2-b950-546e06673ed3', 'a91f1f24-52df-4540-a027-1d38761fed8e', '0766a03d-f069-40e7-a230-93edcf5f981b');
INSERT INTO public.pc_armado_producto VALUES ('f06b0499-f81b-4919-be7c-fd84c6d9cfa2', 'a91f1f24-52df-4540-a027-1d38761fed8e', '570d4741-01e8-421a-be2f-86a584acc0b0');
INSERT INTO public.pc_armado_producto VALUES ('6e6b7c86-6f1a-44aa-b14b-cf237cfa6f13', 'a91f1f24-52df-4540-a027-1d38761fed8e', '268de982-1580-49ee-a14a-0b0eb98daf4e');
INSERT INTO public.pc_armado_producto VALUES ('bd229077-7999-4b6a-b6d2-2477ec2c60c3', 'a91f1f24-52df-4540-a027-1d38761fed8e', '71bd2564-930a-4ae1-818f-3137bddfd312');
INSERT INTO public.pc_armado_producto VALUES ('2e70a021-d14c-4d4c-8c07-a2f7cb7e1a2f', 'a91f1f24-52df-4540-a027-1d38761fed8e', '8bc7245c-79dd-4305-bbab-e2284a411b71');
INSERT INTO public.pc_armado_producto VALUES ('9ef2769c-a65c-4ebf-8217-448f194c882e', 'a91f1f24-52df-4540-a027-1d38761fed8e', '107b1c9e-b2d1-459b-b01d-8bbc1e789f13');
INSERT INTO public.pc_armado_producto VALUES ('a43007c3-4d26-4966-960c-26dabe49779d', 'a91f1f24-52df-4540-a027-1d38761fed8e', 'ca40beff-9fb0-4811-aef9-5cbf97add796');


--
-- TOC entry 3366 (class 0 OID 16546)
-- Dependencies: 216
-- Data for Name: reporte; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.reporte VALUES ('a7a0ff3d-e097-46a4-996e-75f2f108bfe3', 'test', '222571e6-05a8-4bec-9caa-a6dd5bfeecfc', 'test', 'test', 'test', 'test');
INSERT INTO public.reporte VALUES ('61313495-4549-41e9-a6ce-43850251c8fe', 'testt2', '222571e6-05a8-4bec-9caa-a6dd5bfeecfc', 'testt2', 'testt2', 'testt2', 'testt2');


--
-- TOC entry 3367 (class 0 OID 16551)
-- Dependencies: 217
-- Data for Name: reseña; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."reseña" VALUES ('6fee1f69-35f5-49ea-bcc9-1c18d6de7fc4', '087c193d-d3b6-4c65-829e-db5c9bfb0872', '4', 'I completely recomend this service', NULL, NULL, '1');
INSERT INTO public."reseña" VALUES ('e723af92-362b-4b1b-915f-fc088046724c', '8ef4952c-a28d-47e0-a79e-11974fd936c7', '2', 'Great service', NULL, NULL, '1');
INSERT INTO public."reseña" VALUES ('44ce1a55-7fcd-4fef-8175-607cf0208cb9', 'b64caaff-4e8b-4b18-a0a5-9ce8513574d7', '5', 'Pc well builded and nice case quality', NULL, NULL, '1');


-- Completed on 2022-12-01 11:36:42

--
-- PostgreSQL database dump complete
--

