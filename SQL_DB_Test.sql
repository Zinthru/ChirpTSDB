show tables;
describe users;
create table users (
	id INT auto_increment,
    email VARCHAR(100) not null unique,
    first_name varchar(50) not null,
    last_name varchar(40) not null,
    password varchar(70) not null,
    created_at timestamp default NOW(),
	primary key (id)
);

create table tags (
	id int auto_increment,
    name varchar(60) not null unique,
    created_at timestamp default now(),
    primary key(id)
);
	
create table todos_tags (
	todoid int not null,
    tagid int not null,
    primary key (todoid,tagid),
    foreign key (todoid) references todos (id),
    foreign key (tagid) references tags (id)
);

create table todos (
	id int auto_increment,
    userid int not null,
    tagsid int not null,
    content varchar(255) not null,
    completed char(1) default 'n',
    created_at timestamp default NOW(),
    primary key (id),
    foreign key(userid) references users (id),
    foreign key(tagsid) references tags (id)
);

create user 'todos_app'@'localhost' identified by 'todos_app';
grant all privileges on todos_app.* to 'todos_app'@'localhost';
flush privileges;