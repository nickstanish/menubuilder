# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table section (
  id                        bigint not null,
  title                     varchar(255),
  constraint pk_section primary key (id))
;

create sequence section_seq;




# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists section;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists section_seq;

