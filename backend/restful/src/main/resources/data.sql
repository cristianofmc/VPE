insert into establishment(id, name, address, phone)
values(2, 'matriz', 'rua 1 908', '85996652143');

insert into establishment(id, name, address, phone)
values(3, 'matriz dois', 'rua 5 340', '85996652300');


insert into professional(id, name, address, cell_phone, home_phone, current_function)
values(2, 'Sara Catarina Teixeira', 'Praça Thomás Cole, 901, Caxingui', '11995925168', '1138635329', 'Corretor');

insert into professional(id, name, address, cell_phone, home_phone, current_function)
values(3, 'Levi Lucas Barros', 'RUa Um, 280, Morada do Ouro - Setor Centro Sul', '6539859808', '65982230762', 'Contador');


insert into bound(id, establishmentid, professionalid)
values(2, 2, 2);