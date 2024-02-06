import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export type StudentTypes = {
  id: string;
  teacherId: string;
  createdAt: string;
  updatedAt: string;

  firstName: string;
  lastName: string;
  email: string;
  password: string; 

}

  export type TeacherTypes = {
    id: string;
    createdAt: string;
    updatedAt: string;

    firstName: string;
    lastName: string;
    email: string;
    password: string;

    students: StudentTypes[];
  }

  export type AdminTypes = {
    id: string;
    createdAt: string;
    updatedAt: string;

    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  export type UserTypes = {
    email: string;
    password: string;
  }