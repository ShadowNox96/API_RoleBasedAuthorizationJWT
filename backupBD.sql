PGDMP     *    7    	             y            prueba    12.3    12.3 
               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                        0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            !           1262    16410    prueba    DATABASE     �   CREATE DATABASE prueba WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Guatemala.1252' LC_CTYPE = 'Spanish_Guatemala.1252';
    DROP DATABASE prueba;
                postgres    false                      0    16424    roles 
   TABLE DATA           6   COPY public.roles (id, name, description) FROM stdin;
    public          postgres    false    205                    0    16413    users 
   TABLE DATA           ?   COPY public.users (id, password, "userName", salt) FROM stdin;
    public          postgres    false    203   �                 0    16479    users_has_roles 
   TABLE DATA           A   COPY public.users_has_roles ("idUser", "idRole", id) FROM stdin;
    public          postgres    false    206   O	       %           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 3, true);
          public          postgres    false    204            &           0    0    user_idUser_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."user_idUser_seq"', 40, true);
          public          postgres    false    202            '           0    0    users_has_roles_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.users_has_roles_id_seq', 40, true);
          public          postgres    false    207               �   x�]�11���$�ttTP�Xw>���(v@��9�A����:�[:h�1��;#��=��t��**�+��C�)	aϛ�ߝG�����R0�F��[ަ�x_�'�7nU����#���V^���7k����9� ~B         �   x���
�   г��`NЍ4�eM�-V�%
F��E����]9����E�߱���X�Lk"S�ˀX�o�}�ʤ�o�Jg2x�gW���hTΕ)mAӽMB���')n,�A?�Ɂ!�f$b�]����t�7��B@'�         "   x�31�4�4��21�4�4��Ɯ&\1z\\\ >�     