create database reactTask;
use reactTask;

create table NOTES(ID int, title varchar(15), content varchar(200), primary key(ID));
ALTER TABLE NOTES
  MODIFY ID int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
select * from NOTES;

