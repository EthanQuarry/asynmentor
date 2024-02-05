import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export type StudentTypes = {
  id: String;
  teacherId: String;
  createdAt: String;
  updatedAt: String;

  firstName: String;
  lastName: String;
  email: String;
  password: String; 

}

  export type TeacherTypes = {
    id: String;
    createdAt: String;
    updatedAt: String;

    firstName: String;
    lastName: String;
    email: String;
    password: String;

    students: StudentTypes[];
  }

  export type AdminTypes = {
    id: String;
    createdAt: String;
    updatedAt: String;

    firstName: String;
    lastName: String;
    email: String;
    password: String;
  }